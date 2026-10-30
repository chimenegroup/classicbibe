import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import type { Project } from '../../data/projects';

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white';

/** Grande carte "jeu" : visuel clé à gauche, infos et boutons d'achat à droite. */
export const FeaturedGame: React.FC<{ project: Project }> = ({ project }) => {
    const { steam, googlePlay } = project.links;

    return (
        <article className="group grid overflow-hidden border border-white/10 bg-studio-card lg:grid-cols-12">
            <Link
                to={`/project/${project.id}`}
                className={`relative block overflow-hidden lg:col-span-7 ${focusRing}`}
                aria-label={`${project.title}: details`}
            >
                <img
                    src={project.coverImage}
                    alt={`${project.title} key art`}
                    width={800}
                    height={458}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-[25%_50%] transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none"
                />
            </Link>

            <div className="flex flex-col justify-center gap-6 p-6 md:p-10 lg:col-span-5">
                <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-studio-muted">
                    <span className="h-2 w-2 bg-studio-red" aria-hidden="true" />
                    {project.status === 'Released' ? 'Out now' : 'Coming soon'}
                    {project.platforms && <span className="text-studio-muted/70">· {project.platforms.join(' / ')}</span>}
                </p>

                <div>
                    <h3 className="text-4xl font-extrabold uppercase leading-none tracking-tight text-white md:text-5xl">
                        {project.title}
                    </h3>
                    <p className="mt-3 text-lg text-studio-text/90">{project.tagline}</p>
                </div>

                <ul className="space-y-2.5 text-sm text-studio-muted">
                    {project.features.slice(0, 3).map((feature) => (
                        <li key={feature} className="flex gap-3">
                            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-studio-red" aria-hidden="true" />
                            {feature}
                        </li>
                    ))}
                </ul>

                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    {steam && (
                        <a
                            href={steam}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center justify-center gap-3 bg-studio-red px-6 py-3.5 text-xs font-extrabold uppercase tracking-[0.18em] text-white transition-colors hover:bg-studio-red-hover ${focusRing}`}
                        >
                            Steam
                            {project.price && <span className="font-semibold text-white/75">{project.price}</span>}
                        </a>
                    )}
                    {googlePlay && (
                        <a
                            href={googlePlay}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center justify-center gap-2 border border-white/25 px-6 py-3.5 text-xs font-extrabold uppercase tracking-[0.18em] text-studio-text transition-colors hover:border-white hover:bg-white/5 ${focusRing}`}
                        >
                            Google Play
                            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        </a>
                    )}
                </div>

                <Link
                    to={`/project/${project.id}`}
                    className={`group/link inline-flex items-center gap-2 self-start text-xs font-bold uppercase tracking-[0.18em] text-studio-muted transition-colors hover:text-white ${focusRing}`}
                >
                    More about the game
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1 motion-reduce:transition-none" />
                </Link>
            </div>
        </article>
    );
};
