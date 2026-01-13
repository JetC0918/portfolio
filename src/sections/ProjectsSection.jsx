
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
    }
];

export function ProjectsSection() {
    return (
        <section className="section projects-section" id="projects">
            <div className="section-header">
                <h2 className="section-title">My Projects</h2>
                <a href="#" className="section-more">View All ↗</a>
            </div>

            <div className="projects-grid">
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
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
