import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useSectionScroll } from '../utils/useSectionScroll';

const EMAIL = 'chimene.info@gmail.com';

const SOCIALS = [
    { label: 'YouTube', url: 'https://www.youtube.com/@ChimeneStudio' },
    { label: 'X', url: 'https://x.com/ChimeneStudio' },
];

const linkClass =
    'text-sm text-studio-muted transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white';

const Column: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div>
        <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-studio-text">{title}</h3>
        <ul className="mt-5 space-y-3">{children}</ul>
    </div>
);

export const Footer: React.FC = () => {
    const scrollToSection = useSectionScroll();

    return (
        <footer id="contact" className="border-t border-white/10 bg-studio-bg">
            <div className="mx-auto max-w-7xl px-5 pb-10 pt-16 md:px-8 md:pt-20">
                <div className="grid gap-12 lg:grid-cols-12">
                    {/* Marque + contact */}
                    <div className="lg:col-span-5">
                        <p className="text-2xl font-extrabold uppercase leading-none tracking-[0.2em] text-white">
                            Chimene
                            <span className="mt-2 block text-xs font-semibold tracking-[0.4em] text-studio-muted">
                                Studio
                            </span>
                        </p>
                        <p className="mt-6 max-w-xs text-sm leading-relaxed text-studio-muted">
                            Fun games and free tools, made independently.
                        </p>
                        <a
                            href={`mailto:${EMAIL}`}
                            className="group mt-6 inline-flex items-center gap-2 border-b border-white/30 pb-1 text-base font-semibold text-studio-text transition-colors hover:border-studio-red focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                        >
                            {EMAIL}
                            <ArrowUpRight
                                className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
                                aria-hidden="true"
                            />
                        </a>
                    </div>

                    <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-7">
                        <Column title="Studio">
                            <li>
                                <Link to="/#projects" onClick={(e) => scrollToSection(e, 'projects')} className={linkClass}>
                                    Games & tools
                                </Link>
                            </li>
                            <li>
                                <Link to="/#about" onClick={(e) => scrollToSection(e, 'about')} className={linkClass}>
                                    About
                                </Link>
                            </li>
                        </Column>

                        <Column title="Projects">
                            <li>
                                <Link to="/project/classic-bibe" className={linkClass}>
                                    Classic Bibe
                                </Link>
                            </li>
                            <li>
                                <Link to="/project/pdf-manager-desktop" className={linkClass}>
                                    Orion PDF
                                </Link>
                            </li>
                        </Column>

                        <Column title="Follow">
                            {SOCIALS.map((social) => (
                                <li key={social.label}>
                                    <a href={social.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                                        {social.label}
                                    </a>
                                </li>
                            ))}
                        </Column>
                    </div>
                </div>

                <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-studio-muted sm:flex-row sm:items-center sm:justify-between">
                    <p>© {new Date().getFullYear()} Chimene Studio. All rights reserved.</p>
                    <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-2">
                        <Link to="/legal-notice" className="transition-colors hover:text-white">
                            Legal notice
                        </Link>
                        <Link to="/privacy" className="transition-colors hover:text-white">
                            Privacy policy
                        </Link>
                        <Link to="/orion-pdf/privacy" className="transition-colors hover:text-white">
                            Orion PDF privacy
                        </Link>
                        <Link to="/classicbibe/privacy" className="transition-colors hover:text-white">
                            Classic Bibe terms
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    );
};
