import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Home} from "./pages/Home.tsx";
import { ProjectDetail } from "./pages/ProjectDetail.tsx";
import { NotFound } from "./pages/NotFound.tsx";
import { LegalNotice } from "./pages/legal/LegalNotice.tsx";
import { SitePrivacy } from "./pages/legal/SitePrivacy.tsx";
import { OrionPrivacy } from "./pages/legal/OrionPrivacy.tsx";
import { ClassicBibeTerms } from "./pages/legal/ClassicBibeTerms.tsx";

import '@fontsource/plus-jakarta-sans/400.css'; // Regular
import '@fontsource/plus-jakarta-sans/600.css'; // Semi-Bold
import '@fontsource/plus-jakarta-sans/700.css'; // Bold
import '@fontsource/plus-jakarta-sans/800.css'; // Extra-Bold

import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>, // App sert de layout global (navbar + footer)
        children: [
            { path: '/', element: <Home/> },
            { path: 'project/:id', element: <ProjectDetail/> },
            { path: 'legal-notice', element: <LegalNotice/> },
            { path: 'privacy', element: <SitePrivacy/> },
            { path: 'orion-pdf/privacy', element: <OrionPrivacy/> },
            // URL conservée telle quelle : elle est probablement référencée sur la fiche Google Play
            { path: 'classicbibe/privacy', element: <ClassicBibeTerms/> },
            { path: '*', element: <NotFound/> },
        ],
    },
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HelmetProvider>
            <RouterProvider router={router} />
        </HelmetProvider>
    </StrictMode>,
)
