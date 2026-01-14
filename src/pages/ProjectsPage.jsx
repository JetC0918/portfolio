import { Home, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { projects } from '../data/projects';
import '../sections/Sections.css';
import './ProjectsPage.css';

export function ProjectsPage() {
    const [activeFilter, setActiveFilter] = useState('All');

    // Filter projects based on active filter
    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(project => project.tags.includes(activeFilter));

    return (
        <div className="page-content projects-page">
            <div className="breadcrumb">
                <Link to="/" className="breadcrumb-link">
                    <Home size={16} />
                </Link>
                <span className="breadcrumb-separator">›</span>
                <span className="breadcrumb-current">My Projects</span>
            </div>

            <section className="section">
                <div className="about-header">
                    <h1 className="page-title">My Projects</h1>
                    <p className="page-subtitle">Make projects, have fun.</p>
                </div>

                <div className="filter-row">
                    <button
                        className={`filter-btn ${activeFilter === 'All' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('All')}
                    >
                        All
                    </button>
                    <button
                        className={`filter-btn ${activeFilter === 'Tool' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('Tool')}
                    >
                        Tool
                    </button>
                    <button
                        className={`filter-btn ${activeFilter === 'Game' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('Game')}
                    >
                        Game
                    </button>
                </div>

                <div className="projects-grid-2col">
                    {filteredProjects.map((project, index) => (
                        <a
                            href={project.link}
                            key={index}
                            className="project-card"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={project.image} alt={project.title} className="card-image" />
                            <div className="card-content">
                                <h3 className="card-title">{project.title}</h3>
                                <p className="card-description">{project.description}</p>
                                <div className="card-tags">
                                    {project.displayTags.map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                                <div className="card-footer">
                                    <span className="website-badge">
                                        <Globe size={14} />
                                        <span>Website</span>
                                    </span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </section>
        </div>
    );
}
