import React, { useState, useEffect } from 'react';
import { Menu, X, Gamepad2, LayoutGrid, Info, Mail } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Détection du scroll pour appliquer le fond semi-transparent et l'effet de profondeur
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Projets', href: '#projects', icon: <LayoutGrid className="w-4 h-4 text-studio-red" /> },
        { name: 'À Propos', href: '#about', icon: <Info className="w-4 h-4 text-studio-blue" /> },
        // { name: 'Contact', href: '#contact', icon: <Mail className="w-4 h-4 text-studio-muted" /> },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? 'bg-[#0B111E]/95 backdrop-blur-md border-b border-white/10 py-4 shadow-2xl shadow-black/60'
                    : 'bg-gradient-to-b from-[#0B111E]/90 to-transparent py-6'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                {/* LOGO STUDIO - Style Haute Fidélité */}
                <a href="#" className="flex items-center gap-3 group">
                    <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-studio-card border border-white/10 overflow-hidden group-hover:border-studio-red transition-all duration-300 shadow-inner">
                        <img
                            src="/logo.jpg"
                            alt="Chimene Studio Logo"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            onError={(e) => {
                                (e.target as HTMLElement).style.display = 'none';
                            }}
                        />
                        <span className="absolute inset-0 flex items-center justify-center font-extrabold text-white text-lg tracking-wider bg-studio-blue/80">CS</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-black text-white tracking-widest text-base md:text-lg leading-tight uppercase font-sans">
                            CHIMENE<span className="text-studio-red">.</span>
                        </span>
                        <span className="text-[10px] font-bold tracking-[0.25em] text-studio-muted uppercase">
                            STUDIO
                        </span>
                    </div>
                </a>

                {/* NAVIGATION DESKTOP - Style Épuré & Racé */}
                <nav className="hidden md:flex items-center gap-1 bg-studio-card/80 border border-white/10 px-3 py-1.5 rounded-2xl backdrop-blur-xl shadow-lg">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="flex items-center gap-2.5 px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-studio-muted hover:text-white hover:bg-white/5 transition-all duration-200"
                        >
                            {link.icon}
                            <span>{link.name}</span>
                        </a>
                    ))}
                </nav>

                {/* BOUTON D'ACTION DIRECTE DESKTOP (Utilise le composant UI Button) */}
                <div className="hidden md:block">
                    <Button
                        variant="primary"
                        asLink
                        href="#projects"
                        icon={<Gamepad2 className="w-4 h-4" />}
                        className="!py-2.5 !px-5 !text-xs font-bold uppercase tracking-widest bg-studio-red hover:bg-studio-red-hover transition-all shadow-lg shadow-studio-red/20"
                    >
                        Explorer
                    </Button>
                </div>

                {/* BOUTON MENU HAMBURGER MOBILE */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-2.5 rounded-xl bg-studio-card border border-white/10 text-studio-text hover:bg-white/10 transition-colors"
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6 text-studio-red" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* MENU MOBILE DÉOULANT */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-[#0B111E]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
                    <nav className="flex flex-col space-y-2">
                        {navLinks.link.map ? null : navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider text-studio-text bg-studio-card/50 border border-white/5 hover:border-studio-red/30 hover:bg-white/10 transition-all"
                            >
                                {link.icon}
                                <span>{link.name}</span>
                            </a>
                        ))}
                    </nav>
                    <div className="pt-2 border-t border-white/10">
                        <Button
                            variant="primary"
                            asLink
                            href="#projects"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="w-full justify-center !py-3 !text-xs font-bold uppercase tracking-widest bg-studio-red"
                        >
                            Explorer les créations
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
};