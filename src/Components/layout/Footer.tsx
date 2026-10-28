import React from 'react';
import { Mail, Github, Twitter, Gamepad2, MessageSquare, ArrowUpRight, Terminal } from 'lucide-react';

// Composant utilitaire pour les boutons sociaux (Style Studio AAA)
const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        title={label}
        className="w-11 h-11 rounded-xl bg-studio-card border border-white/10 flex items-center justify-center text-studio-muted hover:bg-studio-red hover:text-white hover:border-studio-red transition-all duration-300 shadow-lg group"
    >
        <span className="group-hover:scale-110 transition-transform">
            {icon}
        </span>
    </a>
);

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-studio-bg border-t border-white/10 pt-20 pb-12 px-6 relative z-10 overflow-hidden">

            {/* Halo lumineux de fond cinématique */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-studio-blue/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* GRILLE PRINCIPALE DU FOOTER */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

                    {/* Colonne 1 : Marque & Description (5 colonnes) */}
                    <div className="md:col-span-5 space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-studio-card border border-white/10 flex items-center justify-center font-black text-white text-sm shadow-inner">
                                CS
                            </div>
                            <span className="font-black text-white tracking-widest text-lg uppercase">
                                CHIMENE<span className="text-studio-red">.</span>
                            </span>
                        </div>
                        <p className="text-studio-muted text-sm leading-relaxed max-w-sm">
                            Studio indépendant spécialisé dans le développement de jeux vidéo multijoueurs à basse latence et d'utilitaires desktop haute performance.
                        </p>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-studio-muted uppercase tracking-wider">
                            <Terminal className="w-3.5 h-3.5 text-studio-red" />
                            <span>Build Environment : Windows / Rust / Unity</span>
                        </div>
                    </div>

                    {/* Colonne 2 : Navigation Rapide (3 colonnes) */}
                    <div className="md:col-span-3 space-y-4">
                        <h4 className="text-white font-black text-xs tracking-[0.2em] uppercase">Navigation</h4>
                        <ul className="space-y-3 font-medium">
                            <li>
                                <a href="#home" className="text-studio-muted hover:text-white transition-colors text-sm flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-studio-red opacity-0 group-hover:opacity-100 transition-opacity" />
                                    Accueil
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="text-studio-muted hover:text-white transition-colors text-sm flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-studio-red opacity-0 group-hover:opacity-100 transition-opacity" />
                                    Showroom (Projets)
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="text-studio-muted hover:text-white transition-colors text-sm flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-studio-red opacity-0 group-hover:opacity-100 transition-opacity" />
                                    À Propos
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Colonne 3 : Contact & Réseaux (4 colonnes) */}
                    <div className="md:col-span-4 space-y-4">
                        <h4 className="text-white font-black text-xs tracking-[0.2em] uppercase">Contact & Réseaux</h4>

                        {/* Contact Direct */}
                        <a
                            href="mailto:contact@chimenestudio.com"
                            className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-studio-card border border-white/10 text-studio-muted hover:text-white hover:border-studio-blue transition-all text-sm group w-full justify-between"
                        >
                            <div className="flex items-center gap-2.5">
                                <Mail className="w-4 h-4 text-studio-blue" />
                                <span>contact@chimenestudio.com</span>
                            </div>
                            <ArrowUpRight className="w-4 h-4 text-studio-muted group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>

                        {/* Liens Sociaux */}
                        <div className="flex flex-wrap gap-2.5 pt-2">
                            <SocialLink href="https://store.steampowered.com/developer/chimenestudio" icon={<Gamepad2 className="w-5 h-5" />} label="Steam" />
                            <SocialLink href="https://github.com/chimenestudio" icon={<Github className="w-5 h-5" />} label="GitHub" />
                            <SocialLink href="https://twitter.com/chimenestudio" icon={<Twitter className="w-5 h-5" />} label="Twitter / X" />
                            <SocialLink href="https://discord.gg/chimenestudio" icon={<MessageSquare className="w-5 h-5" />} label="Discord" />
                        </div>
                    </div>

                </div>

                {/* SECTION BASSE : COPYRIGHT & MENTIONS */}
                <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-studio-muted text-xs font-mono">
                        © {currentYear} CHIMENE STUDIO. TOUS DROITS RÉSERVÉS.
                    </p>
                    <div className="flex gap-6 text-xs text-studio-muted font-mono">
                        <a href="/mentions-legales" className="hover:text-white transition-colors">MENTIONS LÉGALES</a>
                        <a href="/confidentialite" className="hover:text-white transition-colors">CONFIDENTIALITÉ</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};