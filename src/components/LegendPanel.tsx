import {
    BookOpen,
    Check,
    ChevronDown,
    Layers,
    Loader2,
    Search,
    X,
} from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { polaRuangColorSet } from '../constants';

const LAYERS = [
    { id: 'rtrw', label: 'RTRW Belitung' },
    { id: 'badau', label: 'RDTR Badau' },
    { id: 'geopark', label: 'RDTR Geopark' },
    { id: 'tanjung', label: 'RDTR Tanjung Kelayang' },
];

const LegendPanel = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLayerMenuOpen, setIsLayerMenuOpen] = useState(false); // Untuk custom dropdown
    const [activeLayer, setActiveLayer] = useState('rtrw');
    const [activeCategories, setActiveCategories] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    // Ref untuk click outside closing
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown click outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsLayerMenuOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        const fetchCategories = async () => {
            setIsLoading(true);
            try {
                const res = await fetch(`/api/legend/${activeLayer}`);
                if (res.ok) {
                    const data = await res.json();
                    setActiveCategories(data);
                } else {
                    setActiveCategories([]);
                }
            } catch (error) {
                console.error('Failed to fetch legend categories:', error);
                setActiveCategories([]);
            } finally {
                setIsLoading(false);
            }
        };

        if (isOpen) {
            fetchCategories();
        }
    }, [activeLayer, isOpen]);

    // Filtering logic (API Categories + Local Search)
    const displayItems = useMemo(() => {
        let items = polaRuangColorSet.filter((item: { namobj: string }) =>
            activeCategories.includes(item.namobj)
        );

        if (searchQuery) {
            const lowerQuery = searchQuery.toLowerCase();
            items = items.filter((item: { namobj: string }) =>
                item.namobj.toLowerCase().includes(lowerQuery)
            );
        }

        return items.sort((a: { namobj: string }, b: { namobj: string }) =>
            a.namobj.localeCompare(b.namobj)
        );
    }, [activeCategories, searchQuery, polaRuangColorSet]);

    const activeLayerLabel = LAYERS.find((l) => l.id === activeLayer)?.label;

    return (
        <div className="absolute bottom-6 right-20 z-20 flex flex-col items-end pointer-events-none">
            {/* Main Toggle Button (Pointer events auto to allow clicking) */}
            <div className="pointer-events-auto">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`h-12 w-12 md:w-auto md:px-4 rounded-md shadow-xl transition-all duration-300 flex items-center justify-center gap-3 border ${
                        isOpen
                            ? 'bg-primary-600 border-primary-500 text-white shadow-primary-900/20'
                            : 'bg-slate-900/90 border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-slate-600 backdrop-blur-sm'
                    }`}
                    title="Legenda Peta"
                >
                    {isOpen ? <X size={20} /> : <BookOpen size={20} />}
                    <span
                        className={`text-xs font-bold uppercase hidden md:inline transition-all ${
                            isOpen ? 'text-white' : 'text-slate-300'
                        }`}
                    >
                        Legenda
                    </span>
                </button>
            </div>

            {/* Panel Content */}
            {isOpen && (
                <div className="pointer-events-auto mt-3 w-80 max-h-[65vh] flex flex-col bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-2xl animate-in slide-in-from-bottom-4 duration-300 origin-bottom-right overflow-hidden">
                    {/* Header Section */}
                    <div className="p-4 border-b border-slate-800 bg-gradient-to-b from-slate-800/50 to-slate-900/50 space-y-3">
                        <div className="flex items-center gap-2 text-primary-400">
                            <Layers size={14} />
                            <span className="text-[10px] font-bold uppercase tracking-widest">
                                Active Layer
                            </span>
                        </div>

                        {/* Custom Dropdown for Layers */}
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() =>
                                    setIsLayerMenuOpen(!isLayerMenuOpen)
                                }
                                className="w-full flex items-center justify-between bg-slate-950/50 hover:bg-slate-950 border border-slate-700 hover:border-slate-600 text-slate-200 text-sm rounded-lg px-3 py-2.5 transition-all"
                            >
                                <span className="font-medium truncate">
                                    {activeLayerLabel}
                                </span>
                                <ChevronDown
                                    size={16}
                                    className={`text-slate-400 transition-transform duration-200 ${
                                        isLayerMenuOpen ? 'rotate-180' : ''
                                    }`}
                                />
                            </button>

                            {/* Dropdown Menu */}
                            {isLayerMenuOpen && (
                                <div className="absolute top-full left-0 right-0 mt-1 bg-slate-900 border border-slate-700 rounded-lg shadow-xl z-50 overflow-hidden py-1 animate-in fade-in zoom-in-95 duration-100">
                                    {LAYERS.map((layer) => (
                                        <button
                                            key={layer.id}
                                            onClick={() => {
                                                setActiveLayer(layer.id);
                                                setIsLayerMenuOpen(false);
                                                setSearchQuery(''); // Reset search on layer change
                                            }}
                                            className="w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-slate-800 transition-colors text-slate-300 hover:text-white"
                                        >
                                            {layer.label}
                                            {activeLayer === layer.id && (
                                                <Check
                                                    size={14}
                                                    className="text-primary-400"
                                                />
                                            )}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Search Input */}
                        <div className="relative">
                            <Search
                                size={14}
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                            />
                            <input
                                type="text"
                                placeholder="Cari pola ruang..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-slate-950/30 border border-slate-700/50 focus:border-primary-500/50 rounded-lg py-1.5 pl-9 pr-3 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-primary-500/20 transition-all"
                            />
                        </div>
                    </div>

                    {/* Scrollable List */}
                    <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
                        {isLoading ? (
                            <div className="h-40 flex flex-col items-center justify-center text-slate-500 gap-3">
                                <Loader2
                                    size={24}
                                    className="animate-spin text-primary-500"
                                />
                                <span className="text-xs">
                                    Memuat data legenda...
                                </span>
                            </div>
                        ) : displayItems.length === 0 ? (
                            <div className="h-32 flex flex-col items-center justify-center text-slate-500 px-6 text-center">
                                <Search size={24} className="mb-2 opacity-20" />
                                <p className="text-xs italic">
                                    {searchQuery
                                        ? `Tidak ada hasil untuk "${searchQuery}"`
                                        : 'Tidak ada data kategori untuk layer ini.'}
                                </p>
                            </div>
                        ) : (
                            <div className="p-2 space-y-0.5">
                                {displayItems.map(
                                    (item: any, index: number) => (
                                        <div
                                            key={index}
                                            className="group flex items-start gap-3 p-2 hover:bg-white/5 rounded-lg transition-colors cursor-default"
                                        >
                                            <div className="mt-0.5 relative shrink-0">
                                                <div
                                                    className="w-3.5 h-3.5 rounded-full shadow-sm ring-2 ring-slate-800 group-hover:ring-slate-700 transition-all"
                                                    style={{
                                                        backgroundColor:
                                                            item.color,
                                                    }}
                                                />
                                            </div>
                                            <span className="text-xs text-slate-300 group-hover:text-slate-100 leading-snug transition-colors">
                                                {item.namobj}
                                            </span>
                                        </div>
                                    )
                                )}
                            </div>
                        )}
                    </div>

                    {/* Footer / Count */}
                    <div className="p-2.5 border-t border-slate-800 bg-slate-900/80 text-[10px] text-slate-500 flex justify-between items-center">
                        <span>Total Kategori</span>
                        <span className="bg-slate-800 px-1.5 py-0.5 rounded text-slate-400 font-mono">
                            {displayItems.length}
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LegendPanel;
