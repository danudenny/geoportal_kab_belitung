import React from 'react';

interface SwitchProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    disabled?: boolean;
    className?: string;
}

const Switch: React.FC<SwitchProps> = ({
    checked,
    onChange,
    disabled = false,
    className = '',
}) => {
    return (
        <button
            type="button"
            role="switch"
            aria-checked={checked}
            disabled={disabled}
            onClick={() => !disabled && onChange(!checked)}
            className={`
                relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent 
                transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 
                focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900
                ${checked ? 'bg-primary-500' : 'bg-slate-700'}
                ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
                ${className}
            `}
        >
            <span className="sr-only">Use setting</span>
            <span
                aria-hidden="true"
                className={`
                    pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 
                    transition duration-200 ease-in-out
                    ${checked ? 'translate-x-4' : 'translate-x-0'}
                `}
            />
        </button>
    );
};

export default Switch;
