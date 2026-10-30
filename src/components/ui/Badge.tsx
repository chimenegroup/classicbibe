import React from 'react';

interface BadgeProps {
    children: React.ReactNode;
    icon?: React.ReactNode;
    variant?: 'default' | 'accent' | 'outline';
}

export const Badge: React.FC<BadgeProps> = ({
                                                children,
                                                icon,
                                                variant = 'default',
                                            }) => {
    const variants = {
        default: 'bg-white/5 text-studio-muted border-white/10',
        accent: 'bg-studio-red/15 text-red-300 border-studio-red/30',
        outline: 'bg-transparent text-studio-text border-white/20',
    };

    return (
        <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${variants[variant]}`}
        >
      {icon && <span className="w-3.5 h-3.5 flex items-center justify-center">{icon}</span>}
            <span>{children}</span>
    </span>
    );
};