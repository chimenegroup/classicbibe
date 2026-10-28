// src/data/projects.ts

export type ProjectCategory = 'game' | 'app';
export type ProjectStatus = 'Released' | 'In Development' | 'Beta';

export interface ProjectLinks {
    steam?: string;
    store?: string;
    demo?: string;
    github?: string;
    website?: string;
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
    videoUrl?: string;
    links: ProjectLinks;
    releaseDate: string;
    status: ProjectStatus;
    featured?: boolean; // Pour mettre en avant sur le Hero / Top de grille
}

export const PROJECTS_DATA: Project[] = [
    {
        id: 'classic-bibe',
        title: 'Classic Bibe',
        tagline: 'Jeu vidéo multijoueur indépendant plein d’action.',
        category: 'game',
        description:
            'Classic Bibe est un jeu vidéo multijoueur conçu avec Unity et C#. Il intègre Unity Gaming Services, Google Play Games Services et Mirror pour offrir des parties fluides à basse latence.',
        features: [
            'Multijoueur en temps réel avec Mirror & lobby dédié',
            'Intégration Steamworks API & Succès Steam',
            'Interface utilisateur dynamique avec support Manette / Clavier / Tactile',
            'Localisation complète disponible en 11 langues',
        ],
        tags: ['Unity', 'C#', 'Mirror', 'Steamworks', 'Multiplayer'],
        coverImage: '/assets/projects/classic-bibe-cover.jpg',
        gallery: [
            '/assets/projects/classic-bibe-1.jpg',
            '/assets/projects/classic-bibe-2.jpg',
        ],
        videoUrl: 'https://www.youtube.com/embed/YOUR_TRAILER_ID',
        links: {
            steam: 'https://store.steampowered.com/app/YOUR_APP_ID',
        },
        releaseDate: '2026',
        status: 'Released',
        featured: true,
    },
    {
        id: 'pdf-manager-desktop',
        title: 'Offline PDF Manager',
        tagline: 'Application desktop ultra-rapide pour la gestion locale de vos fichiers PDF.',
        category: 'app',
        description:
            'Une application Windows légère et sécurisée pour organiser, fusionner et gérer vos documents PDF en toute confidentialité, sans envoyer la moindre donnée vers un serveur externe.',
        features: [
            '100% Offline : Traitement local pour une confidentialité totale',
            'Manipulation ultra-rapide de fichiers volumineux',
            'Packaging MSIX natif pour Windows',
            'Interface épurée et moderne',
        ],
        tags: ['Desktop', 'Windows', 'MSIX', 'Offline-First'],
        coverImage: '/assets/projects/pdf-manager-cover.jpg',
        gallery: [
            '/assets/projects/pdf-manager-1.jpg',
        ],
        links: {
            store: 'https://apps.microsoft.com/detail/YOUR_APP_ID',
        },
        releaseDate: '2026',
        status: 'Released',
        featured: false,
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
    },
];

// Obtenir tous les projets
export const getAllProjects = (): Project[] => PROJECTS_DATA;

// Obtenir uniquement les projets mis en avant
export const getFeaturedProjects = (): Project[] =>
    PROJECTS_DATA.filter((p) => p.featured);

// Filtrer par catégorie ('game' ou 'app')
export const getProjectsByCategory = (category: ProjectCategory): Project[] =>
    PROJECTS_DATA.filter((p) => p.category === category);

// Obtenir un projet par son ID (pour la Page Détails)
export const getProjectById = (id: string): Project | undefined =>
    PROJECTS_DATA.find((p) => p.id === id);