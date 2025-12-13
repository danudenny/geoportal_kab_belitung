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
                const text = await file.text();
                const geojson = JSON.parse(text);

                // Extract the first geometry from Feature or Geometry object
                let geometry = null;
                if (geojson.type === 'FeatureCollection') {
                    if (geojson.features.length > 0) {
                        geometry = geojson.features[0].geometry;
                    }
                } else if (geojson.type === 'Feature') {
                    geometry = geojson.geometry;
                } else if (
                    geojson.type === 'Polygon' ||
                    geojson.type === 'MultiPolygon'
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
