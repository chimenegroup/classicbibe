import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Fait défiler la fenêtre tout en haut à gauche instantanément
        window.scrollTo(0, 0);
    }, [pathname]);

    return null; // Ce composant n'affiche rien visuellement
};