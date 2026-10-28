import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: 'website' | 'article' | 'game';
    keywords?: string;
}

export const SEO: React.FC<SEOProps> = ({
                                            title = 'Chimene Studio | Jeux Vidéo & Applications Natives',
                                            description = 'Studio indépendant spécialisé dans le développement de jeux vidéo multijoueurs à basse latence et d\'applications desktop haute performance.',
                                            image = 'https://chimenestudio.com/og-cover.png',
                                            url = 'https://chimenestudio.com',
                                            type = 'website',
                                            keywords = 'Chimene Studio, indie game dev, jeux vidéo, applications desktop, Tauri, Rust, Unity, Mirror, Classic Bibe',
                                        }) => {
    const siteTitle = title.includes('Chimene Studio') ? title : `${title} | Chimene Studio`;

    return (
        <Helmet>
            {/* Langue principale du document */}
            <html lang="fr" />

            {/* Balises SEO Standard */}
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={url} />

            {/* Robots / Indexation */}
            <meta name="robots" content="index, follow" />

            {/* Open Graph / Facebook / Discord / LinkedIn / WhatsApp */}
            <meta property="og:locale" content="fr_FR" />
            <meta property="og:type" content={type === 'game' ? 'website' : type} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:url" content={url} />
            <meta property="og:site_name" content="Chimene Studio" />

            {/* Twitter / X Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@ChimeneStudio" />
            <meta name="twitter:creator" content="@ChimeneStudio" />
            <meta name="twitter:title" content={siteTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
};