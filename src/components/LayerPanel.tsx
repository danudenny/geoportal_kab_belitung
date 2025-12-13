import { Layers } from 'lucide-react';
import React, { useState } from 'react';
import { LayerGroup } from '../types';
import LayerGroupItem from './LayerGroupItem';

interface LayerPanelProps {
    groups: LayerGroup[];
    toggleLayer: (groupId: string, layerId: string) => void;
    updateOpacity: (groupId: string, layerId: string, opacity: number) => void;
}

const LayerPanel: React.FC<LayerPanelProps> = ({
    groups,
    toggleLayer,
    updateOpacity,
}) => {
    // STATE INITIALIZATION YANG DINAMIS
    // Logic: Jika ID group adalah 'group-basemap', set false (tertutup).
    // Selain itu set true (terbuka).
    const [expandedGroups, setExpandedGroups] = useState<
        Record<string, boolean>
    >(() => {
        const initialState: Record<string, boolean> = {};
        groups.forEach((group) => {
            initialState[group.id] = group.id !== 'group-basemap';
        });
        return initialState;
    });

    const toggleGroup = (id: string) => {
        setExpandedGroups((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div className="h-full w-80 bg-slate-900/95 backdrop-blur-md border-r border-slate-700 flex flex-col shadow-2xl animate-in slide-in-from-left duration-300 z-50">
            {/* Header Panel */}
            <div className="p-5 border-b border-slate-700 bg-slate-900 shadow-sm">
                <h2 className="text-lg font-bold text-primary-400 tracking-tight flex items-center gap-2">
                    <Layers size={20} className="text-primary-500" />
                    DATA LAYERS
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                    Manage spatial data visibility
                </p>
            </div>

            {/* Scrollable List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
                {groups.map((group) => (
                    <LayerGroupItem
                        key={group.id}
                        group={group}
                        isExpanded={!!expandedGroups[group.id]}
                        toggleGroup={toggleGroup}
                        toggleLayer={toggleLayer}
                        updateOpacity={updateOpacity}
                    />
                ))}
            </div>
        </div>
    );
};

export default LayerPanel;
