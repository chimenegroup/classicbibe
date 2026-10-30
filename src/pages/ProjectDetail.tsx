import React, { useEffect, useRef, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, Maximize2, Play, X } from 'lucide-react';
import { getProjectById, type Project } from '../data/projects';
import { SEO } from '../components/seo/SEO';
import { SectionTitle } from '../components/ui/SectionTitle';
import { StoreLinks } from '../components/ui/StoreLinks';

const STATUS_LABEL: Record<Project['status'], string> = {
    Released: 'Out now',
    Beta: 'Beta',
    'In Development': 'In development',
};

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white';

const ProjectPage: React.FC<{ project: Project }> = ({ project }) => {
    const { gallery, videoId } = project;
    const [active, setActive] = useState<'video' | number>(videoId ? 'video' : 0);
    const [playing, setPlaying] = useState(false); // le lecteur YouTube n'est chargé qu'au clic
    const [lightbox, setLightbox] = useState<string | null>(null);
    const dialogRef = useRef<HTMLDialogElement>(null);

    // Lightbox via <dialog> natif : Échap, focus et fond gérés par le navigateur
    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;
        if (lightbox && !dialog.open) dialog.showModal();
        if (!lightbox && dialog.open) dialog.close();
    }, [lightbox]);

    const select = (media: 'video' | number) => {
        setActive(media);
        setPlaying(false);
    };

    const isGame = project.category === 'game';
    const poster = gallery[0] ?? project.coverImage;
    const hasMedia = Boolean(videoId) || gallery.length > 0;

    const details: [string, string | undefined][] = [
        ['Release', project.releaseDate],
        [project.links.steam ? 'Price (Steam)' : 'Price', project.price],
        ['Platforms', project.platforms?.join(', ')],
        ['Developer', 'Chimene Studio'],
        ['Languages', project.languages?.join(', ')],
        ['Tags', project.tags.join(', ')],
    ];

    return (
        <div className="bg-studio-bg text-studio-text">
            <SEO
                title={project.title}
                description={project.tagline}
                image={`https://chimenestudio.com/og/${project.id}.jpg`}
                url={`https://chimenestudio.com/project/${project.id}`}
                type="game"
            />

            {/* ---------- En-tête ---------- */}
            <header className="relative isolate overflow-hidden">
                {project.banner && (
                    <>
                        <img
                            src={project.banner}
                            alt=""
                            width={1920}
                            height={705}
                            fetchPriority="high"
                            decoding="async"
                            className="anim-zoom absolute inset-0 -z-10 h-full w-full object-cover object-[30%_50%]"
                        />
                        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-studio-bg via-studio-bg/75 to-studio-bg/40 lg:hidden" />
                        <div className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-studio-bg from-15% via-studio-bg/70 via-45% to-transparent to-80% lg:block" />
                        <div className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-studio-bg to-transparent" />
                    </>
                )}

                <div className="mx-auto max-w-7xl px-5 pb-12 pt-28 md:px-8 md:pb-16 md:pt-40 lg:pt-52">
                    <Link
                        to="/#projects"
                        className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-studio-muted transition-colors hover:text-white ${focusRing}`}
                    >
                        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                        All projects
                    </Link>

                    <p className="anim-rise mt-8 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-studio-muted">
                        <span className="h-2 w-2 bg-studio-red" aria-hidden="true" />
                        {isGame ? 'Game' : 'Tool'} · {STATUS_LABEL[project.status]}
                        {project.platforms && (
                            <span className="hidden text-studio-muted/70 sm:inline">· {project.platforms.join(' / ')}</span>
                        )}
                    </p>

                    <h1
                        style={{ '--d': '100ms' } as React.CSSProperties}
                        className="anim-rise mt-4 text-[clamp(3rem,11vw,7.5rem)] font-extrabold uppercase leading-[0.9] tracking-tighter text-white"
                    >
                        {project.title}
                    </h1>

                    <p
                        style={{ '--d': '200ms' } as React.CSSProperties}
                        className="anim-rise mt-5 max-w-xl text-lg text-studio-text/90 sm:text-xl"
                    >
                        {project.tagline}
                    </p>

                    <div style={{ '--d': '300ms' } as React.CSSProperties} className="anim-rise mt-8">
                        <StoreLinks project={project} />
                    </div>
                </div>
            </header>

            <div className="mx-auto max-w-7xl space-y-20 px-5 pb-24 pt-10 md:space-y-28 md:px-8">
                {/* ---------- Trailer + captures ---------- */}
                {hasMedia && (
                    <section>
                        <SectionTitle id="trailer" title={videoId ? 'Trailer & screenshots' : 'Screenshots'} />

                        <div className="mt-8 aspect-video w-full overflow-hidden border border-white/10 bg-black">
                            {active === 'video' && videoId ? (
                                playing ? (
                                    <iframe
                                        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
                                        title={`${project.title} trailer`}
                                        className="h-full w-full border-0"
                                        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    />
                                ) : (
                                    <button
                                        type="button"
                                        onClick={() => setPlaying(true)}
                                        aria-label={`Play the ${project.title} trailer`}
                                        className={`group relative block h-full w-full ${focusRing}`}
                                    >
                                        <img
                                            src={poster}
                                            alt=""
                                            loading="lazy"
                                            decoding="async"
                                            className="h-full w-full object-cover"
                                        />
                                        <span className="absolute inset-0 bg-studio-bg/30 transition-colors group-hover:bg-studio-bg/10" />
                                        <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-studio-red text-white transition-transform duration-300 group-hover:scale-110 motion-reduce:transition-none">
                                            <Play className="h-8 w-8 fill-white" aria-hidden="true" />
                                        </span>
                                        <span className="absolute bottom-4 left-4 text-[11px] font-extrabold uppercase tracking-[0.3em] text-white">
                                            Official trailer
                                        </span>
                                    </button>
                                )
                            ) : (
                                <button
                                    type="button"
                                    onClick={() => setLightbox(gallery[typeof active === 'number' ? active : 0])}
                                    aria-label="Enlarge screenshot"
                                    className={`group relative block h-full w-full ${focusRing}`}
                                >
                                    <img
                                        src={gallery[typeof active === 'number' ? active : 0]}
                                        alt={`${project.title} screenshot ${(typeof active === 'number' ? active : 0) + 1}`}
                                        decoding="async"
                                        className="h-full w-full object-cover"
                                    />
                                    <span className="absolute bottom-4 right-4 flex items-center gap-2 bg-black/80 px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white">
                                        <Maximize2 className="h-4 w-4" aria-hidden="true" />
                                        Enlarge
                                    </span>
                                </button>
                            )}
                        </div>

                        {(videoId ? 1 : 0) + gallery.length > 1 && (
                            <ul className="mt-4 flex snap-x gap-3 overflow-x-auto pb-2">
                                {videoId && (
                                    <li className="shrink-0 snap-start">
                                        <button
                                            type="button"
                                            onClick={() => select('video')}
                                            aria-pressed={active === 'video'}
                                            aria-label="Trailer"
                                            className={`relative block aspect-video w-32 overflow-hidden border-2 sm:w-40 ${focusRing} ${
                                                active === 'video' ? 'border-studio-red' : 'border-white/10 opacity-60 hover:opacity-100'
                                            }`}
                                        >
                                            <img src={poster} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
                                            <span className="absolute inset-0 flex items-center justify-center bg-black/50">
                                                <Play className="h-6 w-6 fill-white text-white" aria-hidden="true" />
                                            </span>
                                        </button>
                                    </li>
                                )}
                                {gallery.map((src, i) => (
                                    <li key={src} className="shrink-0 snap-start">
                                        <button
                                            type="button"
                                            onClick={() => select(i)}
                                            aria-pressed={active === i}
                                            aria-label={`Screenshot ${i + 1}`}
                                            className={`block aspect-video w-32 overflow-hidden border-2 sm:w-40 ${focusRing} ${
                                                active === i ? 'border-studio-red' : 'border-white/10 opacity-60 hover:opacity-100'
                                            }`}
                                        >
                                            <img src={src} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover" />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </section>
                )}

                {/* ---------- Présentation ---------- */}
                <section className="grid gap-12 lg:grid-cols-12 lg:gap-16">
                    <div className="lg:col-span-7">
                        <SectionTitle title="About" />
                        <p className="mt-8 text-lg leading-relaxed text-studio-text/90 md:text-xl">{project.description}</p>
                    </div>

                    <div className="lg:col-span-5">
                        <SectionTitle title="Features" />
                        <ul className="mt-8 space-y-4">
                            {project.features.map((feature) => (
                                <li key={feature} className="flex gap-4 text-base text-studio-text/90">
                                    <span className="mt-2 h-2 w-2 shrink-0 bg-studio-red" aria-hidden="true" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* ---------- Fiche ---------- */}
                <section>
                    <SectionTitle title="Details" />
                    <dl className="mt-8 divide-y divide-white/10 border-y border-white/10">
                        {details
                            .filter(([, value]) => value)
                            .map(([label, value]) => (
                                <div key={label} className="grid gap-1 py-5 sm:grid-cols-3 sm:gap-6">
                                    <dt className="text-[11px] font-bold uppercase tracking-[0.3em] text-studio-muted">{label}</dt>
                                    <dd className="text-base text-studio-text sm:col-span-2">{value}</dd>
                                </div>
                            ))}
                    </dl>
                </section>

                {/* ---------- Appel final ---------- */}
                <section className="flex flex-col gap-8 border border-white/10 bg-studio-card p-8 md:flex-row md:items-center md:justify-between md:p-12">
                    <h2 className="text-3xl font-extrabold uppercase leading-none tracking-tight text-white md:text-5xl">
                        {isGame ? 'Play' : 'Get'} {project.title}
                    </h2>
                    <StoreLinks project={project} />
                </section>
            </div>

            {/* Lightbox */}
            <dialog
                ref={dialogRef}
                onClose={() => setLightbox(null)}
                onClick={() => setLightbox(null)}
                aria-label="Screenshot"
                className="m-auto max-h-[92vh] max-w-[96vw] cursor-zoom-out border-0 bg-transparent p-0 backdrop:bg-black/90"
            >
                {lightbox && (
                    <>
                        <img src={lightbox} alt="" className="max-h-[92vh] max-w-[96vw] object-contain" />
                        <button
                            type="button"
                            aria-label="Close"
                            className="absolute right-3 top-3 bg-black/80 p-3 text-white hover:bg-studio-red"
                        >
                            <X className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </>
                )}
            </dialog>
        </div>
    );
};

export const ProjectDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const project = getProjectById(id ?? '');

    if (!project) return <Navigate to="/" replace />;

    // key : repart d'un état propre quand on passe d'un projet à l'autre
    return <ProjectPage key={project.id} project={project} />;
};
