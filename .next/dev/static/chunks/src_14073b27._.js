(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/hooks/useFileImporter.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFileImporter",
    ()=>useFileImporter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$format$2f$GeoJSON$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ol/format/GeoJSON.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$layer$2f$Vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Vector$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/layer/Vector.js [app-client] (ecmascript) <export default as Vector>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$source$2f$Vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Vector$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/source/Vector.js [app-client] (ecmascript) <export default as Vector>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/style/Circle.js [app-client] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Fill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fill$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/style/Fill.js [app-client] (ecmascript) <export default as Fill>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Stroke$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stroke$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/style/Stroke.js [app-client] (ecmascript) <export default as Stroke>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Style$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/style/Style.js [app-client] (ecmascript) <export default as Style>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const useFileImporter = (map, filesToLoad)=>{
    _s();
    // Keep track of layers associated with each file name
    const fileLayersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFileImporter.useEffect": ()=>{
            if (!map) return;
            const currentFileNames = new Set(filesToLoad.map({
                "useFileImporter.useEffect": (f)=>f.name
            }["useFileImporter.useEffect"]));
            const activeLayers = fileLayersRef.current;
            // 1. Remove layers for files that are no longer in the list
            activeLayers.forEach({
                "useFileImporter.useEffect": (layer, fileName)=>{
                    if (!currentFileNames.has(fileName)) {
                        console.log('Removing layer for:', fileName);
                        map.removeLayer(layer);
                        activeLayers.delete(fileName);
                    }
                }
            }["useFileImporter.useEffect"]);
            // 2. Add layers for new files
            filesToLoad.forEach({
                "useFileImporter.useEffect": (file)=>{
                    if (activeLayers.has(file.name)) return; // Already loaded
                    console.log('Processing new file:', file.name);
                    if (file.name.endsWith('.geojson') || file.name.endsWith('.json')) {
                        const reader = new FileReader();
                        reader.onload = ({
                            "useFileImporter.useEffect": (e)=>{
                                const result = e.target?.result;
                                if (typeof result === 'string') {
                                    try {
                                        // Parse GeoJSON
                                        const features = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$format$2f$GeoJSON$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]().readFeatures(JSON.parse(result), {
                                            featureProjection: map.getView().getProjection()
                                        });
                                        const vectorSource = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$source$2f$Vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Vector$3e$__["Vector"]({
                                            features: features
                                        });
                                        // Create Layer with Style
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
                                            }),
                                            properties: {
                                                title: file.name
                                            }
                                        });
                                        // Add to Map and Track it
                                        map.addLayer(vectorLayer);
                                        activeLayers.set(file.name, vectorLayer);
                                        // Zoom to extent
                                        if (features.length > 0) {
                                            const extent = vectorSource.getExtent();
                                            map.getView().fit(extent, {
                                                padding: [
                                                    50,
                                                    50,
                                                    50,
                                                    50
                                                ],
                                                duration: 1000
                                            });
                                        }
                                    } catch (err) {
                                        console.error('Error parsing GeoJSON', err);
                                    }
                                }
                            }
                        })["useFileImporter.useEffect"];
                        reader.readAsText(file);
                    } else {
                        console.warn(`File ${file.name} is not a supported GeoJSON file.`);
                    }
                }
            }["useFileImporter.useEffect"]);
        }
    }["useFileImporter.useEffect"], [
        filesToLoad,
        map
    ]); // Re-run when file list changes
};
_s(useFileImporter, "OofJ8o9Y0WUgiz/6XMN9sVfpIL4=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useLayerManager.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLayerManager",
    ()=>useLayerManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$Feature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ol/Feature.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$format$2f$MVT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ol/format/MVT.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$geom$2f$LineString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LineString$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/geom/LineString.js [app-client] (ecmascript) <export default as LineString>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$geom$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Point$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/geom/Point.js [app-client] (ecmascript) <export default as Point>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$geom$2f$Polygon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Polygon$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/geom/Polygon.js [app-client] (ecmascript) <export default as Polygon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$layer$2f$Tile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tile$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/layer/Tile.js [app-client] (ecmascript) <export default as Tile>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$layer$2f$Vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Vector$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/layer/Vector.js [app-client] (ecmascript) <export default as Vector>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$layer$2f$VectorTile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ol/layer/VectorTile.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$proj$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/proj.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$source$2f$OSM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__OSM$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/source/OSM.js [app-client] (ecmascript) <export default as OSM>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$source$2f$Vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Vector$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/source/Vector.js [app-client] (ecmascript) <export default as Vector>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$source$2f$XYZ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XYZ$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/source/XYZ.js [app-client] (ecmascript) <export default as XYZ>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$source$2f$VectorTile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ol/source/VectorTile.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/style/Circle.js [app-client] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Fill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fill$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/style/Fill.js [app-client] (ecmascript) <export default as Fill>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Stroke$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stroke$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/style/Stroke.js [app-client] (ecmascript) <export default as Stroke>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Style$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/style/Style.js [app-client] (ecmascript) <export default as Style>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants.ts [app-client] (ecmascript)");
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
const useLayerManager = (map, layerGroups)=>{
    _s();
    const layerRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useLayerManager.useEffect": ()=>{
            if (!map) return;
            layerGroups.forEach({
                "useLayerManager.useEffect": (group)=>{
                    group.layers.forEach({
                        "useLayerManager.useEffect": (layerConfig)=>{
                            let layer = layerRefs.current[layerConfig.id];
                            // Create layer if it doesn't exist
                            if (!layer) {
                                if (layerConfig.type === 'tile') {
                                    let source;
                                    if (layerConfig.source && layerConfig.source.startsWith('http')) {
                                        source = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$source$2f$XYZ$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XYZ$3e$__["XYZ"]({
                                            url: layerConfig.source,
                                            maxZoom: 20,
                                            crossOrigin: 'anonymous'
                                        });
                                    } else {
                                        source = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$source$2f$OSM$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__OSM$3e$__["OSM"]();
                                    }
                                    layer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$layer$2f$Tile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tile$3e$__["Tile"]({
                                        source: source,
                                        visible: layerConfig.visible,
                                        opacity: layerConfig.opacity,
                                        zIndex: 0
                                    });
                                } else if (layerConfig.type === 'mvt') {
                                    const vectorTileSource = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$source$2f$VectorTile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                                        format: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$format$2f$MVT$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](),
                                        url: layerConfig.source,
                                        projection: 'EPSG:3857'
                                    });
                                    layer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$layer$2f$VectorTile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                                        source: vectorTileSource,
                                        visible: layerConfig.visible,
                                        opacity: layerConfig.opacity,
                                        zIndex: 10,
                                        style: {
                                            "useLayerManager.useEffect": (feature)=>{
                                                const props = feature.getProperties();
                                                const namobj = props.namobj || props.Namobj;
                                                if (layerConfig.geometryType === 'LineString') {
                                                    const styleConfig = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LINE_STYLE"][namobj];
                                                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Style$3e$__["Style"]({
                                                        stroke: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Stroke$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stroke$3e$__["Stroke"]({
                                                            color: styleConfig?.color || layerConfig.color || '#3b82f6',
                                                            width: styleConfig?.width || 2,
                                                            lineDash: styleConfig?.dash || undefined
                                                        })
                                                    });
                                                }
                                                if (layerConfig.geometryType === 'Point') {
                                                    const styleConfig = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["POINT_STYLE"][namobj];
                                                    const baseColor = styleConfig?.color || layerConfig.color || '#ef4444';
                                                    const radius = styleConfig?.size ? styleConfig.size / 2 : 5; // Convert diameter to radius
                                                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Style$3e$__["Style"]({
                                                        image: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"]({
                                                            radius: radius,
                                                            fill: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Fill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fill$3e$__["Fill"]({
                                                                color: baseColor
                                                            }),
                                                            stroke: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Stroke$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stroke$3e$__["Stroke"]({
                                                                color: styleConfig?.outlineColor || '#ffffff',
                                                                width: 1.5
                                                            })
                                                        })
                                                    });
                                                }
                                                const colorEntry = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["polaRuangColorSet"].find({
                                                    "useLayerManager.useEffect.colorEntry": (entry)=>entry.namobj === namobj
                                                }["useLayerManager.useEffect.colorEntry"]);
                                                const color = colorEntry ? colorEntry.color : layerConfig.color || '#10b981';
                                                return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Style$3e$__["Style"]({
                                                    stroke: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Stroke$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stroke$3e$__["Stroke"]({
                                                        color: color,
                                                        width: 1
                                                    }),
                                                    fill: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Fill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fill$3e$__["Fill"]({
                                                        color: `${color}80`
                                                    })
                                                });
                                            }
                                        }["useLayerManager.useEffect"]
                                    });
                                } else {
                                    // Vector Layer (Mock Data)
                                    const source = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$source$2f$Vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Vector$3e$__["Vector"]();
                                    // Generate mock features only if empty and visible
                                    if (layerConfig.visible && source.getFeatures().length === 0) {
                                        const count = 5;
                                        const centerLon = 107.63;
                                        const centerLat = -2.85;
                                        for(let i = 0; i < count; i++){
                                            const lon = centerLon + (Math.random() - 0.5) * 0.15;
                                            const lat = centerLat + (Math.random() - 0.5) * 0.15;
                                            let geometry;
                                            if (layerConfig.geometryType === 'Polygon') {
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
                                if (layerConfig.apiKey) {
                                    layer.set('apiKey', layerConfig.apiKey);
                                }
                                map.addLayer(layer);
                                layerRefs.current[layerConfig.id] = layer;
                            } else {
                                layer.setVisible(layerConfig.visible);
                                layer.setOpacity(layerConfig.opacity);
                            }
                        }
                    }["useLayerManager.useEffect"]);
                }
            }["useLayerManager.useEffect"]);
        }
    }["useLayerManager.useEffect"], [
        map,
        layerGroups
    ]);
    return layerRefs;
};
_s(useLayerManager, "SX4ErZya8ShBT0chNUROqZ/KSfo=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useMapInit.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMapInit",
    ()=>useMapInit
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$Map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ol/Map.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$View$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ol/View.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$control$2f$defaults$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ol/control/defaults.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$proj$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/proj.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
const useMapInit = (mapElement)=>{
    _s();
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [mapInstance, setMapInstance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMapInit.useEffect": ()=>{
            if (!mapElement.current || mapRef.current) return;
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
            mapRef.current = map;
            setMapInstance(map);
            return ({
                "useMapInit.useEffect": ()=>{
                    map.setTarget(undefined);
                    mapRef.current = null;
                    setMapInstance(null);
                }
            })["useMapInit.useEffect"];
        }
    }["useMapInit.useEffect"], [
        mapElement
    ]);
    return {
        mapRef,
        mapInstance
    };
};
_s(useMapInit, "vJokc/rop1e6qjnMu2XwRTD88X4=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useMapInteractions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMapInteractions",
    ()=>useMapInteractions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$Feature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ol/Feature.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$geom$2f$LineString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LineString$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/geom/LineString.js [app-client] (ecmascript) <export default as LineString>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$geom$2f$MultiPolygon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MultiPolygon$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/geom/MultiPolygon.js [app-client] (ecmascript) <export default as MultiPolygon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$geom$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Point$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/geom/Point.js [app-client] (ecmascript) <export default as Point>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$geom$2f$Polygon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Polygon$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/geom/Polygon.js [app-client] (ecmascript) <export default as Polygon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$layer$2f$Vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Vector$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/layer/Vector.js [app-client] (ecmascript) <export default as Vector>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$source$2f$Vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Vector$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/source/Vector.js [app-client] (ecmascript) <export default as Vector>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/style/Circle.js [app-client] (ecmascript) <export default as Circle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Fill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fill$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/style/Fill.js [app-client] (ecmascript) <export default as Fill>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Stroke$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stroke$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/style/Stroke.js [app-client] (ecmascript) <export default as Stroke>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Style$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/style/Style.js [app-client] (ecmascript) <export default as Style>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
const useMapInteractions = (map, onFeatureSelect)=>{
    _s();
    // Persistent source and layer for highlighting selection
    const highlightSource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$source$2f$Vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Vector$3e$__["Vector"]());
    const highlightLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$layer$2f$Vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Vector$3e$__["Vector"]({
        source: highlightSource.current,
        style: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Style$3e$__["Style"]({
            stroke: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Stroke$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stroke$3e$__["Stroke"]({
                color: '#00ffff',
                width: 3
            }),
            fill: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Fill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fill$3e$__["Fill"]({
                color: 'rgba(0, 255, 255, 0.2)'
            }),
            image: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Circle$3e$__["Circle"]({
                radius: 7,
                fill: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Fill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Fill$3e$__["Fill"]({
                    color: '#00ffff'
                }),
                stroke: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Stroke$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Stroke$3e$__["Stroke"]({
                    color: '#fff',
                    width: 2
                })
            })
        }),
        zIndex: 999
    }));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMapInteractions.useEffect": ()=>{
            if (!map) return;
            // Add highlight layer to map
            map.addLayer(highlightLayer.current);
            const handleMapClick2 = {
                "useMapInteractions.useEffect.handleMapClick2": (e)=>{
                    // Reset highlight
                    highlightSource.current.clear();
                    const pixel = e.pixel;
                    const hit = map.forEachFeatureAtPixel(pixel, {
                        "useMapInteractions.useEffect.handleMapClick2.hit": (feat, layer)=>({
                                feature: feat,
                                layer
                            })
                    }["useMapInteractions.useEffect.handleMapClick2.hit"], {
                        hitTolerance: 5
                    });
                    if (hit && hit.feature) {
                        const feature = hit.feature;
                        const layer = hit.layer;
                        // Get properties
                        const props = feature.getProperties();
                        // Ignore user location or specialized features if needed
                        if (props.isUserLocation) {
                            onFeatureSelect(null);
                            return;
                        }
                        // Handle Geometry for Highlight
                        const geometry = feature.getGeometry();
                        if (geometry) {
                            // Clone feature for highlight layer
                            let highlightFeature;
                            // Check if geometry is observable (standard Geometry) or RenderFeature geometry
                            // RenderFeature geometries often lack addEventListener (inherited from Observable)
                            if (typeof geometry.addEventListener === 'function') {
                                highlightFeature = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$Feature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                                    geometry: geometry
                                });
                            } else {
                                // It's likely a RenderFeature geometry. Reconstruct it.
                                const type = geometry.getType();
                                const flatCoords = geometry.getFlatCoordinates();
                                const ends = geometry.getEnds ? geometry.getEnds() : undefined;
                                let newGeom;
                                // NOTE: For simplicity in this specific project context where we know it's mostly Polygons:
                                if (type === 'Polygon') {
                                    newGeom = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$geom$2f$Polygon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Polygon$3e$__["Polygon"](flatCoords, 'XY', ends);
                                } else if (type === 'MultiPolygon') {
                                    newGeom = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$geom$2f$MultiPolygon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MultiPolygon$3e$__["MultiPolygon"](flatCoords, 'XY', ends);
                                } else if (type === 'Point') {
                                    newGeom = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$geom$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Point$3e$__["Point"](flatCoords, 'XY');
                                } else if (type === 'LineString') {
                                    newGeom = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$geom$2f$LineString$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LineString$3e$__["LineString"](flatCoords, 'XY');
                                }
                                if (newGeom) {
                                    highlightFeature = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$Feature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                                        geometry: newGeom
                                    });
                                }
                            }
                            if (highlightFeature) {
                                highlightSource.current.addFeature(highlightFeature);
                            }
                        }
                        const { geometry: geom, ...cleanProps } = props;
                        const apiKey = layer?.get('apiKey') || 'unknown';
                        // Trigger select callback
                        onFeatureSelect({
                            id: feature.getId()?.toString() || Math.random().toString(36).substr(2, 9),
                            properties: cleanProps,
                            layerId: apiKey,
                            geometryType: geometry?.getType() || 'Unknown'
                        });
                    } else {
                        onFeatureSelect(null);
                    }
                }
            }["useMapInteractions.useEffect.handleMapClick2"];
            map.on('singleclick', handleMapClick2);
            return ({
                "useMapInteractions.useEffect": ()=>{
                    // Cleanup
                    map.un('singleclick', handleMapClick2);
                    map.removeLayer(highlightLayer.current);
                    highlightSource.current.clear();
                }
            })["useMapInteractions.useEffect"];
        }
    }["useMapInteractions.useEffect"], [
        map,
        onFeatureSelect
    ]);
};
_s(useMapInteractions, "Ql6PJFiIPdX516lbSpn9Na9e6o4=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/hooks/useUserLocation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useUserLocation",
    ()=>useUserLocation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$Feature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ol/Feature.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$geom$2f$Point$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Point$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/geom/Point.js [app-client] (ecmascript) <export default as Point>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$layer$2f$Vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Vector$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/layer/Vector.js [app-client] (ecmascript) <export default as Vector>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$proj$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/proj.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$source$2f$Vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Vector$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/source/Vector.js [app-client] (ecmascript) <export default as Vector>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Icon$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/style/Icon.js [app-client] (ecmascript) <export default as Icon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$style$2f$Style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Style$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/style/Style.js [app-client] (ecmascript) <export default as Style>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
;
;
const useUserLocation = (map)=>{
    _s();
    const [isLocating, setIsLocating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const userLocationLayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useUserLocation.useEffect": ()=>{
            if (!map) return;
            // Prevent adding multiple layers
            if (userLocationLayerRef.current) return;
            const userSource = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$source$2f$Vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Vector$3e$__["Vector"]();
            const userLayer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$layer$2f$Vector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Vector$3e$__["Vector"]({
                source: userSource,
                zIndex: 999
            });
            map.addLayer(userLayer);
            userLocationLayerRef.current = userLayer;
            return ({
                "useUserLocation.useEffect": ()=>{
                // Cleanup logic if needed, but layer removal on unmount usually handled by map disposal
                }
            })["useUserLocation.useEffect"];
        }
    }["useUserLocation.useEffect"], [
        map
    ]);
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
                map?.getView().animate({
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
    return {
        isLocating,
        handleLocate
    };
};
_s(useUserLocation, "5cOhwtph0JYjytCpO1hrrDebKJA=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/LegendPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const LAYERS = [
    {
        id: 'rtrw',
        label: 'RTRW Belitung'
    },
    {
        id: 'badau',
        label: 'RDTR Badau'
    },
    {
        id: 'geopark',
        label: 'RDTR Geopark'
    },
    {
        id: 'tanjung',
        label: 'RDTR Tanjung Kelayang'
    }
];
const LegendPanel = ()=>{
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLayerMenuOpen, setIsLayerMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // Untuk custom dropdown
    const [activeLayer, setActiveLayer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('rtrw');
    const [activeCategories, setActiveCategories] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    // Ref untuk click outside closing
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Close dropdown click outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LegendPanel.useEffect": ()=>{
            function handleClickOutside(event) {
                if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                    setIsLayerMenuOpen(false);
                }
            }
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "LegendPanel.useEffect": ()=>document.removeEventListener('mousedown', handleClickOutside)
            })["LegendPanel.useEffect"];
        }
    }["LegendPanel.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LegendPanel.useEffect": ()=>{
            const fetchCategories = {
                "LegendPanel.useEffect.fetchCategories": async ()=>{
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
                    } finally{
                        setIsLoading(false);
                    }
                }
            }["LegendPanel.useEffect.fetchCategories"];
            if (isOpen) {
                fetchCategories();
            }
        }
    }["LegendPanel.useEffect"], [
        activeLayer,
        isOpen
    ]);
    // Filtering logic (API Categories + Local Search)
    const displayItems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LegendPanel.useMemo[displayItems]": ()=>{
            let items = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["polaRuangColorSet"].filter({
                "LegendPanel.useMemo[displayItems].items": (item)=>activeCategories.includes(item.namobj)
            }["LegendPanel.useMemo[displayItems].items"]);
            if (searchQuery) {
                const lowerQuery = searchQuery.toLowerCase();
                items = items.filter({
                    "LegendPanel.useMemo[displayItems]": (item)=>item.namobj.toLowerCase().includes(lowerQuery)
                }["LegendPanel.useMemo[displayItems]"]);
            }
            return items.sort({
                "LegendPanel.useMemo[displayItems]": (a, b)=>a.namobj.localeCompare(b.namobj)
            }["LegendPanel.useMemo[displayItems]"]);
        }
    }["LegendPanel.useMemo[displayItems]"], [
        activeCategories,
        searchQuery,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["polaRuangColorSet"]
    ]);
    const activeLayerLabel = LAYERS.find((l)=>l.id === activeLayer)?.label;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute bottom-6 right-20 z-20 flex flex-col items-end pointer-events-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setIsOpen(!isOpen),
                    className: `h-12 w-12 md:w-auto md:px-4 rounded-md shadow-xl transition-all duration-300 flex items-center justify-center gap-3 border ${isOpen ? 'bg-primary-600 border-primary-500 text-white shadow-primary-900/20' : 'bg-slate-900/90 border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-slate-600 backdrop-blur-sm'}`,
                    title: "Legenda Peta",
                    children: [
                        isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/src/components/LegendPanel.tsx",
                            lineNumber: 103,
                            columnNumber: 31
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/src/components/LegendPanel.tsx",
                            lineNumber: 103,
                            columnNumber: 49
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `text-xs font-bold uppercase hidden md:inline transition-all ${isOpen ? 'text-white' : 'text-slate-300'}`,
                            children: "Legenda"
                        }, void 0, false, {
                            fileName: "[project]/src/components/LegendPanel.tsx",
                            lineNumber: 104,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/LegendPanel.tsx",
                    lineNumber: 94,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/LegendPanel.tsx",
                lineNumber: 93,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-auto mt-3 w-80 max-h-[65vh] flex flex-col bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-2xl animate-in slide-in-from-bottom-4 duration-300 origin-bottom-right overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-b border-slate-800 bg-gradient-to-b from-slate-800/50 to-slate-900/50 space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-primary-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LegendPanel.tsx",
                                        lineNumber: 120,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-bold uppercase tracking-widest",
                                        children: "Active Layer"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LegendPanel.tsx",
                                        lineNumber: 121,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/LegendPanel.tsx",
                                lineNumber: 119,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                ref: dropdownRef,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsLayerMenuOpen(!isLayerMenuOpen),
                                        className: "w-full flex items-center justify-between bg-slate-950/50 hover:bg-slate-950 border border-slate-700 hover:border-slate-600 text-slate-200 text-sm rounded-lg px-3 py-2.5 transition-all",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium truncate",
                                                children: activeLayerLabel
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/LegendPanel.tsx",
                                                lineNumber: 134,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                size: 16,
                                                className: `text-slate-400 transition-transform duration-200 ${isLayerMenuOpen ? 'rotate-180' : ''}`
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/LegendPanel.tsx",
                                                lineNumber: 137,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/LegendPanel.tsx",
                                        lineNumber: 128,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    isLayerMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-full left-0 right-0 mt-1 bg-slate-900 border border-slate-700 rounded-lg shadow-xl z-50 overflow-hidden py-1 animate-in fade-in zoom-in-95 duration-100",
                                        children: LAYERS.map((layer)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    setActiveLayer(layer.id);
                                                    setIsLayerMenuOpen(false);
                                                    setSearchQuery(''); // Reset search on layer change
                                                },
                                                className: "w-full text-left px-3 py-2 text-xs flex items-center justify-between hover:bg-slate-800 transition-colors text-slate-300 hover:text-white",
                                                children: [
                                                    layer.label,
                                                    activeLayer === layer.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        size: 14,
                                                        className: "text-primary-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/LegendPanel.tsx",
                                                        lineNumber: 160,
                                                        columnNumber: 49
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, layer.id, true, {
                                                fileName: "[project]/src/components/LegendPanel.tsx",
                                                lineNumber: 149,
                                                columnNumber: 41
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LegendPanel.tsx",
                                        lineNumber: 147,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/LegendPanel.tsx",
                                lineNumber: 127,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        size: 14,
                                        className: "absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LegendPanel.tsx",
                                        lineNumber: 173,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "Cari pola ruang...",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value),
                                        className: "w-full bg-slate-950/30 border border-slate-700/50 focus:border-primary-500/50 rounded-lg py-1.5 pl-9 pr-3 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-primary-500/20 transition-all"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LegendPanel.tsx",
                                        lineNumber: 177,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/LegendPanel.tsx",
                                lineNumber: 172,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/LegendPanel.tsx",
                        lineNumber: 118,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent",
                        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-40 flex flex-col items-center justify-center text-slate-500 gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    size: 24,
                                    className: "animate-spin text-primary-500"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LegendPanel.tsx",
                                    lineNumber: 191,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs",
                                    children: "Memuat data legenda..."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LegendPanel.tsx",
                                    lineNumber: 195,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LegendPanel.tsx",
                            lineNumber: 190,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0)) : displayItems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-32 flex flex-col items-center justify-center text-slate-500 px-6 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    size: 24,
                                    className: "mb-2 opacity-20"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LegendPanel.tsx",
                                    lineNumber: 201,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs italic",
                                    children: searchQuery ? `Tidak ada hasil untuk "${searchQuery}"` : 'Tidak ada data kategori untuk layer ini.'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LegendPanel.tsx",
                                    lineNumber: 202,
                                    columnNumber: 33
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LegendPanel.tsx",
                            lineNumber: 200,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-2 space-y-0.5",
                            children: displayItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "group flex items-start gap-3 p-2 hover:bg-white/5 rounded-lg transition-colors cursor-default",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-0.5 relative shrink-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-3.5 h-3.5 rounded-full shadow-sm ring-2 ring-slate-800 group-hover:ring-slate-700 transition-all",
                                                style: {
                                                    backgroundColor: item.color
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/LegendPanel.tsx",
                                                lineNumber: 217,
                                                columnNumber: 49
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LegendPanel.tsx",
                                            lineNumber: 216,
                                            columnNumber: 45
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-slate-300 group-hover:text-slate-100 leading-snug transition-colors",
                                            children: item.namobj
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LegendPanel.tsx",
                                            lineNumber: 225,
                                            columnNumber: 45
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/components/LegendPanel.tsx",
                                    lineNumber: 212,
                                    columnNumber: 41
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/components/LegendPanel.tsx",
                            lineNumber: 209,
                            columnNumber: 29
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/LegendPanel.tsx",
                        lineNumber: 188,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-2.5 border-t border-slate-800 bg-slate-900/80 text-[10px] text-slate-500 flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Total Kategori"
                            }, void 0, false, {
                                fileName: "[project]/src/components/LegendPanel.tsx",
                                lineNumber: 237,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-slate-800 px-1.5 py-0.5 rounded text-slate-400 font-mono",
                                children: displayItems.length
                            }, void 0, false, {
                                fileName: "[project]/src/components/LegendPanel.tsx",
                                lineNumber: 238,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/LegendPanel.tsx",
                        lineNumber: 236,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/LegendPanel.tsx",
                lineNumber: 116,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/LegendPanel.tsx",
        lineNumber: 91,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LegendPanel, "Xc4fEnGTLCuAOeNNw+9Vc4ehrFU=");
_c = LegendPanel;
const __TURBOPACK__default__export__ = LegendPanel;
var _c;
__turbopack_context__.k.register(_c, "LegendPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/map/MapAttribution.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const MapAttribution = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute bottom-1 left-2 text-[10px] text-slate-500 font-mono pointer-events-none z-10 opacity-70",
        children: "© OpenStreetMap contributors | GeoGreen Engine"
    }, void 0, false, {
        fileName: "[project]/src/components/map/MapAttribution.tsx",
        lineNumber: 3,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = MapAttribution;
const __TURBOPACK__default__export__ = MapAttribution;
var _c;
__turbopack_context__.k.register(_c, "MapAttribution");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/map/MapBrand.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const MapBrand = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute top-6 left-6 z-10 flex items-center gap-4 bg-slate-900/80 backdrop-blur-md p-3 pr-6 rounded-2xl border border-slate-700/50 shadow-2xl select-none",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "https://res.cloudinary.com/killtdj/image/upload/v1719635543/Kabupaten_Belitung_paacyj.png",
                alt: "Logo",
                className: "w-10 h-12 object-contain drop-shadow-md"
            }, void 0, false, {
                fileName: "[project]/src/components/map/MapBrand.tsx",
                lineNumber: 4,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-black text-white leading-none tracking-tighter",
                        children: "SIMTARU"
                    }, void 0, false, {
                        fileName: "[project]/src/components/map/MapBrand.tsx",
                        lineNumber: 10,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] text-primary-400 font-bold uppercase tracking-widest mt-0.5 border-t border-slate-700 pt-0.5",
                        children: "Kabupaten Belitung"
                    }, void 0, false, {
                        fileName: "[project]/src/components/map/MapBrand.tsx",
                        lineNumber: 13,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/map/MapBrand.tsx",
                lineNumber: 9,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/map/MapBrand.tsx",
        lineNumber: 3,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = MapBrand;
const __TURBOPACK__default__export__ = MapBrand;
var _c;
__turbopack_context__.k.register(_c, "MapBrand");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/map/MapControls.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/compass.js [app-client] (ecmascript) <export default as Compass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crosshair$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crosshair$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/crosshair.js [app-client] (ecmascript) <export default as Crosshair>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$locate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Locate$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/locate.js [app-client] (ecmascript) <export default as Locate>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
;
;
const MapControls = ({ onZoomIn, onZoomOut, onReset, onLocate, isLocating })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute bottom-6 right-6 flex flex-col gap-3 z-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onLocate,
                        disabled: isLocating,
                        className: "p-3 bg-slate-800 text-primary-400 hover:text-primary-300 hover:bg-slate-700 disabled:opacity-70 disabled:cursor-wait rounded shadow-lg border border-slate-600 transition-colors group relative",
                        title: "Locate Me",
                        children: [
                            isLocating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                size: 20,
                                className: "animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/src/components/map/MapControls.tsx",
                                lineNumber: 29,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$locate$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Locate$3e$__["Locate"], {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/src/components/map/MapControls.tsx",
                                lineNumber: 31,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute right-full mr-2 bg-slate-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap",
                                children: isLocating ? 'Locating...' : 'Locate Me'
                            }, void 0, false, {
                                fileName: "[project]/src/components/map/MapControls.tsx",
                                lineNumber: 33,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/map/MapControls.tsx",
                        lineNumber: 22,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onReset,
                        className: "p-3 bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700 rounded shadow-lg border border-slate-600 transition-colors",
                        title: "Reset View",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crosshair$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crosshair$3e$__["Crosshair"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/src/components/map/MapControls.tsx",
                            lineNumber: 43,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/map/MapControls.tsx",
                        lineNumber: 38,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/map/MapControls.tsx",
                lineNumber: 21,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col rounded overflow-hidden shadow-lg border border-slate-600 bg-slate-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onZoomIn,
                        className: "p-3 text-slate-200 hover:text-white hover:bg-slate-700 border-b border-slate-600 transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/src/components/map/MapControls.tsx",
                            lineNumber: 53,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/map/MapControls.tsx",
                        lineNumber: 49,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onZoomOut,
                        className: "p-3 text-slate-200 hover:text-white hover:bg-slate-700 transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
                            size: 20
                        }, void 0, false, {
                            fileName: "[project]/src/components/map/MapControls.tsx",
                            lineNumber: 59,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/map/MapControls.tsx",
                        lineNumber: 55,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/map/MapControls.tsx",
                lineNumber: 48,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -bottom-1 -right-1 pointer-events-none opacity-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"], {
                    size: 64,
                    className: "text-slate-600",
                    strokeWidth: 1
                }, void 0, false, {
                    fileName: "[project]/src/components/map/MapControls.tsx",
                    lineNumber: 65,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/map/MapControls.tsx",
                lineNumber: 64,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/map/MapControls.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = MapControls;
const __TURBOPACK__default__export__ = MapControls;
var _c;
__turbopack_context__.k.register(_c, "MapControls");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/MapViewer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$proj$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/ol/proj.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useFileImporter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useFileImporter.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLayerManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLayerManager.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMapInit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useMapInit.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMapInteractions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useMapInteractions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUserLocation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useUserLocation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LegendPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LegendPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$map$2f$MapAttribution$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/map/MapAttribution.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$map$2f$MapBrand$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/map/MapBrand.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$map$2f$MapControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/map/MapControls.tsx [app-client] (ecmascript)");
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
const MapViewer = ({ layerGroups, onFeatureSelect, filesToLoad })=>{
    _s();
    const mapElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // 1. Initialize Map
    const { mapRef, mapInstance } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMapInit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMapInit"])(mapElement);
    // 2. Manage Layers
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLayerManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayerManager"])(mapInstance, layerGroups);
    // 3. Handle Interactions (Selection)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMapInteractions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMapInteractions"])(mapInstance, onFeatureSelect);
    // 4. Handle User Location
    const { isLocating, handleLocate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUserLocation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserLocation"])(mapInstance);
    // 5. Handle File Imports
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useFileImporter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFileImporter"])(mapInstance, filesToLoad);
    // 6. Navigation Handlers
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
        mapRef.current?.getView().animate({
            center: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$proj$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["fromLonLat"])([
                107.63,
                -2.85
            ]),
            zoom: 11,
            duration: 500
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
                lineNumber: 63,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$map$2f$MapBrand$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/MapViewer.tsx",
                lineNumber: 65,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$map$2f$MapControls$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onZoomIn: handleZoomIn,
                onZoomOut: handleZoomOut,
                onReset: handleReset,
                onLocate: handleLocate,
                isLocating: isLocating
            }, void 0, false, {
                fileName: "[project]/src/components/MapViewer.tsx",
                lineNumber: 67,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LegendPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/MapViewer.tsx",
                lineNumber: 75,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$map$2f$MapAttribution$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/MapViewer.tsx",
                lineNumber: 77,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MapViewer.tsx",
        lineNumber: 62,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MapViewer, "CbxTAcadTJigpbO/5ZuSQqLBd1w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMapInit$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMapInit"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLayerManager$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayerManager"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMapInteractions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMapInteractions"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useUserLocation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUserLocation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useFileImporter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFileImporter"]
    ];
});
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

//# sourceMappingURL=src_14073b27._.js.map