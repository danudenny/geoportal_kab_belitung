import {
    Activity,
    Calendar,
    Check,
    Copy,
    ExternalLink,
    FileText,
    Hash,
    Loader2,
    MapPin,
    X,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { COLUMN_MAPPING } from '../constants'; // Pastikan path ini benar
import { SelectedFeature } from '../types'; // Pastikan path ini benar

interface FeaturePopupProps {
    feature: SelectedFeature | null;
    onClose: () => void;
    onZoom?: (feature: SelectedFeature) => void; // Opsional: untuk tombol Zoom
    onExport?: (feature: SelectedFeature) => void; // Opsional: untuk tombol Export
}

const FeaturePopup: React.FC<FeaturePopupProps> = ({
    feature,
    onClose,
    onZoom,
    onExport,
}) => {
    const [details, setDetails] = useState<Record<string, any> | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [copiedKey, setCopiedKey] = useState<string | null>(null);

    // Reset details ketika feature berubah
    useEffect(() => {
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

        const fetchDetails = async () => {
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
            } finally {
                setIsLoading(false);
            }
        };

        fetchDetails();
    }, [feature]);

    // Handle Copy to Clipboard
    const handleCopy = (text: string, key: string) => {
        navigator.clipboard.writeText(text);
        setCopiedKey(key);
        setTimeout(() => setCopiedKey(null), 2000);
    };

    // Format Value Helper
    const formatValue = (key: string, value: any) => {
        if (value === null || value === undefined || value === '') {
            return <span className="text-slate-600 italic text-xs">Empty</span>;
        }

        // Jika URL
        if (
            typeof value === 'string' &&
            (value.startsWith('http') || value.startsWith('www'))
        ) {
            return (
                <a
                    href={value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-400 hover:text-primary-300 hover:underline flex items-center gap-1 break-all"
                >
                    {value} <ExternalLink size={10} />
                </a>
            );
        }

        // Jika Tanggal (deteksi sederhana string ISO)
        if (
            typeof value === 'string' &&
            !isNaN(Date.parse(value)) &&
            value.length > 10 &&
            (key.toLowerCase().includes('date') ||
                key.toLowerCase().includes('time'))
        ) {
            return new Date(value).toLocaleDateString('id-ID', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
            });
        }

        // Jika Object/Array
        if (typeof value === 'object') {
            return (
                <pre className="text-[10px] bg-slate-950 p-2 rounded border border-slate-800 overflow-x-auto">
                    {JSON.stringify(value, null, 2)}
                </pre>
            );
        }

        return String(value);
    };

    // Icon Helper
    const getIconForProp = (key: string) => {
        const k = key.toLowerCase();
        if (k.includes('date') || k.includes('time'))
            return <Calendar size={14} className="text-blue-400" />;
        if (k.includes('id') || k.includes('code') || k.includes('gid'))
            return <Hash size={14} className="text-orange-400" />;
        if (k.includes('name') || k.includes('obj'))
            return <FileText size={14} className="text-emerald-400" />;
        if (k.includes('stat') || k.includes('val') || k.includes('luas'))
            return <Activity size={14} className="text-purple-400" />;
        return <div className="w-1.5 h-1.5 rounded-full bg-slate-500" />;
    };

    if (!feature) return null;

    const displayProperties = details || feature.properties || {};
    const title =
        displayProperties['namobj'] ||
        displayProperties['name'] ||
        displayProperties['NAMOBJ'] ||
        `Feature #${feature.id}`;

    return (
        <div className="absolute right-4 top-4 bottom-4 w-96 bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 shadow-2xl z-30 flex flex-col rounded-xl overflow-hidden animate-in slide-in-from-right-4 duration-300">
            {/* Header */}
            <div className="px-5 py-4 border-b border-slate-700 bg-gradient-to-r from-slate-800/50 to-slate-900/50 flex justify-between items-start shrink-0">
                <div className="overflow-hidden">
                    <div className="flex items-center gap-2 text-primary-400 mb-1.5">
                        <MapPin size={14} />
                        <span className="text-[10px] font-bold tracking-widest uppercase text-primary-400/80">
                            Feature Information
                        </span>
                    </div>
                    <h2
                        className="text-lg font-bold text-white font-mono truncate leading-tight"
                        title={String(title)}
                    >
                        {title}
                    </h2>
                    <div className="flex gap-2 mt-2">
                        <span className="text-[10px] font-medium text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700 uppercase">
                            {feature.geometryType || 'Geometry'}
                        </span>
                        {isLoading && (
                            <span className="text-[10px] flex items-center gap-1 text-yellow-500">
                                <Loader2 size={10} className="animate-spin" />{' '}
                                Syncing...
                            </span>
                        )}
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="p-1.5 hover:bg-slate-700 rounded-md text-slate-400 hover:text-white transition-all active:scale-95"
                >
                    <X size={18} />
                </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent relative">
                {isLoading && !details && (
                    <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm flex flex-col items-center justify-center z-10 text-slate-400 gap-3">
                        <Loader2
                            className="animate-spin text-primary-500"
                            size={32}
                        />
                        <span className="text-xs">
                            Fetching detailed attributes...
                        </span>
                    </div>
                )}

                <div className="divide-y divide-slate-800/50">
                    {Object.entries(displayProperties).map(([key, value]) => {
                        // Filter out heavy geometry columns
                        if (
                            ['geom', 'geometry', 'the_geom', 'bbox'].includes(
                                key.toLowerCase()
                            )
                        )
                            return null;

                        const label =
                            COLUMN_MAPPING[key.toLowerCase()] ||
                            key
                                .replace(/_/g, ' ')
                                .replace(/\b\w/g, (c) => c.toUpperCase());
                        const valString =
                            typeof value === 'object'
                                ? JSON.stringify(value)
                                : String(value);

                        return (
                            <div
                                key={key}
                                className="group flex flex-col hover:bg-slate-800/30 transition-colors px-5 py-3"
                            >
                                <div className="flex items-center justify-between mb-1">
                                    <div className="flex items-center gap-2 text-xs font-medium text-slate-500 uppercase tracking-wide">
                                        {getIconForProp(key)}
                                        {label}
                                    </div>

                                    {/* Copy Button (Only shows on hover) */}
                                    <button
                                        onClick={() =>
                                            handleCopy(valString, key)
                                        }
                                        className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-500 hover:text-primary-400 p-1"
                                        title="Copy value"
                                    >
                                        {copiedKey === key ? (
                                            <Check
                                                size={12}
                                                className="text-emerald-500"
                                            />
                                        ) : (
                                            <Copy size={12} />
                                        )}
                                    </button>
                                </div>

                                <div className="pl-6 text-sm text-slate-200 font-mono break-words leading-relaxed">
                                    {formatValue(key, value)}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {!isLoading && Object.keys(displayProperties).length === 0 && (
                    <div className="h-full flex flex-col items-center justify-center text-slate-500 p-8 text-center">
                        <FileText size={32} className="mb-2 opacity-50" />
                        <p className="text-sm">
                            No properties found for this layer.
                        </p>
                    </div>
                )}
            </div>

            {/* Footer Actions */}
            <div className="p-4 border-t border-slate-700 bg-slate-900/90 shrink-0 grid grid-cols-2 gap-3">
                <button
                    onClick={() => onZoom?.(feature)}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 hover:text-white text-slate-300 text-xs font-bold rounded-lg border border-slate-600 transition-all active:scale-95"
                >
                    <MapPin size={14} /> ZOOM TO
                </button>
                <button
                    onClick={() => onExport?.(feature)}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-500 text-white text-xs font-bold rounded-lg shadow-lg shadow-primary-900/20 hover:shadow-primary-900/40 transition-all active:scale-95 border border-transparent hover:border-primary-400"
                >
                    <ExternalLink size={14} /> EXPORT JSON
                </button>
            </div>
        </div>
    );
};

export default FeaturePopup;
