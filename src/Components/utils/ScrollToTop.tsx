import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        // Lien du type /#projects depuis une autre page : on attend le rendu puis on scrolle jusqu'à la section
        if (hash) {
            const id = hash.slice(1);
            const raf = requestAnimationFrame(() => {
                const el = document.getElementById(id);
                if (el) el.scrollIntoView();
                else window.scrollTo(0, 0);
            });
            return () => cancelAnimationFrame(raf);
        }
        window.scrollTo(0, 0);
    }, [pathname, hash]);

    return null;
};
