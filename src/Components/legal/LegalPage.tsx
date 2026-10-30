import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../seo/SEO';

export interface LegalSection {
    title: string;
    /**
     * Texte brut : paragraphes séparés par une ligne vide, sous-titres du type "2.1 Titre" en début de bloc,
     * puces avec "• " en début de ligne. Les adresses email deviennent des liens.
     */
    content: string;
}

interface LegalPageProps {
    path: string;
    eyebrow: string;
    title: string;
    updated: string;
    description: string;
    intro?: string;
    sections: LegalSection[];
    related?: { label: string; to: string }[];
}

const EMAIL_RE = /([\w.+-]+@[\w-]+\.[\w.-]+)/g;

const withLinks = (text: string): React.ReactNode =>
    text.split(EMAIL_RE).map((part, i) =>
        i % 2 === 1 ? (
            <a key={i} href={`mailto:${part}`} className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-studio-red">
                {part}
            </a>
        ) : (
            part
        )
    );

/** Transforme un bloc de texte en sous-titre / paragraphes / liste à puces. */
const renderBlock = (block: string, key: number) => {
    const lines = block.split('\n');
    const nodes: React.ReactNode[] = [];
    let paragraph: string[] = [];
    let bullets: string[] = [];

    const flushParagraph = () => {
        if (paragraph.length) nodes.push(<p key={`p${nodes.length}`}>{withLinks(paragraph.join(' '))}</p>);
        paragraph = [];
    };
    const flushBullets = () => {
        if (bullets.length)
            nodes.push(
                <ul key={`u${nodes.length}`} className="space-y-2">
                    {bullets.map((b, i) => (
                        <li key={i} className="flex gap-3">
                            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-studio-red" aria-hidden="true" />
                            <span>{withLinks(b)}</span>
                        </li>
                    ))}
                </ul>
            );
        bullets = [];
    };

    lines.forEach((line, i) => {
        if (i === 0 && /^\d+\.\d+\s/.test(line)) {
            nodes.push(
                <h3 key={`h${nodes.length}`} className="text-sm font-bold uppercase tracking-[0.15em] text-studio-text">
                    {line}
                </h3>
            );
        } else if (line.startsWith('• ')) {
            flushParagraph();
            bullets.push(line.slice(2));
        } else {
            flushBullets();
            paragraph.push(line);
        }
    });
    flushParagraph();
    flushBullets();

    return (
        <div key={key} className="space-y-3">
            {nodes}
        </div>
    );
};

/** Gabarit commun des pages légales (confidentialité, conditions d'utilisation...). */
export const LegalPage: React.FC<LegalPageProps> = ({
    path,
    eyebrow,
    title,
    updated,
    description,
    intro,
    sections,
    related,
}) => (
    <div className="bg-studio-bg text-studio-text">
        <SEO
            title={eyebrow === 'Legal' ? title : `${eyebrow} ${title}`}
            description={description}
            url={`https://chimenestudio.com${path}`}
        />

        <header className="border-b border-white/10">
            <div className="mx-auto max-w-3xl px-5 pb-12 pt-32 md:px-8 md:pb-16 md:pt-44">
                <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-studio-muted">
                    <span className="h-2 w-2 bg-studio-red" aria-hidden="true" />
                    {eyebrow}
                </p>
                <h1 className="mt-4 text-[clamp(2.5rem,8vw,5rem)] font-extrabold uppercase leading-[0.95] tracking-tighter text-white">
                    {title}
                </h1>
                <p className="mt-5 text-sm text-studio-muted">Last updated: {updated}</p>
                {intro && <p className="mt-8 text-lg leading-relaxed text-studio-text/90">{intro}</p>}
            </div>
        </header>

        <div className="mx-auto max-w-3xl space-y-14 px-5 py-14 md:px-8 md:py-20">
            {sections.map((section, index) => (
                <section key={section.title}>
                    <h2 className="flex items-baseline gap-4 border-b border-white/10 pb-4 text-xl font-extrabold uppercase tracking-tight text-white md:text-2xl">
                        <span className="text-sm font-bold tracking-[0.3em] text-studio-muted">
                            {String(index + 1).padStart(2, '0')}
                        </span>
                        {section.title}
                    </h2>
                    <div className="mt-6 space-y-6 text-base leading-relaxed text-studio-muted">
                        {section.content.split('\n\n').map(renderBlock)}
                    </div>
                </section>
            ))}

            {related && related.length > 0 && (
                <nav aria-label="Related policies" className="border-t border-white/10 pt-8">
                    <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-studio-muted">Related</p>
                    <ul className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-8">
                        {related.map((item) => (
                            <li key={item.to}>
                                <Link
                                    to={item.to}
                                    className="text-sm font-semibold text-studio-text underline decoration-white/30 underline-offset-4 hover:decoration-studio-red"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </div>
    </div>
);
