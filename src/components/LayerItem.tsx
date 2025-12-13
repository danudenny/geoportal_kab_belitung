import { CheckCircle2, Circle, Download } from 'lucide-react';
import React from 'react';
import { LayerConfig } from '../types';
import Switch from './ui/Switch';

interface LayerItemProps {
    layer: LayerConfig;
    groupId: string;
    isBaseMap: boolean;
    toggleLayer: (groupId: string, layerId: string) => void;
    updateOpacity: (groupId: string, layerId: string, opacity: number) => void;
}

const LayerItem: React.FC<LayerItemProps> = ({
    layer,
    groupId,
    isBaseMap,
    toggleLayer,
    updateOpacity,
}) => {
    return (
        <div className="space-y-2 animate-in fade-in duration-300">
            <div className="flex items-center justify-between group/layer">
                <div className="flex items-center gap-3">
                    {/* Visibility Control */}
                    {isBaseMap ? (
                        <button
                            onClick={() => toggleLayer(groupId, layer.id)}
                            className={`transition-colors focus:outline-none ${
                                layer.visible
                                    ? 'text-primary-400 hover:text-primary-300'
                                    : 'text-slate-600 hover:text-slate-500'
                            }`}
                            title="Select Base Map"
                        >
                            {layer.visible ? (
                                <CheckCircle2 size={20} />
                            ) : (
                                <Circle size={20} />
                            )}
                        </button>
                    ) : (
                        <Switch
                            checked={layer.visible}
                            onChange={() => toggleLayer(groupId, layer.id)}
                        />
                    )}

                    <span
                        className={`text-sm cursor-pointer select-none transition-colors ${
                            layer.visible
                                ? 'text-slate-200 font-medium'
                                : 'text-slate-500'
                        }`}
                        onClick={() => toggleLayer(groupId, layer.id)}
                    >
                        {layer.name}
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    {/* Color Indicator */}
                    {layer.type === 'vector' && layer.color && (
                        <div
                            className="w-2.5 h-2.5 rounded-full ring-1 ring-slate-700/50"
                            style={{ backgroundColor: layer.color }}
                        />
                    )}

                    {/* Download Button */}
                    {layer.apiKey && (
                        <a
                            href={`/api/export/${layer.apiKey}`}
                            download
                            className="opacity-0 group-hover/layer:opacity-100 p-1 text-slate-500 hover:text-primary-400 hover:bg-slate-700 rounded transition-all"
                            title="Download GeoJSON"
                        >
                            <Download size={14} />
                        </a>
                    )}
                </div>
            </div>

            {/* Opacity Slider */}
            {layer.visible && (
                <div className="flex items-center gap-3 pl-12 pr-1 animate-in slide-in-from-top-1 duration-200">
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={layer.opacity}
                        onChange={(e) =>
                            updateOpacity(
                                groupId,
                                layer.id,
                                parseFloat(e.target.value)
                            )
                        }
                        className="flex-1 h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary-500 hover:accent-primary-400 focus:outline-none focus:ring-1 focus:ring-primary-500/50"
                        title={`Opacity: ${Math.round(layer.opacity * 100)}%`}
                    />
                    <span className="text-[10px] text-slate-400 w-6 text-right font-mono">
                        {Math.round(layer.opacity * 100)}%
                    </span>
                </div>
            )}
        </div>
    );
};

export default LayerItem;
