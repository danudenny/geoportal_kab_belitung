import Feature from 'ol/Feature';
import { Point } from 'ol/geom';
import { Vector as VectorLayer } from 'ol/layer';
import Map from 'ol/Map';
import { fromLonLat } from 'ol/proj';
import { Vector as VectorSource } from 'ol/source';
import { Icon, Style } from 'ol/style';
import { useEffect, useRef, useState } from 'react';

export const useUserLocation = (map: Map | null) => {
    const [isLocating, setIsLocating] = useState(false);
    const userLocationLayerRef = useRef<VectorLayer<VectorSource> | null>(null);

    useEffect(() => {
        if (!map) return;

        // Prevent adding multiple layers
        if (userLocationLayerRef.current) return;

        const userSource = new VectorSource();
        const userLayer = new VectorLayer({
            source: userSource,
            zIndex: 999,
        });
        map.addLayer(userLayer);
        userLocationLayerRef.current = userLayer;

        return () => {
            // Cleanup logic if needed, but layer removal on unmount usually handled by map disposal
        };
    }, [map]);

    const handleLocate = () => {
        if (isLocating) return;

        if (!navigator.geolocation) {
            alert('Geolocation is not supported by your browser');
            return;
        }

        setIsLocating(true);

        navigator.geolocation.getCurrentPosition(
            (position) => {
                setIsLocating(false);
                const { latitude, longitude } = position.coords;
                const coords = fromLonLat([longitude, latitude]);

                const source = userLocationLayerRef.current?.getSource();
                if (source) {
                    source.clear();

                    const svgString = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" stroke-width="2" />
                        <circle cx="12" cy="12" r="3" fill="#10b981" stroke="none" />
                        <path d="M5.5 19c1.5-3 5-4 6.5-4s5 1 6.5 4" stroke="#10b981" stroke-width="2" />
                    </svg>
                `.trim();

                    const iconFeature = new Feature({
                        geometry: new Point(coords),
                        name: 'My Location',
                        isUserLocation: true,
                    });

                    const iconStyle = new Style({
                        image: new Icon({
                            src:
                                'data:image/svg+xml;utf8,' +
                                encodeURIComponent(svgString),
                            scale: 1,
                            anchor: [0.5, 0.5],
                        }),
                    });

                    iconFeature.setStyle(iconStyle);
                    source.addFeature(iconFeature);

                    map?.getView().animate({
                        center: coords,
                        zoom: 14,
                        duration: 1500,
                    });
                }
            },
            (error) => {
                setIsLocating(false);
                let errorMessage = 'An unknown error occurred.';
                switch (error.code) {
                    case 1:
                        errorMessage =
                            'User denied the request for Geolocation.';
                        break;
                    case 2:
                        errorMessage = 'Location information is unavailable.';
                        break;
                    case 3:
                        errorMessage =
                            'The request to get user location timed out.';
                        break;
                }
                console.error('Geolocation error:', errorMessage, error);
                alert(`Unable to locate: ${errorMessage}`);
            },
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
        );
    };

    return { isLocating, handleLocate };
};
