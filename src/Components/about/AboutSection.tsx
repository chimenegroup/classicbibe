import React from 'react';
import { Reveal } from '../utils/Reveal';
import { SectionTitle } from '../ui/SectionTitle';

const PRINCIPLES = [
    {
        title: 'Made to be shared',
        text: 'Games for the couch, the LAN and the phone. Easy to pick up, hard to put down, and best played with friends.',
    },
    {
        title: 'Fair by design',
        text: 'No pay-to-win. We build games where skill and fun matter, not the size of your wallet.',
    },
    {
        title: 'Free means free',
        text: 'Our tools are free, work offline and keep your files on your device. No account and no paywall.',
    },
];

export const AboutSection: React.FC = () => {
    return (
        <section id="about" className="border-t border-white/5 bg-studio-bg py-20 md:py-28">
            <div className="mx-auto max-w-7xl px-5 md:px-8">
                <Reveal>
                    <SectionTitle title="About" index="03" />
                </Reveal>

                <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
                    <Reveal className="lg:col-span-7">
                        <p className="text-3xl font-extrabold leading-[1.15] tracking-tight text-studio-muted md:text-5xl">
                            We build <span className="text-white">fun games</span> that bring people together, and{' '}
                            <span className="text-white">free tools</span> that make everyday life easier.
                        </p>
                    </Reveal>

                    <Reveal delay={100} className="space-y-5 text-base leading-relaxed text-studio-muted lg:col-span-5">
                        <p>
                            Chimene Studio is an independent studio with one aim: bring back the spirit of classic games,
                            simple to pick up, made to be shared and fun on the couch with friends. Too many modern games
                            are built around monetisation. We would rather make games where the fun comes first.
                        </p>
                        <p>
                            That idea became <span className="text-studio-text">Classic Bibe</span>, a cartoon party game
                            for one to four players, first released in December 2025 and now available on Steam and Google
                            Play.
                        </p>
                        <p>
                            A passion for free and open-source software led to our second project,{' '}
                            <span className="text-studio-text">Orion PDF</span>. Tired of PDF tools that limit the number
                            of files or charge for the basics, we built a fast, completely free PDF manager that works
                            offline and keeps your documents on your device.
                        </p>
                        <p className="text-studio-text">
                            Our direction is simple: keep making fun games, and keep building free tools that are useful
                            every day.
                        </p>
                    </Reveal>
                </div>

                <Reveal className="mt-16 md:mt-24">
                    <ol className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
                        {PRINCIPLES.map((item, index) => (
                            <li key={item.title} className="bg-studio-bg p-8 md:p-10">
                                <span className="text-sm font-bold tracking-[0.3em] text-studio-muted">
                                    0{index + 1}
                                </span>
                                <h3 className="mt-6 text-xl font-extrabold uppercase tracking-tight text-white">
                                    {item.title}
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-studio-muted">{item.text}</p>
                            </li>
                        ))}
                    </ol>
                </Reveal>
            </div>
        </section>
    );
};
