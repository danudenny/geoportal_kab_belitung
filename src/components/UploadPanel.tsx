import {
    AlertCircle,
    BarChart3,
    CheckCircle,
    File as FileIcon,
    FileType,
    Trash2,
    UploadCloud,
    X,
} from 'lucide-react';
import { useCallback, useState } from 'react';

interface UploadPanelProps {
    onUpload: (files: File[]) => void;
    uploadedFiles?: File[];
    onRemove?: (file: File) => void;
    onAnalyze?: (file: File) => void;
    close: () => void;
}

const UploadPanel: React.FC<UploadPanelProps> = ({
    onUpload,
    uploadedFiles = [],
    onRemove,
    onAnalyze,
    close,
}) => {
    const [isDragging, setIsDragging] = useState(false);
    const [feedback, setFeedback] = useState<{
        type: 'success' | 'error';
        message: string;
    } | null>(null);

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    }, []);

    const handleDrop = useCallback(
        (e: React.DragEvent) => {
            e.preventDefault();
            setIsDragging(false);

            if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
                processFiles(e.dataTransfer.files);
            }
        },
        [onUpload]
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            processFiles(e.target.files);
        }
    };

    const processFiles = (fileList: FileList) => {
        const files = Array.from(fileList);
        setFeedback({
            type: 'success',
            message: `Processing ${files.length} file(s)...`,
        });
        setTimeout(() => {
            onUpload(files);
            setFeedback(null);
        }, 1000);
    };

    const formatFileSize = (bytes: number) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    return (
        <div className="h-full w-80 bg-slate-900/95 backdrop-blur-sm border-r border-slate-700 flex flex-col p-6 animate-in slide-in-from-left duration-300 relative">
            <button
                onClick={close}
                className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
                title="Close"
            >
                <X size={20} />
            </button>

            <div className="mb-6">
                <h2 className="text-lg font-bold text-primary-400 flex items-center gap-2">
                    <UploadCloud size={20} />
                    IMPORT DATA
                </h2>
                <p className="text-xs text-slate-400 mt-2">
                    Supported: .geojson, .kml, .json
                </p>
            </div>

            {/* Upload Area */}
            <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`
          border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center text-center transition-all cursor-pointer mb-6
          ${
              isDragging
                  ? 'border-primary-500 bg-primary-900/20'
                  : 'border-slate-600 bg-slate-800/30 hover:border-slate-400 hover:bg-slate-800/50'
          }
        `}
            >
                <input
                    type="file"
                    multiple
                    className="hidden"
                    id="file-upload"
                    accept=".geojson,.json,.kml"
                    onChange={handleInputChange}
                />
                <label
                    htmlFor="file-upload"
                    className="cursor-pointer flex flex-col items-center w-full h-full"
                >
                    <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center mb-3 text-primary-400 group-hover:bg-slate-600 transition-colors">
                        <FileType size={20} />
                    </div>
                    <p className="text-sm font-medium text-slate-300">
                        Click or Drag Files
                    </p>
                    <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-wider">
                        Max 50MB
                    </p>
                </label>
            </div>

            {/* Feedback Message */}
            {feedback && (
                <div
                    className={`mb-6 p-3 rounded-lg flex items-center gap-3 animate-in fade-in slide-in-from-top-2 ${
                        feedback.type === 'success'
                            ? 'bg-emerald-900/30 border border-emerald-800 text-emerald-400'
                            : 'bg-red-900/30 border border-red-800 text-red-400'
                    }`}
                >
                    {feedback.type === 'success' ? (
                        <CheckCircle size={16} />
                    ) : (
                        <AlertCircle size={16} />
                    )}
                    <span className="text-xs font-medium">
                        {feedback.message}
                    </span>
                </div>
            )}

            {/* Uploaded Files List */}
            {uploadedFiles.length > 0 && (
                <div className="flex-1 flex flex-col overflow-hidden">
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center justify-between">
                        <span>Uploaded Files</span>
                        <span className="bg-slate-800 px-2 py-0.5 rounded-full text-[10px]">
                            {uploadedFiles.length}
                        </span>
                    </h3>
                    <div className="flex-1 overflow-y-auto space-y-2 pr-1 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
                        {uploadedFiles.map((file, index) => (
                            <div
                                key={`${file.name}-${index}`}
                                className="group flex items-center justify-between p-3 rounded-lg bg-slate-800/40 border border-slate-800 hover:border-slate-600 transition-all hover:bg-slate-800/60"
                            >
                                <div className="flex items-center gap-3 overflow-hidden">
                                    <div className="w-8 h-8 rounded bg-slate-700/50 flex items-center justify-center text-slate-400 group-hover:text-primary-400 transition-colors flex-shrink-0">
                                        <FileIcon size={16} />
                                    </div>
                                    <div className="flex flex-col overflow-hidden">
                                        <span
                                            className="text-xs font-medium text-slate-200 truncate"
                                            title={file.name}
                                        >
                                            {file.name}
                                        </span>
                                        <span className="text-[10px] text-slate-500">
                                            {formatFileSize(file.size)}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1">
                                    {onRemove && (
                                        <button
                                            onClick={() => onRemove(file)}
                                            className="p-1.5 text-slate-500 hover:text-red-400 hover:bg-red-950/30 rounded-md transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
                                            title="Remove file"
                                        >
                                            <Trash2 size={14} />
                                        </button>
                                    )}
                                    {onAnalyze && (
                                        <button
                                            onClick={() => onAnalyze(file)}
                                            className="p-1.5 text-slate-500 hover:text-primary-400 hover:bg-primary-950/30 rounded-md transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
                                            title="Analyze File"
                                        >
                                            <BarChart3 size={14} />
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default UploadPanel;
