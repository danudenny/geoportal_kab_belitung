import { Compass, Crosshair, Loader2, Locate, Minus, Plus } from 'lucide-react';

interface MapControlsProps {
    onZoomIn: () => void;
    onZoomOut: () => void;
    onReset: () => void;
    onLocate: () => void;
    isLocating: boolean;
}

const MapControls: React.FC<MapControlsProps> = ({
    onZoomIn,
    onZoomOut,
    onReset,
    onLocate,
    isLocating,
}) => {
    return (
        <div className="absolute bottom-6 right-6 flex flex-col gap-3 z-10">
            {/* Navigation Group */}
            <div className="flex flex-col gap-2">
                <button
                    onClick={onLocate}
                    disabled={isLocating}
                    className="p-3 bg-slate-800 text-primary-400 hover:text-primary-300 hover:bg-slate-700 disabled:opacity-70 disabled:cursor-wait rounded shadow-lg border border-slate-600 transition-colors group relative"
                    title="Locate Me"
                >
                    {isLocating ? (
                        <Loader2 size={20} className="animate-spin" />
                    ) : (
                        <Locate size={20} />
                    )}
                    <span className="absolute right-full mr-2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {isLocating ? 'Locating...' : 'Locate Me'}
                    </span>
                </button>

                <button
                    onClick={onReset}
                    className="p-3 bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 rounded shadow-lg border border-slate-600 transition-colors"
                    title="Reset View"
                >
                    <Crosshair size={20} />
                </button>
            </div>

            {/* Zoom Group */}
            <div className="flex flex-col rounded overflow-hidden shadow-lg border border-slate-600 bg-slate-800">
                <button
                    onClick={onZoomIn}
                    className="p-3 text-slate-200 hover:text-white hover:bg-slate-700 border-b border-slate-600 transition-colors"
                >
                    <Plus size={20} />
                </button>
                <button
                    onClick={onZoomOut}
                    className="p-3 text-slate-200 hover:text-white hover:bg-slate-700 transition-colors"
                >
                    <Minus size={20} />
                </button>
            </div>

            {/* Decorative Compass */}
            <div className="absolute -bottom-1 -right-1 pointer-events-none opacity-50">
                <Compass size={64} className="text-slate-600" strokeWidth={1} />
            </div>
        </div>
    );
};

export default MapControls;
