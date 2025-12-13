'use client';

import { ANALYSIS_LAYERS, polaRuangColorSet } from '@/constants';
import { AnalysisResult } from '@/hooks/useAnalysis';
import {
    AlertTriangle,
    BarChart3,
    CheckCircle2,
    Download,
    FileText,
    Info,
    LayoutDashboard,
    Loader2,
    PieChart as PieChartIcon,
    X,
} from 'lucide-react';
import React, { useEffect, useMemo, useState } from 'react';
import {
    Cell,
    Legend,
    Pie,
    PieChart,
    ResponsiveContainer,
    Sector,
} from 'recharts';

interface AnalysisPanelProps {
    uploadedFiles: File[];
    analysisState: {
        runAnalysis: (file: File, layerId?: string) => Promise<void>;
        isAnalyzing: boolean;
        results: AnalysisResult[] | null;
        error: string | null;
    };
    close: () => void;
}

// Helper untuk format angka Indonesia (contoh: 1.234,56)
const formatNumber = (num: number) =>
    new Intl.NumberFormat('id-ID', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(num);

// --- Sub-components ---

const StatCard = ({
    label,
    value,
    subValue,
    icon: Icon,
    colorClass,
}: {
    label: string;
    value: string;
    subValue?: string;
    icon: any;
    colorClass: string;
}) => (
    <div className="bg-slate-800/40 border border-slate-700/50 p-2.5 rounded-xl flex items-start justify-between">
        <div>
            <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider mb-0.5">
                {label}
            </p>
            <p className="text-base font-bold text-slate-100">{value}</p>
            {subValue && (
                <p className="text-[10px] text-slate-500 mt-0.5">{subValue}</p>
            )}
        </div>
        <div className={`p-1.5 rounded-lg ${colorClass} bg-opacity-10`}>
            <Icon size={14} className={colorClass.replace('bg-', 'text-')} />
        </div>
    </div>
);

// Custom Render untuk Donut Chart yang Aktif
const renderActiveShape = (props: any) => {
    const {
        cx,
        cy,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        payload,
        percent,
    } = props;

    return (
        <g>
            <text
                x={cx}
                y={cy}
                dy={-10}
                textAnchor="middle"
                fill="#94a3b8"
                fontSize={9}
            >
                {payload.category.substring(0, 15)}...
            </text>
            <text
                x={cx}
                y={cy}
                dy={12}
                textAnchor="middle"
                fill="#f1f5f9"
                fontSize={14}
                fontWeight="bold"
            >
                {`${(percent * 100).toFixed(1)}%`}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius + 4}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={innerRadius - 4}
                outerRadius={innerRadius - 2}
                fill={fill}
            />
        </g>
    );
};

const AnalysisPanel: React.FC<AnalysisPanelProps> = ({
    uploadedFiles,
    analysisState,
    close,
}) => {
    const { runAnalysis, isAnalyzing, results, error } = analysisState;
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [selectedTargetLayer, setSelectedTargetLayer] = useState(
        ANALYSIS_LAYERS[0].id
    );
    const [activeIndex, setActiveIndex] = useState(0);

    // Otomatis pilih file pertama jika ada
    useEffect(() => {
        if (uploadedFiles.length > 0 && !selectedFile) {
            setSelectedFile(uploadedFiles[0]);
        }
    }, [uploadedFiles, selectedFile]);

    const handleRun = () => {
        if (selectedFile) runAnalysis(selectedFile, selectedTargetLayer);
    };

    const getColor = (name: string) => {
        const item = polaRuangColorSet.find(
            (c) => c.namobj.toLowerCase() === name.toLowerCase()
        );
        return item ? item.color : '#64748b'; // default slate-500
    };

    // Statistik Turunan
    const stats = useMemo(() => {
        if (!results || results.length === 0) return null;
        const totalArea = results.reduce((acc, curr) => acc + curr.areaHa, 0);
        const dominant = [...results].sort((a, b) => b.areaHa - a.areaHa)[0];
        const categoryCount = results.length;

        return { totalArea, dominant, categoryCount };
    }, [results]);

    // Handle Ekspor CSV
    const handleExport = () => {
        if (!results) return;
        const headers = 'Kategori (Pola Ruang),Luas (Ha),Persentase (%)\n';
        const rows = results
            .map(
                (r) =>
                    `"${r.category}",${r.areaHa
                        .toFixed(2)
                        .replace('.', ',')},${r.percentage
                        .toFixed(2)
                        .replace('.', ',')}`
            )
            .join('\n');
        const blob = new Blob([headers + rows], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `analisis_${selectedFile?.name || 'result'}.csv`;
        a.click();
    };

    return (
        <div className="absolute right-4 top-4 bottom-4 w-[420px] bg-slate-900/95 backdrop-blur-md border border-slate-700 rounded-xl flex flex-col animate-in slide-in-from-right duration-300 z-30 shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="p-4 border-b border-slate-700 flex justify-between items-center bg-slate-900 shadow-sm">
                <div>
                    <h2 className="text-base font-bold text-slate-100 flex items-center gap-2">
                        <PieChartIcon size={18} className="text-primary-400" />
                        Analisis Spasial
                    </h2>
                    <p className="text-[10px] text-slate-400 font-mono mt-0.5">
                        TUMPANG SUSUN & HITUNG LUASAN
                    </p>
                </div>
                <button
                    onClick={close}
                    className="w-7 h-7 flex items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white transition-all"
                    title="Tutup Panel"
                >
                    <X size={16} />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-5 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
                {/* 1. Bagian Input */}
                <div className="bg-slate-800/40 rounded-xl p-3.5 border border-slate-700/60 space-y-3">
                    <div>
                        <label className="text-[10px] font-bold text-slate-400 uppercase mb-1 block">
                            Geometri Target
                        </label>
                        {uploadedFiles.length === 0 ? (
                            <div className="p-2.5 bg-slate-900/50 rounded border border-slate-700 border-dashed text-[10px] text-slate-500 text-center">
                                Belum ada file. Silakan impor data dulu.
                            </div>
                        ) : (
                            <div className="relative">
                                <FileText
                                    size={14}
                                    className="absolute left-3 top-3 text-slate-500"
                                />
                                <select
                                    className="w-full bg-slate-900 border border-slate-700 rounded-lg py-2 pl-8 pr-2 text-xs text-slate-200 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 outline-none appearance-none cursor-pointer transition-colors hover:border-slate-600"
                                    value={selectedFile?.name || ''}
                                    onChange={(e) =>
                                        setSelectedFile(
                                            uploadedFiles.find(
                                                (f) => f.name === e.target.value
                                            ) || null
                                        )
                                    }
                                >
                                    {uploadedFiles.map((f) => (
                                        <option key={f.name} value={f.name}>
                                            {f.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}
                    </div>

                    <div className="relative pl-3 border-l-2 border-slate-700 ml-1 py-0.5">
                        <label className="text-[10px] font-bold text-slate-400 uppercase mb-1 block">
                            Target Layer
                        </label>
                        <select
                            className="w-full bg-slate-900 border border-slate-700 rounded-lg py-2 px-3 text-xs text-slate-200 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 outline-none appearance-none cursor-pointer transition-colors hover:border-slate-600"
                            value={selectedTargetLayer}
                            onChange={(e) =>
                                setSelectedTargetLayer(e.target.value)
                            }
                        >
                            {ANALYSIS_LAYERS.map((layer) => (
                                <option key={layer.id} value={layer.id}>
                                    {layer.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button
                        onClick={handleRun}
                        disabled={!selectedFile || isAnalyzing}
                        className="w-full py-2 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 disabled:from-slate-700 disabled:to-slate-800 disabled:cursor-not-allowed text-white text-xs font-bold rounded-lg shadow-lg shadow-primary-900/20 transition-all flex items-center justify-center gap-2 active:scale-[0.98]"
                    >
                        {isAnalyzing ? (
                            <>
                                <Loader2 size={14} className="animate-spin" />
                                Memproses Data...
                            </>
                        ) : (
                            <>
                                <BarChart3 size={16} />
                                Jalankan Analisis
                            </>
                        )}
                    </button>
                </div>

                {/* Status Error */}
                {error && (
                    <div className="bg-red-500/10 border border-red-500/20 p-3 rounded-xl flex gap-3 text-red-400 text-xs animate-in fade-in zoom-in-95">
                        <AlertTriangle size={16} className="shrink-0" />
                        <div>
                            <p className="font-bold">Analisis Gagal</p>
                            <p className="text-red-400/80 text-[10px] mt-0.5">
                                {error}
                            </p>
                        </div>
                    </div>
                )}

                {/* 2. Dashboard Hasil */}
                {results && stats && (
                    <div className="space-y-4 animate-in fade-in slide-in-from-bottom-6 duration-700">
                        <div className="grid grid-cols-2 gap-2">
                            <StatCard
                                label={
                                    results[0]?.unit === 'm'
                                        ? 'Total Panjang'
                                        : results[0]?.unit === 'items'
                                        ? 'Total Item'
                                        : 'Total Luas'
                                }
                                value={`${formatNumber(stats.totalArea)} ${
                                    results[0]?.unit === 'm'
                                        ? 'km'
                                        : results[0]?.unit === 'items'
                                        ? ''
                                        : 'Ha'
                                }`}
                                icon={LayoutDashboard}
                                colorClass="bg-blue-500"
                            />
                            <StatCard
                                label="Dominan"
                                value={`${stats.dominant.percentage.toFixed(
                                    1
                                )}%`}
                                subValue={stats.dominant.category}
                                icon={CheckCircle2}
                                colorClass="bg-emerald-500"
                            />
                        </div>

                        {/* Visualisasi */}
                        <div className="bg-slate-800/20 border border-slate-700/50 rounded-xl p-3">
                            <h3 className="text-[10px] font-bold text-slate-400 uppercase mb-3 flex items-center justify-between">
                                Komposisi Ruang
                                <Info
                                    size={12}
                                    className="text-slate-600 cursor-help"
                                />
                            </h3>
                            <div className="h-56 w-full -ml-2">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            activeShape={renderActiveShape}
                                            data={results}
                                            dataKey="areaHa"
                                            nameKey="category"
                                            cx="50%"
                                            cy="50%"
                                            innerRadius={50}
                                            outerRadius={70}
                                            paddingAngle={3}
                                            onMouseEnter={(_, index) =>
                                                setActiveIndex(index)
                                            }
                                        >
                                            {results.map((entry, index) => (
                                                <Cell
                                                    key={`cell-${index}`}
                                                    fill={getColor(
                                                        entry.category
                                                    )}
                                                    stroke="rgba(15, 23, 42, 0.5)"
                                                    strokeWidth={2}
                                                />
                                            ))}
                                        </Pie>
                                        <Legend
                                            verticalAlign="bottom"
                                            height={64}
                                            iconType="circle"
                                            iconSize={6}
                                            formatter={(value) => (
                                                <span className="text-slate-400 text-[9px]">
                                                    {value}
                                                </span>
                                            )}
                                        />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Tabel Rincian */}
                        <div className="space-y-1.5">
                            <div className="flex justify-between items-center mb-1">
                                <h3 className="text-xs font-bold text-slate-200">
                                    Rincian
                                </h3>
                                <button
                                    onClick={handleExport}
                                    className="text-[10px] flex items-center gap-1 text-primary-400 hover:text-primary-300 transition-colors"
                                >
                                    <Download size={10} />
                                    Ekspor CSV
                                </button>
                            </div>

                            <div className="bg-slate-900 rounded-lg border border-slate-800 overflow-hidden">
                                <div className="max-h-52 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700">
                                    <table className="w-full text-xs">
                                        <thead className="sticky top-0 bg-slate-800 text-[10px] text-slate-400 font-semibold uppercase z-10 shadow-sm">
                                            <tr>
                                                <th className="px-3 py-2 text-left">
                                                    Zona / Pola Ruang
                                                </th>
                                                <th className="px-3 py-2 text-right">
                                                    Luas (Ha)
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-800/50">
                                            {results.map((r, i) => (
                                                <tr
                                                    key={i}
                                                    className="group hover:bg-slate-800/50 transition-colors"
                                                    onMouseEnter={() =>
                                                        setActiveIndex(i)
                                                    }
                                                >
                                                    <td className="px-3 py-2">
                                                        <div className="flex flex-col gap-0.5">
                                                            <div className="flex items-center gap-1.5">
                                                                <div
                                                                    className="w-1.5 h-1.5 rounded-full shrink-0 shadow-sm"
                                                                    style={{
                                                                        backgroundColor:
                                                                            getColor(
                                                                                r.category
                                                                            ),
                                                                    }}
                                                                />
                                                                <span
                                                                    className="text-slate-300 font-medium truncate max-w-[130px]"
                                                                    title={
                                                                        r.category
                                                                    }
                                                                >
                                                                    {r.category}
                                                                </span>
                                                            </div>
                                                            {/* Mini Progress Bar di Tabel */}
                                                            <div className="w-full h-0.5 bg-slate-800 rounded-full overflow-hidden">
                                                                <div
                                                                    className="h-full rounded-full opacity-80"
                                                                    style={{
                                                                        width: `${r.percentage}%`,
                                                                        backgroundColor:
                                                                            getColor(
                                                                                r.category
                                                                            ),
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-3 py-2 text-right align-top">
                                                        <div className="text-slate-200 font-mono text-[10px]">
                                                            {formatNumber(
                                                                r.areaHa
                                                            )}
                                                        </div>
                                                        <div className="text-slate-500 text-[9px]">
                                                            {r.percentage.toFixed(
                                                                1
                                                            )}
                                                            %
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="px-3 py-2 bg-slate-800/50 border-t border-slate-800 flex justify-between items-center text-[10px] text-slate-400">
                                    <span>Total Luas</span>
                                    <span className="font-mono text-slate-200">
                                        {formatNumber(stats.totalArea)} Ha
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* 3. Empty State (No Intersection) */}
                {results && results.length === 0 && (
                    <div className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-6 text-center animate-in fade-in slide-in-from-bottom-2">
                        <div className="w-12 h-12 rounded-full bg-slate-800 mx-auto flex items-center justify-center mb-3 text-slate-500">
                            <AlertTriangle size={20} />
                        </div>
                        <h3 className="text-sm font-bold text-slate-300 mb-1">
                            Tidak Ada Intersect
                        </h3>
                        <p className="text-xs text-slate-500 max-w-[200px] mx-auto">
                            Geometri input tidak bersinggungan dengan layer
                            target. Coba pilih layer lain atau cek lokasi data.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AnalysisPanel;
