import { parseFileToGeoJSON } from '@/utils/fileParser';
import GeoJSON from 'ol/format/GeoJSON';
import { Vector as VectorLayer } from 'ol/layer';
import OlMap from 'ol/Map';
import { Vector as VectorSource } from 'ol/source';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import { useEffect, useRef } from 'react';

export const useFileImporter = (map: OlMap | null, filesToLoad: File[]) => {
    // Keep track of layers associated with each file name
    const fileLayersRef = useRef<Map<string, VectorLayer<VectorSource>>>(
        new Map()
    );

    useEffect(() => {
        if (!map) return;

        const currentFileNames = new Set(filesToLoad.map((f) => f.name));
        const activeLayers = fileLayersRef.current;

        // 1. Remove layers for files that are no longer in the list
        activeLayers.forEach((layer, fileName) => {
            if (!currentFileNames.has(fileName)) {
                console.log('Removing layer for:', fileName);
                map.removeLayer(layer);
                activeLayers.delete(fileName);
            }
        });

        // 2. Add layers for new files
        const loadFiles = async () => {
            const projection = map.getView().getProjection().getCode();

            for (const file of filesToLoad) {
                if (activeLayers.has(file.name)) continue; // Already loaded

                console.log('Processing new file:', file.name);
                try {
                    const geojson = await parseFileToGeoJSON(file);

                    if (geojson) {
                        // Whether it's a FeatureCollection or array (shpjs might return array)
                        // If array, we take the first item or iterate?
                        // shpjs returns array if zip contains multiple shapefiles.
                        // For simplicity, let's assume single feature collection or array of them.
                        // We will flatten it for OL reading.

                        let features: any[] = [];
                        const format = new GeoJSON();

                        if (Array.isArray(geojson)) {
                            // array of feature collections
                            geojson.forEach((fc) => {
                                const readFeatures = format.readFeatures(fc, {
                                    featureProjection: projection,
                                });
                                features = features.concat(readFeatures);
                            });
                        } else {
                            features = format.readFeatures(geojson, {
                                featureProjection: projection,
                            });
                        }

                        if (features.length > 0) {
                            const vectorSource = new VectorSource({
                                features: features,
                            });

                            // Create Layer with Style
                            const vectorLayer = new VectorLayer({
                                source: vectorSource,
                                style: new Style({
                                    stroke: new Stroke({
                                        color: '#f59e0b',
                                        width: 2,
                                    }),
                                    fill: new Fill({
                                        color: 'rgba(245, 158, 11, 0.1)',
                                    }),
                                    image: new CircleStyle({
                                        radius: 6,
                                        fill: new Fill({ color: '#f59e0b' }),
                                        stroke: new Stroke({
                                            color: '#fff',
                                            width: 2,
                                        }),
                                    }),
                                }),
                                properties: {
                                    title: file.name, // Helpful for debugging
                                },
                            });

                            // Add to Map and Track it
                            map.addLayer(vectorLayer);
                            activeLayers.set(file.name, vectorLayer);

                            // Zoom to extent
                            const extent = vectorSource.getExtent();
                            map.getView().fit(extent, {
                                padding: [50, 50, 50, 50],
                                duration: 1000,
                            });
                        } else {
                            console.warn(
                                `No features found for file: ${file.name}`
                            );
                        }
                    } else {
                        console.warn(
                            `Unsupported format or empty result for file: ${file.name}`
                        );
                    }
                } catch (err) {
                    console.error('Error loading file to map:', err);
                }
            }
        };

        loadFiles();
    }, [filesToLoad, map]); // Re-run when file list changes
};
