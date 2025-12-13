const MapBrand: React.FC = () => {
    return (
        <div className="absolute top-6 left-6 z-10 flex items-center gap-4 bg-slate-900/80 backdrop-blur-md p-3 pr-6 rounded-2xl border border-slate-700/50 shadow-2xl select-none">
            <img
                src="https://res.cloudinary.com/killtdj/image/upload/v1719635543/Kabupaten_Belitung_paacyj.png"
                alt="Logo"
                className="w-10 h-12 object-contain drop-shadow-md"
            />
            <div className="flex flex-col justify-center">
                <h1 className="text-2xl font-black text-white leading-none tracking-tighter">
                    SIMTARU
                </h1>
                <span className="text-[10px] text-primary-400 font-bold uppercase tracking-widest mt-0.5 border-t border-slate-700 pt-0.5">
                    Kabupaten Belitung
                </span>
            </div>
        </div>
    );
};

export default MapBrand;
