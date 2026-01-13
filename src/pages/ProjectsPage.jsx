import { Home, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../sections/Sections.css';
import './ProjectsPage.css'; // New CSS file for page specific styles if needed

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
        title: 'CopyWeb',
        description: 'AI Web Design to Code in Seconds.',
        tags: ['AI', 'Web Design', 'Agent'],
        link: '#'
    },
    {
        title: 'PodLM',
        description: 'Turn Any Content Into AI Podcast.',
        tags: ['AI', 'Podcast', 'Generator'],
        link: '#'
    },
    {
        title: 'Nano Banana 2',
        description: 'Nano Banana Image Generator.',
        tags: ['AI', 'Nano Banana', 'Generator'],
        link: '#'
    },
    {
        title: 'HeyBeauty',
        description: 'AI Virtual Try On.',
        tags: ['AI', 'Virtual Try On'],
        link: '#'
    },
    {
        title: 'Melodisco',
        description: 'AI Music Player.',
        tags: ['AI', 'Music Player'],
        link: '#'
    },
    {
        title: 'AI Cover',
        description: 'AI Cover Generator.',
        tags: ['AI', 'Cover', 'Generator'],
        link: '#'
    }
];

export function ProjectsPage() {
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
                    <button className="filter-btn active">All</button>
                    <button className="filter-btn">AI Tools</button>
                    <button className="filter-btn">AI Pets</button>
                    <button className="filter-btn">AI Games</button>
                </div>

                <div className="projects-grid-2col">
                    {projects.map((project, index) => (
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
                                <div className="card-footer" style={{ marginTop: '16px' }}>
                                    <span className="website-badge">Website</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </section>
        </div>
    );
}
