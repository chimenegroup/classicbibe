import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getProjectById } from '../data/projects';
import { useSectionScroll } from './utils/useSectionScroll';

/**
 * Navigation principale (monté une seule fois dans App.tsx).
 * - Transparente sur le haut de page, fond plein (sans blur, léger pour les vieux appareils) après scroll.
 * - Se masque en descendant, réapparaît en remontant.
 * - Mobile : menu plein écran, scroll bloqué, fermeture par Échap.
 */

const NAV_LINKS = [
    { label: 'Games', id: 'projects' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' }, // pointe vers le footer
];

const STEAM_URL = getProjectById('classic-bibe')?.links.steam;
const FLAGSHIP_PATH = '/project/classic-bibe';

export const Navbar: React.FC = () => {
    const { pathname } = useLocation();
    const [scrolled, setScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [open, setOpen] = useState(false);
    const [logoFailed, setLogoFailed] = useState(false);

    // Scroll : un seul écouteur passif, throttlé via requestAnimationFrame
    useEffect(() => {
        let lastY = window.scrollY;
        let ticking = false;

        const update = () => {
            const y = window.scrollY;
            const delta = y - lastY;
            setScrolled(y > 8);
            if (y < 80) setHidden(false);
            else if (delta > 6) setHidden(true);
            else if (delta < -6) setHidden(false);
            if (Math.abs(delta) > 6) lastY = y;
            ticking = false;
        };

        const onScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(update);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Menu mobile : Échap pour fermer + blocage du scroll de la page
    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
        document.addEventListener('keydown', onKey);
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = prev;
        };
    }, [open]);

    const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const scrollToSection = useSectionScroll();

    const goToSection = (e: React.MouseEvent, id: string) => {
        setOpen(false);
        scrollToSection(e, id);
    };

    const goHome = (e: React.MouseEvent) => {
        setOpen(false);
        if (pathname === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: reduceMotion() ? 'auto' : 'smooth' });
            window.history.replaceState(null, '', '/');
        }
    };

    // Le bouton Steam concerne le jeu phare : on le masque sur la page d'un autre projet (ex. Orion PDF)
    const showCta = Boolean(STEAM_URL) && !(pathname.startsWith('/project/') && pathname !== FLAGSHIP_PATH);

    const barBackground = open
        ? 'bg-transparent'
        : scrolled
            ? 'bg-studio-bg/95 border-b border-white/5'
            : 'bg-gradient-to-b from-studio-bg/90 to-transparent';

    const focusRing =
        'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white';

    return (
        <header className="fixed inset-x-0 top-0 z-50">
            <div
                className={`${barBackground} ${hidden && !open ? '-translate-y-full' : 'translate-y-0'} transition-[transform,background-color] duration-300 motion-reduce:transition-none`}
            >
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
                    {/* Logo + liens (desktop) */}
                    <div className="flex items-center gap-10">
                        <Link to="/" onClick={goHome} className={`flex items-center gap-3 ${focusRing}`} aria-label="Chimene Studio, home">
                            {logoFailed ? (
                                <span className="flex h-9 w-9 items-center justify-center bg-studio-blue text-sm font-extrabold text-white">
                                    CS
                                </span>
                            ) : (
                                <img
                                    src="/logo.jpg"
                                    alt=""
                                    width={36}
                                    height={36}
                                    className="h-9 w-9 object-cover"
                                    onError={() => setLogoFailed(true)}
                                />
                            )}
                            <span className="text-sm font-extrabold uppercase leading-none tracking-[0.2em] text-studio-text md:text-base">
                                Chimene
                                <span className="mt-1 block text-[10px] font-semibold tracking-[0.35em] text-studio-muted">
                                    Studio
                                </span>
                            </span>
                        </Link>

                        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.id}
                                    to={`/#${link.id}`}
                                    onClick={(e) => goToSection(e, link.id)}
                                    className={`group relative py-2 text-xs font-bold uppercase tracking-[0.18em] text-studio-muted transition-colors hover:text-studio-text ${focusRing}`}
                                >
                                    {link.label}
                                    <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-studio-red transition-transform duration-300 group-hover:scale-x-100 motion-reduce:transition-none" />
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Emplacement futur : sélecteur de langue (quand l'i18n sera en place) */}

                    <div className="flex items-center gap-3">
                        {showCta && (
                            <a
                                href={STEAM_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`hidden bg-studio-red px-5 py-2.5 text-xs font-extrabold uppercase tracking-[0.18em] text-white transition-colors hover:bg-studio-red-hover md:inline-block ${focusRing}`}
                            >
                                Play on Steam
                            </a>
                        )}

                        {/* Burger : 3 traits animés, sans dépendance d'icônes */}
                        <button
                            type="button"
                            onClick={() => setOpen((v) => !v)}
                            aria-expanded={open}
                            aria-controls="mobile-menu"
                            aria-label={open ? 'Close menu' : 'Open menu'}
                            className={`relative -mr-2 h-11 w-11 md:hidden ${focusRing}`}
                        >
                            <span
                                className={`absolute left-1/2 top-1/2 h-0.5 w-6 -translate-x-1/2 bg-studio-text transition-transform duration-300 motion-reduce:transition-none ${open ? 'rotate-45' : '-translate-y-[7px]'}`}
                            />
                            <span
                                className={`absolute left-1/2 top-1/2 h-0.5 w-6 -translate-x-1/2 -translate-y-1/2 bg-studio-text transition-opacity duration-200 ${open ? 'opacity-0' : 'opacity-100'}`}
                            />
                            <span
                                className={`absolute left-1/2 top-1/2 h-0.5 w-6 -translate-x-1/2 bg-studio-text transition-transform duration-300 motion-reduce:transition-none ${open ? '-rotate-45' : 'translate-y-[5px]'}`}
                            />
                        </button>
                    </div>
                </div>
            </div>

            {/* Menu mobile plein écran (placé sous la barre grâce à -z-10 dans le contexte d'empilement du header) */}
            <div
                id="mobile-menu"
                inert={!open}
                aria-hidden={!open}
                className={`fixed inset-0 -z-10 flex h-dvh flex-col justify-between bg-studio-bg px-5 pb-10 pt-28 transition-[opacity,visibility] duration-300 md:hidden ${open ? 'visible opacity-100' : 'invisible opacity-0'}`}
            >
                <nav className="flex flex-col" aria-label="Mobile">
                    {NAV_LINKS.map((link, i) => (
                        <Link
                            key={link.id}
                            to={`/#${link.id}`}
                            onClick={(e) => goToSection(e, link.id)}
                            style={{ transitionDelay: open ? `${80 + i * 60}ms` : '0ms' }}
                            className={`border-b border-white/10 py-5 text-4xl font-extrabold uppercase tracking-tight text-studio-text transition-[opacity,transform] duration-500 active:text-studio-red motion-reduce:transition-none ${open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} ${focusRing}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {showCta && (
                    <a
                        href={STEAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpen(false)}
                        className={`block bg-studio-red py-4 text-center text-sm font-extrabold uppercase tracking-[0.18em] text-white active:bg-studio-red-hover ${focusRing}`}
                    >
                        Play on Steam
                    </a>
                )}
            </div>
        </header>
    );
};
