module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/constants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COLUMN_MAPPING",
    ()=>COLUMN_MAPPING,
    "INITIAL_LAYER_GROUPS",
    ()=>INITIAL_LAYER_GROUPS,
    "LINE_STYLE",
    ()=>LINE_STYLE,
    "POINT_STYLE",
    ()=>POINT_STYLE,
    "polaRuangColorSet",
    ()=>polaRuangColorSet
]);
const INITIAL_LAYER_GROUPS = [
    {
        id: 'group-basemap',
        name: 'Base Maps',
        icon: 'Map',
        layers: [
            {
                id: 'base-arcgis-street',
                name: 'ArcGIS Street',
                visible: false,
                opacity: 1,
                type: 'tile',
                source: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            },
            {
                id: 'base-arcgis-sat',
                name: 'ArcGIS Satellite',
                visible: false,
                opacity: 1,
                type: 'tile',
                source: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            },
            {
                id: 'base-google-street',
                name: 'Google Street',
                visible: true,
                opacity: 1,
                type: 'tile',
                source: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            },
            {
                id: 'base-google-sat',
                name: 'Google Satellite',
                visible: false,
                opacity: 1,
                type: 'tile',
                source: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            },
            {
                id: 'base-carto-dark',
                name: 'Dark Carto',
                visible: false,
                opacity: 1,
                type: 'tile',
                source: 'https://basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            },
            {
                id: 'base-carto-light',
                name: 'Light Carto',
                visible: false,
                opacity: 1,
                type: 'tile',
                source: 'https://basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            }
        ]
    },
    {
        id: 'group-rtrw',
        name: 'RTRW Belitung',
        icon: 'Globe',
        layers: [
            {
                id: 'rtrw-pola',
                name: 'Pola Ruang',
                visible: true,
                opacity: 0.6,
                type: 'mvt',
                source: '/api/tiles/rtrw/{z}/{x}/{y}',
                color: '#10b981',
                geometryType: 'Polygon'
            }
        ]
    },
    {
        id: 'group-badau',
        name: 'RDTR Badau',
        icon: 'Hexagon',
        layers: [
            {
                id: 'badau-pola',
                name: 'Pola Ruang',
                visible: false,
                opacity: 0.7,
                type: 'mvt',
                source: '/api/tiles/badau/{z}/{x}/{y}',
                color: '#f59e0b',
                geometryType: 'Polygon'
            },
            {
                id: 'badau-infra',
                name: 'Infrastruktur',
                visible: false,
                opacity: 1,
                type: 'mvt',
                source: '/api/tiles/badau-infra/{z}/{x}/{y}',
                color: '#ef4444',
                geometryType: 'Point',
                apiKey: 'badau-infra'
            },
            {
                id: 'badau-net',
                name: 'Jaringan',
                visible: false,
                opacity: 1,
                type: 'mvt',
                source: '/api/tiles/badau-net/{z}/{x}/{y}',
                color: '#3b82f6',
                geometryType: 'LineString',
                apiKey: 'badau-net'
            }
        ]
    },
    {
        id: 'group-geopark',
        name: 'RDTR Geopark',
        icon: 'Mountain',
        layers: [
            {
                id: 'geo-pola',
                name: 'Pola Ruang',
                visible: false,
                opacity: 0.7,
                type: 'mvt',
                source: '/api/tiles/geopark/{z}/{x}/{y}',
                color: '#8b5cf6',
                geometryType: 'Polygon',
                apiKey: 'geopark'
            },
            {
                id: 'geo-infra',
                name: 'Infrastruktur',
                visible: false,
                opacity: 1,
                type: 'mvt',
                source: '/api/tiles/geopark-infra/{z}/{x}/{y}',
                color: '#ec4899',
                geometryType: 'Point',
                apiKey: 'geopark-infra'
            },
            {
                id: 'geo-net',
                name: 'Jaringan',
                visible: false,
                opacity: 1,
                type: 'mvt',
                source: '/api/tiles/geopark-net/{z}/{x}/{y}',
                color: '#06b6d4',
                geometryType: 'LineString',
                apiKey: 'geopark-net'
            }
        ]
    },
    {
        id: 'group-tanjung',
        name: 'RDTR Tanjung Kelayang',
        icon: 'Anchor',
        layers: [
            {
                id: 'tj-pola',
                name: 'Pola Ruang',
                visible: false,
                opacity: 0.7,
                type: 'mvt',
                source: '/api/tiles/tanjung/{z}/{x}/{y}',
                color: '#14b8a6',
                geometryType: 'Polygon',
                apiKey: 'tanjung'
            },
            {
                id: 'tj-infra',
                name: 'Infrastruktur',
                visible: false,
                opacity: 1,
                type: 'mvt',
                source: '/api/tiles/tanjung-infra/{z}/{x}/{y}',
                color: '#f97316',
                geometryType: 'Point',
                apiKey: 'tanjung-infra'
            },
            {
                id: 'tj-net',
                name: 'Jaringan',
                visible: false,
                opacity: 1,
                type: 'mvt',
                source: '/api/tiles/tanjung-net/{z}/{x}/{y}',
                color: '#6366f1',
                geometryType: 'LineString',
                apiKey: 'tanjung-net'
            }
        ]
    }
];
const COLUMN_MAPPING = {
    namobj: 'Nama Objek',
    jnsrpr: 'Jenis Rencana Pola Ruang',
    wadmkc: 'Kecamatan',
    wadmkd: 'Desa / Kelurahan',
    kkop_1: 'Kawasan Keselamatan Operasi Penerbangan',
    kp2b_2: 'Kawasan Pertanian Pangan Berkelanjutan',
    lp2b_2: 'Lahan Pertanian Pangan Berkelanjutan',
    krb_03: 'Kawasan Rawan Bencana',
    tod_04: 'Kawasan Berorientasi Transit',
    teb_05: 'Tempat Evakuasi Bencana',
    puslit: 'Pusat Penelitian',
    cagbud: 'Kawasan Cagar Budaya',
    resair: 'Kawasan Resapan Air',
    ksmpdn: 'Kawasan Sempadan',
    hankam: 'Kawasan Pertahanan dan Keamanan',
    kkarst: 'Kawasan Karst',
    ptbgmb: 'Kawasan Pertambangan Mineral dan Batubara',
    mgrsat: 'Kawasan Migrasi Satwa',
    rdbumi: 'Ruang Dalam Bumi',
    tpz_00: 'Teknik Pengaturan Zonasi',
    remark: 'Catatan',
    luasha: 'Luas Zona'
};
const polaRuangColorSet = [
    // Existing/Base
    {
        namobj: 'Badan Air',
        color: '#97DBF2'
    },
    {
        namobj: 'Badan Jalan',
        color: '#EB1E1E'
    },
    {
        namobj: 'Cagar Budaya',
        color: '#FF37CD'
    },
    {
        namobj: 'Ekosistem Mangrove',
        color: '#2D966E'
    },
    {
        namobj: 'Hutan Lindung',
        color: '#325F28'
    },
    {
        namobj: 'Hutan Produksi Tetap',
        color: '#7DB437'
    },
    {
        namobj: 'Hutan Produksi yang dapat Dikonversi',
        color: '#9BE137'
    },
    {
        namobj: 'Instalasi Pengolahan Air Limbah (IPAL)',
        color: '#FFE687'
    },
    {
        namobj: 'Instalasi Pengolahan Air Minum (IPAM)',
        color: '#FFC869'
    },
    {
        namobj: 'Jalur Hijau',
        color: '#0F9100'
    },
    {
        namobj: 'Kawasan Peruntukan Industri',
        color: '#690000'
    },
    {
        namobj: 'Keunikan Batuan dan Fosil',
        color: '#968796'
    },
    {
        namobj: 'Pariwisata',
        color: '#FFA5FF'
    },
    {
        namobj: 'Pemakaman',
        color: '#5AFF00'
    },
    {
        namobj: 'Pengelolaan Persampahan',
        color: '#D79B37'
    },
    {
        namobj: 'Perdagangan dan Jasa Skala Kota',
        color: '#FF6464'
    },
    {
        namobj: 'Perdagangan dan Jasa Skala SWP',
        color: '#FFA5A5'
    },
    {
        namobj: 'Perdagangan dan Jasa Skala WP',
        color: '#FF8282'
    },
    {
        namobj: 'Perikanan Tangkap',
        color: '#649BD2'
    },
    {
        namobj: 'Perkantoran',
        color: '#9B9B9B'
    },
    {
        namobj: 'Perkebunan',
        color: '#AFAF37'
    },
    {
        namobj: 'Perlindungan Setempat',
        color: '#05D7D7'
    },
    {
        namobj: 'Pertahanan dan Keamanan',
        color: '#9B00FF'
    },
    {
        namobj: 'Pertambangan Mineral Bukan Logam',
        color: '#415573'
    },
    {
        namobj: 'Pertambangan Mineral Logam',
        color: '#2D415F'
    },
    {
        namobj: 'Perumahan Kepadatan Rendah',
        color: '#FFFA4B'
    },
    {
        namobj: 'Perumahan Kepadatan Sedang',
        color: '#FFF005'
    },
    {
        namobj: 'Perumahan Kepadatan Tinggi',
        color: '#FFDC00'
    },
    {
        namobj: 'Rimba Kota',
        color: '#37550A'
    },
    {
        namobj: 'SPU Skala Kecamatan',
        color: '#9B329B'
    },
    {
        namobj: 'SPU Skala Kelurahan',
        color: '#B94BB9'
    },
    {
        namobj: 'SPU Skala Kota',
        color: '#7D197D'
    },
    {
        namobj: 'Taman Kecamatan',
        color: '#468700'
    },
    {
        namobj: 'Taman Kelurahan',
        color: '#4BA500'
    },
    {
        namobj: 'Taman Kota',
        color: '#416900'
    },
    {
        namobj: 'Taman RW',
        color: '#50C300'
    },
    {
        namobj: 'Tanaman Pangan',
        color: '#C8F546'
    },
    {
        namobj: 'Transportasi',
        color: '#D73700'
    },
    {
        namobj: 'Campuran Intensitas Menengah/Sedang',
        color: '#F0731E'
    },
    {
        namobj: 'Campuran Intensitas Tinggi',
        color: '#F05500'
    },
    {
        namobj: 'Hortikultura',
        color: '#E6FF4B'
    },
    {
        namobj: 'Pergudangan',
        color: '#373737'
    },
    {
        namobj: 'Kawasan Keunikan Bentang Alam',
        color: '#B48796'
    },
    {
        namobj: 'Kawasan Pembangkitan Tenaga Listrik',
        color: '#00FFCD'
    },
    {
        namobj: 'Kawasan Perikanan Budi Daya',
        color: '#82B9D2'
    },
    {
        namobj: 'Kawasan Permukiman Perdesaan',
        color: '#EB9B3C'
    },
    {
        namobj: 'Kawasan Permukiman Perkotaan',
        color: '#F59B1E'
    },
    {
        namobj: 'Kawasan Peruntukan Pertambangan Batuan',
        color: '#5F7391'
    },
    {
        namobj: 'Kawasan Suaka Alam',
        color: '#323287'
    },
    {
        namobj: 'Taman Hutan Raya',
        color: '#B9A5FF'
    },
    // Explicit "Kawasan" prefixed options (to match data variations)
    {
        namobj: 'Kawasan Pertambangan Mineral Bukan Logam',
        color: '#415573'
    },
    {
        namobj: 'Kawasan Peruntukan Pertambangan Batuan',
        color: '#5F7391'
    },
    {
        namobj: 'Kawasan Pertambangan Mineral Logam',
        color: '#2D415F'
    },
    {
        namobj: 'Kawasan Keunikan Batuan dan Fosil',
        color: '#968796'
    },
    {
        namobj: 'Kawasan Keunikan Bentang Alam',
        color: '#B48796'
    },
    {
        namobj: 'Kawasan Suaka Alam',
        color: '#323287'
    },
    {
        namobj: 'Kawasan Hutan Produksi yang dapat Dikonversi',
        color: '#9BE137'
    },
    {
        namobj: 'Taman Hutan Raya (Tahura)',
        color: '#B9A5FF'
    },
    {
        namobj: 'Kawasan Perlindungan Setempat',
        color: '#05D7D7'
    },
    {
        namobj: 'Kawasan Hutan Lindung',
        color: '#325F28'
    },
    {
        namobj: 'Kawasan Ekosistem Mangrove',
        color: '#2D966E'
    },
    {
        namobj: 'Kawasan Hutan Produksi Tetap',
        color: '#7DB437'
    },
    {
        namobj: 'Kawasan Tanaman Pangan',
        color: '#C8F546'
    },
    {
        namobj: 'Kawasan Perkebunan',
        color: '#AFAF37'
    },
    {
        namobj: 'Kawasan Perikanan Tangkap',
        color: '#649BD2'
    },
    {
        namobj: 'Kawasan Perikanan Budi Daya',
        color: '#82B9D2'
    },
    {
        namobj: 'Kawasan Pariwisata',
        color: '#FFA5FF'
    },
    {
        namobj: 'Kawasan Transportasi',
        color: '#D73700'
    },
    {
        namobj: 'Kawasan Pertahanan dan Keamanan',
        color: '#9B00FF'
    },
    {
        namobj: 'Kawasan Cagar Budaya',
        color: '#FF37CD'
    }
];
const LINE_STYLE = {
    // ============================
    // JARINGAN JALAN (Lampiran VII - Tabel VII.1 & VII.6)
    // ============================
    'Jalan Kolektor Primer': {
        color: '#FF8C00',
        width: 3
    },
    'Jalan Kolektor Sekunder': {
        color: '#FFC800',
        width: 1.8
    },
    'Jalan Lokal Primer': {
        color: '#9B5AFF',
        width: 1.7
    },
    'Jalan Lokal Sekunder': {
        color: '#B2B2FF',
        width: 1.5
    },
    'Jalan Lingkungan Primer': {
        color: '#828282',
        width: 1
    },
    'Jalan Lingkungan Sekunder': {
        color: '#9C9C9C',
        width: 0.8
    },
    'Jalan Khusus': {
        color: '#4E4E4E',
        width: 0.5
    },
    'Jalur Sepeda': {
        color: '#33B300',
        width: 1.8,
        dash: [
            6,
            6
        ]
    },
    'Jalur Evakuasi Bencana': {
        color: '#FF00FF',
        width: 2,
        dash: [
            8,
            8
        ]
    },
    'Jaringan Pejalan Kaki': {
        color: '#000000',
        width: 1.5,
        dash: [
            4,
            4
        ]
    },
    // ============================
    // DRAINASE (Lampiran VII - Tabel VII.16)
    // ============================
    // Catatan: Dokumen menyebutkan 10pt (simbol), disesuaikan ke skala web map (2-3px)
    'Jaringan Drainase Primer': {
        color: '#004CA8',
        width: 2.5
    },
    'Jaringan Drainase Sekunder': {
        color: '#FF0000',
        width: 2
    },
    'Jaringan Drainase Tersier': {
        color: '#A900E6',
        width: 1.5
    },
    // ============================
    // AIR MINUM / PIPA (Lampiran VII - Tabel VII.16)
    // ============================
    'Pipa Induk': {
        color: '#824600',
        width: 1.5
    },
    'Pipa Retikulasi': {
        color: '#BE7800',
        width: 1
    },
    'Jaringan Distribusi Pembagi': {
        color: '#005CE6',
        width: 1.4
    },
    'Jaringan Transmisi Air Minum': {
        color: '#00A9E6',
        width: 1,
        dash: [
            4,
            4
        ]
    },
    'Jaringan Transmisi Air Baku': {
        color: '#004DA8',
        width: 1,
        dash: [
            6,
            4
        ]
    },
    // ============================
    // TELEKOMUNIKASI (Lampiran VII - Tabel VII.16)
    // ============================
    'Jaringan Serat Optik': {
        color: '#3CAA00',
        width: 1.4,
        dash: [
            3,
            6
        ]
    },
    'Telepon Fixed Line': {
        color: '#3CAA00',
        width: 1.4
    },
    // ============================
    // LISTRIK (Lampiran VII - Tabel VII.16)
    // ============================
    // Warna Inner Line digunakan (Kuning), Outline (Biru/Merah) bisa ditambahkan sebagai layer terpisah jika perlu
    'Saluran Udara Tegangan Rendah (SUTR)': {
        color: '#FFD21E',
        width: 2,
        dash: [
            10,
            4
        ]
    },
    'Saluran Udara Tegangan Menengah (SUTM)': {
        color: '#FFD21E',
        width: 2.5,
        dash: [
            12,
            4
        ]
    },
    // ============================
    // INFRASTRUKTUR KHUSUS
    // ============================
    'Pengaman Pantai': {
        color: '#005AE6',
        width: 2.5,
        dash: [
            2,
            6
        ]
    }
};
const POINT_STYLE = {
    // ============================
    // PUSAT PELAYANAN (Lampiran VII - Tabel VII.16)
    // ============================
    'Pusat Pelayanan Kota/Kawasan Perkotaan': {
        color: '#FF5500',
        size: 23
    },
    'Sub Pusat Pelayanan Kota/Kawasan Perkotaan': {
        color: '#FFB400',
        size: 21
    },
    'Pusat Lingkungan Kelurahan/Desa': {
        color: '#FFFF00',
        size: 18
    },
    // ============================
    // TRANSPORTASI (Lampiran VII - Tabel VII.16)
    // ============================
    'Terminal Penumpang Tipe B': {
        color: '#FF0000',
        size: 25
    },
    'Terminal Penumpang Tipe C': {
        color: '#8E67FD',
        size: 25
    },
    Halte: {
        color: '#F50000',
        iconColor: '#FFFFFF',
        size: 23
    },
    Jembatan: {
        color: '#000000',
        size: 23
    },
    'Pelabuhan Pengumpan Lokal': {
        color: '#ED7B2F',
        size: 22
    },
    'Pelabuhan Perikanan Samudera': {
        color: '#6991FD',
        size: 23
    },
    'Pelabuhan Perikanan Pantai': {
        color: '#8E67FD',
        size: 23
    },
    // ============================
    // ENERGI (LISTRIK & BBM) (Lampiran VII - Tabel VII.16)
    // ============================
    'Gardu Induk': {
        color: '#FFAA00',
        size: 22
    },
    'Gardu Distribusi': {
        color: '#FFAA00',
        size: 22
    },
    'Sarana Penyimpanan Bahan Bakar': {
        color: '#FFAA00',
        size: 20
    },
    // ============================
    // TELEKOMUNIKASI (Lampiran VII - Tabel VII.16)
    // ============================
    'Menara Base Transceiver Station (BTS)': {
        color: '#3CAA00',
        size: 24
    },
    // ============================
    // SUMBER DAYA AIR & DRAINASE (Lampiran VII - Tabel VII.16)
    // ============================
    'Bangunan Pengendalian Banjir': {
        color: '#005CE6',
        size: 18
    },
    'Bangunan Peresapan (Kolam Retensi)': {
        color: '#005AE6',
        size: 18
    },
    'Bangunan Pengambil Air Baku': {
        color: '#005AE6',
        size: 18
    },
    'Instalasi Produksi': {
        color: '#005CE6',
        size: 18
    },
    'Sumur Pompa': {
        color: '#00A9E6',
        size: 20
    },
    'Hidran Kebakaran': {
        color: '#E60000',
        size: 18
    },
    // ============================
    // PERSAMPAHAN & LIMBAH (Lampiran VII - Tabel VII.16)
    // ============================
    'Tempat Penampungan Sementara (TPS)': {
        color: '#AA6E00',
        backgroundColor: '#FFFFFF',
        size: 22
    },
    'Tempat Pengelolaan Sampah Reuse, Reduce, Recycle (TPS3R)': {
        color: '#3CAA00',
        size: 22
    },
    'Tempat Pengolahan Sampah Terpadu (TPST)': {
        color: '#CC6666',
        size: 22
    },
    'IPAL Skala Kawasan Tertentu/Permukiman': {
        color: '#BE8200',
        size: 22
    },
    'Sistem Pengelolaan Limbah Bahan Berbahaya dan Beracun (B3)': {
        color: '#824600',
        size: 22
    },
    // ============================
    // EVAKUASI BENCANA (Lampiran VII - Tabel VII.19)
    // ============================
    'Tempat Evakuasi Sementara': {
        color: '#F5A27A',
        outlineColor: '#FF5500',
        size: 18
    },
    'Tempat Evakuasi Akhir': {
        color: '#894465',
        size: 18
    }
};
}),
"[project]/src/components/FeaturePopup.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-ssr] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hash.js [app-ssr] (ecmascript) <export default as Hash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants.ts [app-ssr] (ecmascript)"); // Pastikan path ini benar
;
;
;
;
const FeaturePopup = ({ feature, onClose, onZoom, onExport })=>{
    const [details, setDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [copiedKey, setCopiedKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Reset details ketika feature berubah
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!feature) {
            setDetails(null);
            return;
        }
        const id = feature.id || feature.properties?.gid;
        // Logika fetch data detail (seperti kode asli Anda)
        const shouldFetch = id && !(typeof id === 'string' && id.includes('.'));
        if (!shouldFetch) {
            setDetails(feature.properties);
            return;
        }
        const fetchDetails = async ()=>{
            setIsLoading(true);
            try {
                // Use feature.layerId which corresponds to the apiKey (rtrw, badau, etc.)
                const layer = feature.layerId || 'rtrw'; // Default to rtrw if unknown
                const res = await fetch(`/api/features/${layer}/${id}`);
                if (res.ok) {
                    const data = await res.json();
                    setDetails(data);
                } else {
                    // Fallback to existing properties if fetch fails
                    setDetails(feature.properties);
                }
            } catch (error) {
                console.error('Failed to fetch feature details', error);
                setDetails(feature.properties);
            } finally{
                setIsLoading(false);
            }
        };
        fetchDetails();
    }, [
        feature
    ]);
    // Handle Copy to Clipboard
    const handleCopy = (text, key)=>{
        navigator.clipboard.writeText(text);
        setCopiedKey(key);
        setTimeout(()=>setCopiedKey(null), 2000);
    };
    // Format Value Helper
    const formatValue = (key, value)=>{
        if (value === null || value === undefined || value === '') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-slate-600 italic text-xs",
                children: "Empty"
            }, void 0, false, {
                fileName: "[project]/src/components/FeaturePopup.tsx",
                lineNumber: 85,
                columnNumber: 20
            }, ("TURBOPACK compile-time value", void 0));
        }
        // Jika URL
        if (typeof value === 'string' && (value.startsWith('http') || value.startsWith('www'))) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: value,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-primary-400 hover:text-primary-300 hover:underline flex items-center gap-1 break-all",
                children: [
                    value,
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                        size: 10
                    }, void 0, false, {
                        fileName: "[project]/src/components/FeaturePopup.tsx",
                        lineNumber: 100,
                        columnNumber: 29
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FeaturePopup.tsx",
                lineNumber: 94,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0));
        }
        // Jika Tanggal (deteksi sederhana string ISO)
        if (typeof value === 'string' && !isNaN(Date.parse(value)) && value.length > 10 && (key.toLowerCase().includes('date') || key.toLowerCase().includes('time'))) {
            return new Date(value).toLocaleDateString('id-ID', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        }
        // Jika Object/Array
        if (typeof value === 'object') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                className: "text-[10px] bg-slate-950 p-2 rounded border border-slate-800 overflow-x-auto",
                children: JSON.stringify(value, null, 2)
            }, void 0, false, {
                fileName: "[project]/src/components/FeaturePopup.tsx",
                lineNumber: 125,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0));
        }
        return String(value);
    };
    // Icon Helper
    const getIconForProp = (key)=>{
        const k = key.toLowerCase();
        if (k.includes('date') || k.includes('time')) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
            size: 14,
            className: "text-blue-400"
        }, void 0, false, {
            fileName: "[project]/src/components/FeaturePopup.tsx",
            lineNumber: 138,
            columnNumber: 20
        }, ("TURBOPACK compile-time value", void 0));
        if (k.includes('id') || k.includes('code') || k.includes('gid')) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hash$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Hash$3e$__["Hash"], {
            size: 14,
            className: "text-orange-400"
        }, void 0, false, {
            fileName: "[project]/src/components/FeaturePopup.tsx",
            lineNumber: 140,
            columnNumber: 20
        }, ("TURBOPACK compile-time value", void 0));
        if (k.includes('name') || k.includes('obj')) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
            size: 14,
            className: "text-emerald-400"
        }, void 0, false, {
            fileName: "[project]/src/components/FeaturePopup.tsx",
            lineNumber: 142,
            columnNumber: 20
        }, ("TURBOPACK compile-time value", void 0));
        if (k.includes('stat') || k.includes('val') || k.includes('luas')) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
            size: 14,
            className: "text-purple-400"
        }, void 0, false, {
            fileName: "[project]/src/components/FeaturePopup.tsx",
            lineNumber: 144,
            columnNumber: 20
        }, ("TURBOPACK compile-time value", void 0));
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-1.5 h-1.5 rounded-full bg-slate-500"
        }, void 0, false, {
            fileName: "[project]/src/components/FeaturePopup.tsx",
            lineNumber: 145,
            columnNumber: 16
        }, ("TURBOPACK compile-time value", void 0));
    };
    if (!feature) return null;
    const displayProperties = details || feature.properties || {};
    const title = displayProperties['namobj'] || displayProperties['name'] || displayProperties['NAMOBJ'] || `Feature #${feature.id}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute right-4 top-4 bottom-4 w-96 bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 shadow-2xl z-30 flex flex-col rounded-xl overflow-hidden animate-in slide-in-from-right-4 duration-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-5 py-4 border-b border-slate-700 bg-gradient-to-r from-slate-800/50 to-slate-900/50 flex justify-between items-start shrink-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-primary-400 mb-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FeaturePopup.tsx",
                                        lineNumber: 163,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold tracking-widest uppercase text-primary-400/80",
                                        children: "Feature Information"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FeaturePopup.tsx",
                                        lineNumber: 164,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/FeaturePopup.tsx",
                                lineNumber: 162,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-bold text-white font-mono truncate leading-tight",
                                title: String(title),
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/FeaturePopup.tsx",
                                lineNumber: 168,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 mt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-medium text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700 uppercase",
                                        children: feature.geometryType || 'Geometry'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FeaturePopup.tsx",
                                        lineNumber: 175,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] flex items-center gap-1 text-yellow-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                size: 10,
                                                className: "animate-spin"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/FeaturePopup.tsx",
                                                lineNumber: 180,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            ' ',
                                            "Syncing..."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/FeaturePopup.tsx",
                                        lineNumber: 179,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/FeaturePopup.tsx",
                                lineNumber: 174,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FeaturePopup.tsx",
                        lineNumber: 161,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "p-1.5 hover:bg-slate-700 rounded-md text-slate-400 hover:text-white transition-all active:scale-95",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/src/components/FeaturePopup.tsx",
                            lineNumber: 190,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/FeaturePopup.tsx",
                        lineNumber: 186,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FeaturePopup.tsx",
                lineNumber: 160,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent relative",
                children: [
                    isLoading && !details && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-slate-900/80 backdrop-blur-sm flex flex-col items-center justify-center z-10 text-slate-400 gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "animate-spin text-primary-500",
                                size: 32
                            }, void 0, false, {
                                fileName: "[project]/src/components/FeaturePopup.tsx",
                                lineNumber: 198,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs",
                                children: "Fetching detailed attributes..."
                            }, void 0, false, {
                                fileName: "[project]/src/components/FeaturePopup.tsx",
                                lineNumber: 202,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FeaturePopup.tsx",
                        lineNumber: 197,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "divide-y divide-slate-800/50",
                        children: Object.entries(displayProperties).map(([key, value])=>{
                            // Filter out heavy geometry columns
                            if ([
                                'geom',
                                'geometry',
                                'the_geom',
                                'bbox'
                            ].includes(key.toLowerCase())) return null;
                            const label = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLUMN_MAPPING"][key.toLowerCase()] || key.replace(/_/g, ' ').replace(/\b\w/g, (c)=>c.toUpperCase());
                            const valString = typeof value === 'object' ? JSON.stringify(value) : String(value);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "group flex flex-col hover:bg-slate-800/30 transition-colors px-5 py-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-xs font-medium text-slate-500 uppercase tracking-wide",
                                                children: [
                                                    getIconForProp(key),
                                                    label
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/FeaturePopup.tsx",
                                                lineNumber: 234,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleCopy(valString, key),
                                                className: "opacity-0 group-hover:opacity-100 transition-opacity text-slate-500 hover:text-primary-400 p-1",
                                                title: "Copy value",
                                                children: copiedKey === key ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    size: 12,
                                                    className: "text-emerald-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FeaturePopup.tsx",
                                                    lineNumber: 248,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                    size: 12
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FeaturePopup.tsx",
                                                    lineNumber: 253,
                                                    columnNumber: 45
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/FeaturePopup.tsx",
                                                lineNumber: 240,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/FeaturePopup.tsx",
                                        lineNumber: 233,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pl-6 text-sm text-slate-200 font-mono break-words leading-relaxed",
                                        children: formatValue(key, value)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FeaturePopup.tsx",
                                        lineNumber: 258,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, key, true, {
                                fileName: "[project]/src/components/FeaturePopup.tsx",
                                lineNumber: 229,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/FeaturePopup.tsx",
                        lineNumber: 208,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    !isLoading && Object.keys(displayProperties).length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-full flex flex-col items-center justify-center text-slate-500 p-8 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                size: 32,
                                className: "mb-2 opacity-50"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FeaturePopup.tsx",
                                lineNumber: 268,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm",
                                children: "No properties found for this layer."
                            }, void 0, false, {
                                fileName: "[project]/src/components/FeaturePopup.tsx",
                                lineNumber: 269,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FeaturePopup.tsx",
                        lineNumber: 267,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FeaturePopup.tsx",
                lineNumber: 195,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 border-t border-slate-700 bg-slate-900/90 shrink-0 grid grid-cols-2 gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onZoom?.(feature),
                        className: "flex items-center justify-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 hover:text-white text-slate-300 text-xs font-bold rounded-lg border border-slate-600 transition-all active:scale-95",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/src/components/FeaturePopup.tsx",
                                lineNumber: 282,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            " ZOOM TO"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FeaturePopup.tsx",
                        lineNumber: 278,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>onExport?.(feature),
                        className: "flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-500 text-white text-xs font-bold rounded-lg shadow-lg shadow-primary-900/20 hover:shadow-primary-900/40 transition-all active:scale-95 border border-transparent hover:border-primary-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                size: 14
                            }, void 0, false, {
                                fileName: "[project]/src/components/FeaturePopup.tsx",
                                lineNumber: 288,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            " EXPORT JSON"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FeaturePopup.tsx",
                        lineNumber: 284,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FeaturePopup.tsx",
                lineNumber: 277,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FeaturePopup.tsx",
        lineNumber: 158,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = FeaturePopup;
}),
"[project]/src/components/LayerPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-ssr] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-ssr] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder.js [app-ssr] (ecmascript) <export default as Folder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-ssr] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
const LayerPanel = ({ groups, toggleLayer, updateOpacity })=>{
    // STATE INITIALIZATION YANG DINAMIS
    // Logic: Jika ID group adalah 'group-basemap', set false (tertutup).
    // Selain itu set true (terbuka).
    const [expandedGroups, setExpandedGroups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>{
        const initialState = {};
        groups.forEach((group)=>{
            initialState[group.id] = group.id !== 'group-basemap';
        });
        return initialState;
    });
    const toggleGroup = (id)=>{
        setExpandedGroups((prev)=>({
                ...prev,
                [id]: !prev[id]
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full w-80 bg-slate-900/95 backdrop-blur-md border-r border-slate-700 flex flex-col shadow-2xl animate-in slide-in-from-left duration-300 z-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5 border-b border-slate-700 bg-slate-900 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-bold text-primary-400 tracking-tight flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                size: 20,
                                className: "text-primary-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/LayerPanel.tsx",
                                lineNumber: 48,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            "DATA LAYERS"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/LayerPanel.tsx",
                        lineNumber: 47,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-slate-500 mt-1",
                        children: "Manage spatial data visibility"
                    }, void 0, false, {
                        fileName: "[project]/src/components/LayerPanel.tsx",
                        lineNumber: 51,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/LayerPanel.tsx",
                lineNumber: 46,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent",
                children: groups.map((group)=>{
                    const isBaseMap = group.id === 'group-basemap';
                    const isExpanded = expandedGroups[group.id];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `border transition-all duration-200 rounded-lg overflow-hidden ${isExpanded ? 'border-slate-600 bg-slate-800/40' : 'border-slate-800 bg-slate-900/40'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>toggleGroup(group.id),
                                className: "w-full flex items-center justify-between p-3 bg-slate-800/80 hover:bg-slate-750 transition-colors cursor-pointer group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                                                size: 16,
                                                className: `${isBaseMap ? 'text-slate-500' : 'text-primary-400 group-hover:text-primary-300'}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/LayerPanel.tsx",
                                                lineNumber: 77,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-sm text-slate-200 group-hover:text-white",
                                                children: group.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/LayerPanel.tsx",
                                                lineNumber: 85,
                                                columnNumber: 37
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/LayerPanel.tsx",
                                        lineNumber: 76,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isExpanded ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        size: 16,
                                        className: "text-slate-400"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LayerPanel.tsx",
                                        lineNumber: 90,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        size: 16,
                                        className: "text-slate-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LayerPanel.tsx",
                                        lineNumber: 95,
                                        columnNumber: 37
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/LayerPanel.tsx",
                                lineNumber: 72,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0)),
                            isExpanded && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-3 space-y-3 border-t border-slate-700/50",
                                children: group.layers.map((layer)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2 animate-in fade-in duration-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between group/layer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>toggleLayer(group.id, layer.id),
                                                                className: `transition-colors focus:outline-none ${layer.visible ? 'text-primary-400 hover:text-primary-300' : 'text-slate-600 hover:text-slate-500'}`,
                                                                title: isBaseMap ? 'Select Base Map' : 'Toggle Visibility',
                                                                children: isBaseMap ? layer.visible ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                    size: 18
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/LayerPanel.tsx",
                                                                    lineNumber: 132,
                                                                    columnNumber: 65
                                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"], {
                                                                    size: 18
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/LayerPanel.tsx",
                                                                    lineNumber: 136,
                                                                    columnNumber: 65
                                                                }, ("TURBOPACK compile-time value", void 0)) : layer.visible ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                                    size: 18
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/LayerPanel.tsx",
                                                                    lineNumber: 141,
                                                                    columnNumber: 61
                                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                                    size: 18
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/LayerPanel.tsx",
                                                                    lineNumber: 143,
                                                                    columnNumber: 61
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/LayerPanel.tsx",
                                                                lineNumber: 112,
                                                                columnNumber: 53
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-sm cursor-pointer select-none transition-colors ${layer.visible ? 'text-slate-200 font-medium' : 'text-slate-500'}`,
                                                                onClick: ()=>toggleLayer(group.id, layer.id),
                                                                children: layer.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/LayerPanel.tsx",
                                                                lineNumber: 146,
                                                                columnNumber: 53
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/LayerPanel.tsx",
                                                        lineNumber: 111,
                                                        columnNumber: 49
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            layer.type === 'vector' && layer.color && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-2.5 h-2.5 rounded-full ring-1 ring-slate-700/50",
                                                                style: {
                                                                    backgroundColor: layer.color
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/LayerPanel.tsx",
                                                                lineNumber: 167,
                                                                columnNumber: 61
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            layer.apiKey && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: `/api/export/${layer.apiKey}`,
                                                                download: true,
                                                                className: "opacity-0 group-hover/layer:opacity-100 p-1 text-slate-500 hover:text-primary-400 hover:bg-slate-700 rounded transition-all",
                                                                title: "Download GeoJSON",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                    size: 14
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/LayerPanel.tsx",
                                                                    lineNumber: 184,
                                                                    columnNumber: 61
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/LayerPanel.tsx",
                                                                lineNumber: 178,
                                                                columnNumber: 57
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/LayerPanel.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 49
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/LayerPanel.tsx",
                                                lineNumber: 110,
                                                columnNumber: 45
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            layer.visible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 pl-8 pr-1 animate-in slide-in-from-top-1 duration-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "range",
                                                        min: "0",
                                                        max: "1",
                                                        step: "0.1",
                                                        value: layer.opacity,
                                                        onChange: (e)=>updateOpacity(group.id, layer.id, parseFloat(e.target.value)),
                                                        className: "flex-1 h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary-500 hover:accent-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-500/50"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/LayerPanel.tsx",
                                                        lineNumber: 195,
                                                        columnNumber: 53
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] text-slate-400 w-6 text-right font-mono",
                                                        children: [
                                                            Math.round(layer.opacity * 100),
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/LayerPanel.tsx",
                                                        lineNumber: 213,
                                                        columnNumber: 53
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/LayerPanel.tsx",
                                                lineNumber: 194,
                                                columnNumber: 49
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, layer.id, true, {
                                        fileName: "[project]/src/components/LayerPanel.tsx",
                                        lineNumber: 106,
                                        columnNumber: 41
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/src/components/LayerPanel.tsx",
                                lineNumber: 104,
                                columnNumber: 33
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, group.id, true, {
                        fileName: "[project]/src/components/LayerPanel.tsx",
                        lineNumber: 63,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/src/components/LayerPanel.tsx",
                lineNumber: 57,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/LayerPanel.tsx",
        lineNumber: 44,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = LayerPanel;
}),
"[project]/src/components/Sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bring$2d$to$2d$front$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BringToFront$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bring-to-front.js [app-ssr] (ecmascript) <export default as BringToFront>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-ssr] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$2x2$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid2x2Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/grid-2x2-plus.js [app-ssr] (ecmascript) <export default as Grid2x2Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-ssr] (ecmascript) <export default as Settings>");
;
;
const Sidebar = ({ activeMode, setActiveMode })=>{
    const toggleMode = (mode)=>{
        setActiveMode(activeMode === mode ? 'none' : mode);
    };
    const NavItem = ({ mode, icon: Icon, tooltip })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: ()=>toggleMode(mode),
            className: `
        relative group flex items-center justify-center w-16 h-16 transition-all duration-200
        ${activeMode === mode ? 'bg-slate-800 text-primary-400 border-l-4 border-primary-500' : 'text-slate-400 hover:text-white hover:bg-slate-800'}
      `,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                    size: 24,
                    strokeWidth: 1.5
                }, void 0, false, {
                    fileName: "[project]/src/components/Sidebar.tsx",
                    lineNumber: 40,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute left-16 ml-2 px-2 py-1 bg-slate-900 text-primary-200 text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity border border-slate-700 whitespace-nowrap z-50 shadow-lg font-sans",
                    children: tooltip
                }, void 0, false, {
                    fileName: "[project]/src/components/Sidebar.tsx",
                    lineNumber: 42,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Sidebar.tsx",
            lineNumber: 29,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-16 h-full bg-slate-900 border-r border-slate-800 flex flex-col items-center z-20 shadow-xl relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 mb-4 text-primary-500",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
                    size: 28
                }, void 0, false, {
                    fileName: "[project]/src/components/Sidebar.tsx",
                    lineNumber: 51,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Sidebar.tsx",
                lineNumber: 50,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex-1 flex flex-col w-full gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                        mode: "layers",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bring$2d$to$2d$front$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BringToFront$3e$__["BringToFront"],
                        tooltip: "Layer Manager"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Sidebar.tsx",
                        lineNumber: 55,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                        mode: "upload",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grid$2d$2x2$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid2x2Plus$3e$__["Grid2x2Plus"],
                        tooltip: "Import Data"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Sidebar.tsx",
                        lineNumber: 60,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavItem, {
                        mode: "settings",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
                        tooltip: "Map Settings"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Sidebar.tsx",
                        lineNumber: 65,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Sidebar.tsx",
                lineNumber: 54,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 text-slate-500 hover:text-primary-400 transition-colors",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                        size: 20
                    }, void 0, false, {
                        fileName: "[project]/src/components/Sidebar.tsx",
                        lineNumber: 74,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/Sidebar.tsx",
                    lineNumber: 73,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/Sidebar.tsx",
                lineNumber: 72,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Sidebar.tsx",
        lineNumber: 49,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Sidebar;
}),
"[project]/src/components/UploadPanel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileType$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-type.js [app-ssr] (ecmascript) <export default as FileType>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadCloud$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud-upload.js [app-ssr] (ecmascript) <export default as UploadCloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
const UploadPanel = ({ onUpload, close })=>{
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [feedback, setFeedback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleDragOver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        e.preventDefault();
        setIsDragging(true);
    }, []);
    const handleDragLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        e.preventDefault();
        setIsDragging(false);
    }, []);
    const handleDrop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            processFiles(e.dataTransfer.files);
        }
    }, []);
    const handleInputChange = (e)=>{
        if (e.target.files && e.target.files.length > 0) {
            processFiles(e.target.files);
        }
    };
    const processFiles = (files)=>{
        // Basic validation feedback
        setFeedback({
            type: 'success',
            message: `Processing ${files.length} file(s)...`
        });
        setTimeout(()=>{
            onUpload(files);
            setFeedback(null);
        }, 1500);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full w-80 bg-slate-900/95 backdrop-blur-sm border-r border-slate-700 flex flex-col p-6 animate-in slide-in-from-left duration-300 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: close,
                className: "absolute top-4 right-4 text-slate-500 hover:text-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/src/components/UploadPanel.tsx",
                    lineNumber: 65,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/UploadPanel.tsx",
                lineNumber: 61,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-lg font-bold text-primary-400 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadCloud$3e$__["UploadCloud"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/src/components/UploadPanel.tsx",
                                lineNumber: 70,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            "IMPORT DATA"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/UploadPanel.tsx",
                        lineNumber: 69,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-slate-400 mt-2",
                        children: "Supported formats: .geojson, .kml, .shp (zip), .gdb (zip)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/UploadPanel.tsx",
                        lineNumber: 73,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/UploadPanel.tsx",
                lineNumber: 68,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onDragOver: handleDragOver,
                onDragLeave: handleDragLeave,
                onDrop: handleDrop,
                className: `
          border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center text-center transition-all cursor-pointer
          ${isDragging ? 'border-primary-500 bg-primary-900/20' : 'border-slate-600 bg-slate-800/30 hover:border-slate-400 hover:bg-slate-800/50'}
        `,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "file",
                        multiple: true,
                        className: "hidden",
                        id: "file-upload",
                        accept: ".geojson,.json,.kml,.zip,.gdb",
                        onChange: handleInputChange
                    }, void 0, false, {
                        fileName: "[project]/src/components/UploadPanel.tsx",
                        lineNumber: 91,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "file-upload",
                        className: "cursor-pointer flex flex-col items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center mb-4 text-primary-400",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$type$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileType$3e$__["FileType"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/src/components/UploadPanel.tsx",
                                    lineNumber: 104,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/UploadPanel.tsx",
                                lineNumber: 103,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-medium text-slate-300",
                                children: "Click to upload or drag & drop"
                            }, void 0, false, {
                                fileName: "[project]/src/components/UploadPanel.tsx",
                                lineNumber: 106,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-500 mt-2",
                                children: "Max file size: 50MB"
                            }, void 0, false, {
                                fileName: "[project]/src/components/UploadPanel.tsx",
                                lineNumber: 109,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/UploadPanel.tsx",
                        lineNumber: 99,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/UploadPanel.tsx",
                lineNumber: 78,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            feedback && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `mt-6 p-4 rounded-lg flex items-start gap-3 ${feedback.type === 'success' ? 'bg-emerald-900/30 border border-emerald-800' : 'bg-red-900/30 border border-red-800'}`,
                children: [
                    feedback.type === 'success' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                        size: 18,
                        className: "text-emerald-500 mt-0.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/UploadPanel.tsx",
                        lineNumber: 124,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                        size: 18,
                        className: "text-red-500 mt-0.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/UploadPanel.tsx",
                        lineNumber: 129,
                        columnNumber: 25
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `text-sm font-medium ${feedback.type === 'success' ? 'text-emerald-400' : 'text-red-400'}`,
                                children: feedback.type === 'success' ? 'Success' : 'Error'
                            }, void 0, false, {
                                fileName: "[project]/src/components/UploadPanel.tsx",
                                lineNumber: 135,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-slate-400 mt-1",
                                children: feedback.message
                            }, void 0, false, {
                                fileName: "[project]/src/components/UploadPanel.tsx",
                                lineNumber: 144,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/UploadPanel.tsx",
                        lineNumber: 134,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/UploadPanel.tsx",
                lineNumber: 116,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-auto pt-6 border-t border-slate-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xs font-bold text-slate-500 uppercase tracking-wider mb-3",
                        children: "Recently Imported"
                    }, void 0, false, {
                        fileName: "[project]/src/components/UploadPanel.tsx",
                        lineNumber: 152,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 p-2 rounded bg-slate-800/50 opacity-60",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-2 h-2 rounded-full bg-orange-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/UploadPanel.tsx",
                                        lineNumber: 157,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-slate-400 font-mono",
                                        children: "parcels_v2.geojson"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/UploadPanel.tsx",
                                        lineNumber: 158,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/UploadPanel.tsx",
                                lineNumber: 156,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 p-2 rounded bg-slate-800/50 opacity-60",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-2 h-2 rounded-full bg-blue-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/UploadPanel.tsx",
                                        lineNumber: 163,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-slate-400 font-mono",
                                        children: "study_area.kml"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/UploadPanel.tsx",
                                        lineNumber: 164,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/UploadPanel.tsx",
                                lineNumber: 162,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/UploadPanel.tsx",
                        lineNumber: 155,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/UploadPanel.tsx",
                lineNumber: 151,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/UploadPanel.tsx",
        lineNumber: 60,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = UploadPanel;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FeaturePopup$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FeaturePopup.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LayerPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LayerPanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Sidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UploadPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UploadPanel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
'use client';
;
;
;
;
;
;
;
;
// Dynamically import MapViewer to disable SSR, as OpenLayers depends on browser APIs
const MapViewer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/src/components/MapViewer.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false,
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-full bg-slate-900 flex items-center justify-center text-slate-500",
            children: "Loading Map..."
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 16,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
});
const Home = ()=>{
    const [activeSidebarMode, setActiveSidebarMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('none');
    const [layerGroups, setLayerGroups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INITIAL_LAYER_GROUPS"]);
    const [selectedFeature, setSelectedFeature] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uploadedFiles, setUploadedFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Need to ensure consistent hydration
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    // Layer State Handlers
    const toggleLayer = (groupId, layerId)=>{
        setLayerGroups((prevGroups)=>prevGroups.map((group)=>{
                if (group.id !== groupId) return group;
                // Base Maps: Radio Button Logic (Mutually Exclusive)
                if (group.id === 'group-basemap') {
                    return {
                        ...group,
                        layers: group.layers.map((layer)=>({
                                ...layer,
                                visible: layer.id === layerId
                            }))
                    };
                }
                // Other Layers: Checkbox Logic (Toggle independent)
                return {
                    ...group,
                    layers: group.layers.map((layer)=>layer.id === layerId ? {
                            ...layer,
                            visible: !layer.visible
                        } : layer)
                };
            }));
    };
    const updateOpacity = (groupId, layerId, opacity)=>{
        setLayerGroups((prevGroups)=>prevGroups.map((group)=>{
                if (group.id !== groupId) return group;
                return {
                    ...group,
                    layers: group.layers.map((layer)=>layer.id === layerId ? {
                            ...layer,
                            opacity
                        } : layer)
                };
            }));
    };
    const handleFileUpload = async (files)=>{
        setUploadedFiles(files);
        setActiveSidebarMode('none'); // Close sidebar on upload
    };
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex w-full h-screen bg-slate-950 text-slate-100 overflow-hidden font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                activeMode: activeSidebarMode,
                setActiveMode: setActiveSidebarMode
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 95,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `
        relative h-full transition-all duration-300 ease-in-out shadow-2xl z-20 flex
        ${activeSidebarMode !== 'none' ? 'w-80 opacity-100 border-r border-slate-800' : 'w-0 opacity-0 overflow-hidden border-none'}
      `,
                children: [
                    activeSidebarMode === 'layers' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LayerPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        groups: layerGroups,
                        toggleLayer: toggleLayer,
                        updateOpacity: updateOpacity
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 112,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    activeSidebarMode === 'upload' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UploadPanel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        onUpload: handleFileUpload,
                        close: ()=>setActiveSidebarMode('none')
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 119,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    activeSidebarMode === 'settings' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 w-80 bg-slate-900 h-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-bold text-primary-400 mb-4",
                                children: "SETTINGS"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 126,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-slate-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-2",
                                        children: "Unit System: Metric"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 130,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-2",
                                        children: "Projection: EPSG:3857"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 131,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Theme: GeoGreen Dark"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 132,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 129,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 125,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 101,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 relative z-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MapViewer, {
                        layerGroups: layerGroups,
                        onFeatureSelect: (f)=>{
                            setSelectedFeature(f);
                        },
                        filesToLoad: uploadedFiles
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 140,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    selectedFeature && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FeaturePopup$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        feature: selectedFeature,
                        onClose: ()=>setSelectedFeature(null)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 150,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 139,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 93,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Home;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__a0bbb558._.js.map