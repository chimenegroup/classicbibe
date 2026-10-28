import React from 'react';
import { motion } from 'framer-motion';
import { MonitorSmartphone, Cpu, Sparkles, Terminal, ShieldCheck, Zap } from 'lucide-react';
import { Badge } from '../ui/Badge';

const EXPERTISES = [
    {
        title: 'Écosystème Cross-Platform',
        tagline: 'Unity, C# & Real-Time Networking',
        description: 'Conception d\'expériences multijoueurs immersives et réactives. Intégration complète des pipelines Steamworks, matchmaking bas-latence via Mirror, et interfaces dynamiques multi-contrôleurs.',
        icon: MonitorSmartphone,
        accentColor: 'border-l-studio-blue',
        iconBg: 'bg-studio-blue/20 text-blue-400',
    },
    {
        title: 'Performances Natives & Desktop',
        tagline: 'Tauri v2, Rust & Multithreading',
        description: 'Développement de logiciels de bureau ultra-rapides et légers. Exploitation du multithreading avec Rayon et intégration de modèles IA en local (ONNX Runtime) pour une exécution 100% hors-ligne.',
        icon: Cpu,
        accentColor: 'border-l-studio-red',
        iconBg: 'bg-studio-red/20 text-studio-red',
    },
    {
        title: 'Architecture & UI/UX Soignée',
        tagline: 'Design System & Modern Web Stack',
        description: 'Interfaces d\'exception créées avec React, Vite et Tailwind CSS v4. Priorité absolue à la fluidité, à la clarté visuelle et à la localisation multilingue native (11+ langues).',
        icon: Sparkles,
        accentColor: 'border-l-indigo-500',
        iconBg: 'bg-indigo-500/20 text-indigo-400',
    },
];

export const AboutSection: React.FC = () => {
    return (
        <section id="about" className="py-28 px-6 bg-studio-bg relative overflow-hidden border-t border-white/5">

            {/* Halos de lumière cinématiques en arrière-plan */}
            <div className="absolute top-1/3 -left-32 w-[450px] h-[450px] bg-studio-blue/15 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-10 right-0 w-[400px] h-[400px] bg-studio-red/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">

                {/* EN-TÊTE : ADN DU STUDIO */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">

                    {/* Texte de présentation */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7 space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-studio-muted uppercase tracking-widest">
                            <Terminal className="w-3.5 h-3.5 text-studio-red" />
                            <span>Manifeste du Studio</span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight font-sans">
                            À LA CROISÉE DU JEU VIDEO ET DE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-studio-blue via-white to-studio-red">
                L'INGÉNIERIE NATIVE
              </span>
                        </h2>

                        <p className="text-studio-muted text-base sm:text-lg leading-relaxed">
                            <strong className="text-white font-semibold">Chimene Studio</strong> ne se contente pas de coder des interfaces : nous façonnons des expériences numériques complètes. De la gestion de lobbies multijoueurs à faible latence jusqu’à l’optimisation de pipelines desktop sous Rust, notre vision associe créativité brute et exigence technique.
                        </p>

                        <p className="text-studio-muted text-base sm:text-lg leading-relaxed">
                            Chaque projet publié respecte trois piliers fondamentaux : <span className="text-white font-medium">autonomie locale (Offline-first)</span>, <span className="text-white font-medium">performance native</span> et <span className="text-white font-medium">finition UI/UX irréprochable</span>.
                        </p>

                        {/* Badges de métriques / engagements */}
                        <div className="pt-4 flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-studio-card border border-white/10 text-xs font-bold text-white uppercase tracking-wider">
                                <ShieldCheck className="w-4 h-4 text-studio-red" />
                                <span>100% Offline-First</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-studio-card border border-white/10 text-xs font-bold text-white uppercase tracking-wider">
                                <Zap className="w-4 h-4 text-studio-blue" />
                                <span>Performances Natives</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Visuel d'illustration technique (Carte Dashboard / Core Engine) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-5 relative"
                    >
                        <div className="relative rounded-2xl glass-card border border-white/10 p-6 space-y-6 shadow-2xl">

                            {/* Header carte tech */}
                            <div className="flex items-center justify-between border-b border-white/10 pb-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-studio-red" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                                </div>
                                <span className="text-[11px] font-mono text-studio-muted tracking-widest uppercase">
                  Engine Architecture v2.4
                </span>
                            </div>

                            {/* Contenu visuel interactif */}
                            <div className="space-y-4 font-mono text-xs">
                                <div className="p-3 rounded-lg bg-[#0B111E] border border-white/5 space-y-1">
                                    <div className="flex justify-between text-studio-muted">
                                        <span>STACK CORE</span>
                                        <span className="text-emerald-400">READY</span>
                                    </div>
                                    <p className="text-white font-bold">Rust + Tauri v2 + Unity Mirror</p>
                                </div>

                                <div className="p-3 rounded-lg bg-[#0B111E] border border-white/5 space-y-1">
                                    <div className="flex justify-between text-studio-muted">
                                        <span>LOCALIZATION</span>
                                        <span className="text-studio-blue">11 TARGET LANGUAGES</span>
                                    </div>
                                    <p className="text-studio-muted text-[11px]">FR / EN / ES / DE / IT / PT / ZH / JA / KO / RU</p>
                                </div>

                                <div className="p-3 rounded-lg bg-[#0B111E] border border-white/5 space-y-1">
                                    <div className="flex justify-between text-studio-muted">
                                        <span>PROCESSING</span>
                                        <span className="text-studio-red">MULTI-THREADED (RAYON)</span>
                                    </div>
                                    <p className="text-white">ONNX Runtime Background AI Removal</p>
                                </div>
                            </div>

                            {/* Tag Bas de carte */}
                            <div className="pt-2 flex items-center justify-between text-[11px] text-studio-muted font-mono">
                                <span>STATUS: OPERATIONAL</span>
                                <span className="text-white font-bold">CHIMENE STUDIO ©</span>
                            </div>
                        </div>

                        {/* Glow de fond */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-studio-blue/30 to-studio-red/30 rounded-2xl blur-xl opacity-30 -z-10" />
                    </motion.div>

                </div>

                {/* GRILLE D'EXPERTISES (3 COLONNES HAUTE DENSITÉ) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {EXPERTISES.map((expertise, index) => {
                        const Icon = expertise.icon;
                        return (
                            <motion.div
                                key={expertise.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className={`glass-card p-8 rounded-2xl flex flex-col justify-between border border-white/10 hover:border-white/20 transition-all duration-300 border-l-4 ${expertise.accentColor} group`}
                            >
                                <div className="space-y-4">
                                    {/* Icône & Titre */}
                                    <div className="flex items-center justify-between">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${expertise.iconBg} font-bold`}>
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <span className="text-[10px] font-mono uppercase tracking-widest text-studio-muted">0{index + 1}</span>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-studio-text transition-colors">
                                            {expertise.title}
                                        </h3>
                                        <p className="text-xs font-mono font-semibold text-studio-muted mt-1 uppercase tracking-wider">
                                            {expertise.tagline}
                                        </p>
                                    </div>

                                    <p className="text-studio-muted text-sm leading-relaxed pt-2">
                                        {expertise.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};