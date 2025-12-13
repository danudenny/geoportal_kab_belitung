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
    title: 'Simtaru Kabupaten Belitung',
    description: 'Sistem Informasi Tata Ruang Kabupaten Belitung',
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
