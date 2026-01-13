
import { Github, Linkedin, Moon, Sun, User, Rocket } from 'lucide-react';
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
                        <a href="#about" className="nav-item">
                            <User size={20} />
                            <span>About Me</span>
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="nav-item">
                            <Rocket size={20} />
                            <span>Portfolio</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="social-links">
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
