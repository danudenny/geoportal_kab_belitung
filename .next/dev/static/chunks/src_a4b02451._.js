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
    const [processedFiles, setProcessedFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useFileImporter.useEffect": ()=>{
            if (!filesToLoad || !map) return;
            const files = Array.from(filesToLoad);
            files.forEach({
                "useFileImporter.useEffect": (file)=>{
                    console.log('Processing file:', file.name);
                    if (processedFiles.has(file.name)) return;
                    const reader = new FileReader();
                    if (file.name.endsWith('.geojson') || file.name.endsWith('.json')) {
                        reader.onload = ({
                            "useFileImporter.useEffect": (e)=>{
                                const result = e.target?.result;
                                if (typeof result === 'string') {
                                    try {
                                        const features = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ol$2f$format$2f$GeoJSON$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]().readFeatures(JSON.parse(result), {
                                            featureProjection: map?.getView().getProjection()
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
                                        map?.addLayer(vectorLayer);
                                        // Zoom to extent
                                        if (features.length > 0) {
                                            const extent = vectorSource.getExtent();
                                            map?.getView().fit(extent, {
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
                                            "useFileImporter.useEffect": (prev)=>new Set(prev).add(file.name)
                                        }["useFileImporter.useEffect"]);
                                    } catch (err) {
                                        console.error('Error parsing GeoJSON', err);
                                    }
                                }
                            }
                        })["useFileImporter.useEffect"];
                        reader.readAsText(file);
                    } else {
                        console.log(`File ${file.name} received. Requires additional parsers.`);
                    }
                }
            }["useFileImporter.useEffect"]);
        }
    }["useFileImporter.useEffect"], [
        filesToLoad,
        processedFiles,
        map
    ]);
    return {
        processedFiles
    };
};
_s(useFileImporter, "m5X6jlowMp5Kh+AYHmKYOqhrKFk=");
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
            const handleMapClick = {
                "useMapInteractions.useEffect.handleMapClick": (e)=>{
                    // Reset highlight
                    highlightSource.current.clear();
                    const pixel = e.pixel;
                    const feature = map.forEachFeatureAtPixel(pixel, {
                        "useMapInteractions.useEffect.handleMapClick.feature": (feat)=>feat
                    }["useMapInteractions.useEffect.handleMapClick.feature"], {
                        hitTolerance: 5
                    });
                    if (feature) {
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
                        // Trigger select callback
                        onFeatureSelect({
                            id: feature.getId()?.toString() || Math.random().toString(36).substr(2, 9),
                            properties: cleanProps,
                            layerId: 'unknown',
                            geometryType: geometry?.getType() || 'Unknown'
                        });
                    } else {
                        onFeatureSelect(null);
                    }
                }
            }["useMapInteractions.useEffect.handleMapClick"];
            map.on('singleclick', handleMapClick);
            return ({
                "useMapInteractions.useEffect": ()=>{
                    // Cleanup
                    map.un('singleclick', handleMapClick);
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
                lineNumber: 62,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$map$2f$MapBrand$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/MapViewer.tsx",
                lineNumber: 64,
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
                lineNumber: 66,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LegendPanel, {}, void 0, false, {
                fileName: "[project]/src/components/MapViewer.tsx",
                lineNumber: 74,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$map$2f$MapAttribution$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/components/MapViewer.tsx",
                lineNumber: 76,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MapViewer.tsx",
        lineNumber: 61,
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

//# sourceMappingURL=src_a4b02451._.js.map