import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Terminal, Gamepad2, Layers, ShieldAlert, Cpu } from 'lucide-react';
import { SEO } from '../components/seo/SEO';

const NotFound: React.FC = () => {
    const [glitchActive, setGlitchActive] = useState(false);

    // Effet de glitch par intermittence façon écran de terminal corrompu
    useEffect(() => {
        const glitchInterval = setInterval(() => {
            setGlitchActive(true);
            setTimeout(() => setGlitchActive(false), 250);
        }, 4000);

        return () => clearInterval(glitchInterval);
    }, []);

    return (
        <div className="min-h-screen bg-studio-bg text-studio-text flex items-center justify-center px-6 py-24 relative overflow-hidden">

            {/* Configuration SEO */}
            <SEO
                title="Erreur 404 | Page Introuvable"
                description="La page que vous recherchez semble introuvable dans l'écosystème de Chimene Studio."
            />

            {/* Arrière-plan cinématique aux couleurs du Studio */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-studio-red/10 rounded-full blur-[160px] pointer-events-none" />
            <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-studio-blue/10 rounded-full blur-[140px] pointer-events-none" />

            {/* Trame géométrique de fond */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-10">

                {/* Badge d'erreur système */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-studio-card border border-white/10 text-xs font-mono uppercase tracking-widest text-studio-muted shadow-lg"
                >
                    <ShieldAlert className="w-4 h-4 text-studio-red animate-pulse" />
                    <span className="text-white">SYSTEM ERROR 404</span> — RESOURCE MISSING
                </motion.div>

                {/* Titre 404 avec effet Glitch */}
                <div className="space-y-4">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className={`text-8xl sm:text-9xl md:text-[11rem] font-black tracking-tighter uppercase font-sans transition-all duration-75 ${
                            glitchActive ? 'text-studio-red translate-x-1 filter blur-[0.5px]' : 'text-white'
                        }`}
                        style={{
                            textShadow: glitchActive
                                ? '3px 3px 0px #0A3871, -3px -3px 0px #A83B3B'
                                : '4px 4px 0px rgba(168, 59, 59, 0.3)'
                        }}
                    >
                        404
                    </motion.h1>
                    <div className="h-1.5 w-36 mx-auto bg-gradient-to-r from-studio-blue via-white to-studio-red rounded-full" />
                </div>

                {/* Messages d'erreur style Studio */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-3 max-w-xl mx-auto"
                >
                    <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                        HORS ZONE DE CONTRÔLE
                    </h2>
                    <p className="text-studio-muted text-sm sm:text-base leading-relaxed">
                        La ressource ou la page que vous tentez d'atteindre n'existe pas ou a été déplacée dans le vide numérique.
                    </p>
                </motion.div>

                {/* Boutons d'action principaux */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
                >
                    <Link
                        to="/"
                        className="w-full sm:w-auto px-8 py-4 rounded-xl bg-studio-red hover:bg-studio-red-hover text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-300 shadow-xl shadow-studio-red/25 hover:scale-105 border border-white/10"
                    >
                        <Home className="w-4 h-4" />
                        <span>Retour à l'accueil</span>
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="w-full sm:w-auto px-8 py-4 rounded-xl bg-studio-card hover:bg-white/5 text-studio-text hover:text-white font-bold text-xs uppercase tracking-widest border border-white/10 flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                        <ArrowLeft className="w-4 h-4 text-studio-muted" />
                        <span>Page précédente</span>
                    </button>
                </motion.div>

                {/* Boîte d'informations techniques (Code d'erreur) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="inline-block p-6 bg-studio-card/80 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl max-w-md w-full"
                >
                    <div className="flex items-center gap-4 text-left">
                        <div className="w-12 h-12 rounded-xl bg-studio-blue/20 border border-studio-blue/30 flex items-center justify-center flex-shrink-0 text-studio-blue">
                            <Terminal className="w-6 h-6" />
                        </div>
                        <div className="font-mono">
                            <p className="text-white font-bold text-xs uppercase tracking-wider">Status: 404_NOT_FOUND</p>
                            <p className="text-studio-muted text-[11px] pt-0.5">Target route could not be resolved by router.</p>
                        </div>
                    </div>
                </motion.div>

                {/* Raccourcis de navigation rapide */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto pt-6"
                >
                    {[
                        { title: "Projets", desc: "Explorer le showroom", icon: Gamepad2, href: "/#projects" },
                        { title: "À Propos", desc: "L'ADN du studio", icon: Cpu, href: "/#about" },
                        { title: "Accueil", desc: "Page principale", icon: Layers, href: "/" }
                    ].map((item, i) => (
                        <a
                            key={i}
                            href={item.href}
                            className="group p-5 bg-studio-card rounded-xl border border-white/10 hover:border-studio-red/50 transition-all duration-300 hover:scale-105 text-center space-y-2 shadow-lg"
                        >
                            <item.icon className="w-5 h-5 text-studio-muted group-hover:text-studio-red transition-colors mx-auto" />
                            <div>
                                <h3 className="text-white font-bold text-xs uppercase tracking-wider">{item.title}</h3>
                                <p className="text-studio-muted text-[11px] pt-1">{item.desc}</p>
                            </div>
                        </a>
                    ))}
                </motion.div>

            </div>
        </div>
    );
};

export default NotFound;