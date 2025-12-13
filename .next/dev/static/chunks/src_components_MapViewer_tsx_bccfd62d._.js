(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/MapViewer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$Feature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ol/Feature.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$Map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ol/Map.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$View$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ol/View.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$control$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ol/control/defaults.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$events$2f$condition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ol/events/condition.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$format$2f$GeoJSON$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ol/format/GeoJSON.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$geom$2f$LineString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LineString$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/geom/LineString.js [app-client] (ecmascript) <export default as LineString>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$geom$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Point$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/geom/Point.js [app-client] (ecmascript) <export default as Point>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$geom$2f$Polygon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Polygon$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/geom/Polygon.js [app-client] (ecmascript) <export default as Polygon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$interaction$2f$Select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ol/interaction/Select.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$layer$2f$Tile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tile$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/layer/Tile.js [app-client] (ecmascript) <export default as Tile>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$layer$2f$Vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Vector$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/layer/Vector.js [app-client] (ecmascript) <export default as Vector>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$proj$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/proj.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$source$2f$OSM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__OSM$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/source/OSM.js [app-client] (ecmascript) <export default as OSM>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$source$2f$Vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Vector$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/source/Vector.js [app-client] (ecmascript) <export default as Vector>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$source$2f$XYZ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XYZ$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/source/XYZ.js [app-client] (ecmascript) <export default as XYZ>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/style/Circle.js [app-client] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Fill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fill$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/style/Fill.js [app-client] (ecmascript) <export default as Fill>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Icon$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/style/Icon.js [app-client] (ecmascript) <export default as Icon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Stroke$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stroke$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/style/Stroke.js [app-client] (ecmascript) <export default as Stroke>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Style$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/style/Style.js [app-client] (ecmascript) <export default as Style>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/compass.js [app-client] (ecmascript) <export default as Compass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crosshair$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crosshair$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/crosshair.js [app-client] (ecmascript) <export default as Crosshair>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$locate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Locate$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/locate.js [app-client] (ecmascript) <export default as Locate>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const MapViewer = ({ layerGroups, onFeatureSelect, filesToLoad })=>{
    _s();
    const mapElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const layerRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const userLocationLayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Track loaded files to prevent duplicate processing if re-rendered
    const [processedFiles, setProcessedFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [isLocating, setIsLocating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Initialize Map
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapViewer.useEffect": ()=>{
            if (!mapElement.current) return;
            // Center on Belitung
            const initialView = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$View$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                center: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$proj$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fromLonLat"])([
                    107.63,
                    -2.85
                ]),
                zoom: 11
            });
            const map = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$Map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                target: mapElement.current,
                layers: [],
                view: initialView,
                controls: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$control$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaults"])({
                    zoom: false,
                    rotate: false,
                    attribution: false
                })
            });
            // Interaction for Selection
            const selectClick = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$interaction$2f$Select$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                condition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$events$2f$condition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["click"],
                style: {
                    "MapViewer.useEffect": (feature)=>{
                        const geometryType = feature.getGeometry()?.getType();
                        // Dynamic selection style based on geometry
                        if (geometryType === 'Point') {
                            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Style$3e$__["Style"]({
                                image: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"]({
                                    radius: 10,
                                    fill: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Fill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fill$3e$__["Fill"]({
                                        color: '#10b981'
                                    }),
                                    stroke: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Stroke$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stroke$3e$__["Stroke"]({
                                        color: '#fff',
                                        width: 3
                                    })
                                })
                            });
                        }
                        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Style$3e$__["Style"]({
                            fill: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Fill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fill$3e$__["Fill"]({
                                color: 'rgba(16, 185, 129, 0.4)'
                            }),
                            stroke: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Stroke$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stroke$3e$__["Stroke"]({
                                color: '#10b981',
                                width: 4
                            })
                        });
                    }
                }["MapViewer.useEffect"]
            });
            map.addInteraction(selectClick);
            selectClick.on('select', {
                "MapViewer.useEffect": (e)=>{
                    if (e.selected.length > 0) {
                        const feature = e.selected[0];
                        const props = feature.getProperties();
                        // Don't select the user location marker generically
                        if (props.isUserLocation) {
                            selectClick.getFeatures().clear();
                            return;
                        }
                        const { geometry, ...cleanProps } = props;
                        onFeatureSelect({
                            id: feature.getId() || Math.random().toString(36).substr(2, 9),
                            properties: cleanProps,
                            layerId: 'unknown',
                            geometryType: feature.getGeometry()?.getType() || 'Unknown'
                        });
                    } else {
                        onFeatureSelect(null);
                    }
                }
            }["MapViewer.useEffect"]);
            mapRef.current = map;
            // Create User Location Layer
            const userSource = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$source$2f$Vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Vector$3e$__["Vector"]();
            const userLayer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$layer$2f$Vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Vector$3e$__["Vector"]({
                source: userSource,
                zIndex: 999
            });
            map.addLayer(userLayer);
            userLocationLayerRef.current = userLayer;
            return ({
                "MapViewer.useEffect": ()=>{
                    map.setTarget(undefined);
                }
            })["MapViewer.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["MapViewer.useEffect"], []); // Run once
    // Manage Layers Sync
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapViewer.useEffect": ()=>{
            const map = mapRef.current;
            if (!map) return;
            // Flatten group structure to simple list for processing
            layerGroups.forEach({
                "MapViewer.useEffect": (group)=>{
                    group.layers.forEach({
                        "MapViewer.useEffect": (layerConfig)=>{
                            let layer = layerRefs.current[layerConfig.id];
                            // Create layer if it doesn't exist
                            if (!layer) {
                                if (layerConfig.type === 'tile') {
                                    // Determine source based on config
                                    let source;
                                    if (layerConfig.source && layerConfig.source.startsWith('http')) {
                                        console.log(`Creating XYZ source for ${layerConfig.name}: ${layerConfig.source}`);
                                        source = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$source$2f$XYZ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XYZ$3e$__["XYZ"]({
                                            url: layerConfig.source,
                                            maxZoom: 20,
                                            crossOrigin: 'anonymous'
                                        });
                                    } else {
                                        console.log(`Using default OSM source for ${layerConfig.name}`);
                                        source = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$source$2f$OSM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__OSM$3e$__["OSM"]();
                                    }
                                    layer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$layer$2f$Tile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tile$3e$__["Tile"]({
                                        source: source,
                                        visible: layerConfig.visible,
                                        opacity: layerConfig.opacity,
                                        zIndex: 0
                                    });
                                } else {
                                    // Vector Layer (Mock Data for demo)
                                    const source = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$source$2f$Vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Vector$3e$__["Vector"]();
                                    // Generate mock features if empty and visible
                                    if (layerConfig.visible && source.getFeatures().length === 0) {
                                        const count = 5;
                                        const centerLon = 107.63;
                                        const centerLat = -2.85;
                                        for(let i = 0; i < count; i++){
                                            // Randomize position near Belitung
                                            const lon = centerLon + (Math.random() - 0.5) * 0.15;
                                            const lat = centerLat + (Math.random() - 0.5) * 0.15;
                                            let geometry;
                                            if (layerConfig.geometryType === 'Polygon') {
                                                // Create a small triangle/polygon
                                                const offset = 0.01;
                                                geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$geom$2f$Polygon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Polygon$3e$__["Polygon"]([
                                                    [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$proj$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fromLonLat"])([
                                                            lon,
                                                            lat
                                                        ]),
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$proj$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fromLonLat"])([
                                                            lon + offset,
                                                            lat - offset
                                                        ]),
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$proj$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fromLonLat"])([
                                                            lon - offset,
                                                            lat - offset
                                                        ]),
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$proj$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fromLonLat"])([
                                                            lon,
                                                            lat
                                                        ])
                                                    ]
                                                ]);
                                            } else if (layerConfig.geometryType === 'LineString') {
                                                // Create a squiggly line
                                                geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$geom$2f$LineString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LineString$3e$__["LineString"]([
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$proj$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fromLonLat"])([
                                                        lon,
                                                        lat
                                                    ]),
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$proj$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fromLonLat"])([
                                                        lon + 0.02,
                                                        lat + 0.01
                                                    ]),
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$proj$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fromLonLat"])([
                                                        lon + 0.04,
                                                        lat - 0.01
                                                    ])
                                                ]);
                                            } else {
                                                // Default Point
                                                geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$geom$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Point$3e$__["Point"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$proj$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fromLonLat"])([
                                                    lon,
                                                    lat
                                                ]));
                                            }
                                            const feat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$Feature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                                                geometry
                                            });
                                            feat.set('name', `${layerConfig.name} - Unit ${i + 1}`);
                                            feat.set('Type', layerConfig.geometryType || 'Unknown');
                                            feat.set('Zone Code', `Z-${Math.floor(Math.random() * 100)}`);
                                            feat.set('Status', Math.random() > 0.5 ? 'Verified' : 'Pending');
                                            feat.setId(`${layerConfig.id}-${i}`);
                                            source.addFeature(feat);
                                        }
                                    }
                                    layer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$layer$2f$Vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Vector$3e$__["Vector"]({
                                        source: source,
                                        visible: layerConfig.visible,
                                        opacity: layerConfig.opacity,
                                        zIndex: 10,
                                        style: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Style$3e$__["Style"]({
                                            fill: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Fill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fill$3e$__["Fill"]({
                                                color: layerConfig.color ? `${layerConfig.color}40` : 'rgba(16, 185, 129, 0.2)'
                                            }),
                                            stroke: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Stroke$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stroke$3e$__["Stroke"]({
                                                color: layerConfig.color || '#10b981',
                                                width: 2
                                            }),
                                            image: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"]({
                                                radius: 5,
                                                fill: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Fill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fill$3e$__["Fill"]({
                                                    color: layerConfig.color || '#10b981'
                                                }),
                                                stroke: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Stroke$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stroke$3e$__["Stroke"]({
                                                    color: '#fff',
                                                    width: 1
                                                })
                                            })
                                        })
                                    });
                                }
                                map.addLayer(layer);
                                layerRefs.current[layerConfig.id] = layer;
                            } else {
                                // Update existing layer properties
                                layer.setVisible(layerConfig.visible);
                                layer.setOpacity(layerConfig.opacity);
                            }
                        }
                    }["MapViewer.useEffect"]);
                }
            }["MapViewer.useEffect"]);
        }
    }["MapViewer.useEffect"], [
        layerGroups
    ]);
    // Handle File Uploads (GeoJSON support)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MapViewer.useEffect": ()=>{
            if (!filesToLoad || !mapRef.current) return;
            const files = Array.from(filesToLoad);
            files.forEach({
                "MapViewer.useEffect": (file)=>{
                    console.log('Processing file:', file.name);
                    if (processedFiles.has(file.name)) return;
                    const reader = new FileReader();
                    if (file.name.endsWith('.geojson') || file.name.endsWith('.json')) {
                        reader.onload = ({
                            "MapViewer.useEffect": (e)=>{
                                const result = e.target?.result;
                                if (typeof result === 'string') {
                                    try {
                                        const features = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$format$2f$GeoJSON$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]().readFeatures(JSON.parse(result), {
                                            featureProjection: mapRef.current?.getView().getProjection()
                                        });
                                        const vectorSource = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$source$2f$Vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Vector$3e$__["Vector"]({
                                            features: features
                                        });
                                        const vectorLayer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$layer$2f$Vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Vector$3e$__["Vector"]({
                                            source: vectorSource,
                                            style: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Style$3e$__["Style"]({
                                                stroke: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Stroke$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stroke$3e$__["Stroke"]({
                                                    color: '#f59e0b',
                                                    width: 2
                                                }),
                                                fill: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Fill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fill$3e$__["Fill"]({
                                                    color: 'rgba(245, 158, 11, 0.1)'
                                                }),
                                                image: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"]({
                                                    radius: 6,
                                                    fill: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Fill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fill$3e$__["Fill"]({
                                                        color: '#f59e0b'
                                                    }),
                                                    stroke: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Stroke$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stroke$3e$__["Stroke"]({
                                                        color: '#fff',
                                                        width: 2
                                                    })
                                                })
                                            })
                                        });
                                        mapRef.current?.addLayer(vectorLayer);
                                        // Zoom to extent
                                        if (features.length > 0) {
                                            const extent = vectorSource.getExtent();
                                            mapRef.current?.getView().fit(extent, {
                                                padding: [
                                                    50,
                                                    50,
                                                    50,
                                                    50
                                                ],
                                                duration: 1000
                                            });
                                        }
                                        setProcessedFiles({
                                            "MapViewer.useEffect": (prev)=>new Set(prev).add(file.name)
                                        }["MapViewer.useEffect"]);
                                    } catch (err) {
                                        console.error('Error parsing GeoJSON', err);
                                    }
                                }
                            }
                        })["MapViewer.useEffect"];
                        reader.readAsText(file);
                    } else {
                        console.log(`File ${file.name} received. Requires additional parsers.`);
                    }
                }
            }["MapViewer.useEffect"]);
        }
    }["MapViewer.useEffect"], [
        filesToLoad,
        processedFiles
    ]);
    // Custom Control Actions
    const handleZoomIn = ()=>{
        const view = mapRef.current?.getView();
        view?.animate({
            zoom: (view.getZoom() || 0) + 1,
            duration: 250
        });
    };
    const handleZoomOut = ()=>{
        const view = mapRef.current?.getView();
        view?.animate({
            zoom: (view.getZoom() || 0) - 1,
            duration: 250
        });
    };
    const handleReset = ()=>{
        // Reset to Belitung
        mapRef.current?.getView().animate({
            center: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$proj$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fromLonLat"])([
                107.63,
                -2.85
            ]),
            zoom: 11,
            duration: 500
        });
    };
    const handleLocate = ()=>{
        if (isLocating) return;
        if (!navigator.geolocation) {
            alert('Geolocation is not supported by your browser');
            return;
        }
        setIsLocating(true);
        navigator.geolocation.getCurrentPosition((position)=>{
            setIsLocating(false);
            const { latitude, longitude } = position.coords;
            const coords = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$proj$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fromLonLat"])([
                longitude,
                latitude
            ]);
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
                const iconFeature = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$Feature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                    geometry: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$geom$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Point$3e$__["Point"](coords),
                    name: 'My Location',
                    isUserLocation: true
                });
                const iconStyle = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Style$3e$__["Style"]({
                    image: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Icon$3e$__["Icon"]({
                        src: 'data:image/svg+xml;utf8,' + encodeURIComponent(svgString),
                        scale: 1,
                        anchor: [
                            0.5,
                            0.5
                        ]
                    })
                });
                iconFeature.setStyle(iconStyle);
                source.addFeature(iconFeature);
                mapRef.current?.getView().animate({
                    center: coords,
                    zoom: 14,
                    duration: 1500
                });
            }
        }, (error)=>{
            setIsLocating(false);
            let errorMessage = 'An unknown error occurred.';
            switch(error.code){
                case 1:
                    errorMessage = 'User denied the request for Geolocation.';
                    break;
                case 2:
                    errorMessage = 'Location information is unavailable.';
                    break;
                case 3:
                    errorMessage = 'The request to get user location timed out.';
                    break;
            }
            console.error('Geolocation error:', errorMessage, error);
            alert(`Unable to locate: ${errorMessage}`);
        }, {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-full bg-slate-950",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: mapElement,
                className: "w-full h-full"
            }, void 0, false, {
                fileName: "[project]/src/components/MapViewer.tsx",
                lineNumber: 482,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-6 left-6 z-10 flex items-center gap-4 bg-slate-900/80 backdrop-blur-md p-3 pr-6 rounded-2xl border border-slate-700/50 shadow-2xl select-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "https://res.cloudinary.com/killtdj/image/upload/v1719635543/Kabupaten_Belitung_paacyj.png",
                        alt: "Logo",
                        className: "w-10 h-12 object-contain drop-shadow-md"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MapViewer.tsx",
                        lineNumber: 486,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-black text-white leading-none tracking-tighter",
                                children: "SIMTARU"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MapViewer.tsx",
                                lineNumber: 492,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[10px] text-primary-400 font-bold uppercase tracking-widest mt-0.5 border-t border-slate-700 pt-0.5",
                                children: "Kabupaten Belitung"
                            }, void 0, false, {
                                fileName: "[project]/src/components/MapViewer.tsx",
                                lineNumber: 495,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MapViewer.tsx",
                        lineNumber: 491,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MapViewer.tsx",
                lineNumber: 485,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-6 right-6 flex flex-col gap-3 z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleLocate,
                                disabled: isLocating,
                                className: "p-3 bg-slate-800 text-primary-400 hover:text-primary-300 hover:bg-slate-700 disabled:opacity-70 disabled:cursor-wait rounded shadow-lg border border-slate-600 transition-colors group relative",
                                title: "Locate Me",
                                children: [
                                    isLocating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        size: 20,
                                        className: "animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MapViewer.tsx",
                                        lineNumber: 512,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$locate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Locate$3e$__["Locate"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MapViewer.tsx",
                                        lineNumber: 514,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute right-full mr-2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap",
                                        children: isLocating ? 'Locating...' : 'Locate Me'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MapViewer.tsx",
                                        lineNumber: 516,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MapViewer.tsx",
                                lineNumber: 505,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleReset,
                                className: "p-3 bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 rounded shadow-lg border border-slate-600 transition-colors",
                                title: "Reset View",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crosshair$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crosshair$3e$__["Crosshair"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MapViewer.tsx",
                                    lineNumber: 526,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/MapViewer.tsx",
                                lineNumber: 521,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MapViewer.tsx",
                        lineNumber: 504,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col rounded overflow-hidden shadow-lg border border-slate-600 bg-slate-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleZoomIn,
                                className: "p-3 text-slate-200 hover:text-white hover:bg-slate-700 border-b border-slate-600 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MapViewer.tsx",
                                    lineNumber: 536,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/MapViewer.tsx",
                                lineNumber: 532,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleZoomOut,
                                className: "p-3 text-slate-200 hover:text-white hover:bg-slate-700 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MapViewer.tsx",
                                    lineNumber: 542,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/MapViewer.tsx",
                                lineNumber: 538,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MapViewer.tsx",
                        lineNumber: 531,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute -bottom-1 -right-1 pointer-events-none opacity-50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"], {
                            size: 64,
                            className: "text-slate-600",
                            strokeWidth: 1
                        }, void 0, false, {
                            fileName: "[project]/src/components/MapViewer.tsx",
                            lineNumber: 548,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/MapViewer.tsx",
                        lineNumber: 547,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MapViewer.tsx",
                lineNumber: 502,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-1 left-2 text-[10px] text-slate-500 font-mono pointer-events-none z-10 opacity-70",
                children: "© OpenStreetMap contributors | GeoGreen Engine"
            }, void 0, false, {
                fileName: "[project]/src/components/MapViewer.tsx",
                lineNumber: 557,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MapViewer.tsx",
        lineNumber: 481,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MapViewer, "AYz5z3m3YJrKMahXtqVv0KoaCDg=");
_c = MapViewer;
const __TURBOPACK__default__export__ = MapViewer;
var _c;
__turbopack_context__.k.register(_c, "MapViewer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/MapViewer.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/MapViewer.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_components_MapViewer_tsx_bccfd62d._.js.map