import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

const TABLE_MAP: Record<string, { table: string; type: string }> = {
    rtrw: { table: 'public.pola_ruang_revisi_rtrw', type: 'Polygon' },
    badau: { table: 'public.pola_ruang_badau', type: 'Polygon' },
    geopark: { table: 'public.pola_ruang_geopark', type: 'Polygon' },
    tanjung: {
        table: 'public.pola_ruang_tanjung_kelayang',
        type: 'Polygon',
    },
    'badau-net': {
        table: 'public.jaringan_struktur_ruang_badau',
        type: 'LineString',
    },
    'geopark-net': {
        table: 'public.jaringan_struktur_ruang_geopark',
        type: 'LineString',
    },
    'tanjung-net': {
        table: 'public.jaringan_struktur_ruang_tanjung_kelayang',
        type: 'LineString',
    },
    'badau-infra': {
        table: 'public.infrastruktur_struktur_ruang_badau',
        type: 'Point',
    },
    'geopark-infra': {
        table: 'public.infrastruktur_struktur_ruang_geopark',
        type: 'Point',
    },
    'tanjung-infra': {
        table: 'public.infrastruktur_struktur_ruang_tanjung_kelayang',
        type: 'Point',
    },
};

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { geometry, layer = 'rtrw' } = body;

        if (!geometry) {
            return new NextResponse('Missing geometry', { status: 400 });
        }

        const targetLayer = TABLE_MAP[layer];
        if (!targetLayer) {
            return new NextResponse('Invalid layer', { status: 400 });
        }

        const geojsonString = JSON.stringify(geometry);

        let sql = '';
        let resultUnit = '';

        // Determine analysis type based on Target Layer Geometry Type
        // If Target is Polygon -> Calculate Area (Ha)
        // If Target is LineString -> Calculate Length (km)
        // If Target is Point -> Calculate Count (items)

        if (targetLayer.type === 'Polygon') {
            resultUnit = 'Ha';
            sql = `
                WITH input_geom AS (
                    SELECT ST_SetSRID(ST_GeomFromGeoJSON($1), 4326) as geom
                ),
                input_transformed AS (
                    SELECT ST_Transform(geom, 3857) as geom FROM input_geom
                ),
                intersection_calc AS (
                    SELECT
                        t.namobj as category,
                        ST_Area(ST_Intersection(ST_Force2D(ST_Transform(t.geom, 3857)), i.geom)) as area_sqm
                    FROM ${targetLayer.table} t, input_transformed i
                    WHERE ST_Intersects(ST_Force2D(ST_Transform(t.geom, 3857)), i.geom)
                )
                SELECT
                    category,
                    SUM(area_sqm) as value
                FROM intersection_calc
                GROUP BY category
                ORDER BY value DESC;
            `;
        } else if (targetLayer.type === 'LineString') {
            resultUnit = 'm'; // will convert to km in frontend if needed, or here. Let's send meters.
            sql = `
                WITH input_geom AS (
                    SELECT ST_SetSRID(ST_GeomFromGeoJSON($1), 4326) as geom
                ),
                input_transformed AS (
                    SELECT ST_Transform(geom, 3857) as geom FROM input_geom
                ),
                intersection_calc AS (
                    SELECT
                        t.namobj as category,
                        ST_Length(ST_Intersection(ST_Force2D(ST_Transform(t.geom, 3857)), i.geom)) as length_m
                    FROM ${targetLayer.table} t, input_transformed i
                    WHERE ST_Intersects(ST_Force2D(ST_Transform(t.geom, 3857)), i.geom)
                )
                SELECT
                    category,
                    SUM(length_m) as value
                FROM intersection_calc
                GROUP BY category
                ORDER BY value DESC;
            `;
        } else if (targetLayer.type === 'Point') {
            resultUnit = 'items';
            sql = `
                WITH input_geom AS (
                    SELECT ST_SetSRID(ST_GeomFromGeoJSON($1), 4326) as geom
                ),
                input_transformed AS (
                    SELECT ST_Transform(geom, 3857) as geom FROM input_geom
                )
                SELECT
                    t.namobj as category,
                    COUNT(*) as value
                FROM ${targetLayer.table} t, input_transformed i
                WHERE ST_Intersects(ST_Force2D(ST_Transform(t.geom, 3857)), i.geom)
                GROUP BY category
                ORDER BY value DESC;
            `;
        }

        const result = await prisma.$queryRawUnsafe(sql, geojsonString);

        // Process results
        const rows = result as any[];
        const totalValue = rows.reduce(
            (sum, row) => sum + Number(row.value),
            0
        );

        const stats = rows.map((row) => {
            const val = Number(row.value);
            // Conversion for display based on unit
            let displayValue = val;
            if (resultUnit === 'Ha') displayValue = val / 10000; // sqm to Ha
            if (resultUnit === 'm') displayValue = val / 1000; // meters to km? Or keep meters. Let's doing KM conversion here to align with Ha logic
            // Actually, let's keep raw value in 'areaHa' field for compatibility OR add new field.
            // To minimize frontend breakage, let's map 'value' to 'areaHa' but strictly speaking it's "value"

            return {
                category: row.category,
                areaHa: resultUnit === 'Ha' ? val / 10000 : val, // overloaded field for now, or add value field
                value: val, // raw value
                unit: resultUnit === 'm' ? 'km' : resultUnit, // if m, let's say it's meters, but for 'Ha' we converted.
                // Let's standardize: 'value' is the metric.
                // For Ha: value = sqm / 10000
                // For km: value = m / 1000
                // For items: value = count
                percentage: totalValue > 0 ? (val / totalValue) * 100 : 0,
            };
        });

        // Refine the unit/value logic
        // If Polygon -> val is sqm, return Ha
        // If Line -> val is m, return km?
        // Let's do consistent returns.
        const finalStats = rows.map((row) => {
            const rawVal = Number(row.value);
            let finalVal = rawVal;
            let finalUnit = resultUnit;

            if (resultUnit === 'Ha') {
                finalVal = rawVal / 10000;
            } else if (resultUnit === 'm') {
                finalVal = rawVal / 1000;
                finalUnit = 'km';
            }

            return {
                category: row.category,
                areaHa: finalVal, // Keep compatibility with frontend which expects 'areaHa' for pie chart value
                percentage: totalValue > 0 ? (rawVal / totalValue) * 100 : 0,
                unit: finalUnit,
            };
        });

        return new NextResponse(JSON.stringify(finalStats), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Analysis error:', error);
        return new NextResponse(JSON.stringify({ error: String(error) }), {
            status: 500,
        });
    }
}
