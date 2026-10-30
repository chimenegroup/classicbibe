import {Outlet} from 'react-router-dom';
import {Footer} from './components/layout/Footer';
import {ScrollToTop} from './components/utils/ScrollToTop';
import {Navbar} from "./components/Navbar";

function App() {
    return (
        <div className="min-h-screen flex flex-col bg-studio-bg text-studio-text selection:bg-studio-red/30">
            {/* Remonte en haut de page à chaque changement d'URL */}
            <ScrollToTop/>

            <Navbar/>

            <main className="flex-grow">
                {/* Outlet est l'endroit où s'afficheront <Home /> ou <ProjectDetail /> */}
                <Outlet/>
            </main>

            {/* Le footer reste présent sur toutes les pages enfants de App */}
            <Footer/>
        </div>
    );
}

export default App;