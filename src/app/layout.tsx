import type { Metadata } from 'next';
import { Bricolage_Grotesque, Inter } from 'next/font/google';
import 'ol/ol.css';
import './globals.css';

const bricolage = Bricolage_Grotesque({
    subsets: ['latin'],
    variable: '--font-heading',
});
const inter = Inter({ subsets: ['latin'], variable: '--font-body' });
export const metadata: Metadata = {
    title: 'SIMTARU Kabupaten Belitung - Sistem Informasi Tata Ruang',
    description:
        'Portal resmi informasi spasial Kabupaten Belitung. Integrasi data RTRW, RDTR, dan Infrastruktur Wilayah dalam satu dashboard interaktif.',
    keywords: [
        'Tata Ruang',
        'Belitung',
        'SIMTARU',
        'GIS',
        'Peta Digital',
        'RTRW',
        'RDTR',
        'Dinas PUPR',
    ],
    authors: [{ name: 'Dinas PUPR Kabupaten Belitung' }],
    openGraph: {
        title: 'SIMTARU Kabupaten Belitung - Sistem Informasi Tata Ruang',
        description:
            'Portal resmi informasi spasial Kabupaten Belitung. Integrasi data RTRW, RDTR, dan Infrastruktur Wilayah.',
        url: 'https://simtaru.belitungkab.go.id', // Placeholder/Actual URL ideally
        siteName: 'SIMTARU Belitung',
        images: [
            {
                url: 'https://res.cloudinary.com/killtdj/image/upload/v1719635543/Kabupaten_Belitung_paacyj.png',
                width: 800,
                height: 600,
            },
        ],
        type: 'website',
    },
    icons: {
        icon: 'https://res.cloudinary.com/killtdj/image/upload/v1719635543/Kabupaten_Belitung_paacyj.png',
        apple: 'https://res.cloudinary.com/killtdj/image/upload/v1719635543/Kabupaten_Belitung_paacyj.png',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head></head>
            <body className="antialiased">
                <main className={inter.className}>{children}</main>
            </body>
        </html>
    );
}
