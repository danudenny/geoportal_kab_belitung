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
        filesToLoad.forEach((file) => {
            if (activeLayers.has(file.name)) return; // Already loaded

            console.log('Processing new file:', file.name);

            if (file.name.endsWith('.geojson') || file.name.endsWith('.json')) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const result = e.target?.result;
                    if (typeof result === 'string') {
                        try {
                            // Parse GeoJSON
                            const features = new GeoJSON().readFeatures(
                                JSON.parse(result),
                                {
                                    featureProjection: map
                                        .getView()
                                        .getProjection(),
                                }
                            );

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
                            if (features.length > 0) {
                                const extent = vectorSource.getExtent();
                                map.getView().fit(extent, {
                                    padding: [50, 50, 50, 50],
                                    duration: 1000,
                                });
                            }
                        } catch (err) {
                            console.error('Error parsing GeoJSON', err);
                        }
                    }
                };
                reader.readAsText(file);
            } else {
                console.warn(
                    `File ${file.name} is not a supported GeoJSON file.`
                );
            }
        });
    }, [filesToLoad, map]); // Re-run when file list changes
};
