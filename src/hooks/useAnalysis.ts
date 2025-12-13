import { parseFileToGeoJSON } from '@/utils/fileParser';
import { useCallback, useState } from 'react';

export interface AnalysisResult {
    category: string;
    areaHa: number;
    percentage: number;
    color?: string;
    unit?: string;
    [key: string]: any;
}

export const useAnalysis = () => {
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [results, setResults] = useState<AnalysisResult[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    const runAnalysis = useCallback(
        async (file: File, layerId: string = 'rtrw') => {
            setIsAnalyzing(true);
            setError(null);
            setResults(null);

            try {
                // Use universal parser
                const parsed = await parseFileToGeoJSON(file);

                if (!parsed) {
                    throw new Error(
                        'Could not parse file. Unsupported format.'
                    );
                }

                // Handle array (if multiple FeatureCollections in zip)
                // For simplicity, take the first FeatureCollection or Feature
                let geojson = parsed;
                if (Array.isArray(parsed)) {
                    if (parsed.length > 0) geojson = parsed[0];
                    else throw new Error('Empty GeoJSON result');
                }

                // Extract a geometry.
                // The API expects { geometry: ... } where geometry is a GeoJSON Geometry object (Polygon, etc)
                // But typically for intersection we might want the feature geometry.
                // If it's FeatureCollection, check first feature.
                // Ideally, we should iterate all features, but for now let's stick to "single geometry" analysis
                // or "union of all geometries". The API seems to just take one geometry?
                // Looking at API: "const { geometry ... } = body".
                // And SQL: ST_GeomFromGeoJSON($1).
                // So it expects a single Geometry JSON object.

                let geometry = null;
                if (geojson.type === 'FeatureCollection') {
                    if (geojson.features && geojson.features.length > 0) {
                        // TODO: Union all features? Or just pick first?
                        // Current logic picked first. Let's keep that for now to minimize scope creep.
                        // Ideally we should UNION all input geometries.
                        geometry = geojson.features[0].geometry;
                    }
                } else if (geojson.type === 'Feature') {
                    geometry = geojson.geometry;
                } else if (
                    geojson.type === 'Polygon' ||
                    geojson.type === 'MultiPolygon' ||
                    geojson.type === 'LineString' ||
                    geojson.type === 'MultiLineString' ||
                    geojson.type === 'Point' ||
                    geojson.type === 'MultiPoint'
                ) {
                    geometry = geojson;
                }

                if (!geometry) {
                    throw new Error('No valid geometry found in file');
                }

                const res = await fetch('/api/analyze', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ geometry, layer: layerId }),
                });

                if (!res.ok) {
                    const errText = await res.text();
                    throw new Error(errText || 'Analysis failed');
                }

                const data = await res.json();
                setResults(data);
            } catch (err) {
                console.error('Analysis failed:', err);
                setError(err instanceof Error ? err.message : String(err));
            } finally {
                setIsAnalyzing(false);
            }
        },
        []
    );

    const clearAnalysis = useCallback(() => {
        setResults(null);
        setError(null);
        setIsAnalyzing(false);
    }, []);

    return { runAnalysis, clearAnalysis, isAnalyzing, results, error };
};
