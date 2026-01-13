
import { HeroSection } from '../sections/HeroSection';
import { ProjectsSection } from '../sections/ProjectsSection';

export function HomePage() {
    return (
        <div className="page-content">
            <HeroSection />
            <ProjectsSection variant="home-grid" />
        </div>
    );
}
