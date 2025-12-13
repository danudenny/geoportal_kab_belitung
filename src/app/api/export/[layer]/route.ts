import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

const TABLE_MAP: Record<string, string> = {
    rtrw: 'public.pola_ruang_revisi_rtrw',
    badau: 'public.pola_ruang_badau',
    geopark: 'public.pola_ruang_geopark',
    tanjung: 'public.pola_ruang_tanjung_kelayang',
    'badau-net': 'public.jaringan_struktur_ruang_badau',
    'geopark-net': 'public.jaringan_struktur_ruang_geopark',
    'tanjung-net': 'public.jaringan_struktur_ruang_tanjung_kelayang',
    'badau-infra': 'public.infrastruktur_struktur_ruang_badau',
    'geopark-infra': 'public.infrastruktur_struktur_ruang_geopark',
    'tanjung-infra': 'public.infrastruktur_struktur_ruang_tanjung_kelayang',
};

export async function GET(
    req: NextRequest,
    props: {
        params: Promise<{ layer: string }>;
    }
) {
    const params = await props.params;
    const layer = params.layer;

    const tableName = TABLE_MAP[layer];

    if (!tableName) {
        return new NextResponse('Invalid layer', { status: 404 });
    }

    try {
        // Use $queryRawUnsafe to allow dynamic table name injection (whitelisted via TABLE_MAP)
        // jsonb_build_object and related functions are used to construct the GeoJSON directly in the DB
        // allowing for efficient streaming/retrieval of a single large JSON blob.
        const sql = `
            SELECT jsonb_build_object(
                'type', 'FeatureCollection',
                'features', COALESCE(jsonb_agg(
                    jsonb_build_object(
                        'type', 'Feature',
                        'geometry', ST_AsGeoJSON(ST_Transform(geom, 4326))::jsonb,
                        'properties', to_jsonb(t.*) - 'geom'
                    )
                ), '[]'::jsonb)
            ) as geojson
            FROM ${tableName} AS t
        `;

        const result = await prisma.$queryRawUnsafe(sql);
        const geojson = (result as any)[0]?.geojson;

        if (!geojson) {
            return new NextResponse(
                JSON.stringify({ type: 'FeatureCollection', features: [] }),
                {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/geo+json',
                    },
                }
            );
        }

        // Return as a downloadable file
        const filename = `${layer}.geojson`;

        return new NextResponse(JSON.stringify(geojson), {
            status: 200,
            headers: {
                'Content-Type': 'application/geo+json',
                'Content-Disposition': `attachment; filename="${filename}"`,
            },
        });
    } catch (error) {
        console.error(`Error exporting layer ${layer}:`, error);
        return new NextResponse(
            JSON.stringify({
                error: 'Failed to export layer',
                details: String(error),
            }),
            { status: 500 }
        );
    }
}
