import Feature from 'ol/Feature';
import { Geometry, LineString, MultiPolygon, Point, Polygon } from 'ol/geom';
import { Vector as VectorLayer } from 'ol/layer';
import Map from 'ol/Map';
import { Vector as VectorSource } from 'ol/source';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import { useEffect, useRef } from 'react';
import { SelectedFeature } from '../types';

export const useMapInteractions = (
    map: Map | null,
    onFeatureSelect: (feature: SelectedFeature | null) => void
) => {
    // Persistent source and layer for highlighting selection
    const highlightSource = useRef(new VectorSource());
    const highlightLayer = useRef(
        new VectorLayer({
            source: highlightSource.current,
            style: new Style({
                stroke: new Stroke({
                    color: '#00ffff', // Cyan highlight
                    width: 3,
                }),
                fill: new Fill({
                    color: 'rgba(0, 255, 255, 0.2)',
                }),
                image: new CircleStyle({
                    radius: 7,
                    fill: new Fill({ color: '#00ffff' }),
                    stroke: new Stroke({ color: '#fff', width: 2 }),
                }),
            }),
            zIndex: 999, // Ensure it's on top
        })
    );

    useEffect(() => {
        if (!map) return;

        // Add highlight layer to map
        map.addLayer(highlightLayer.current);

        const handleMapClick2 = (e: any) => {
            // Reset highlight
            highlightSource.current.clear();

            const pixel = e.pixel;
            const hit = map.forEachFeatureAtPixel(
                pixel,
                (feat, layer) => ({ feature: feat, layer }),
                {
                    hitTolerance: 5,
                }
            );

            if (hit && hit.feature) {
                const feature = hit.feature;
                const layer = hit.layer;

                // Get properties
                const props = feature.getProperties();

                // Ignore user location or specialized features if needed
                if (props.isUserLocation) {
                    onFeatureSelect(null);
                    return;
                }

                // Handle Geometry for Highlight
                const geometry = feature.getGeometry() as Geometry;
                if (geometry) {
                    // Clone feature for highlight layer
                    let highlightFeature;

                    // Check if geometry is observable (standard Geometry) or RenderFeature geometry
                    // RenderFeature geometries often lack addEventListener (inherited from Observable)
                    if (typeof geometry.addEventListener === 'function') {
                        highlightFeature = new Feature({
                            geometry: geometry,
                        });
                    } else {
                        // It's likely a RenderFeature geometry. Reconstruct it.
                        const type = geometry.getType();
                        const flatCoords = (
                            geometry as any
                        ).getFlatCoordinates();
                        const ends = (geometry as any).getEnds
                            ? (geometry as any).getEnds()
                            : undefined;

                        let newGeom;

                        // NOTE: For simplicity in this specific project context where we know it's mostly Polygons:
                        if (type === 'Polygon') {
                            newGeom = new Polygon(flatCoords, 'XY', ends);
                        } else if (type === 'MultiPolygon') {
                            newGeom = new MultiPolygon(flatCoords, 'XY', ends);
                        } else if (type === 'Point') {
                            newGeom = new Point(flatCoords, 'XY');
                        } else if (type === 'LineString') {
                            newGeom = new LineString(flatCoords, 'XY');
                        }

                        if (newGeom) {
                            highlightFeature = new Feature({
                                geometry: newGeom,
                            });
                        }
                    }

                    if (highlightFeature) {
                        highlightSource.current.addFeature(highlightFeature);
                    }
                }

                const { geometry: geom, ...cleanProps } = props;

                const apiKey = layer?.get('apiKey') || 'unknown';

                // Trigger select callback
                onFeatureSelect({
                    id:
                        feature.getId()?.toString() ||
                        Math.random().toString(36).substr(2, 9),
                    properties: cleanProps,
                    layerId: apiKey,
                    geometryType: geometry?.getType() || 'Unknown',
                });
            } else {
                onFeatureSelect(null);
            }
        };

        map.on('singleclick', handleMapClick2);

        return () => {
            // Cleanup
            map.un('singleclick', handleMapClick2);
            map.removeLayer(highlightLayer.current);
            highlightSource.current.clear();
        };
    }, [map, onFeatureSelect]);
};
