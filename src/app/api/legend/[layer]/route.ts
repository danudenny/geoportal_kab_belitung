import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

const MODEL_MAP: Record<string, any> = {
    rtrw: prisma.polaRuangRevisiRtrw,
    badau: prisma.pola_ruang_badau,
    geopark: prisma.pola_ruang_geopark,
    tanjung: prisma.pola_ruang_tanjung_kelayang,
    'badau-net': prisma.jaringan_struktur_ruang_badau,
    'geopark-net': prisma.jaringan_struktur_ruang_geopark,
    'tanjung-net': prisma.jaringan_struktur_ruang_tanjung_kelayang,
    'badau-infra': prisma.infrastruktur_struktur_ruang_badau,
    'geopark-infra': prisma.infrastruktur_struktur_ruang_geopark,
    'tanjung-infra': prisma.infrastruktur_struktur_ruang_tanjung_kelayang,
};

export async function GET(
    req: NextRequest,
    props: { params: Promise<{ layer: string }> }
) {
    const params = await props.params;
    const layer = params.layer;

    const model = MODEL_MAP[layer];

    if (!model) {
        return new NextResponse('Invalid layer', { status: 404 });
    }

    try {
        const categories = await model.findMany({
            distinct: ['namobj'],
            select: {
                namobj: true,
            },
            where: {
                namobj: {
                    not: null,
                },
            },
        });

        // Extract just the strings and filter any potential nulls/empties
        const categoryNames = categories
            .map((c: any) => c.namobj)
            .filter((name: any): name is string => !!name);

        return NextResponse.json(categoryNames);
    } catch (error) {
        console.error(
            `Error fetching legend categories for layer ${layer}:`,
            error
        );
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
