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
        params: Promise<{ layer: string; z: string; x: string; y: string }>;
    }
) {
    const params = await props.params;

    const layer = params.layer;
    const z = parseInt(params.z);
    const x = parseInt(params.x);
    const y = parseInt(params.y);

    if (isNaN(z) || isNaN(x) || isNaN(y)) {
        return new NextResponse('Invalid coordinates', { status: 400 });
    }

    const tableName = TABLE_MAP[layer];
    if (!tableName) {
        return new NextResponse('Invalid layer', { status: 404 });
    }

    try {
        // Use Prisma.raw to safely inject the table name from our allowlist
        // Use $queryRawUnsafe to allow dynamic table name injection
        // TABLE_MAP ensures tableName is safe from injection
        const sql = `
            WITH mvtgeom AS (
                SELECT
                    ST_AsMVTGeom(
                        ST_Force2D(ST_Transform(geom, 3857)),
                        ST_TileEnvelope(${z}, ${x}, ${y})
                    ) AS geom,
                    *
                FROM ${tableName}
                WHERE ST_Intersects(
                    ST_Force2D(ST_Transform(geom, 3857)),
                    ST_TileEnvelope(${z}, ${x}, ${y})
                )
            )
            SELECT ST_AsMVT(mvtgeom.*) AS mvt FROM mvtgeom;
        `;

        const query = await prisma.$queryRawUnsafe(sql);

        // The result of $queryRaw is an array of objects
        const tile = (query as any)[0]?.mvt;

        if (!tile) {
            return new NextResponse(null, { status: 204 });
        }

        return new NextResponse(tile, {
            headers: {
                'Content-Type': 'application/vnd.mapbox-vector-tile',
                'Cache-Control': 'public, max-age=3600, s-maxage=3600',
            },
        });
    } catch (error) {
        console.error(`Error serving tile for layer ${layer}:`, error);
        return new NextResponse(
            JSON.stringify({
                error: String(error),
                stack: (error as Error).stack,
            }),
            { status: 500 }
        );
    }
}
