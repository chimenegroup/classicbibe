import React from 'react';
import { Hero } from "../components/Hero.tsx";
import { AboutSection } from '../components/about/AboutSection';
import { ProjectGrid } from '../components/projects/ProjectGrid';

export const Home: React.FC = () => {
    return (
        <div className="flex flex-col w-full">
            <Hero />
            <ProjectGrid />
            <AboutSection />
        </div>
    );
};