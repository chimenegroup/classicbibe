import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Gamepad2, Layers, Sparkles } from 'lucide-react';
import { Button } from './ui/Button.tsx';

export const Hero: React.FC = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-studio-bg text-studio-text px-6 pt-32 pb-20">

            {/* 🌟 Arrière-plan cinématique aux couleurs du Studio (Effet Glow immersif) */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-studio-blue/20 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-studio-red/15 rounded-full blur-[120px] pointer-events-none" />

            {/* Trame géométrique subtile (texture de fond) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* Contenu de la Hero */}
            <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* Colonne Texte & Actions (7 colonnes) */}
                <div className="lg:col-span-7 space-y-8 text-left">

                    {/* Badge État du Studio */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-studio-card border border-white/10 text-xs font-bold uppercase tracking-widest text-studio-muted backdrop-blur-md shadow-lg"
                    >
                        <span className="w-2.5 h-2.5 rounded-full bg-studio-red animate-pulse" />
                        <span className="text-white">Chimene Studio</span> — Édition & Développement
                    </motion.div>

                    {/* Titre principal percutant */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]"
                    >
                        FORGER DES <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-studio-muted to-studio-red">
                            MOMENTS ÉPIQUES
                        </span>
                    </motion.h1>

                    {/* Sous-titre immersif */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-base sm:text-lg text-studio-muted max-w-xl font-normal leading-relaxed"
                    >
                        Studio indépendant spécialisé dans la création de jeux vidéo multijoueurs à basse latence et d'outils desktop haute performance conçus pour durer.
                    </motion.p>

                    {/* Boutons d'action principaux (Utilisation de ton composant UI Button) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-wrap items-center gap-4 pt-2"
                    >
                        <Button
                            variant="primary"
                            asLink
                            href="#projects"
                            icon={<Gamepad2 className="w-5 h-5" />}
                            className="!px-8 !py-4 !text-sm !font-bold uppercase tracking-wider bg-studio-red hover:bg-studio-red-hover shadow-xl shadow-studio-red/25"
                        >
                            Explorer les projets
                        </Button>

                        <Button
                            variant="secondary"
                            asLink
                            href="#about"
                            icon={<Layers className="w-5 h-5 text-studio-muted" />}
                            className="!px-8 !py-4 !text-sm !font-bold uppercase tracking-wider glass-card"
                        >
                            Notre Vision
                        </Button>
                    </motion.div>

                </div>

                {/* Colonne Visuelle Immersiva (5 colonnes) - Façon Showroom TSM/Activision */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="lg:col-span-5 relative"
                >
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-card border border-white/10 shadow-2xl group">

                        {/* Image de mise en avant du jeu phare (ex: Classic Bibe) */}
                        <img
                            src="/assets/projects/classic-bibe-cover.jpg"
                            alt="Chimene Studio Flagship"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            onError={(e) => {
                                (e.target as HTMLImageElement).src = 'https://placehold.co/800x600/131C2E/94A3B8?text=Chimene+Studio+Showcase';
                            }}
                        />

                        {/* Dégradé cinématique bas de carte */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B111E] via-transparent to-transparent opacity-90" />

                        {/* Badge flottant sur l'image */}
                        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                            <div className="space-y-1">
                                <span className="text-[10px] font-black uppercase tracking-widest text-studio-red bg-studio-red/10 px-2.5 py-1 rounded-md border border-studio-red/20">
                                    En vedette
                                </span>
                                <h3 className="text-xl font-bold text-white pt-1">Classic Bibe</h3>
                            </div>
                            <a
                                href="/project/classic-bibe"
                                className="w-12 h-12 rounded-xl bg-studio-card/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-studio-red hover:border-studio-red transition-all shadow-lg"
                                aria-label="Voir le projet"
                            >
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Élément décoratif d'arrière-plan de la carte */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-studio-blue to-studio-red rounded-3xl blur-xl opacity-20 -z-10 group-hover:opacity-40 transition-opacity" />
                </motion.div>

            </div>
        </section>
    );
};