import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getProjectById } from '../data/projects';

/**
 * Hero plein écran dédié au jeu phare.
 * Perf : une seule image WebP (≈30 Ko desktop / ≈18 Ko mobile), prioritaire (LCP),
 * animations 100 % CSS (transform/opacity uniquement), aucun blur, désactivées si
 * l'utilisateur préfère moins d'animations.
 */

const FACTS = [
    { value: '1–4', label: 'Players' },
    { value: 'Local + Online', label: 'Multiplayer' },
    { value: '11', label: 'Languages' },
    { value: 'PC + Android', label: 'Platforms' },
];

const delay = (ms: number) => ({ '--d': `${ms}ms` }) as React.CSSProperties;

export const Hero: React.FC = () => {
    const game = getProjectById('classic-bibe');
    if (!game) return null;

    const steamUrl = game.links.steam;

    return (
        <section className="relative isolate flex min-h-svh flex-col justify-end overflow-hidden bg-studio-bg">
            {/* Image : en haut sur mobile, plein écran dès lg */}
            <div className="hero-parallax absolute inset-x-0 top-0 -z-10 h-[72svh] [mask-image:linear-gradient(to_bottom,#000_55%,transparent)] lg:inset-0 lg:h-full lg:[mask-image:none]">
                <picture>
                    <source
                        media="(min-width: 1024px)"
                        type="image/webp"
                        srcSet="/assets/hero/bibe-hero-1280.webp 1280w, /assets/hero/bibe-hero-1920.webp 1920w"
                        sizes="max(100vw, 272svh)"
                    />
                    <img
                        src="/assets/hero/bibe-hero-m-730.webp"
                        srcSet="/assets/hero/bibe-hero-m-480.webp 480w, /assets/hero/bibe-hero-m-730.webp 730w"
                        sizes="100vw"
                        width={730}
                        height={705}
                        alt="Classic Bibe gameplay: colourful round characters jumping across a floating island"
                        fetchPriority="high"
                        decoding="async"
                        className="anim-zoom h-full w-full bg-studio-card object-cover object-[40%_50%] lg:object-[30%_50%]"
                    />
                </picture>
            </div>

            {/* Voiles de lisibilité (dégradés statiques, aucun blur) */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-studio-bg from-30% via-studio-bg/60 via-55% to-transparent lg:hidden" />
            <div className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-studio-bg from-15% via-studio-bg/70 via-40% to-transparent to-70% lg:block" />
            <div className="absolute inset-x-0 bottom-0 -z-10 hidden h-1/3 bg-gradient-to-t from-studio-bg to-transparent lg:block" />

            <div className="mx-auto w-full max-w-7xl px-5 pb-8 pt-[52svh] md:px-8 lg:pb-12 lg:pt-40">
                <p
                    style={delay(100)}
                    className="anim-rise flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-studio-muted"
                >
                    <span className="h-2 w-2 bg-studio-red" aria-hidden="true" />
                    Available now on Steam
                </p>

                <h1 className="mt-4 select-none">
                    <span
                        style={delay(200)}
                        className="anim-rise block text-sm font-light uppercase tracking-[0.55em] text-studio-text sm:text-xl"
                    >
                        Classic
                    </span>
                    <span
                        style={delay(300)}
                        className="anim-rise block text-[clamp(5.5rem,24vw,15rem)] font-extrabold uppercase leading-[0.82] tracking-tighter text-white"
                    >
                        Bibe
                    </span>
                </h1>

                <p
                    style={delay(450)}
                    className="anim-rise mt-5 max-w-md text-base leading-relaxed text-studio-text/85 sm:text-lg"
                >
                    Collect fruits and veggies, dodge the falling traps and out-score your friends. A cartoon
                    party game for 1 to 4 players.
                </p>

                <div
                    style={delay(550)}
                    className="anim-rise mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8"
                >
                    {steamUrl && (
                        <a
                            href={steamUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 bg-studio-red px-8 py-4 text-sm font-extrabold uppercase tracking-[0.18em] text-white transition-colors hover:bg-studio-red-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                        >
                            Play on Steam
                            {game.price && <span className="font-semibold text-white/75">{game.price}</span>}
                        </a>
                    )}

                    <Link
                        to={`/project/${game.id}${game.videoId ? '#trailer' : ''}`}
                        className="group inline-flex items-center justify-center gap-2 py-2 text-sm font-bold uppercase tracking-[0.18em] text-studio-text focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    >
                        <span className="border-b border-white/30 pb-1 transition-colors group-hover:border-studio-red">
                            {game.videoId ? 'Watch the trailer' : 'Discover the game'}
                        </span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none" />
                    </Link>
                </div>

                <dl
                    style={delay(700)}
                    className="anim-rise mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/10 pt-6 sm:grid-cols-4 lg:mt-14"
                >
                    {FACTS.map((fact) => (
                        <div key={fact.label} className="flex flex-col-reverse gap-1">
                            <dt className="text-[10px] font-semibold uppercase tracking-[0.25em] text-studio-muted">
                                {fact.label}
                            </dt>
                            <dd className="text-lg font-extrabold text-studio-text sm:text-xl">{fact.value}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
};
