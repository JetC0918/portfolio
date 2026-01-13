
import { Link } from 'react-router-dom';
import './Sections.css';
import { TextAlignStartIcon } from 'lucide-react';

const projects = [
    {
        title: 'Codio Live',
        description: 'Run real-time collaborative coding sessions in your browser with AI Assistant.',
        tags: ['AI', 'Collaboration'],
        link: 'https://mock-interview-hub.onrender.com/',
        image: '/Codiolive.png'
    },
    {
        title: 'Cozy Cat',
        description: 'Meet your AI pet that respond to your commands.',
        tags: ['AI', 'Interactive'],
        link: 'https://cozycat.lovable.app',
        image: '/Cozycat.png'
    },
    {
        title: 'Cat Court',
        description: 'A mini game where a Cat Judge will judge your comments.',
        tags: ['AI', 'Game'],
        link: 'https://catcourt.lovable.app',
        image: '/Catcourt.png'
    },
];

export function ProjectsSection({ variant = 'default' }) {
    let containerClass = "projects-grid";
    if (variant === 'home-grid') {
        containerClass = "projects-home-grid";
    } else if (variant === 'horizontal') {
        containerClass = "projects-horizontal";
    }

    const displayProjects = variant === 'home-grid' ? projects.slice(0, 3) : projects;

    return (
        <section className="section projects-section" id="projects">
            <div className="section-header">
                <h2 className="section-title">My Projects</h2>
                <Link to="/projects" className="section-more">View All ↗</Link>
            </div>

            <div className={containerClass}>
                {displayProjects.map((project, index) => (
                    <a href={project.link} key={index} className="project-card">
                        <img src={project.image} alt={project.title} className="card-image" />
                        <div className="card-content">
                            <h3 className="card-title">{project.title}</h3>
                            <p className="card-description">{project.description}</p>
                            <div className="card-footer">
                                <div className="card-tags">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </a>
                ))}

                {variant === 'home-grid' && (
                    <Link to="/projects" className="project-card project-more-card">
                        <div className="card-more-content">
                            <span>And More... ↗</span>
                        </div>
                    </Link>
                )}
            </div>
        </section>
    );
}
