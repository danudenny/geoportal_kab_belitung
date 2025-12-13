import Feature from 'ol/Feature';
import MVT from 'ol/format/MVT';
import { LineString, Point, Polygon } from 'ol/geom';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import VectorTileLayer from 'ol/layer/VectorTile';
import Map from 'ol/Map';
import { fromLonLat } from 'ol/proj';
import { OSM, Vector as VectorSource, XYZ } from 'ol/source';
import VectorTileSource from 'ol/source/VectorTile';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import { useEffect, useRef } from 'react';
import { LINE_STYLE, POINT_STYLE, polaRuangColorSet } from '../constants';
import { LayerGroup } from '../types';

export const useLayerManager = (map: Map | null, layerGroups: LayerGroup[]) => {
    const layerRefs = useRef<
        Record<string, TileLayer<any> | VectorLayer<any> | VectorTileLayer>
    >({});

    useEffect(() => {
        if (!map) return;

        layerGroups.forEach((group: LayerGroup) => {
            group.layers.forEach(
                (layerConfig: import('../types').LayerConfig) => {
                    let layer = layerRefs.current[layerConfig.id];

                    // Create layer if it doesn't exist
                    if (!layer) {
                        if (layerConfig.type === 'tile') {
                            let source;
                            if (
                                layerConfig.source &&
                                layerConfig.source.startsWith('http')
                            ) {
                                source = new XYZ({
                                    url: layerConfig.source,
                                    maxZoom: 20,
                                    crossOrigin: 'anonymous',
                                });
                            } else {
                                source = new OSM();
                            }

                            layer = new TileLayer({
                                source: source,
                                visible: layerConfig.visible,
                                opacity: layerConfig.opacity,
                                zIndex: 0,
                            });
                        } else if (layerConfig.type === 'mvt') {
                            const vectorTileSource = new VectorTileSource({
                                format: new MVT(),
                                url: layerConfig.source,
                                projection: 'EPSG:3857',
                            });

                            layer = new VectorTileLayer({
                                source: vectorTileSource,
                                visible: layerConfig.visible,
                                opacity: layerConfig.opacity,
                                zIndex: 10,
                                style: (feature) => {
                                    const props = feature.getProperties();
                                    const namobj = props.namobj || props.Namobj;

                                    if (
                                        layerConfig.geometryType ===
                                        'LineString'
                                    ) {
                                        const styleConfig = (LINE_STYLE as any)[
                                            namobj
                                        ];

                                        return new Style({
                                            stroke: new Stroke({
                                                color:
                                                    styleConfig?.color ||
                                                    layerConfig.color ||
                                                    '#3b82f6',
                                                width: styleConfig?.width || 2,
                                                lineDash:
                                                    styleConfig?.dash ||
                                                    undefined,
                                            }),
                                        });
                                    }

                                    if (layerConfig.geometryType === 'Point') {
                                        const styleConfig = (
                                            POINT_STYLE as any
                                        )[namobj];
                                        const baseColor =
                                            styleConfig?.color ||
                                            layerConfig.color ||
                                            '#ef4444';
                                        const radius = styleConfig?.size
                                            ? styleConfig.size / 2
                                            : 5; // Convert diameter to radius

                                        return new Style({
                                            image: new CircleStyle({
                                                radius: radius,
                                                fill: new Fill({
                                                    color: baseColor,
                                                }),
                                                stroke: new Stroke({
                                                    color:
                                                        styleConfig?.outlineColor ||
                                                        '#ffffff',
                                                    width: 1.5,
                                                }),
                                            }),
                                        });
                                    }

                                    const colorEntry = polaRuangColorSet.find(
                                        (entry: {
                                            namobj: string;
                                            color: string;
                                        }) => entry.namobj === namobj
                                    );
                                    const color = colorEntry
                                        ? colorEntry.color
                                        : layerConfig.color || '#10b981';

                                    return new Style({
                                        stroke: new Stroke({
                                            color: color,
                                            width: 1,
                                        }),
                                        fill: new Fill({
                                            color: `${color}80`, // 50% opacity
                                        }),
                                    });
                                },
                            });
                        } else {
                            // Vector Layer (Mock Data)
                            const source = new VectorSource();

                            // Generate mock features only if empty and visible
                            if (
                                layerConfig.visible &&
                                source.getFeatures().length === 0
                            ) {
                                const count = 5;
                                const centerLon = 107.63;
                                const centerLat = -2.85;

                                for (let i = 0; i < count; i++) {
                                    const lon =
                                        centerLon +
                                        (Math.random() - 0.5) * 0.15;
                                    const lat =
                                        centerLat +
                                        (Math.random() - 0.5) * 0.15;
                                    let geometry;

                                    if (
                                        layerConfig.geometryType === 'Polygon'
                                    ) {
                                        const offset = 0.01;
                                        geometry = new Polygon([
                                            [
                                                fromLonLat([lon, lat]),
                                                fromLonLat([
                                                    lon + offset,
                                                    lat - offset,
                                                ]),
                                                fromLonLat([
                                                    lon - offset,
                                                    lat - offset,
                                                ]),
                                                fromLonLat([lon, lat]),
                                            ],
                                        ]);
                                    } else if (
                                        layerConfig.geometryType ===
                                        'LineString'
                                    ) {
                                        geometry = new LineString([
                                            fromLonLat([lon, lat]),
                                            fromLonLat([
                                                lon + 0.02,
                                                lat + 0.01,
                                            ]),
                                            fromLonLat([
                                                lon + 0.04,
                                                lat - 0.01,
                                            ]),
                                        ]);
                                    } else {
                                        geometry = new Point(
                                            fromLonLat([lon, lat])
                                        );
                                    }

                                    const feat = new Feature({ geometry });
                                    feat.set(
                                        'name',
                                        `${layerConfig.name} - Unit ${i + 1}`
                                    );
                                    feat.set(
                                        'Type',
                                        layerConfig.geometryType || 'Unknown'
                                    );
                                    feat.setId(`${layerConfig.id}-${i}`);
                                    source.addFeature(feat);
                                }
                            }

                            layer = new VectorLayer({
                                source: source,
                                visible: layerConfig.visible,
                                opacity: layerConfig.opacity,
                                zIndex: 10,
                                style: new Style({
                                    fill: new Fill({
                                        color: layerConfig.color
                                            ? `${layerConfig.color}40`
                                            : 'rgba(16, 185, 129, 0.2)',
                                    }),
                                    stroke: new Stroke({
                                        color: layerConfig.color || '#10b981',
                                        width: 2,
                                    }),
                                    image: new CircleStyle({
                                        radius: 5,
                                        fill: new Fill({
                                            color:
                                                layerConfig.color || '#10b981',
                                        }),
                                        stroke: new Stroke({
                                            color: '#fff',
                                            width: 1,
                                        }),
                                    }),
                                }),
                            });
                        }

                        if (layerConfig.apiKey) {
                            layer.set('apiKey', layerConfig.apiKey);
                        }
                        map.addLayer(layer);
                        layerRefs.current[layerConfig.id] = layer;
                    } else {
                        layer.setVisible(layerConfig.visible);
                        layer.setOpacity(layerConfig.opacity);
                    }
                }
            );
        });
    }, [map, layerGroups]);

    return layerRefs;
};
