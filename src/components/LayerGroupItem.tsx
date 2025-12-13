import { ChevronDown, ChevronRight, Folder } from 'lucide-react';
import React from 'react';
import { LayerGroup } from '../types';
import LayerItem from './LayerItem';

interface LayerGroupItemProps {
    group: LayerGroup;
    isExpanded: boolean;
    toggleGroup: (id: string) => void;
    toggleLayer: (groupId: string, layerId: string) => void;
    updateOpacity: (groupId: string, layerId: string, opacity: number) => void;
}

const LayerGroupItem: React.FC<LayerGroupItemProps> = ({
    group,
    isExpanded,
    toggleGroup,
    toggleLayer,
    updateOpacity,
}) => {
    const isBaseMap = group.id === 'group-basemap';

    return (
        <div
            className={`border transition-all duration-200 rounded-lg overflow-hidden ${
                isExpanded
                    ? 'border-slate-600 bg-slate-800/40'
                    : 'border-slate-800 bg-slate-900/40'
            }`}
        >
            {/* Group Header */}
            <button
                onClick={() => toggleGroup(group.id)}
                className="w-full flex items-center justify-between p-3 bg-slate-800/80 hover:bg-slate-750 transition-colors cursor-pointer group"
            >
                <div className="flex items-center gap-2">
                    <Folder
                        size={16}
                        className={`${
                            isBaseMap
                                ? 'text-slate-500'
                                : 'text-primary-400 group-hover:text-primary-300'
                        }`}
                    />
                    <span className="font-semibold text-sm text-slate-200 group-hover:text-white">
                        {group.name}
                    </span>
                </div>
                {isExpanded ? (
                    <ChevronDown size={16} className="text-slate-400" />
                ) : (
                    <ChevronRight size={16} className="text-slate-500" />
                )}
            </button>

            {/* Layer List */}
            {isExpanded && (
                <div className="p-3 space-y-3 border-t border-slate-700/50">
                    {group.layers.map((layer) => (
                        <LayerItem
                            key={layer.id}
                            layer={layer}
                            groupId={group.id}
                            isBaseMap={isBaseMap}
                            toggleLayer={toggleLayer}
                            updateOpacity={updateOpacity}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default LayerGroupItem;
