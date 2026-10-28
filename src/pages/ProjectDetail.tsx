import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowLeft,
    ExternalLink,
    Gamepad2,
    ShoppingBag,
    Github,
    Globe,
    CheckCircle2,
    Layers,
    Calendar,
    ShieldCheck,
    Maximize2,
    X,
    Play,
    Terminal,
    Sparkles
} from 'lucide-react';
import { getProjectById } from '../data/projects';
import { Badge } from '../components/ui/Badge';
import { SEO } from '../components/seo/SEO';

export const ProjectDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const project = getProjectById(id || '');

    // Gestion du média sélectionné (Vidéo ou Image de galerie)
    const [activeMedia, setActiveMedia] = useState<'video' | number>(
        project?.videoUrl ? 'video' : 0
    );

    // Modale Lightbox pour afficher les visuels en grand
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);

    if (!project) {
        return <Navigate to="/" replace />;
    }

    // Liste globale de tous les visuels (Cover + Galerie)
    const allImages = [project.coverImage, ...(project.gallery || [])];

    return (
        <div className="min-h-screen bg-studio-bg text-studio-text pb-32 relative overflow-hidden">

            {/* Configuration SEO dynamique */}
            <SEO
                title={project.title}
                description={project.tagline || project.description}
                image={`https://chimenestudio.com${project.coverImage}`}
                url={`https://chimenestudio.com/project/${project.id}`}
                type="game"
            />

            {/* Lightbox Modal Plein Écran */}
            <AnimatePresence>
                {lightboxImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setLightboxImage(null)}
                        className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 cursor-pointer"
                    >
                        <button
                            onClick={() => setLightboxImage(null)}
                            className="absolute top-6 right-6 p-3 rounded-xl bg-studio-card border border-white/10 hover:bg-studio-red text-white transition-colors shadow-2xl z-50"
                            aria-label="Fermer"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <motion.img
                            initial={{ scale: 0.95 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.95 }}
                            src={lightboxImage}
                            alt="Agrandissement"
                            className="max-w-full max-h-[90vh] rounded-2xl object-contain shadow-2xl border border-white/10"
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* =========================================================================
               1. HERO CINÉMATIQUE PLEIN ÉCRAN (Façon Store AAA / EA)
               ========================================================================= */}
            <div className="relative w-full h-[60vh] sm:h-[70vh] min-h-[500px] overflow-hidden bg-black">
                {/* Image de fond en mode couverture immersive */}
                <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover filter brightness-75 scale-105"
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://placehold.co/1920x1080/0B111E/94A3B8?text=Chimene+Studio';
                    }}
                />

                {/* Dégradés superposés pour fondre l'image dans le fond sombre du site */}
                <div className="absolute inset-0 bg-gradient-to-t from-studio-bg via-studio-bg/60 to-black/40" />
                <div className="absolute inset-0 bg-gradient-to-r from-studio-bg/90 via-transparent to-transparent" />

                {/* Contenu du Hero positionné en bas de l'image */}
                <div className="absolute inset-0 flex items-end">
                    <div className="max-w-7xl mx-auto w-full px-6 pb-12 sm:pb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">

                        <div className="space-y-4 max-w-3xl">
                            {/* Bouton Retour discret en haut */}
                            <Link
                                to="/"
                                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-studio-muted hover:text-white transition-all text-xs font-bold uppercase tracking-wider mb-2"
                            >
                                <ArrowLeft className="w-3.5 h-3.5" />
                                <span>Retour au Showroom</span>
                            </Link>

                            <div className="flex flex-wrap items-center gap-3">
                                <span className="px-3 py-1 rounded-md bg-studio-blue/30 border border-studio-blue/40 text-xs font-mono font-bold tracking-widest uppercase text-white backdrop-blur-md">
                                    {project.category === 'game' ? 'Jeu Vidéo' : 'Application Desktop'}
                                </span>
                                <Badge variant={project.status === 'Released' ? 'accent' : 'outline'}>
                                    {project.status === 'Released' ? 'Disponible' : project.status}
                                </Badge>
                            </div>

                            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight uppercase font-sans drop-shadow-lg">
                                {project.title}
                            </h1>

                            <p className="text-lg sm:text-xl font-bold text-studio-red font-mono drop-shadow">
                                {project.tagline}
                            </p>
                        </div>

                        {/* Bouton d'action rapide principal (Store CTA) */}
                        <div className="shrink-0">
                            {project.links.steam ? (
                                <a
                                    href={project.links.steam}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-8 py-5 rounded-2xl bg-studio-red hover:bg-studio-red-hover text-white font-black text-sm uppercase tracking-widest shadow-2xl shadow-studio-red/40 transition-all hover:scale-105 border border-white/20"
                                >
                                    <Gamepad2 className="w-6 h-6" />
                                    <span>Jouer sur Steam</span>
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            ) : project.links.store ? (
                                <a
                                    href={project.links.store}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 px-8 py-5 rounded-2xl bg-studio-blue hover:bg-blue-600 text-white font-black text-sm uppercase tracking-widest shadow-2xl shadow-studio-blue/40 transition-all hover:scale-105 border border-white/20"
                                >
                                    <ShoppingBag className="w-6 h-6" />
                                    <span>Microsoft Store</span>
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            ) : null}
                        </div>

                    </div>
                </div>
            </div>

            {/* =========================================================================
               2. CONTENU PRINCIPAL & GRILLE IMMERSIVE
               ========================================================================= */}
            <div className="max-w-7xl mx-auto px-6 mt-16 space-y-20 relative z-10">

                {/* Grille de présentation (Description longue & Panneau d'achat détaillé) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Description narrative */}
                    <div className="lg:col-span-8 space-y-6">
                        <div className="inline-flex items-center gap-2 text-xs font-mono text-studio-muted uppercase tracking-widest">
                            <Sparkles className="w-4 h-4 text-studio-red" />
                            <span>Vue d'ensemble du projet</span>
                        </div>

                        <p className="text-studio-text text-lg sm:text-xl leading-relaxed font-normal">
                            {project.description}
                        </p>
                    </div>

                    {/* Panneau de distribution complet (Sidebar style store) */}
                    <div className="lg:col-span-4 glass-card p-6 rounded-3xl border border-white/10 space-y-4 shadow-2xl bg-studio-card">
                        <div className="flex items-center gap-2 border-b border-white/10 pb-4 mb-2">
                            <Terminal className="w-4 h-4 text-studio-red" />
                            <h3 className="text-white font-black text-xs uppercase tracking-[0.2em]">Accès & Canaux</h3>
                        </div>

                        {project.links.steam && (
                            <a
                                href={project.links.steam}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between w-full px-5 py-3.5 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-900 hover:from-blue-600 hover:to-indigo-800 text-white font-bold text-xs uppercase tracking-wider transition-all group border border-white/10 shadow-lg"
                            >
                                <div className="flex items-center gap-3">
                                    <Gamepad2 className="w-5 h-5" />
                                    <span>Steam Store</span>
                                </div>
                                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                        )}

                        {project.links.store && (
                            <a
                                href={project.links.store}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between w-full px-5 py-3.5 rounded-xl bg-gradient-to-r from-cyan-700 to-blue-800 hover:from-cyan-600 hover:to-blue-700 text-white font-bold text-xs uppercase tracking-wider transition-all group border border-white/10 shadow-lg"
                            >
                                <div className="flex items-center gap-3">
                                    <ShoppingBag className="w-5 h-5" />
                                    <span>Microsoft Store</span>
                                </div>
                                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                        )}

                        {project.links.github && (
                            <a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between w-full px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider border border-white/10 transition-all group"
                            >
                                <div className="flex items-center gap-3">
                                    <Github className="w-4 h-4" />
                                    <span>Repository GitHub</span>
                                </div>
                                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                        )}

                        {project.links.website && (
                            <a
                                href={project.links.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between w-full px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-wider border border-white/10 transition-all group"
                            >
                                <div className="flex items-center gap-3">
                                    <Globe className="w-4 h-4" />
                                    <span>Site Web Officiel</span>
                                </div>
                                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                        )}

                        {!project.links.steam && !project.links.store && !project.links.github && !project.links.website && (
                            <div className="text-center py-6 text-studio-muted text-xs font-mono uppercase tracking-wider bg-white/5 rounded-xl border border-white/5">
                                Disponibilité imminente.
                            </div>
                        )}
                    </div>
                </div>

                {/* =========================================================================
                   3. GALERIE MÉDIA & LECTEUR IMMERSIF
                   ========================================================================= */}
                <div className="space-y-6">
                    <div className="border-b border-white/10 pb-4">
                        <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">Galerie & Médias</h2>
                    </div>

                    {/* Lecteur Principal */}
                    <div className="relative aspect-video w-full rounded-3xl overflow-hidden glass-card border border-white/10 bg-black shadow-2xl">
                        {activeMedia === 'video' && project.videoUrl ? (
                            <iframe
                                src={project.videoUrl}
                                title={`Trailer de ${project.title}`}
                                className="w-full h-full border-0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        ) : (
                            <div className="relative w-full h-full group">
                                <img
                                    src={allImages[typeof activeMedia === 'number' ? activeMedia : 0]}
                                    alt={`Aperçu ${project.title}`}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'https://placehold.co/1280x720/131C2E/94A3B8?text=Chimene+Studio';
                                    }}
                                />
                                <button
                                    onClick={() => setLightboxImage(allImages[typeof activeMedia === 'number' ? activeMedia : 0])}
                                    className="absolute bottom-6 right-6 px-5 py-3 rounded-xl bg-black/80 hover:bg-studio-red text-white backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider border border-white/15 shadow-2xl"
                                >
                                    <Maximize2 className="w-4 h-4" />
                                    <span>Agrandir l'image</span>
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Vignettes de sélection */}
                    <div className="flex items-center gap-4 overflow-x-auto p-3 scrollbar-thin">
                        {project.videoUrl && (
                            <button
                                onClick={() => setActiveMedia('video')}
                                className={`relative flex-shrink-0 w-40 h-28 rounded-2xl overflow-hidden border-2 transition-all flex items-center justify-center bg-studio-card ${
                                    activeMedia === 'video' ? 'border-studio-red scale-105 shadow-xl shadow-studio-red/25' : 'border-white/10 opacity-60 hover:opacity-100'
                                }`}
                            >
                                <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                    <Play className="w-8 h-8 text-white fill-white" />
                                </div>
                                <span className="absolute bottom-2 text-[10px] font-mono font-bold text-white uppercase tracking-widest">Trailer Officiel</span>
                            </button>
                        )}

                        {allImages.map((imgSrc, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveMedia(idx)}
                                className={`relative flex-shrink-0 w-40 h-28 rounded-2xl overflow-hidden border-2 transition-all bg-studio-card ${
                                    activeMedia === idx ? 'border-studio-red scale-105 shadow-xl shadow-studio-red/25' : 'border-white/10 opacity-60 hover:opacity-100'
                                }`}
                            >
                                <img
                                    src={imgSrc}
                                    alt={`Vignette ${idx + 1}`}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = 'https://placehold.co/300x200/131C2E/94A3B8?text=Asset';
                                    }}
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* =========================================================================
                   4. POINTS FORTS & FONCTIONNALITÉS (Grille Style Cartes AAA)
                   ========================================================================= */}
                <div className="space-y-6">
                    <div className="border-b border-white/10 pb-4">
                        <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">Points Forts & Fonctionnalités</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {project.features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card p-6 rounded-3xl border border-white/10 flex items-start gap-4 hover:border-white/20 transition-all bg-studio-card"
                            >
                                <div className="p-3 rounded-2xl bg-studio-red/10 text-studio-red shrink-0 border border-studio-red/20">
                                    <CheckCircle2 className="w-6 h-6" />
                                </div>
                                <p className="text-studio-text text-base font-medium leading-relaxed pt-1.5">
                                    {feature}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* =========================================================================
                   5. SPÉCIFICATIONS TECHNIQUES (Fiche Propre)
                   ========================================================================= */}
                <div className="space-y-6">
                    <div className="border-b border-white/10 pb-4">
                        <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">Spécifications Techniques</h2>
                    </div>

                    <div className="glass-card rounded-3xl border border-white/10 overflow-hidden bg-studio-card shadow-2xl">
                        <div className="divide-y divide-white/10">

                            <div className="p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                                <span className="text-studio-muted text-xs font-mono uppercase tracking-widest flex items-center gap-3">
                                    <Layers className="w-4 h-4 text-studio-blue" />
                                    Technologies & Stack
                                </span>
                                <div className="sm:col-span-2 flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-white font-semibold">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-4 items-center bg-white/[0.01]">
                                <span className="text-studio-muted text-xs font-mono uppercase tracking-widest flex items-center gap-3">
                                    <Calendar className="w-4 h-4 text-studio-blue" />
                                    Sortie / Disponibilité
                                </span>
                                <span className="sm:col-span-2 text-white font-bold text-sm font-mono">
                                    {project.releaseDate}
                                </span>
                            </div>

                            <div className="p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                                <span className="text-studio-muted text-xs font-mono uppercase tracking-widest flex items-center gap-3">
                                    <ShieldCheck className="w-4 h-4 text-studio-blue" />
                                    Statut Actuel
                                </span>
                                <span className="sm:col-span-2 text-white font-bold text-sm">
                                    {project.status === 'Released' ? 'Version Finale Commercialisée' : 'En Phase Active de Développement'}
                                </span>
                            </div>

                            <div className="p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-4 items-center bg-white/[0.01]">
                                <span className="text-studio-muted text-xs font-mono uppercase tracking-widest flex items-center gap-3">
                                    <Globe className="w-4 h-4 text-studio-blue" />
                                    Localisation Langues
                                </span>
                                <span className="sm:col-span-2 text-white text-sm leading-relaxed">
                                    {project.category === 'game'
                                        ? 'Support natif de 11 langues (Français, Anglais, Espagnol, Allemand, Italien, Portugais, Chinois Simplifié/Traditionnel, Japonais, Coréen, Russe)'
                                        : 'Interface multilingue & traitement local indépendant de la langue'
                                    }
                                </span>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};