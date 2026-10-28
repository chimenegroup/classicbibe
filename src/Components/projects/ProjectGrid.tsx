import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { getAllProjects, type ProjectCategory } from '../../data/projects';
import { Layers, Gamepad2, Cpu } from 'lucide-react';

type FilterValue = 'all' | ProjectCategory;

const FILTERS: { label: string; value: FilterValue; icon: React.ReactNode }[] = [
    { label: 'Tous les projets', value: 'all', icon: <Layers className="w-4 h-4" /> },
    { label: 'Jeux Vidéo', value: 'game', icon: <Gamepad2 className="w-4 h-4" /> },
    { label: 'Applications Desktop', value: 'app', icon: <Cpu className="w-4 h-4" /> },
];

export const ProjectGrid: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<FilterValue>('all');

    const projects = getAllProjects();

    const filteredProjects = projects.filter((project) =>
        activeFilter === 'all' ? true : project.category === activeFilter
    );

    return (
        <section id="projects" className="py-28 px-6 bg-studio-bg min-h-screen relative overflow-hidden">

            {/* Halos lumineux cinématiques d'arrière-plan */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-studio-blue/10 rounded-full blur-[160px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* EN-TÊTE DU SHOWROOM */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-8">
                    <div className="space-y-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-studio-muted uppercase tracking-widest">
                            <span>Catalogue & Productions</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight uppercase font-sans">
                            LE <span className="text-transparent bg-clip-text bg-gradient-to-r from-studio-blue via-white to-studio-red">SHOWROOM</span>
                        </h2>
                    </div>
                    <p className="text-studio-muted text-sm sm:text-base max-w-md leading-relaxed">
                        Explorez l'arsenal créatif de Chimene Studio : du divertissement multijoueur nerveux aux utilitaires natifs haute performance.
                    </p>
                </div>

                {/* SYSTÈMES DE FILTRES INTERACTIFS */}
                <div className="flex flex-wrap items-center gap-3 mb-14">
                    {FILTERS.map((filter) => (
                        <button
                            key={filter.value}
                            onClick={() => setActiveFilter(filter.value)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
                                activeFilter === filter.value
                                    ? 'bg-studio-red text-white border-studio-red shadow-xl shadow-studio-red/25 scale-105'
                                    : 'bg-studio-card text-studio-muted border-white/10 hover:text-white hover:border-white/20 hover:bg-white/5'
                            }`}
                        >
                            {filter.icon}
                            <span>{filter.label}</span>
                        </button>
                    ))}
                </div>

                {/* GRILLE DE PROJETS */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* ÉTAT VIDE */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-24 glass-card rounded-2xl border border-white/10"
                    >
                        <p className="text-studio-muted text-base font-mono uppercase tracking-widest">
                            Aucun projet ne correspond à cette catégorie pour le moment.
                        </p>
                    </motion.div>
                )}

            </div>
        </section>
    );
};