import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/seo/SEO';

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white';

export const NotFound: React.FC = () => (
    <div className="relative isolate flex min-h-svh items-center overflow-hidden bg-studio-bg">
        <SEO title="Page not found" description="This page does not exist or has moved." noindex />

        {/* Visuel du jeu en filigrane (déjà en cache après l'accueil) */}
        <img
            src="/assets/hero/bibe-hero-m-730.webp"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-studio-bg via-studio-bg/80 to-studio-bg/50" />

        <div className="mx-auto w-full max-w-7xl px-5 py-32 md:px-8">
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-studio-muted">
                <span className="h-2 w-2 bg-studio-red" aria-hidden="true" />
                Error 404
            </p>
            <h1 className="mt-4 text-[clamp(7rem,32vw,20rem)] font-extrabold leading-[0.8] tracking-tighter text-white">
                404
            </h1>
            <p className="mt-8 max-w-md text-lg text-studio-text/90">
                This page does not exist or has moved. Let's get you back to the fun.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                    to="/"
                    className={`inline-flex items-center justify-center bg-studio-red px-7 py-4 text-xs font-extrabold uppercase tracking-[0.18em] text-white transition-colors hover:bg-studio-red-hover ${focusRing}`}
                >
                    Back to home
                </Link>
                <Link
                    to="/#projects"
                    className={`inline-flex items-center justify-center border border-white/25 px-7 py-4 text-xs font-extrabold uppercase tracking-[0.18em] text-studio-text transition-colors hover:border-white hover:bg-white/5 ${focusRing}`}
                >
                    See our games
                </Link>
            </div>
        </div>
    </div>
);
