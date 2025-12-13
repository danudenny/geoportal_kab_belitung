import {
    BringToFront,
    Database,
    Grid2x2Plus,
    Info,
    PieChart,
    Settings,
} from 'lucide-react';
import { SidebarMode } from '../types';

interface SidebarProps {
    activeMode: SidebarMode;
    setActiveMode: (mode: SidebarMode) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeMode, setActiveMode }) => {
    const toggleMode = (mode: SidebarMode) => {
        setActiveMode(activeMode === mode ? 'none' : mode);
    };

    const NavItem = ({
        mode,
        icon: Icon,
        tooltip,
    }: {
        mode: SidebarMode;
        icon: React.ElementType;
        tooltip: string;
    }) => (
        <button
            onClick={() => toggleMode(mode)}
            className={`
        relative group flex items-center justify-center w-16 h-16 transition-all duration-200
        ${
            activeMode === mode
                ? 'bg-slate-800 text-primary-400 border-l-4 border-primary-500'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
        }
      `}
        >
            <Icon size={24} strokeWidth={1.5} />
            {/* Tooltip */}
            <div className="absolute left-16 ml-2 px-2 py-1 bg-slate-900 text-primary-200 text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity border border-slate-700 whitespace-nowrap z-50 shadow-lg font-sans">
                {tooltip}
            </div>
        </button>
    );

    return (
        <div className="w-16 h-full bg-slate-900 border-r border-slate-800 flex flex-col items-center z-20 shadow-xl relative">
            <div className="p-4 mb-4 text-primary-500">
                <Database size={28} />
            </div>

            <nav className="flex-1 flex flex-col w-full gap-2">
                <NavItem
                    mode="layers"
                    icon={BringToFront}
                    tooltip="Layer Manager"
                />
                <NavItem
                    mode="upload"
                    icon={Grid2x2Plus}
                    tooltip="Import Data"
                />
                <NavItem
                    mode="settings"
                    icon={Settings}
                    tooltip="Map Settings"
                />
                <NavItem
                    mode="analysis"
                    icon={PieChart}
                    tooltip="Spatial Analysis"
                />
            </nav>

            <div className="mb-4">
                <button className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 text-slate-500 hover:text-primary-400 transition-colors">
                    <Info size={20} />
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
