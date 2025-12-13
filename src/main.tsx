import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from "./pages/Home.tsx";
import PrivacyPolicy from "./pages/Privacy-Policy.tsx";
import NotFound from "./pages/NotFound.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/privacy-policy',
                element: <PrivacyPolicy/>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound/>
    }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
