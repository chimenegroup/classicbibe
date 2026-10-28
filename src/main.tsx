import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Home} from "./pages/Home.tsx";
import { ProjectDetail } from "./pages/ProjectDetail.tsx";
import PrivacyPolicy from "./pages/Privacy-Policy.tsx";
import NotFound from "./pages/NotFound.tsx";

import '@fontsource/plus-jakarta-sans/400.css'; // Regular
import '@fontsource/plus-jakarta-sans/600.css'; // Semi-Bold
import '@fontsource/plus-jakarta-sans/700.css'; // Bold
import '@fontsource/plus-jakarta-sans/800.css'; // Extra-Bold

import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>, // App sert de Layout global
        children: [
            {
                path: '/', // Page d'accueil
                element: <Home/>
            },
            {
                path: 'project/:id', // <-- NOUVELLE ROUTE DYNAMIQUE
                element: <ProjectDetail/>
            }
        ]
    },
    {
        path: 'classicbibe/privacy',
        element: <PrivacyPolicy/>
    },
    {
        path: '*',
        element: <NotFound/>
    }
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HelmetProvider>
            <RouterProvider router={router} />
        </HelmetProvider>
    </StrictMode>,
)