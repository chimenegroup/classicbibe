import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from '../../data/projects';
import { Badge } from '../ui/Badge';

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="group flex flex-col glass-card rounded-2xl overflow-hidden border border-white/10 hover:border-studio-red/50 transition-all duration-500 shadow-xl bg-studio-card"
        >
            {/* Conteneur de l'image avec effet Zoom Cinématique */}
            <div className="relative h-60 overflow-hidden bg-studio-bg border-b border-white/10">
                <img
                    src={project.coverImage}
                    alt={`Couverture de ${project.title}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/131C2E/94A3B8?text=Chimene+Studio+Asset';
                    }}
                />

                {/* Voile sombre pour unifier la transition vers la carte */}
                <div className="absolute inset-0 bg-gradient-to-t from-studio-card via-transparent to-black/40 opacity-90" />

                {/* Badge de catégorie discret en haut à gauche */}
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-mono font-bold tracking-widest uppercase text-white border border-white/10">
                        {project.category === 'game' ? 'Jeu Vidéo' : 'Desktop App'}
                    </span>
                </div>

                {/* Badge de statut (Release / En dev) en haut à droite */}
                <div className="absolute top-4 right-4">
                    <Badge variant={project.status === 'Released' ? 'accent' : 'outline'}>
                        {project.status === 'Released' ? 'Disponible' : 'En développement'}
                    </Badge>
                </div>
            </div>

            {/* Contenu de la carte */}
            <div className="p-6 flex flex-col flex-grow justify-between space-y-6">

                <div className="space-y-2">
                    <h3 className="text-2xl font-black text-white group-hover:text-studio-red transition-colors tracking-tight">
                        {project.title}
                    </h3>
                    <p className="text-studio-muted text-sm leading-relaxed line-clamp-2">
                        {project.tagline}
                    </p>
                </div>

                {/* Badges Stack Technique (limité à 4) */}
                <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                        <span
                            key={tag}
                            className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-studio-muted group-hover:text-white transition-colors"
                        >
                            {tag}
                        </span>
                    ))}
                    {project.tags.length > 4 && (
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-studio-muted">
                            +{project.tags.length - 4}
                        </span>
                    )}
                </div>

                {/* Bouton redirigeant vers les détails avec React Router */}
                <Link
                    to={`/project/${project.id}`}
                    className="inline-flex items-center justify-between w-full px-5 py-3.5 bg-white/5 hover:bg-studio-red text-white text-xs font-bold uppercase tracking-widest rounded-xl border border-white/10 hover:border-studio-red transition-all duration-300 group/btn shadow-lg"
                >
                    <span>Découvrir les spécifications</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </Link>

            </div>
        </motion.div>
    );
};