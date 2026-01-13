
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PhotoGrid } from '../components/PhotoGrid';
import '../sections/Sections.css';

export function AboutPage() {
    return (
        <div className="page-content about-page">
            <div className="breadcrumb">
                <Link to="/" className="breadcrumb-link">
                    <Home size={16} />
                </Link>
                <span className="breadcrumb-separator">›</span>
                <span className="breadcrumb-current">About Me</span>
            </div>

            <section className="section">
                <div className="section-header">
                    <h1 className="page-title">About Me</h1>
                </div>

                <p className="page-subtitle">One in a million.</p>

                <div className="about-content">
                    <div className="bio-block">
                        <p>
                            Welcome to my personal homepage.
                        </p>
                        <p>
                            I am a passionate Full Stack Developer. In 2015, I graduated with a degree in Computer Science. Since then, influenced by the power of software, I taught myself coding and entered the IT industry, using the alias "One in a Million" to this day.
                        </p>
                        <p>
                            In 2018, I joined a major tech company as a backend engineer. During my five years there, I focused on payment system development and architecture design, growing from a self-taught programmer to a professional engineer.
                        </p>
                        <p>
                            In 2023, I decided to become an independent developer, going all-in on AI applications and global markets.
                        </p>
                    </div>

                    <PhotoGrid />
                </div>
            </section>
        </div>
    );
}
