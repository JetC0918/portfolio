import { Home, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../sections/Sections.css';
import './ProjectsPage.css'; // New CSS file for page specific styles if needed

const projects = [
    {
        title: 'Codio Live',
        description: 'Run real-time collaborative coding sessions in your browser with AI Assistant.',
        tags: ['Tool'],
        displayTags: ['AI', 'Collaboration'],
        link: 'https://mock-interview-hub.onrender.com/',
        image: '/Codiolive.png'
    },
    {
        title: 'Cozy Cat',
        description: 'Meet your AI pet that respond to your commands.',
        tags: ['Game'],
        displayTags: ['AI', 'Interactive'],
        link: 'https://cozycat.lovable.app',
        image: '/Cozycat.png'
    },
    {
        title: 'Cat Court',
        description: 'A mini game where a Cat Judge will judge your comments.',
        tags: ['Game'],
        displayTags: ['AI', 'Game'],
        link: 'https://catcourt.lovable.app',
        image: '/Catcourt.png'
    },
    {
        title: 'Hot Feed',
        description: 'A reddit trend aggregator.',
        tags: ['Tool'],
        displayTags: ['Reddit', 'Aggregator'],
        link: 'https://hot-feed.lovable.app/',
        image: '/Hotfeed.png'
    }
];

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
