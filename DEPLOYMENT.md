# Panduan Instalasi dan Deployment geoportal_kab_belitung

Dokumen ini berisi panduan lengkap untuk instalasi lokal, deployment ke server Ubuntu, dan deployment ke Windows Server.

---

## 1. Prasyarat (Prerequisites)

Sebelum memulai, pastikan sistem Anda memiliki:

1.  **Node.js**: Versi LTS (20.x atau 22.x). [Download disini](https://nodejs.org/).
2.  **PostgreSQL**: Database server. [Download disini](https://www.postgresql.org/download/).
3.  **PostGIS**: Ekstensi spasial untuk PostgreSQL. (Biasanya termasuk dalam installer PostgreSQL di Windows, atau install terpisah di Linux).
4.  **Git**: Untuk clone repository.

---

## 2. Instalasi Lokal (Local Development)

Cocok untuk pengembangan atau pengujian di laptop/PC sendiri.

### Langkah-langkah:

1.  **Clone Repository**
    Buka terminal (Command Prompt / PowerShell / Terminal) dan jalankan:

    ```bash
    git clone https://github.com/danudenny/geoportal_kab_belitung.git
    cd geoportal_kab_belitung
    ```

2.  **Install Dependencies**
    Install library yang dibutuhkan aplikasi:

    ```bash
    npm install
    ```

3.  **Konfigurasi Database**

    -   Buka pgAdmin atau tool database favorit Anda.
    -   Buat database baru, misal: `geoportal_kab_belitung_db`.
    -   Jalankan query ini di database baru tersebut untuk mengaktifkan PostGIS:
        ```sql
        CREATE EXTENSION postgis;
        ```
    -   _Opsional_: Restore data spasial Anda (tabel `pola_ruang`, dll) jika ada file backup `.sql`.

4.  **Setup Environment Variable (.env)**

    -   Copy file `.env.example` (jika ada) atau buat file baru bernama `.env`.
    -   Isi konfigurasi `DATABASE_URL`:
        ```env
        DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/geoportal_kab_belitung_db?schema=public"
        ```
        \*Ganti `USER`, `PASSWORD`, dan `geoportal_kab_belitung_db` sesuai settingan PostgreSQL Anda.\_

5.  **Generate Prisma Client**
    Sinkronisasi skema database dengan aplikasi:

    ```bash
    npx prisma generate
    ```

6.  **Jalankan Aplikasi**
    ```bash
    npm run dev
    ```
    Buka browser dan akses [http://localhost:3000](http://localhost:3000).

---

## 3. Hosting di Ubuntu Server

Gunakan **PM2** untuk menjalankan aplikasi di background dan **Nginx** sebagai web server.

### Langkah 1: Persiapan Server

```bash
# Update server
sudo apt update && sudo apt upgrade -y

# Install Node.js (via NVM atau apt)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2 (Process Manager)
sudo npm install -g pm2

# Install Nginx
sudo apt install -y nginx

# Install PostgreSQL & PostGIS (jika DB di server yang sama)
sudo apt install -y postgresql postgresql-contrib postgis
```

### Langkah 2: Setup Aplikasi

1.  Clone repo ke folder `/var/www/geoportal_kab_belitung` (atau home directory).
2.  Masuk ke folder, install dependencies:
    ```bash
    npm install --production=false
    ```
3.  Setup `.env` seperti langkah lokal.
4.  Build aplikasi:
    ```bash
    npm run build
    ```
5.  Generate Prisma:
    ```bash
    npx prisma generate
    ```

### Langkah 3: Jalankan dengan PM2

```bash
pm2 start npm --name "geoportal_kab_belitung" -- start
pm2 save
pm2 startup
```

### Langkah 4: Konfigurasi Nginx Reverse Proxy

Buat config baru: `sudo nano /etc/nginx/sites-available/geoportal_kab_belitung`

```nginx
server {
    listen 80;
    server_name domain-anda.com; # Ganti dengan IP atau Domain

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Aktifkan konfigurasi:

```bash
sudo ln -s /etc/nginx/sites-available/geoportal_kab_belitung /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

---

## 4. Hosting di Windows Server

Kita akan menggunakan **PM2** (via PowerShell) dan **IIS** sebagai Reverse Proxy.

### Tools yang dibutuhkan:

1.  **Node.js**: Install versi Windows.
2.  **IIS (Internet Information Services)**: Aktifkan via Server Manager.
3.  **IIS URL Rewrite Module**: [Download](https://www.iis.net/downloads/microsoft/url-rewrite).
4.  **Application Request Routing (ARR)**: [Download](https://www.iis.net/downloads/microsoft/application-request-routing).

### Langkah-langkah:

1.  **Setup Aplikasi**

    -   Copy folder project ke server (misal: `C:\inetpub\wwwroot\geoportal_kab_belitung`).
    -   Buka PowerShell di folder tersebut.
    -   Jalankan: `npm install` lalu `npm run build`.
    -   Pastikan `.env` sudah benar.

2.  **Jalankan dengan PM2 di Windows**

    -   Install PM2 global: `npm install -g pm2`.
    -   Install `pm2-windows-service` (agar auto-start saat boot):
        ```powershell
        npm install -g pm2-windows-service
        pm2-service-install
        ```
    -   Start aplikasi:
        ```powershell
        pm2 start npm --name "geoportal_kab_belitung" -- start
        pm2 save
        ```
    -   Pastikan aplikasi jalan di `http://localhost:3000` via browser server.

3.  **Konfigurasi IIS Reverse Proxy**
    -   Buka **IIS Manager**.
    -   Buat **New Website** (misal: `geoportal_kab_belitung`), arahkan Physical Path ke folder kosong (dummy) atau folder project.
    -   Klik website tersebut, buka fitur **URL Rewrite**.
    -   Klik **Add Rule(s)** -> **Reverse Proxy**.
    -   Isi server name: `localhost:3000`.
    -   Centang "Rewrite SSL" jika pakai HTTPS.
    -   Klik OK.
    -   Akses domain/IP server public, IIS akan meneruskan request ke Next.js.

---

## 5. Troubleshooting (Masalah Umum)

### 1. Error: "P0100: Failed to reach database server"

-   **Penyebab**: `DATABASE_URL` salah atau service PostgreSQL mati.
-   **Solusi**:
    -   Cek file `.env`.
    -   Pastikan PostgreSQL service jalan (`services.msc` di Windows atau `systemctl status postgresql` di Linux).
    -   Pastikan firewall port 5432 terbuka (jika DB beda server).

### 2. Error pada "Prisma Client not initialized"

-   **Penyebab**: Lupa generate client setalah install/update.
-   **Solusi**: Tulis `npx prisma generate` di terminal sebelum start aplikasi.

### 3. Peta tidak muncul atau Error CORS

-   **Solusi**: Pastikan API Tiles (MVT) bisa diakses. Cek tab "Network" di browser developer tools (F12). Jika status merah, cek log server.

### 4. Windows Server: "502 Bad Gateway"

-   **Penyebab**: Aplikasi Node.js mati atau PM2 tidak jalan.
-   **Solusi**: Cek terminal/PowerShell, jalankan `pm2 status`. Jika mati, start ulang dengan `pm2 restart geoportal_kab_belitung`.

### 5. Update Aplikasi

Jika ada update code baru:

1.  `git pull` (atau replace file).
2.  `npm install` (jika ada library baru).
3.  `npx prisma generate`.
4.  `npm run build`.
5.  `pm2 restart geoportal_kab_belitung`.
