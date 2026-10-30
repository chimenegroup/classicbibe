import React from 'react';
import { getProjectsByCategory } from '../../data/projects';
import { Reveal } from '../utils/Reveal';
import { FeaturedGame } from './FeaturedGame';
import { AppCard } from './AppCard';
import { SectionTitle } from '../ui/SectionTitle';

/** Section "Games" + "Tools" de la page d'accueil (remplace l'ancien showroom filtrable). */
export const ProjectGrid: React.FC = () => {
    const games = getProjectsByCategory('game');
    const apps = getProjectsByCategory('app');

    return (
        <section id="projects" className="bg-studio-bg py-20 md:py-28">
            <div className="mx-auto max-w-7xl px-5 md:px-8">
                {games.length > 0 && (
                    <>
                        <Reveal>
                            <SectionTitle index="01" title="Games" />
                        </Reveal>
                        <div className="mt-8 space-y-8 md:mt-10">
                            {games.map((game) => (
                                <Reveal key={game.id}>
                                    <FeaturedGame project={game} />
                                </Reveal>
                            ))}
                        </div>
                    </>
                )}

                {apps.length > 0 && (
                    <div className="mt-20 md:mt-28">
                        <Reveal>
                            <SectionTitle index="02" title="Tools" />
                        </Reveal>
                        <div className="mt-8 space-y-8 md:mt-10">
                            {apps.map((app) => (
                                <Reveal key={app.id}>
                                    <AppCard project={app} />
                                </Reveal>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};
