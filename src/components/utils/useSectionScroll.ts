import { useCallback } from 'react';
import type React from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Gère les liens vers une section de l'accueil (/#id).
 * Sur l'accueil : scroll fluide sur place. Ailleurs : on laisse <Link> naviguer vers /#id,
 * ScrollToTop se charge ensuite de descendre jusqu'à la section.
 */
export const useSectionScroll = () => {
    const { pathname } = useLocation();

    return useCallback(
        (e: React.MouseEvent, id: string) => {
            if (pathname !== '/') return;
            e.preventDefault();
            const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            document.getElementById(id)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
            window.history.replaceState(null, '', `/#${id}`);
        },
        [pathname]
    );
};
