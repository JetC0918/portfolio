
import { Link } from 'react-router-dom';
import './Sections.css';

const projects = [
    {
        title: 'ShipAny',
        description: 'AI SaaS Boilerplate for shipping your startup in days.',
        tags: ['AI', 'Boilerplate', 'Next.js'],
        link: '#'
    },
    {
        title: 'MCP.so',
        description: 'Find Awesome MCP Servers and Clients.',
        tags: ['MCP', 'Marketplace', 'Agent'],
        link: '#'
    },
    {
        title: 'ThinkAny',
        description: 'High-performance AI Search Engine.',
        tags: ['AI', 'Search Engine', 'RAG'],
        link: '#'
    },
    {
        title: 'CopyWriter',
        description: 'AI Copywriting tool for marketing teams.',
        tags: ['AI', 'Productivity'],
        link: '#'
    },
    {
        title: 'VoiceNotes AI',
        description: 'Voice-to-text with AI summarization.',
        tags: ['AI', 'Speech', 'Productivity'],
        link: '#'
    }
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
                        <div className="card-image-placeholder"></div>
                        <div className="card-content">
                            <h3 className="card-title">{project.title}</h3>
                            <p className="card-description">{project.description}</p>
                            <div className="card-tags">
                                {project.tags.map(tag => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
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
