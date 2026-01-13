import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeroSection } from '../sections/HeroSection';
import { ProjectsSection } from '../sections/ProjectsSection';
import '../sections/Sections.css';

export function HomePage() {
    return (
        <div className="page-content home-page">
            <div className="breadcrumb">
                <Link to="/" className="breadcrumb-link">
                    <Home size={16} />
                </Link>
                <span className="breadcrumb-separator">›</span>
                <span className="breadcrumb-current">Overview</span>
            </div>

            <HeroSection />
            <ProjectsSection variant="home-grid" />
        </div>
    );
}
