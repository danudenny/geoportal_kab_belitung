'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Map as MapIcon } from 'lucide-react';
import { Bricolage_Grotesque, Inter } from 'next/font/google';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

// Setup Fonts
const bricolage = Bricolage_Grotesque({ subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

export default function LandingPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [isExiting, setIsExiting] = useState(false);

    // Initial Load Effect
    useEffect(() => {
        // Simulate initial checks/loading
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    // Navigation Handler
    const handleNavigation = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsExiting(true);
        // Wait for animation before pushing route
        setTimeout(() => {
            router.push('/map');
        }, 1200);
    };

    return (
        <div
            className={`h-screen bg-slate-900 text-white ${inter.className} selection:bg-blue-600 selection:text-white overflow-hidden flex flex-col relative`}
        >
            {/* PRELOADER / TRANSITION OVERLAY */}
            <AnimatePresence mode="wait">
                {(isLoading || isExiting) && (
                    <motion.div
                        className="fixed inset-0 z-[100] bg-black text-white flex flex-col items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                    >
                        <div className="flex flex-col items-center gap-6">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="relative w-24 h-24 flex items-center justify-center"
                            >
                                {/* Spinning Ring */}
                                <motion.div className="absolute inset-0 border-4 border-slate-800 rounded-full" />
                                <motion.div
                                    className="absolute inset-0 border-4 border-emerald-500 rounded-full border-t-transparent"
                                    animate={{ rotate: 360 }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: 'linear',
                                    }}
                                />
                                {/* Logo in Center */}
                                <img
                                    src="https://res.cloudinary.com/killtdj/image/upload/v1719635543/Kabupaten_Belitung_paacyj.png"
                                    alt="Logo"
                                    className="w-12 h-auto relative z-10"
                                />
                            </motion.div>

                            <motion.div
                                className="text-center"
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                <h2
                                    className={`${bricolage.className} text-3xl font-bold tracking-tighter mb-1`}
                                >
                                    SIMTARU
                                </h2>
                                <p className="text-xs font-mono text-emerald-500 uppercase tracking-[0.2em] animate-pulse">
                                    {isExiting
                                        ? 'Memuat Peta...'
                                        : 'Inisialisasi Sistem...'}
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* BACKGROUND IMAGE & OVERLAY */}
            <motion.div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                        'url("https://ik.imagekit.io/cut4acipo/pexels-arist-creathrive-1183525-2307636.jpg")',
                }}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, ease: 'easeOut' }}
            />
            {/* Dark Overlay for readability */}
            <div className="absolute inset-0 z-0 bg-black/80" />

            {/* STICKY HEADER */}
            <header className="flex-none w-full z-50 border-b border-white/10 bg-black/30 backdrop-blur-md">
                <div className="flex h-20">
                    {/* Logo Section */}
                    <div className="flex-none w-20 md:w-24 border-r border-white/10 flex items-center justify-center bg-black/40">
                        <img
                            src="https://res.cloudinary.com/killtdj/image/upload/v1719635543/Kabupaten_Belitung_paacyj.png"
                            alt="Logo"
                            className="h-10 w-auto"
                        />
                    </div>

                    {/* Title Section */}
                    <div className="flex-grow flex items-center px-6 justify-between">
                        <div>
                            <h1
                                className={`${bricolage.className} text-2xl font-black tracking-tighter leading-none`}
                            >
                                SIMTARU
                            </h1>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-300">
                                Kabupaten Belitung
                            </p>
                        </div>

                        <div className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-slate-300">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                            System Operational
                        </div>
                    </div>

                    {/* CTA Button */}
                    <a
                        href="/map"
                        onClick={handleNavigation}
                        className="flex-none px-8 flex items-center bg-white/10 hover:bg-white text-white hover:text-slate-900 transition-all border-l border-white/10 group backdrop-blur-sm cursor-pointer"
                    >
                        <span className="font-bold mr-2 hidden md:inline">
                            BUKA PETA
                        </span>
                        <ArrowRight
                            size={20}
                            className="group-hover:translate-x-1 transition-transform"
                        />
                    </a>
                </div>
            </header>

            {/* MAIN CONTENT - FILL REMAINING HEIGHT */}
            <main className="flex-grow flex flex-col justify-center relative z-10">
                <div className="container mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full">
                    {/* Left: Headline */}
                    <motion.div
                        className="lg:col-span-8 flex flex-col justify-center py-10"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <div className="inline-block px-3 py-1 w-fit bg-emerald-500/10 text-emerald-50 font-mono text-xs font-bold mb-6 border border-emerald-500/20 rounded-full backdrop-blur-md">
                            VERSI 2.0 • DATA 2024
                        </div>
                        <h2
                            className={`${bricolage.className} text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tighter mb-8 drop-shadow-2xl`}
                        >
                            SISTEM INFORMASI <br />
                            <span className="text-emerald-400">TATA RUANG</span>
                        </h2>
                        <p
                            className={`${bricolage.className} text-xl md:text-2xl font-medium text-slate-200 max-w-2xl leading-relaxed mb-12 drop-shadow-lg`}
                        >
                            Portal resmi informasi spasial Kabupaten Belitung.
                            Integrasi data RTRW, RDTR, dan Infrastruktur Wilayah
                            dalam satu dashboard interaktif.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="/map"
                                onClick={handleNavigation}
                                className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-600 text-white text-lg font-bold rounded hover:bg-emerald-500 transition-all  hover:-translate-y-1 cursor-pointer"
                            >
                                <MapIcon size={24} />
                                JELAJAHI PETA
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar / Footer Minimal */}
                <motion.div
                    className="flex-none border-t border-white/10 bg-black/20 backdrop-blur-sm py-4 px-4 md:px-12 flex justify-between items-center text-xs font-mono uppercase tracking-widest text-slate-400"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                >
                    <p>© {new Date().getFullYear()} Dinas PUPR Kab. Belitung</p>
                </motion.div>
            </main>
        </div>
    );
}
