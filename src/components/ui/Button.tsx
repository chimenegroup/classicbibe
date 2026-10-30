import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    children: React.ReactNode;
    icon?: React.ReactNode;
    asLink?: boolean;
    href?: string;
}

export const Button: React.FC<ButtonProps> = ({
                                                  variant = 'primary',
                                                  children,
                                                  icon,
                                                  asLink = false,
                                                  href,
                                                  className = '',
                                                  ...props
                                              }) => {
    // Styles de base partagés
    const baseStyles =
        'inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none';

    // Variantes
    const variants = {
        // Bouton Primaire (Rouge Accent + Ombre lumineuse)
        primary:
            'bg-studio-red hover:bg-studio-red-hover text-white shadow-lg shadow-studio-red/20 hover:shadow-studio-red/35 border border-studio-red-hover/40',
        // Bouton Secondaire (Verre Dépoli / Glassmorphism)
        secondary:
            'glass-card hover:bg-white/10 text-studio-text border border-white/10 hover:border-white/20',
    };

    const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

    if (asLink && href) {
        return (
            <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer">
                {icon && <span className="w-4 h-4 flex items-center justify-center">{icon}</span>}
                <span>{children}</span>
            </a>
        );
    }

    return (
        <button className={combinedClasses} {...props}>
            {icon && <span className="w-4 h-4 flex items-center justify-center">{icon}</span>}
            <span>{children}</span>
        </button>
    );
};