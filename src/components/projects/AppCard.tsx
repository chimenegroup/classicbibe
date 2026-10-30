import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import type { Project } from '../../data/projects';

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white';

/** Carte "outil" : plus sobre que celle des jeux, captures d'écran + lien vers le store. */
export const AppCard: React.FC<{ project: Project }> = ({ project }) => {
    const storeUrl = project.links.store;

    return (
        <article className="group grid items-center gap-8 border border-white/10 bg-studio-card p-6 md:grid-cols-12 md:gap-10 md:p-8">
            <Link
                to={`/project/${project.id}`}
                className={`block overflow-hidden border border-white/10 md:col-span-6 ${focusRing}`}
                aria-label={`${project.title}: details`}
            >
                <img
                    src={project.coverImage}
                    alt={`${project.title} screenshot`}
                    width={1366}
                    height={768}
                    loading="lazy"
                    decoding="async"
                    className="aspect-video w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03] motion-reduce:transition-none"
                />
            </Link>

            <div className="flex flex-col gap-5 md:col-span-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-studio-muted">
                    {[project.price, project.platforms?.join(' / ')].filter(Boolean).join(' · ')}
                </p>

                <div>
                    <h3 className="text-3xl font-extrabold uppercase leading-none tracking-tight text-white md:text-4xl">
                        {project.title}
                    </h3>
                    <p className="mt-3 text-base text-studio-text/90">{project.tagline}</p>
                </div>

                <ul className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <li
                            key={tag}
                            className="border border-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-studio-muted"
                        >
                            {tag}
                        </li>
                    ))}
                </ul>

                <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:gap-6">
                    {storeUrl && (
                        <a
                            href={storeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center justify-center gap-2 border border-white/25 px-6 py-3.5 text-xs font-extrabold uppercase tracking-[0.18em] text-studio-text transition-colors hover:border-white hover:bg-white/5 ${focusRing}`}
                        >
                            Microsoft Store
                            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                        </a>
                    )}
                    <Link
                        to={`/project/${project.id}`}
                        className={`group/link inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-studio-muted transition-colors hover:text-white ${focusRing}`}
                    >
                        Details
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1 motion-reduce:transition-none" />
                    </Link>
                </div>
            </div>
        </article>
    );
};
