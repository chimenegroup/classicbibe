import { useState, useEffect } from 'react';
import { Home, Search, Gamepad2, AlertCircle, ArrowLeft, Sparkles } from 'lucide-react';

const NotFound = () => {
    const [glitchActive, setGlitchActive] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // Glitch effect
        const glitchInterval = setInterval(() => {
            setGlitchActive(true);
            setTimeout(() => setGlitchActive(false), 200);
        }, 3000);

        // Mouse movement
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 20 - 10,
                y: (e.clientY / window.innerHeight) * 20 - 10,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            clearInterval(glitchInterval);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="min-h-screen bg-black text-white overflow-hidden relative flex items-center justify-center">
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

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* Floating Gamepad Icon */}
                <div className="mb-8 flex justify-center">
                    <div className="relative">
                        <Gamepad2 className="w-24 h-24 sm:w-32 sm:h-32 text-purple-500 animate-bounce" />
                        <AlertCircle className="w-10 h-10 sm:w-12 sm:h-12 text-red-500 absolute -top-2 -right-2 animate-pulse" />
                        <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 absolute -bottom-2 -left-2 animate-pulse" />
                    </div>
                </div>

                {/* 404 Title with Glitch Effect */}
                <div className="mb-6 sm:mb-8">
                    <h1
                        className={`text-8xl sm:text-9xl md:text-[12rem] font-black mb-4 transition-all duration-100 ${
                            glitchActive ? 'text-red-500 transform translate-x-2' : ''
                        }`}
                        style={{
                            textShadow: glitchActive
                                ? '2px 2px 0px #00ffff, -2px -2px 0px #ff00ff'
                                : '4px 4px 0px rgba(139, 92, 246, 0.5)'
                        }}
                    >
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              404
            </span>
                    </h1>
                    <div className="h-2 w-32 sm:w-48 mx-auto bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full animate-pulse" />
                </div>

                {/* Error Messages */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Game Over!
          </span>
                </h2>

                <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto">
                    Oops! Looks like you found a secret level... or a page that doesn't exist.
                </p>

                <p className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-12 max-w-xl mx-auto">
                    The page you're looking for vanished into the digital void. Maybe it was eaten by a final boss? 🎮
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16">
                    <a
                        href="/"
                        className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50 flex items-center gap-3 w-full sm:w-auto justify-center"
                    >
                        <Home className="w-5 h-5" />
                        <span className="relative z-10">Back to Home</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>

                    <button
                        onClick={() => window.history.back()}
                        className="px-8 py-4 border-2 border-cyan-500 rounded-full font-bold text-lg hover:bg-cyan-500/20 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/50 flex items-center gap-3 w-full sm:w-auto justify-center"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Previous page
                    </button>
                </div>

                {/* Error Code Box */}
                <div className="inline-block p-6 sm:p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                    <div className="flex items-center gap-3 sm:gap-4 text-left">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Search className="w-6 h-6 sm:w-8 sm:h-8" />
                        </div>
                        <div>
                            <p className="text-white font-bold text-base sm:text-lg mb-1">Error code: 404</p>
                            <p className="text-gray-400 text-xs sm:text-sm">Page Not Found - Resource not found</p>
                        </div>
                    </div>
                </div>

                {/* Fun Suggestions */}
                <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
                    {[
                        { title: "Projects", desc: "See our games", icon: Gamepad2, href: "/#projets" },
                        { title: "Skills", desc: "Our expertise", icon: Sparkles, href: "/#compétences" },
                        { title: "Contact", desc: "Contact us", icon: Home, href: "/#contact" }
                    ].map((item, i) => (
                        <a
                            key={i}
                            href={item.href}
                            className="group p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:bg-white/10"
                        >
                            <item.icon className="w-8 h-8 text-purple-400 mb-3 group-hover:text-pink-400 transition-colors duration-300 mx-auto" />
                            <h3 className="text-white font-bold mb-1">{item.title}</h3>
                            <p className="text-gray-400 text-sm">{item.desc}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default NotFound;