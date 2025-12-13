import GeoJSON from 'ol/format/GeoJSON';
import GPX from 'ol/format/GPX';
import KML from 'ol/format/KML';
import Papa from 'papaparse';
import shp from 'shpjs';

/**
 * Parses a file into a GeoJSON FeatureCollection.
 * Supports: .geojson, .json, .kml, .gpx, .zip (Example: Shapefile), .csv
 *
 * @param file The file to parse
 * @param projection The projection of the map view (default: 'EPSG:3857') - used for converting OL features back to GeoJSON if needed,
 *                   but actually we want standard GeoJSON (EPSG:4326).
 *                   Wait, shpjs returns GeoJSON (4326).
 *                   OL formats read into features which might be transformed.
 *                   Let's stick to returning standard GeoJSON object (EPSG:4326) where possible,
 *                   or let the consumer handle projection.
 *
 *                   However, for useAnalysis, we need GeoJSON in 4326.
 *                   For useFileImporter, we need OL Features in Map Projection (3857).
 *
 *                   Strategy: Return a standard GeoJSON object (JSON) in EPSG:4326.
 *                   The consumer can then read this with ol/format/GeoJSON into features with desired projection.
 */
export const parseFileToGeoJSON = async (file: File): Promise<any | null> => {
    try {
        // 1. GeoJSON / JSON
        if (file.name.endsWith('.geojson') || file.name.endsWith('.json')) {
            const text = await file.text();
            return JSON.parse(text);
        }

        // 2. KML
        if (file.name.endsWith('.kml')) {
            const text = await file.text();
            // Read features with KML format
            // KML usually is 4326. OL KML format defaults to read into 4326 if featureProjection is not set.
            const kmlFormat = new KML();
            const features = kmlFormat.readFeatures(text);
            // Convert to GeoJSON
            const geojsonFormat = new GeoJSON();
            return geojsonFormat.writeFeaturesObject(features);
        }

        // 3. GPX
        if (file.name.endsWith('.gpx')) {
            const text = await file.text();
            const gpxFormat = new GPX();
            const features = gpxFormat.readFeatures(text);
            const geojsonFormat = new GeoJSON();
            return geojsonFormat.writeFeaturesObject(features);
        }

        // 4. Shapefile (zipped)
        if (file.name.endsWith('.zip')) {
            const buffer = await file.arrayBuffer();
            const geojson = await shp(buffer);
            // shpjs can return FeatureCollection or array of them.
            // If array, we might want to merge or just return the first one for now?
            // Or return an array? The signature says Promise<any>.
            // Let's return as is.
            return geojson;
        }

        // 5. CSV
        if (file.name.endsWith('.csv')) {
            const text = await file.text();
            return new Promise((resolve, reject) => {
                Papa.parse(text, {
                    header: true,
                    skipEmptyLines: true,
                    complete: (results) => {
                        const data = results.data as any[];
                        if (data.length === 0) {
                            resolve(null);
                            return;
                        }

                        const keys = Object.keys(data[0]).map((k) =>
                            k.toLowerCase()
                        );
                        const latKeyIndex = keys.findIndex(
                            (k) =>
                                k === 'lat' ||
                                k === 'latitude' ||
                                k.includes('latitude')
                        );
                        const lonKeyIndex = keys.findIndex(
                            (k) =>
                                k === 'lon' ||
                                k === 'lng' ||
                                k === 'long' ||
                                k === 'longitude' ||
                                k.includes('longitude')
                        );

                        if (latKeyIndex === -1 || lonKeyIndex === -1) {
                            console.warn(
                                'Could not identify latitude/longitude columns in CSV'
                            );
                            resolve(null);
                            return;
                        }

                        const realKeys = Object.keys(data[0]);
                        const latKey = realKeys[latKeyIndex];
                        const lonKey = realKeys[lonKeyIndex];

                        const features = data
                            .map((row) => {
                                const lat = parseFloat(row[latKey]);
                                const lon = parseFloat(row[lonKey]);
                                if (isNaN(lat) || isNaN(lon)) return null;

                                return {
                                    type: 'Feature',
                                    geometry: {
                                        type: 'Point',
                                        coordinates: [lon, lat], // GeoJSON is [lon, lat]
                                    },
                                    properties: row,
                                };
                            })
                            .filter((f) => f !== null);

                        resolve({
                            type: 'FeatureCollection',
                            features: features,
                        });
                    },
                    error: (err: any) => reject(err),
                });
            });
        }

        return null;
    } catch (err) {
        console.error(`Error parsing file ${file.name}:`, err);
        throw err;
    }
};
