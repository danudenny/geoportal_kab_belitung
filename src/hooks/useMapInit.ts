import Map from 'ol/Map';
import View from 'ol/View';
import { defaults as defaultControls } from 'ol/control';
import { fromLonLat } from 'ol/proj';
import { useEffect, useRef, useState } from 'react';

export const useMapInit = (
    mapElement: React.RefObject<HTMLDivElement | null>
) => {
    const mapRef = useRef<Map | null>(null);
    const [mapInstance, setMapInstance] = useState<Map | null>(null);

    useEffect(() => {
        if (!mapElement.current || mapRef.current) return;

        // Center on Belitung
        const initialView = new View({
            center: fromLonLat([107.63, -2.85]),
            zoom: 11,
        });

        const map = new Map({
            target: mapElement.current,
            layers: [], // Layers will be managed by other hooks
            view: initialView,
            controls: defaultControls({
                zoom: false,
                rotate: false,
                attribution: false,
            }),
        });

        mapRef.current = map;
        setMapInstance(map);

        return () => {
            map.setTarget(undefined);
            mapRef.current = null;
            setMapInstance(null);
        };
    }, [mapElement]);

    return { mapRef, mapInstance };
};
