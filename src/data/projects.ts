// src/data/projects.ts

export type ProjectCategory = 'game' | 'app';
export type ProjectStatus = 'Released' | 'In Development' | 'Beta';

export interface ProjectLinks {
    steam?: string;
    store?: string;
    demo?: string;
    github?: string;
    website?: string;
    googlePlay?: string;
}

export interface Project {
    id: string;
    title: string;
    tagline: string;
    category: ProjectCategory;
    description: string;
    features: string[];
    tags: string[];
    coverImage: string;
    gallery: string[];
    videoId?: string; // ID YouTube (le lecteur n'est chargé qu'au clic)
    banner?: string; // image large pour l'en-tête de la page projet
    languages?: string[];
    links: ProjectLinks;
    releaseDate: string;
    status: ProjectStatus;
    featured?: boolean; // Pour mettre en avant sur le Hero / Top de grille
    price?: string;
    platforms?: string[];
    hidden?: boolean; // true = non affiché sur le site (projet pas encore prêt)
}

export const PROJECTS_DATA: Project[] = [
    {
        id: 'classic-bibe',
        title: 'Classic Bibe',
        tagline: 'A cartoon party game for 1 to 4 players.',
        category: 'game',
        description:
            'Collect fruits and vegetables, dodge falling traps and fight for the highest score. Play solo, online, over LAN or on the same screen with friends and family. Customise your character, complete quests and unlock cosmetics in the shop.',
        features: [
            '1 to 4 players: solo, online, LAN or shared screen',
            'Character customisation, quests and a cosmetic shop',
            'Controller support and Steam Remote Play Together',
            'Steam Achievements, Cloud saves and Leaderboards',
            'Available in 11 languages',
        ],
        tags: ['Party Game', 'Arcade', 'Casual', '2D', 'Local Multiplayer'],
        coverImage: '/assets/projects/classic-bibe-cover.webp',
        gallery: [
            '/assets/projects/classic-bibe-1.webp',
            '/assets/projects/classic-bibe-2.webp',
        ],
        videoId: 'P3VB3sZPs4g',
        banner: '/assets/hero/bibe-hero-1920.webp',
        languages: [
            'English',
            'French',
            'German',
            'Spanish',
            'Italian',
            'Portuguese (Brazil)',
            'Russian',
            'Japanese',
            'Korean',
            'Simplified Chinese',
            'Traditional Chinese',
        ],
        links: {
            steam: 'https://store.steampowered.com/app/4414160/Classic_Bibe/',
            googlePlay: 'https://play.google.com/store/apps/details?id=com.chimenestudio.game.classicbibe',
        },
        releaseDate: 'April 14, 2026',
        status: 'Released',
        featured: true,
        price: '$4.99',
        platforms: ['Windows', 'Android'],
    },
    {
        id: 'pdf-manager-desktop',
        title: 'Orion PDF',
        tagline: 'A fast, lightweight PDF manager that works entirely offline.',
        category: 'app',
        description:
            'A modern, fast and lightweight desktop utility for viewing, organising and managing your PDF files. Merge several PDFs into one, split large documents, and sort everything with custom categories and tags. Everything is processed on your device: no account and no internet connection required.',
        features: [
            'Fast PDF viewer with a clean, responsive interface',
            'Merge several PDFs into one, or split a document into pages',
            'Custom categories and tags to organise personal and work files',
            '100% offline: no account, and no data leaves your device',
            'Quick startup and low resource usage',
        ],
        tags: ['Offline', 'No account', 'Merge & split', 'Tags'],
        coverImage: '/assets/projects/orion-pdf-cover.webp',
        gallery: ['/assets/projects/orion-pdf-cover.webp', '/assets/projects/orion-pdf-1.webp'],
        links: {
            store: 'https://apps.microsoft.com/detail/9npw3g3vr7gt',
        },
        releaseDate: 'Available now',
        status: 'Released',
        featured: false,
        price: 'Free',
        platforms: ['Windows'],
    },
    {
        id: 'image-toolkit-desktop',
        title: 'Desktop Image Toolkit',
        tagline: 'Outil de traitement d’image par lots et suppression de fond par IA.',
        category: 'app',
        description:
            'Application de bureau haute performance combinant Rust, Rayon et ONNX Runtime pour la manipulation d’images en masse et le détourage automatique en local.',
        features: [
            'Suppression d’arrière-plan locale assistée par IA (ONNX Runtime)',
            'Traitement multi-threadé ultra-rapide avec Rust & Rayon',
            'Interface réactive conçue avec Tauri v2, Vite & Tailwind CSS',
        ],
        tags: ['Tauri v2', 'Rust', 'AI', 'React', 'Tailwind CSS'],
        coverImage: '/assets/projects/image-toolkit-cover.jpg',
        gallery: [],
        links: {},
        releaseDate: 'En développement',
        status: 'In Development',
        featured: false,
        hidden: true, // masqué tant que l'outil n'est pas publié
    },
];

// Seuls les projets non masqués sont visibles sur le site
const VISIBLE = PROJECTS_DATA.filter((p) => !p.hidden);

// Obtenir tous les projets
export const getAllProjects = (): Project[] => VISIBLE;

// Obtenir uniquement les projets mis en avant
export const getFeaturedProjects = (): Project[] => VISIBLE.filter((p) => p.featured);

// Filtrer par catégorie ('game' ou 'app')
export const getProjectsByCategory = (category: ProjectCategory): Project[] =>
    VISIBLE.filter((p) => p.category === category);

// Obtenir un projet par son ID (pour la Page Détails)
export const getProjectById = (id: string): Project | undefined => VISIBLE.find((p) => p.id === id);
