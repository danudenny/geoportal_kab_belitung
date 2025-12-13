module.exports = [
"[project]/src/lib/prisma.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@prisma/adapter-pg/dist/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/pg [external] (pg, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/generated/prisma/index.js [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
const prismaClientSingleton = ()=>{
    const connectionString = process.env.DATABASE_URL;
    const pool = new __TURBOPACK__imported__module__$5b$externals$5d2f$pg__$5b$external$5d$__$28$pg$2c$__esm_import$29$__["Pool"]({
        connectionString
    });
    const adapter = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$prisma$2f$adapter$2d$pg$2f$dist$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PrismaPg"](pool);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$generated$2f$prisma$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PrismaClient"]({
        adapter
    });
};
const prisma = globalThis.prisma ?? prismaClientSingleton();
const __TURBOPACK__default__export__ = prisma;
if ("TURBOPACK compile-time truthy", 1) globalThis.prisma = prisma;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/app/api/analyze/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const TABLE_MAP = {
    rtrw: {
        table: 'public.pola_ruang_revisi_rtrw',
        type: 'Polygon'
    },
    badau: {
        table: 'public.pola_ruang_badau',
        type: 'Polygon'
    },
    geopark: {
        table: 'public.pola_ruang_geopark',
        type: 'Polygon'
    },
    tanjung: {
        table: 'public.pola_ruang_tanjung_kelayang',
        type: 'Polygon'
    },
    'badau-net': {
        table: 'public.jaringan_struktur_ruang_badau',
        type: 'LineString'
    },
    'geopark-net': {
        table: 'public.jaringan_struktur_ruang_geopark',
        type: 'LineString'
    },
    'tanjung-net': {
        table: 'public.jaringan_struktur_ruang_tanjung_kelayang',
        type: 'LineString'
    },
    'badau-infra': {
        table: 'public.infrastruktur_struktur_ruang_badau',
        type: 'Point'
    },
    'geopark-infra': {
        table: 'public.infrastruktur_struktur_ruang_geopark',
        type: 'Point'
    },
    'tanjung-infra': {
        table: 'public.infrastruktur_struktur_ruang_tanjung_kelayang',
        type: 'Point'
    }
};
async function POST(req) {
    try {
        const body = await req.json();
        const { geometry, layer = 'rtrw' } = body;
        if (!geometry) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"]('Missing geometry', {
                status: 400
            });
        }
        const targetLayer = TABLE_MAP[layer];
        if (!targetLayer) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"]('Invalid layer', {
                status: 400
            });
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
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].$queryRawUnsafe(sql, geojsonString);
        // Process results
        const rows = result;
        const totalValue = rows.reduce((sum, row)=>sum + Number(row.value), 0);
        const stats = rows.map((row)=>{
            const val = Number(row.value);
            // Conversion for display based on unit
            let displayValue = val;
            if (resultUnit === 'Ha') displayValue = val / 10000; // sqm to Ha
            if (resultUnit === 'm') displayValue = val / 1000; // meters to km? Or keep meters. Let's doing KM conversion here to align with Ha logic
            // Actually, let's keep raw value in 'areaHa' field for compatibility OR add new field.
            // To minimize frontend breakage, let's map 'value' to 'areaHa' but strictly speaking it's "value"
            return {
                category: row.category,
                areaHa: resultUnit === 'Ha' ? val / 10000 : val,
                value: val,
                unit: resultUnit === 'm' ? 'km' : resultUnit,
                // Let's standardize: 'value' is the metric.
                // For Ha: value = sqm / 10000
                // For km: value = m / 1000
                // For items: value = count
                percentage: totalValue > 0 ? val / totalValue * 100 : 0
            };
        });
        // Refine the unit/value logic
        // If Polygon -> val is sqm, return Ha
        // If Line -> val is m, return km?
        // Let's do consistent returns.
        const finalStats = rows.map((row)=>{
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
                areaHa: finalVal,
                percentage: totalValue > 0 ? rawVal / totalValue * 100 : 0,
                unit: finalUnit
            };
        });
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](JSON.stringify(finalStats), {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error('Analysis error:', error);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"](JSON.stringify({
            error: String(error)
        }), {
            status: 500
        });
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=src_bf997825._.js.map