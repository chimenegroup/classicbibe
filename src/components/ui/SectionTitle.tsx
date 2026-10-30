import React from 'react';

/** Titre de section commun (accueil + pages projet) : barre rouge, grand titre, numéro optionnel. */
export const SectionTitle: React.FC<{ title: string; index?: string; id?: string }> = ({ title, index, id }) => (
    <div id={id} className="flex items-center gap-4 border-b border-white/10 pb-5">
        <span className="h-8 w-1 bg-studio-red" aria-hidden="true" />
        <h2 className="text-3xl font-extrabold uppercase tracking-tight text-white md:text-5xl">{title}</h2>
        {index && (
            <span className="ml-auto text-sm font-bold tracking-[0.3em] text-studio-muted" aria-hidden="true">
                {index}
            </span>
        )}
    </div>
);
