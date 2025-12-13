import { LayerGroup } from './types';

export const INITIAL_LAYER_GROUPS: LayerGroup[] = [
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
                source: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
            },
            {
                id: 'base-arcgis-sat',
                name: 'ArcGIS Satellite',
                visible: false,
                opacity: 1,
                type: 'tile',
                source: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
            },
            {
                id: 'base-google-street',
                name: 'Google Street',
                visible: true,
                opacity: 1,
                type: 'tile',
                source: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',
            },
            {
                id: 'base-google-sat',
                name: 'Google Satellite',
                visible: false,
                opacity: 1,
                type: 'tile',
                source: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
            },
            {
                id: 'base-carto-dark',
                name: 'Dark Carto',
                visible: false,
                opacity: 1,
                type: 'tile',
                source: 'https://basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
            },
            {
                id: 'base-carto-light',
                name: 'Light Carto',
                visible: false,
                opacity: 1,
                type: 'tile',
                source: 'https://basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
            },
        ],
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
                geometryType: 'Polygon',
            },
        ],
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
                geometryType: 'Polygon',
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
                apiKey: 'badau-infra',
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
                apiKey: 'badau-net',
            },
        ],
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
                apiKey: 'geopark',
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
                apiKey: 'geopark-infra',
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
                apiKey: 'geopark-net',
            },
        ],
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
                apiKey: 'tanjung',
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
                apiKey: 'tanjung-infra',
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
                apiKey: 'tanjung-net',
            },
        ],
    },
];
export const COLUMN_MAPPING: Record<string, string> = {
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
    luasha: 'Luas Zona',
};

export const polaRuangColorSet = [
    // Existing/Base
    { namobj: 'Badan Air', color: '#97DBF2' }, // RGB(151, 219, 242) [cite: 1109]
    { namobj: 'Badan Jalan', color: '#EB1E1E' }, // RGB(235, 30, 30) [cite: 1109]
    { namobj: 'Cagar Budaya', color: '#FF37CD' }, // RGB(255, 55, 205) [cite: 1106]
    { namobj: 'Ekosistem Mangrove', color: '#2D966E' }, // RGB(45, 150, 110) [cite: 1106]
    { namobj: 'Hutan Lindung', color: '#325F28' }, // RGB(50, 95, 40) [cite: 1105]
    { namobj: 'Hutan Produksi Tetap', color: '#7DB437' }, // RGB(125, 180, 55) [cite: 1107]
    { namobj: 'Hutan Produksi yang dapat Dikonversi', color: '#9BE137' }, // RGB(155, 225, 55) [cite: 1107]
    { namobj: 'Instalasi Pengolahan Air Limbah (IPAL)', color: '#FFE687' }, // RGB(255, 230, 135) [cite: 1201]
    { namobj: 'Instalasi Pengolahan Air Minum (IPAM)', color: '#FFC869' }, // RGB(255, 200, 105) [cite: 1200]
    { namobj: 'Jalur Hijau', color: '#0F9100' }, // RGB(15, 145, 0) [cite: 1159]
    { namobj: 'Kawasan Peruntukan Industri', color: '#690000' }, // RGB(105, 0, 0) [cite: 1107]
    { namobj: 'Keunikan Batuan dan Fosil', color: '#968796' }, // RGB(150, 135, 150) [cite: 1133]
    { namobj: 'Pariwisata', color: '#FFA5FF' }, // RGB(255, 165, 255) [cite: 1107]
    { namobj: 'Pemakaman', color: '#5AFF00' }, // RGB(90, 255, 0) [cite: 1159]
    { namobj: 'Pengelolaan Persampahan', color: '#D79B37' }, // RGB(215, 155, 55) [cite: 1201]
    { namobj: 'Perdagangan dan Jasa Skala Kota', color: '#FF6464' }, // RGB(255, 100, 100) [cite: 1200]
    { namobj: 'Perdagangan dan Jasa Skala SWP', color: '#FFA5A5' }, // RGB(255, 165, 165) [cite: 1200]
    { namobj: 'Perdagangan dan Jasa Skala WP', color: '#FF8282' }, // RGB(255, 130, 130) [cite: 1200]
    { namobj: 'Perikanan Tangkap', color: '#649BD2' }, // RGB(100, 155, 210) [cite: 1107]
    { namobj: 'Perkantoran', color: '#9B9B9B' }, // RGB(155, 155, 155) [cite: 1200]
    { namobj: 'Perkebunan', color: '#AFAF37' }, // RGB(175, 175, 55) [cite: 1134]
    { namobj: 'Perlindungan Setempat', color: '#05D7D7' }, // RGB(5, 215, 215) [cite: 1106]
    { namobj: 'Pertahanan dan Keamanan', color: '#9B00FF' }, // RGB(155, 0, 255) [cite: 1108]
    { namobj: 'Pertambangan Mineral Bukan Logam', color: '#415573' }, // RGB(65, 85, 115) [cite: 1135]
    { namobj: 'Pertambangan Mineral Logam', color: '#2D415F' }, // RGB(45, 65, 95) [cite: 1135]
    { namobj: 'Perumahan Kepadatan Rendah', color: '#FFFA4B' }, // RGB(255, 250, 75) [cite: 1199]
    { namobj: 'Perumahan Kepadatan Sedang', color: '#FFF005' }, // RGB(255, 240, 5) [cite: 1199]
    { namobj: 'Perumahan Kepadatan Tinggi', color: '#FFDC00' }, // RGB(255, 220, 0) [cite: 1199]
    { namobj: 'Rimba Kota', color: '#37550A' }, // RGB(55, 85, 10) [cite: 1158]
    { namobj: 'SPU Skala Kecamatan', color: '#9B329B' }, // RGB(155, 50, 155) [cite: 1199]
    { namobj: 'SPU Skala Kelurahan', color: '#B94BB9' }, // RGB(185, 75, 185) [cite: 1199]
    { namobj: 'SPU Skala Kota', color: '#7D197D' }, // RGB(125, 25, 125) [cite: 1199]
    { namobj: 'Taman Kecamatan', color: '#468700' }, // RGB(70, 135, 0) [cite: 1158]
    { namobj: 'Taman Kelurahan', color: '#4BA500' }, // RGB(75, 165, 0) [cite: 1159]
    { namobj: 'Taman Kota', color: '#416900' }, // RGB(65, 105, 0) [cite: 1158]
    { namobj: 'Taman RW', color: '#50C300' }, // RGB(80, 195, 0) [cite: 1159]
    { namobj: 'Tanaman Pangan', color: '#C8F546' }, // RGB(200, 245, 70) [cite: 1134]
    { namobj: 'Transportasi', color: '#D73700' }, // RGB(215, 55, 0) [cite: 1136]
    { namobj: 'Campuran Intensitas Menengah/Sedang', color: '#F0731E' }, // RGB(240, 115, 30) [cite: 1200]
    { namobj: 'Campuran Intensitas Tinggi', color: '#F05500' }, // RGB(240, 85, 0) [cite: 1200]
    { namobj: 'Hortikultura', color: '#E6FF4B' }, // RGB(230, 255, 75) [cite: 1134]
    { namobj: 'Pergudangan', color: '#373737' }, // RGB(55, 55, 55) [cite: 1201]
    { namobj: 'Kawasan Keunikan Bentang Alam', color: '#B48796' }, // RGB(180, 135, 150) [cite: 1133]
    { namobj: 'Kawasan Pembangkitan Tenaga Listrik', color: '#00FFCD' }, // RGB(0, 255, 205) [cite: 1136]
    { namobj: 'Kawasan Perikanan Budi Daya', color: '#82B9D2' }, // RGB(130, 185, 210) [cite: 1135]
    { namobj: 'Kawasan Permukiman Perdesaan', color: '#EB9B3C' }, // RGB(235, 155, 60) [cite: 1136]
    { namobj: 'Kawasan Permukiman Perkotaan', color: '#F59B1E' }, // RGB(245, 155, 30) [cite: 1136]
    { namobj: 'Kawasan Peruntukan Pertambangan Batuan', color: '#5F7391' }, // RGB(95, 115, 145) [cite: 1135]
    { namobj: 'Kawasan Suaka Alam', color: '#323287' }, // RGB(50, 50, 135) [cite: 1131]
    { namobj: 'Taman Hutan Raya', color: '#B9A5FF' }, // RGB(185, 165, 255) [cite: 1132]

    // Explicit "Kawasan" prefixed options (to match data variations)
    { namobj: 'Kawasan Pertambangan Mineral Bukan Logam', color: '#415573' }, // RGB(65, 85, 115) [cite: 1135]
    { namobj: 'Kawasan Peruntukan Pertambangan Batuan', color: '#5F7391' }, // RGB(95, 115, 145) [cite: 1135]
    { namobj: 'Kawasan Pertambangan Mineral Logam', color: '#2D415F' }, // RGB(45, 65, 95) [cite: 1135]
    { namobj: 'Kawasan Keunikan Batuan dan Fosil', color: '#968796' }, // RGB(150, 135, 150) [cite: 1133]
    { namobj: 'Kawasan Keunikan Bentang Alam', color: '#B48796' }, // RGB(180, 135, 150) [cite: 1133]
    { namobj: 'Kawasan Suaka Alam', color: '#323287' }, // RGB(50, 50, 135) [cite: 1131]
    {
        namobj: 'Kawasan Hutan Produksi yang dapat Dikonversi',
        color: '#9BE137',
    }, // RGB(155, 225, 55) [cite: 1107]
    { namobj: 'Taman Hutan Raya (Tahura)', color: '#B9A5FF' }, // RGB(185, 165, 255) [cite: 1132]
    { namobj: 'Kawasan Perlindungan Setempat', color: '#05D7D7' }, // RGB(5, 215, 215) [cite: 1106]
    { namobj: 'Kawasan Hutan Lindung', color: '#325F28' }, // RGB(50, 95, 40) [cite: 1105]
    { namobj: 'Kawasan Ekosistem Mangrove', color: '#2D966E' }, // RGB(45, 150, 110) [cite: 1106]
    { namobj: 'Kawasan Hutan Produksi Tetap', color: '#7DB437' }, // RGB(125, 180, 55) [cite: 1107]
    { namobj: 'Kawasan Tanaman Pangan', color: '#C8F546' }, // RGB(200, 245, 70) [cite: 1134]
    { namobj: 'Kawasan Perkebunan', color: '#AFAF37' }, // RGB(175, 175, 55) [cite: 1134]
    { namobj: 'Kawasan Perikanan Tangkap', color: '#649BD2' }, // RGB(100, 155, 210) [cite: 1107]
    { namobj: 'Kawasan Perikanan Budi Daya', color: '#82B9D2' }, // RGB(130, 185, 210) [cite: 1135]
    { namobj: 'Kawasan Pariwisata', color: '#FFA5FF' }, // RGB(255, 165, 255) [cite: 1107]
    { namobj: 'Kawasan Transportasi', color: '#D73700' }, // RGB(215, 55, 0) [cite: 1136]
    { namobj: 'Kawasan Pertahanan dan Keamanan', color: '#9B00FF' }, // RGB(155, 0, 255) [cite: 1108]
    { namobj: 'Kawasan Cagar Budaya', color: '#FF37CD' }, // RGB(255, 55, 205) [cite: 1106]
];

export const LINE_STYLE = {
    // ============================
    // JARINGAN JALAN (Lampiran VII - Tabel VII.1 & VII.6)
    // ============================
    'Jalan Kolektor Primer': { color: '#FF8C00', width: 3 }, // RGB(255, 140, 0)
    'Jalan Kolektor Sekunder': { color: '#FFC800', width: 1.8 }, // RGB(255, 200, 0)
    'Jalan Lokal Primer': { color: '#9B5AFF', width: 1.7 }, // RGB(155, 90, 255)
    'Jalan Lokal Sekunder': { color: '#B2B2FF', width: 1.5 }, // RGB(178, 178, 255)
    'Jalan Lingkungan Primer': { color: '#828282', width: 1 }, // RGB(130, 130, 130)
    'Jalan Lingkungan Sekunder': { color: '#9C9C9C', width: 0.8 }, // RGB(156, 156, 156)
    'Jalan Khusus': { color: '#4E4E4E', width: 0.5 }, // RGB(78, 78, 78)
    'Jalur Sepeda': { color: '#33B300', width: 1.8, dash: [6, 6] }, // RGB(51, 179, 0)
    'Jalur Evakuasi Bencana': { color: '#FF00FF', width: 2, dash: [8, 8] }, // RGB(255, 0, 255)
    'Jaringan Pejalan Kaki': { color: '#000000', width: 1.5, dash: [4, 4] },

    // ============================
    // DRAINASE (Lampiran VII - Tabel VII.16)
    // ============================
    // Catatan: Dokumen menyebutkan 10pt (simbol), disesuaikan ke skala web map (2-3px)
    'Jaringan Drainase Primer': { color: '#004CA8', width: 2.5 }, // RGB(0, 76, 168)
    'Jaringan Drainase Sekunder': { color: '#FF0000', width: 2 }, // RGB(255, 0, 0) - Sesuai Tabel VII.16
    'Jaringan Drainase Tersier': { color: '#A900E6', width: 1.5 }, // RGB(169, 0, 230)

    // ============================
    // AIR MINUM / PIPA (Lampiran VII - Tabel VII.16)
    // ============================
    'Pipa Induk': { color: '#824600', width: 1.5 }, // RGB(130, 70, 0)
    'Pipa Retikulasi': { color: '#BE7800', width: 1 }, // RGB(190, 120, 0)
    'Jaringan Distribusi Pembagi': { color: '#005CE6', width: 1.4 }, // RGB(0, 92, 230)
    'Jaringan Transmisi Air Minum': {
        color: '#00A9E6',
        width: 1,
        dash: [4, 4],
    }, // RGB(0, 169, 230)
    'Jaringan Transmisi Air Baku': {
        color: '#004DA8',
        width: 1,
        dash: [6, 4],
    }, // RGB(0, 77, 168)

    // ============================
    // TELEKOMUNIKASI (Lampiran VII - Tabel VII.16)
    // ============================
    'Jaringan Serat Optik': { color: '#3CAA00', width: 1.4, dash: [3, 6] }, // RGB(60, 170, 0)
    'Telepon Fixed Line': { color: '#3CAA00', width: 1.4 }, // Sama dengan FO

    // ============================
    // LISTRIK (Lampiran VII - Tabel VII.16)
    // ============================
    // Warna Inner Line digunakan (Kuning), Outline (Biru/Merah) bisa ditambahkan sebagai layer terpisah jika perlu
    'Saluran Udara Tegangan Rendah (SUTR)': {
        color: '#FFD21E', // RGB(255, 210, 30)
        width: 2,
        dash: [10, 4],
    },
    'Saluran Udara Tegangan Menengah (SUTM)': {
        color: '#FFD21E', // RGB(255, 210, 30)
        width: 2.5,
        dash: [12, 4],
    },

    // ============================
    // INFRASTRUKTUR KHUSUS
    // ============================
    'Pengaman Pantai': { color: '#005AE6', width: 2.5, dash: [2, 6] }, // RGB(0, 90, 230)
};

export const POINT_STYLE = {
    // ============================
    // PUSAT PELAYANAN (Lampiran VII - Tabel VII.16)
    // ============================
    'Pusat Pelayanan Kota/Kawasan Perkotaan': {
        color: '#FF5500', // RGB(255, 85, 0)
        size: 23,
    },
    'Sub Pusat Pelayanan Kota/Kawasan Perkotaan': {
        color: '#FFB400', // RGB(255, 180, 0)
        size: 21,
    },
    'Pusat Lingkungan Kelurahan/Desa': {
        color: '#FFFF00', // RGB(255, 255, 0) - Kuning
        size: 18,
    },

    // ============================
    // TRANSPORTASI (Lampiran VII - Tabel VII.16)
    // ============================
    'Terminal Penumpang Tipe B': {
        color: '#FF0000', // RGB(255, 0, 0)
        size: 25,
    },
    'Terminal Penumpang Tipe C': {
        color: '#8E67FD', // RGB(142, 103, 253) - Ungu Muda
        size: 25,
    },
    Halte: {
        color: '#F50000', // RGB(245, 0, 0) - Background Merah
        iconColor: '#FFFFFF', // Foreground Putih
        size: 23,
    },
    Jembatan: {
        color: '#000000', // RGB(0, 0, 0)
        size: 23,
    },
    'Pelabuhan Pengumpan Lokal': {
        color: '#ED7B2F', // RGB(237, 123, 47) - Oranye
        size: 22,
    },
    'Pelabuhan Perikanan Samudera': {
        color: '#6991FD', // RGB(105, 145, 253) - Biru Muda
        size: 23,
    },
    'Pelabuhan Perikanan Pantai': {
        color: '#8E67FD', // RGB(142, 103, 253) - Ungu
        size: 23,
    },

    // ============================
    // ENERGI (LISTRIK & BBM) (Lampiran VII - Tabel VII.16)
    // ============================
    'Gardu Induk': {
        color: '#FFAA00', // RGB(255, 170, 0) - Background Oranye
        size: 22,
    },
    'Gardu Distribusi': {
        color: '#FFAA00', // RGB(255, 170, 0) - Background Oranye
        size: 22,
    },
    'Sarana Penyimpanan Bahan Bakar': {
        color: '#FFAA00', // RGB(255, 170, 0) - Background Oranye
        size: 20,
    },

    // ============================
    // TELEKOMUNIKASI (Lampiran VII - Tabel VII.16)
    // ============================
    'Menara Base Transceiver Station (BTS)': {
        color: '#3CAA00', // RGB(60, 170, 0) - Hijau
        size: 24,
    },

    // ============================
    // SUMBER DAYA AIR & DRAINASE (Lampiran VII - Tabel VII.16)
    // ============================
    'Bangunan Pengendalian Banjir': {
        color: '#005CE6', // RGB(0, 92, 230) - Biru
        size: 18,
    },
    'Bangunan Peresapan (Kolam Retensi)': {
        color: '#005AE6', // RGB(0, 90, 230) - Biru
        size: 18,
    },
    'Bangunan Pengambil Air Baku': {
        color: '#005AE6', // RGB(0, 90, 230) - Biru
        size: 18,
    },
    'Instalasi Produksi': {
        color: '#005CE6', // RGB(0, 92, 230) - Biru
        size: 18,
    },
    'Sumur Pompa': {
        color: '#00A9E6', // RGB(0, 169, 230) - Biru Langit
        size: 20,
    },
    'Hidran Kebakaran': {
        color: '#E60000', // RGB(230, 0, 0) - Merah
        size: 18,
    },

    // ============================
    // PERSAMPAHAN & LIMBAH (Lampiran VII - Tabel VII.16)
    // ============================
    'Tempat Penampungan Sementara (TPS)': {
        color: '#AA6E00', // RGB(170, 110, 0) - Coklat (Foreground)
        backgroundColor: '#FFFFFF',
        size: 22,
    },
    'Tempat Pengelolaan Sampah Reuse, Reduce, Recycle (TPS3R)': {
        color: '#3CAA00', // RGB(60, 170, 0) - Hijau (Foreground)
        size: 22,
    },
    'Tempat Pengolahan Sampah Terpadu (TPST)': {
        color: '#CC6666', // RGB(204, 102, 102) - Merah Pucat
        size: 22,
    },
    'IPAL Skala Kawasan Tertentu/Permukiman': {
        color: '#BE8200', // RGB(190, 130, 0) - Coklat Kuning (Background)
        size: 22,
    },
    'Sistem Pengelolaan Limbah Bahan Berbahaya dan Beracun (B3)': {
        color: '#824600', // RGB(130, 70, 0) - Coklat Tua (Background)
        size: 22,
    },

    // ============================
    // EVAKUASI BENCANA (Lampiran VII - Tabel VII.19)
    // ============================
    'Tempat Evakuasi Sementara': {
        color: '#F5A27A', // RGB(245, 162, 122) - Outline Oranye Pucat
        outlineColor: '#FF5500', // RGB(255, 85, 0) - Outline Oranye
        size: 18,
    },
    'Tempat Evakuasi Akhir': {
        color: '#894465', // RGB(137, 68, 101) - Ungu Tua (Outline)
        size: 18,
    },
};

export const ANALYSIS_LAYERS = [
    { id: 'rtrw', name: 'RTRW Belitung (Pola Ruang)', type: 'Polygon' },
    { id: 'badau', name: 'RDTR Badau (Pola Ruang)', type: 'Polygon' },
    { id: 'geopark', name: 'RDTR Geopark (Pola Ruang)', type: 'Polygon' },
    {
        id: 'tanjung',
        name: 'RDTR Tanjung Kelayang (Pola Ruang)',
        type: 'Polygon',
    },
    { id: 'badau-infra', name: 'RDTR Badau (Infrastruktur)', type: 'Point' },
    {
        id: 'geopark-infra',
        name: 'RDTR Geopark (Infrastruktur)',
        type: 'Point',
    },
    {
        id: 'tanjung-infra',
        name: 'RDTR Tanjung Kelayang (Infrastruktur)',
        type: 'Point',
    },
    { id: 'badau-net', name: 'RDTR Badau (Jaringan)', type: 'LineString' },
    { id: 'geopark-net', name: 'RDTR Geopark (Jaringan)', type: 'LineString' },
    {
        id: 'tanjung-net',
        name: 'RDTR Tanjung Kelayang (Jaringan)',
        type: 'LineString',
    },
];
