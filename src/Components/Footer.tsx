import { Gamepad2, Github, Linkedin, Mail, Twitter, Instagram, Youtube, Heart, Sparkles } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        navigation: [
            { name: 'Home', href: '#accueil' },
            { name: 'Skills', href: '#compétences' },
            { name: 'Projects', href: '#projets' },
            { name: 'Contact', href: '#contact' }
        ],
        legal: [
            { name: 'Legal Notice', href: '#mentions' },
            { name: 'Privacy Policy', href: '/classicbibe/privacy' },
            { name: 'Terms of Use', href: '#cgu' },
            { name: 'Cookies', href: '#cookies' }
        ],
        social: [
            { name: 'GitHub', icon: Github, href: '#', color: 'hover:text-gray-400' },
            { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-400' },
            { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-cyan-400' },
            { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-400' },
            { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-400' },
            { name: 'Email', icon: Mail, href: 'mailto:contact@gamedev.com', color: 'hover:text-purple-400' }
        ]
    };

    return (
        <footer className="relative bg-black border-t border-white/10 overflow-hidden">
            {/* Background decoratif */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <a href="#" className="flex items-center gap-3 group mb-6">
                            <div className="relative">
                                <Gamepad2 className="w-10 h-10 text-purple-500 group-hover:text-pink-500 transition-colors duration-300" />
                                <Sparkles className="w-4 h-4 text-cyan-400 absolute -top-1 -right-1 animate-pulse" />
                            </div>
                            <span className="text-2xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                CHIMENE STUDIO
              </span>
                        </a>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Independent studio passionate about creating unique and innovative playful experiences.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span>Made with</span>
                            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                            <span>and lots of caffeine</span>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                            <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
                            Navigation
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.navigation.map((link, i) => (
                                <li key={i}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm inline-flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-purple-500 mr-0 group-hover:mr-2 transition-all duration-300 rounded-full" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                            <div className="w-1 h-6 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full" />
                            Legal
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link, i) => (
                                <li key={i}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm inline-flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-cyan-500 mr-0 group-hover:mr-2 transition-all duration-300 rounded-full" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social & Newsletter */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                            <div className="w-1 h-6 bg-gradient-to-b from-pink-500 to-orange-500 rounded-full" />
                            Follow us
                        </h3>

                        {/* Social Icons */}
                        <div className="grid grid-cols-3 gap-3 mb-6">
                            {footerLinks.social.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    className={`w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:border-white/20 hover:shadow-lg group`}
                                    title={social.name}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>

                        {/* Newsletter */}
                        <div className="mt-6">
                            <p className="text-gray-400 text-sm mb-3">Newsletter</p>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:border-purple-500 transition-colors duration-300"
                                />
                                <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-bold text-sm hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50">
                                    OK
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 py-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-gray-400 text-sm text-center sm:text-left">
                            © {currentYear} Chimene Studio. All rights reserved.
                        </p>

                        {/* Tech Stack Badge */}
                        <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                All systems operational
              </span>
                            <span>•</span>
                            <span>Built with React + Vite</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;