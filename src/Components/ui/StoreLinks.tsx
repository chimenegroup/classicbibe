import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../../data/projects';

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white';

interface StoreItem {
    label: string;
    url: string;
    price?: string;
}

/** Boutons de téléchargement/achat d'un projet. Le premier est rouge plein, les suivants en contour. */
export const StoreLinks: React.FC<{ project: Project; className?: string }> = ({ project, className = '' }) => {
    const { steam, googlePlay, store, website, github } = project.links;

    const items = [
        steam && { label: 'Steam', url: steam, price: project.price },
        googlePlay && { label: 'Google Play', url: googlePlay },
        store && { label: 'Microsoft Store', url: store, price: steam ? undefined : project.price },
        website && { label: 'Website', url: website },
        github && { label: 'GitHub', url: github },
    ].filter(Boolean) as StoreItem[];

    if (items.length === 0) {
        return (
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-studio-muted">Coming soon</p>
        );
    }

    return (
        <div className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap ${className}`}>
            {items.map((item, i) => (
                <a
                    key={item.label}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-3 px-7 py-4 text-xs font-extrabold uppercase tracking-[0.18em] transition-colors ${focusRing} ${
                        i === 0
                            ? 'bg-studio-red text-white hover:bg-studio-red-hover'
                            : 'border border-white/25 text-studio-text hover:border-white hover:bg-white/5'
                    }`}
                >
                    {item.label}
                    {item.price && <span className="font-semibold text-white/75">{item.price}</span>}
                    {i > 0 && <ArrowUpRight className="h-4 w-4" aria-hidden="true" />}
                </a>
            ))}
        </div>
    );
};
