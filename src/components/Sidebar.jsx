
import { Github, Linkedin, Moon, Sun, User, Rocket, Mail, House } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

export function Sidebar({ theme, toggleTheme }) {
    return (
        <aside className="sidebar">
            <div className="profile-section">
                <div className="avatar-placeholder"></div>
                <h1 className="name">Nyee Wen Jet</h1>
                <p className="role">Independent AI Builder</p>
                <div className="quote">
                    <span className="quote-line"></span>
                    <p>One in a million.</p>
                </div>
            </div>

            <nav className="nav-links">
                <ul className="nav-list">
                    <li>
                        <NavLink
                            to="/"
                            end
                            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                        >
                            <House size={20} />
                            <span>Homepage</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                        >
                            <User size={20} />
                            <span>About Me</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/projects"
                            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                        >
                            <Rocket size={20} />
                            <span>Projects</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <div className="social-links">
                <a href="mailto:user@gmail.com" className="social-icon">
                    <Mail size={20} />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <Github size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <Linkedin size={20} />
                </a>
            </div>

            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <div className="built-with">
                <div className="built-badge">
                    Built with ❤️ React
                </div>
            </div>
        </aside>
    );
}
