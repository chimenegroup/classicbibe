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
                                            title = 'Chimene Studio | Indie Games & Apps',
                                            description = 'Independent studio behind Classic Bibe, a cartoon party game for 1 to 4 players, and Orion PDF, a fast offline PDF manager.',
                                            image = 'https://chimenestudio.com/og/classic-bibe.jpg',
                                            url = 'https://chimenestudio.com',
                                            type = 'website',
                                            keywords = 'Chimene Studio, indie games, party game, local multiplayer, Classic Bibe, Orion PDF',
                                        }) => {
    const siteTitle = title.includes('Chimene Studio') ? title : `${title} | Chimene Studio`;

    return (
        <Helmet>
            {/* Langue principale du document */}
            <html lang="en" />

            {/* Balises SEO Standard */}
            <title>{siteTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={url} />

            {/* Robots / Indexation */}
            <meta name="robots" content="index, follow" />

            {/* Open Graph / Facebook / Discord / LinkedIn / WhatsApp */}
            <meta property="og:locale" content="en_US" />
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