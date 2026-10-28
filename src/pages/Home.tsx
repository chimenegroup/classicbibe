import React from 'react';
import { Hero } from "../components/Hero.tsx";
import { AboutSection } from '../components/about/AboutSection';
import { ProjectGrid } from '../components/projects/ProjectGrid';
import {Navbar} from "../components/Navbar.tsx";

export const Home: React.FC = () => {
    return (
        <div className="flex flex-col w-full">
            <Navbar />
            <Hero />
            <AboutSection />
            <ProjectGrid />
        </div>
    );
};