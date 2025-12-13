<div align="center">
  <img src="https://res.cloudinary.com/killtdj/image/upload/v1719635543/Kabupaten_Belitung_paacyj.png" alt="Logo Kabupaten Belitung" width="120" />
  <h1>Geoportal Kabupaten Belitung</h1>

  <p>
    <strong>Sistem Informasi Tata Ruang Kabupaten Belitung</strong>
  </p>

  <p>
    <img src="https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/PostgreSQL-16-336791?style=flat-square&logo=postgresql" alt="PostgreSQL" />
    <img src="https://img.shields.io/badge/OpenLayers-Map-1F6BBA?style=flat-square&logo=openlayers" alt="OpenLayers" />
    <img src="https://img.shields.io/badge/Prisma-ORM-2D3748?style=flat-square&logo=prisma" alt="Prisma" />
    <img src="https://img.shields.io/badge/Version-2.0-blue?style=flat-square" alt="Version" />
  </p>
</div>

---

**Geoportal Kabupaten Belitung** adalah aplikasi pemetaan web interaktif yang dikembangkan untuk memfasilitasi visualisasi, analisis, dan perencanaan tata ruang di wilayah Kabupaten Belitung. Aplikasi ini memungkinkan pengguna untuk mengakses lapisan data spasial (RTRW, RDTR), melakukan analisis tumpang susun (_overlay_), serta mengelola data infrastruktur daerah secara presisi.

![Dashboard Preview](https://ik.imagekit.io/cut4acipo/Screenshot%20from%202025-12-13%2015-39-00.png)

## 🚀 Fitur Utama

### 🗺️ Peta Interaktif & Navigasi

-   **Engine Handal**: Dibangun di atas **OpenLayers** untuk performa rendering peta yang tinggi.
-   **Multi-Basemap**: Pilihan peta dasar meliputi Citra Satelit, Peta Jalan, dan Topografi.
-   **Layer Control**: Kontrol penuh untuk visibilitas (on/off) dan tingkat transparansi (opacity) setiap layer.

### 📂 Data Tata Ruang & Infrastruktur

-   **RTRW Belitung**: Visualisasi Pola Ruang (Revisi).
-   **RDTR Kawasan Strategis**: Mencakup RDTR Badau, Geopark, dan Tanjung Kelayang.
-   **Infrastruktur**: Layer vektor (Point, Line, Polygon) untuk jaringan utilitas dan jalan.

### 📐 Analisis Spasial (Geoprocessing)

-   **Intersection Analysis**: Fitur tumpang susun otomatis antara input geometri user dengan layer tata ruang.
-   **Kalkulator Geometri**: Perhitungan otomatis untuk Luas (Ha), Panjang (km), dan Jumlah Item.
-   **Reporting**: Visualisasi hasil analisis dalam bentuk **Pie Chart** dan tabel data yang dapat diekspor.

### 👤 Manajemen Data User

-   **Import GeoJSON**: Drag-and-drop file spasial langsung ke peta.
-   **Topological Validation**: Pengecekan sederhana validitas geometri.
-   **Export Data**: Unduh hasil analisis dalam format CSV.

## 🛠️ Teknologi yang Digunakan

Aplikasi ini dibangun menggunakan arsitektur modern untuk menjamin skalabilitas dan performa:

| Kategori     | Teknologi                                 | Deskripsi                                           |
| :----------- | :---------------------------------------- | :-------------------------------------------------- |
| **Frontend** | [Next.js](https://nextjs.org/)            | Framework React (App Router) untuk rendering cepat. |
|              | [Tailwind CSS](https://tailwindcss.com/)  | Styling utility-first yang responsif.               |
|              | [OpenLayers](https://openlayers.org/)     | Library pemetaan core.                              |
|              | [Recharts](https://recharts.org/)         | Visualisasi data grafik statistik.                  |
| **Backend**  | [Node.js](https://nodejs.org/)            | Runtime environment.                                |
|              | [Prisma](https://www.prisma.io/)          | ORM Type-safe untuk interaksi database.             |
| **Database** | [PostgreSQL](https://www.postgresql.org/) | Database relasional utama.                          |
|              | [PostGIS](https://postgis.net/)           | Ekstensi untuk pengolahan query spasial kompleks.   |

## 📦 Instalasi dan Deployment

Dokumentasi teknis mendalam mengenai konfigurasi server (VPS/Ubuntu/Windows) dan setup production tersedia terpisah:

👉 **[Baca Panduan Deployment Lengkap (DEPLOYMENT.md)](DEPLOYMENT.md)**

## ⚡ Mulai Cepat (Localhost)

Ikuti langkah berikut untuk menjalankan proyek di komputer lokal:

**1. Clone Repository**

```bash
git clone [https://github.com/danudenny/geoportal_kab_belitung.git](https://github.com/danudenny/geoportal_kab_belitung.git)
cd geoportal_kab_belitung
```

**2. Install Dependencies**

```bash
npm install
```

**3. Konfigurasi Environment Buat file .env di root folder dan sesuaikan kredensial database:**

```
# Sesuaikan user, password, dan nama database
DATABASE_URL="postgresql://user:password@localhost:5432/geoportal_belitung?schema=public"
```

**4. Setup Database (Prisma) Lakukan migrasi database untuk membuat tabel yang diperlukan:**

```bash
npx prisma generate
npx prisma db push
```

**5. Jalankan Server Development**

```
npm run dev
```

Buka `http://localhost:3000` di browser Anda.

<div align="center"> <small>Dikembangkan untuk <strong>Pemerintah Kabupaten Belitung</strong></small> </div>
