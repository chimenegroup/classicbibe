import {useState, useEffect, type JSX} from 'react';
import { Gamepad2, Code, Palette, Sparkles, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import Google from '../assets/google.svg?react';
import Amazon from '../assets/amazon.svg?react';
import Huawei from '../assets/huawei.svg?react';

type StoreType = 'steam' | 'playstore' | 'huawei' | 'appstore' | 'amazon';

interface Project {
    title: string;
    genre: string;
    image: string;
    description: string;
    color: string;
    stores: StoreType[];
}

const Home = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const id = requestAnimationFrame(() => {
            setIsVisible(true);
        });

        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 20 - 10,
                y: (e.clientY / window.innerHeight) * 20 - 10,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            cancelAnimationFrame(id);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const projects: Project[] = [
        {
            title: "Bibe The Game",
            genre: "Arcade",
            image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop",
            description: "An infinite multiplayer arcade dodge & survive game! Test your reflexes and push your score beyond limits.",
            color: "from-purple-500 to-pink-500",
            stores: ["amazon"],
        },
        {
            title: "Classic Bibe",
            genre: "Action/Arcade",
            image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&h=600&fit=crop",
            description: "An infinite multiplayer arcade dodge & survive game! Test your reflexes, compete with friends, and climb the global leaderboard.",
            color: "from-blue-500 to-cyan-500",
            stores: ["playstore", "amazon", "huawei"],
        },
    ];

    const storeIcons: Record<StoreType, JSX.Element> = {
        steam: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25 1.297.539 2.793-.076 3.332-1.375.263-.63.264-1.319.005-1.949s-.75-1.121-1.377-1.383c-.624-.26-1.29-.249-1.878-.03l1.523.63c.956.4 1.409 1.5 1.009 2.455-.397.957-1.497 1.41-2.454 1.012H7.54zm11.415-9.303c0-1.662-1.353-3.015-3.015-3.015-1.665 0-3.015 1.353-3.015 3.015 0 1.665 1.35 3.015 3.015 3.015 1.663 0 3.015-1.35 3.015-3.015zm-5.273-.005c0-1.252 1.013-2.266 2.265-2.266 1.249 0 2.266 1.014 2.266 2.266 0 1.251-1.017 2.265-2.266 2.265-1.253 0-2.265-1.014-2.265-2.265z"/>
            </svg>
        ),
        playstore: (
            // Google Play Store SVG
            <Google className="w-5 h-5" fill="#fff"/>
        ),
        huawei: (
            // Huawei AppGallery SVG
            <Huawei className="w-5 h-5" fill="#fff"/>
        ),
        appstore: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
        ),
        amazon: (
            // Amazon Appstore SVG
            <Amazon className="w-5 h-5" fill="#fff"/>
        ),
    };

    const handleContact = () => {
        window.location.href = "mailto:chimene.info@gmail.com";
    }

    return (
        <div className="min-h-screen bg-black text-white overflow-hidden">
            {/* Animated Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                {/* Gradient animé qui suit la souris */}
                <div
                    className="absolute inset-0 opacity-40"
                    style={{
                        background: 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.4) 0%, transparent 50%)',
                        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                        transition: 'transform 0.3s ease-out'
                    }}
                />

                {/* Vagues animées */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/30 via-transparent to-cyan-900/30 animate-pulse"
                         style={{ animationDuration: '8s' }} />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-pink-900/20 via-transparent to-purple-900/20 animate-pulse"
                         style={{ animationDuration: '6s', animationDelay: '1s' }} />
                </div>

                {/* Grille subtile */}
                <div className="absolute inset-0 opacity-10"
                     style={{
                         backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
                         backgroundSize: '100px 100px'
                     }}
                />

                {/* Orbes flottants */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
                     style={{ animationDuration: '7s' }} />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"
                     style={{ animationDuration: '9s', animationDelay: '2s' }} />
                <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse"
                     style={{ animationDuration: '6s', animationDelay: '1s' }} />
            </div>

            {/* Hero Section */}
            <section id="accueil" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
                <div className={`text-center space-y-6 sm:space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-block">
                        <div className="relative">
                            <Gamepad2 className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-purple-500 animate-bounce mx-auto" />
                            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 absolute -top-2 -right-2 animate-pulse" />
                        </div>
                    </div>

                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-6 px-4">
 <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
 CHIMENE STUDIO
 </span>
                    </h1>

                    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-300 mb-6 md:mb-8 px-4">
                        Creator of Playful Experiences
                    </p>

                    <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-6">
                        We create fun and addictive mobile games focused on multiplayer experiences and arcade-style gameplay. Based in Brazzaville, Congo, we're passionate about bringing joy to players worldwide.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-8 px-6">
                        <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-base sm:text-lg overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50">
                            <span className="relative z-10">See my projects</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </button>

                        <button onClick={handleContact} className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-cyan-500 rounded-full font-bold text-base sm:text-lg hover:bg-cyan-500/20 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/50">
                            Contact me
                        </button>
                    </div>

                    <div className="flex gap-6 justify-center pt-12">
                        <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-purple-500 transition-all duration-300 hover:scale-125">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-cyan-500 transition-all duration-300 hover:scale-125">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="mailto:chimene.info@gmail.com" className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-pink-500 transition-all duration-300 hover:scale-125">
                            <Mail className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                    <ChevronDown className="w-8 h-8 text-purple-400" />
                </div>
            </section>

            {/* Skills Section */}
            <section id="compétences" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center mb-12 sm:mb-16 md:mb-20 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent px-4">
                        Skills
                    </h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            { icon: Code, title: "Development", desc: "Unity, Unreal, Godot, C#, C++", color: "purple" },
                            { icon: Palette, title: "Game Design", desc: "Level Design, Balancing, Prototyping", color: "pink" },
                            { icon: Gamepad2, title: "Production", desc: "Project management, Team Lead", color: "cyan" }
                        ].map((skill, i) => (
                            <div
                                key={i}
                                className="group relative p-6 sm:p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                                style={{
                                    animationDelay: `${i * 0.2}s`
                                }}
                            >
                                <div className={`w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 bg-gradient-to-br from-${skill.color}-500 to-${skill.color}-700 rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform duration-300`}>
                                    <skill.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{skill.title}</h3>
                                <p className="text-sm sm:text-base text-gray-400">{skill.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Showcase */}
            <section id="projets" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center mb-12 sm:mb-16 md:mb-20 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent px-4">
                        Recent Projects
                    </h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {projects.map((project, i) => (
                            <div
                                key={i}
                                className="group relative overflow-hidden rounded-2xl aspect-[3/4] cursor-pointer"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />
                                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
 <span className={`inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4 bg-gradient-to-r ${project.color} w-fit`}>
 {project.genre}
 </span>
                                    <h3 className="text-2xl sm:text-3xl font-black mb-2">{project.title}</h3>
                                    <p className="text-sm sm:text-base text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 mb-4">
                                        {project.description}
                                    </p>

                                    {/* Stores disponibles */}
                                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                                        <span className="text-xs sm:text-sm text-gray-400 font-semibold">Available on:</span>
                                        <div className="flex gap-2">
                                            {project.stores.map((store, idx) => (
                                                <div
                                                    key={idx}
                                                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:scale-110 cursor-pointer"
                                                    title={store.charAt(0).toUpperCase() + store.slice(1)}
                                                >
                                                    {storeIcons[store]}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="contact" className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="p-8 sm:p-12 md:p-16 rounded-3xl bg-gradient-to-br from-purple-900/50 via-pink-900/50 to-cyan-900/50 backdrop-blur-sm border border-white/10">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 px-4">
                            Ready to collaborate?
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 px-4">
                            Let's bring your game vision to life.
                        </p>
                        <button onClick={handleContact} className="px-8 sm:px-12 py-4 sm:py-5 bg-white text-black rounded-full font-bold text-lg sm:text-xl hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-white/50">
                            Start a project
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;