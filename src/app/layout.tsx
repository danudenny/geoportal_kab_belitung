import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import 'ol/ol.css'; // Global OpenLayers CSS
import './globals.css';

export const metadata: Metadata = {
    title: 'Simtaru Kabupaten Belitung',
    description: 'Sistem Informasi Tata Ruang Kabupaten Belitung',
};

const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head></head>
            <body className="antialiased">
                <main className={poppins.className}>{children}</main>
            </body>
        </html>
    );
}
