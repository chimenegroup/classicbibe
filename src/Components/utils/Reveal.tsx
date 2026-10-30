import React, { useEffect, useRef, useState } from 'react';

/**
 * Apparition au scroll, ultra légère : un IntersectionObserver par bloc, transform/opacity uniquement.
 * Si l'observer n'existe pas ou si l'utilisateur préfère moins d'animations, le contenu est visible tout de suite.
 */
const shouldSkipAnimation = () =>
    typeof window === 'undefined' ||
    !('IntersectionObserver' in window) ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

interface RevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}

export const Reveal: React.FC<RevealProps> = ({ children, className = '', delay = 0 }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [shown, setShown] = useState(shouldSkipAnimation);

    useEffect(() => {
        const el = ref.current;
        if (!el || shown) return;
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShown(true);
                    io.disconnect();
                }
            },
            { rootMargin: '0px 0px -10% 0px' }
        );
        io.observe(el);
        return () => io.disconnect();
    }, [shown]);

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`reveal ${shown ? 'is-in' : ''} ${className}`}
        >
            {children}
        </div>
    );
};
