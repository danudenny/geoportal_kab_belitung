export interface LayerConfig {
    id: string;
    name: string;
    visible: boolean;
    opacity: number;
    type: 'tile' | 'vector' | 'mvt';
    source?: string; // URL for tiles
    apiKey?: string; // API path segment
    color?: string; // For vector visualization styling
    geometryType?: 'Point' | 'LineString' | 'Polygon'; // For mock data generation
}

export interface LayerGroup {
    id: string;
    name: string;
    icon: string; // Icon name
    layers: LayerConfig[];
}

export interface FeatureProperties {
    [key: string]: any;
}

export interface SelectedFeature {
    id: string | number;
    properties: FeatureProperties;
    layerId: string;
    geometryType: string;
}

export type SidebarMode =
    | 'none'
    | 'layers'
    | 'upload'
    | 'settings'
    | 'analysis';
