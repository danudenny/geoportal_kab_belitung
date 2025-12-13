import { fromLonLat } from 'ol/proj';
import { useRef } from 'react';
import { useFileImporter } from '../hooks/useFileImporter';
import { useLayerManager } from '../hooks/useLayerManager';
import { useMapInit } from '../hooks/useMapInit';
import { useMapInteractions } from '../hooks/useMapInteractions';
import { useUserLocation } from '../hooks/useUserLocation';
import { LayerGroup, SelectedFeature } from '../types';
import LegendPanel from './LegendPanel';
import MapAttribution from './map/MapAttribution';
import MapBrand from './map/MapBrand';
import MapControls from './map/MapControls';

interface MapViewerProps {
    layerGroups: LayerGroup[];
    onFeatureSelect: (feature: SelectedFeature | null) => void;
    filesToLoad: File[];
}

const MapViewer: React.FC<MapViewerProps> = ({
    layerGroups,
    onFeatureSelect,
    filesToLoad,
}) => {
    const mapElement = useRef<HTMLDivElement>(null);

    // 1. Initialize Map
    const { mapRef, mapInstance } = useMapInit(mapElement);

    // 2. Manage Layers
    useLayerManager(mapInstance, layerGroups);

    // 3. Handle Interactions (Selection)
    useMapInteractions(mapInstance, onFeatureSelect);

    // 4. Handle User Location
    const { isLocating, handleLocate } = useUserLocation(mapInstance);

    // 5. Handle File Imports
    useFileImporter(mapInstance, filesToLoad);

    // 6. Navigation Handlers
    const handleZoomIn = () => {
        const view = mapRef.current?.getView();
        view?.animate({ zoom: (view.getZoom() || 0) + 1, duration: 250 });
    };

    const handleZoomOut = () => {
        const view = mapRef.current?.getView();
        view?.animate({ zoom: (view.getZoom() || 0) - 1, duration: 250 });
    };

    const handleReset = () => {
        mapRef.current?.getView().animate({
            center: fromLonLat([107.63, -2.85]),
            zoom: 11,
            duration: 500,
        });
    };

    return (
        <div className="relative w-full h-full bg-slate-950">
            <div ref={mapElement} className="w-full h-full" />

            <MapBrand />

            <MapControls
                onZoomIn={handleZoomIn}
                onZoomOut={handleZoomOut}
                onReset={handleReset}
                onLocate={handleLocate}
                isLocating={isLocating}
            />

            <LegendPanel />

            <MapAttribution />
        </div>
    );
};

export default MapViewer;
