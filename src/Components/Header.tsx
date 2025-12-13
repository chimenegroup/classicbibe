import { useState, useEffect } from 'react';
import { Gamepad2, Sparkles, Menu, X } from 'lucide-react';
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = [
        { name: 'Home', href: '#accueil' },
        { name: 'Skills', href: '#compétences' },
        { name: 'Projects', href: '#projets' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <div>
            {/* Header Navigation */}
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-purple-500/20' : 'bg-transparent'}`}>
                <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <a href="#" className="flex items-center gap-3 group">
                            <div className="relative">
                                <Gamepad2 className="w-8 h-8 sm:w-10 sm:h-10 text-purple-500 group-hover:text-pink-500 transition-colors duration-300" />
                                <Sparkles className="w-4 h-4 text-cyan-400 absolute -top-1 -right-1 animate-pulse" />
                            </div>
                            <span className="text-xl sm:text-2xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                CHIMENE STUDIO
              </span>
                        </a>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center gap-8">
                            {navItems.map((item, i) => (
                                <a
                                    key={i}
                                    href={item.href}
                                    className="relative text-gray-300 hover:text-white font-semibold transition-colors duration-300 group"
                                >
                                    {item.name}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                                </a>
                            ))}
                        </div>

                        {/* CTA Button Desktop */}
                        {/*<button className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-sm hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">*/}
                        {/*    Télécharger CV*/}
                        {/*</button>*/}

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                <div className={`md:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-4 py-6 bg-black/95 backdrop-blur-xl border-t border-white/10">
                        <div className="flex flex-col gap-4">
                            {navItems.map((item, i) => (
                                <a
                                    key={i}
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg font-semibold transition-all duration-300"
                                >
                                    {item.name}
                                </a>
                            ))}
                            {/*<button className="mt-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-sm hover:scale-105 transition-all duration-300">*/}
                            {/*    Télécharger CV*/}
                            {/*</button>*/}
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;