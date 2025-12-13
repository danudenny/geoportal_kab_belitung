'use client';

import AnalysisPanel from '@/components/AnalysisPanel';
import FeaturePopup from '@/components/FeaturePopup';
import LayerPanel from '@/components/LayerPanel';
import Sidebar from '@/components/Sidebar';
import UploadPanel from '@/components/UploadPanel';
import { INITIAL_LAYER_GROUPS } from '@/constants';
import { useAnalysis } from '@/hooks/useAnalysis';
import { LayerGroup, SelectedFeature, SidebarMode } from '@/types';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

// Dynamically import MapViewer to disable SSR, as OpenLayers depends on browser APIs
const MapViewer = dynamic(() => import('@/components/MapViewer'), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full bg-slate-900 flex items-center justify-center text-slate-500">
            Loading Map...
        </div>
    ),
});

const Home: React.FC = () => {
    const [activeSidebarMode, setActiveSidebarMode] =
        useState<SidebarMode>('none');
    const [layerGroups, setLayerGroups] =
        useState<LayerGroup[]>(INITIAL_LAYER_GROUPS);
    const [selectedFeature, setSelectedFeature] =
        useState<SelectedFeature | null>(null);
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

    // Lifted Analysis State
    const analysisState = useAnalysis();

    // Need to ensure consistent hydration
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    // Layer State Handlers
    const toggleLayer = (groupId: string, layerId: string) => {
        setLayerGroups((prevGroups) =>
            prevGroups.map((group) => {
                if (group.id !== groupId) return group;

                // Base Maps: Radio Button Logic (Mutually Exclusive)
                if (group.id === 'group-basemap') {
                    return {
                        ...group,
                        layers: group.layers.map((layer) => ({
                            ...layer,
                            visible: layer.id === layerId, // Activate clicked, deactivate others
                        })),
                    };
                }

                // Other Layers: Checkbox Logic (Toggle independent)
                return {
                    ...group,
                    layers: group.layers.map((layer) =>
                        layer.id === layerId
                            ? { ...layer, visible: !layer.visible }
                            : layer
                    ),
                };
            })
        );
    };

    const updateOpacity = (
        groupId: string,
        layerId: string,
        opacity: number
    ) => {
        setLayerGroups((prevGroups) =>
            prevGroups.map((group) => {
                if (group.id !== groupId) return group;
                return {
                    ...group,
                    layers: group.layers.map((layer) =>
                        layer.id === layerId ? { ...layer, opacity } : layer
                    ),
                };
            })
        );
    };

    const handleFileUpload = async (files: File[]) => {
        setUploadedFiles((prev) => {
            // Filter out duplicate files by name
            const newFiles = files.filter(
                (newFile) => !prev.some((p) => p.name === newFile.name)
            );
            return [...prev, ...newFiles];
        });
        // We can keep the sidebar open to show the file list and allow further actions
        // setActiveSidebarMode('none');

        // OPTIONAL: Automatically open analysis panel if files are uploaded
        // setActiveSidebarMode('analysis');
    };

    const handleRemoveFile = (fileToRemove: File) => {
        setUploadedFiles((prev) =>
            prev.filter((file) => file.name !== fileToRemove.name)
        );
        // Clear analysis if any file is removed (or ideally only if analyzed file is removed)
        analysisState.clearAnalysis();
    };

    if (!mounted) return null;

    return (
        <div className="flex w-full h-screen bg-slate-950 text-slate-100 overflow-hidden font-sans">
            {/* 1. Left Minimized Rail */}
            <Sidebar
                activeMode={activeSidebarMode}
                setActiveMode={setActiveSidebarMode}
            />

            {/* 2. Expandable Sidebar Panel (Layers, Settings, Upload) */}
            <div
                className={`
        relative h-full transition-all duration-300 ease-in-out shadow-2xl z-20 flex
        ${
            activeSidebarMode !== 'none' && activeSidebarMode !== 'analysis'
                ? 'w-80 opacity-100 border-r border-slate-800'
                : 'w-0 opacity-0 overflow-hidden border-none'
        }
      `}
            >
                {activeSidebarMode === 'layers' && (
                    <LayerPanel
                        groups={layerGroups}
                        toggleLayer={toggleLayer}
                        updateOpacity={updateOpacity}
                    />
                )}
                {activeSidebarMode === 'upload' && (
                    <UploadPanel
                        onUpload={handleFileUpload}
                        uploadedFiles={uploadedFiles}
                        onRemove={handleRemoveFile}
                        onAnalyze={(file) => {
                            // Logic to set active file for analysis can be added here if needed
                            // For now, just open the panel, and it defaults to first file or let user choose
                            setActiveSidebarMode('analysis');
                        }}
                        close={() => setActiveSidebarMode('none')}
                    />
                )}
                {activeSidebarMode === 'settings' && (
                    <div className="p-6 w-80 bg-slate-900 h-full">
                        <h2 className="text-lg font-bold text-primary-400 mb-4">
                            SETTINGS
                        </h2>
                        <div className="text-sm text-slate-400">
                            <p className="mb-2">Unit System: Metric</p>
                            <p className="mb-2">Projection: EPSG:3857</p>
                            <p>Theme: GeoGreen Dark</p>
                        </div>
                    </div>
                )}
            </div>

            {/* 3. Main Map Area */}
            <div className="flex-1 relative z-0">
                <MapViewer
                    layerGroups={layerGroups}
                    onFeatureSelect={(f: SelectedFeature | null) => {
                        setSelectedFeature(f);
                    }}
                    filesToLoad={uploadedFiles}
                />

                {/* 4. Right Feature Popup */}
                {selectedFeature && (
                    <FeaturePopup
                        feature={selectedFeature}
                        onClose={() => setSelectedFeature(null)}
                    />
                )}

                {/* 5. Right Analysis Panel (Overlay) */}
                {activeSidebarMode === 'analysis' && (
                    <AnalysisPanel
                        uploadedFiles={uploadedFiles}
                        analysisState={analysisState}
                        close={() => setActiveSidebarMode('none')}
                    />
                )}
            </div>
        </div>
    );
};

export default Home;
