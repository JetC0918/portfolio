
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';
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
                <section className="section">
                    <div className="about-header">
                        <h1 className="page-title">About Me</h1>
                        <p className="page-subtitle">Connecting code, creativity, and people.</p>
                    </div>

                    <div className="about-content">
                        <div className="bio-block">
                            <p className="intro-text">
                                — Welcome to my personal page.
                            </p>
                            <p className="intro-text">
                                I am a passionate AI Builder. In 2020, I graduated with a Master of Engineering Science from University Tunku Abdul Rahman (UTAR) .
                            </p>
                            <p className="intro-text">
                                During my academic years (2017–2020), I worked as a Research Assistant, immersing myself in deep learning and computer vision. I developed automated segmentation frameworks for medical imaging and published two peer-reviewed papers, laying the foundation for my career in AI.
                            </p>
                            <p className="intro-text">
                                In 2021, I joined Vertiv as a Content Specialist. In this role, I expanded my technical vision by driving data-driven SEO strategies and collaborating on global UX implementations, gaining valuable experience in product adaptability and digital content lifecycles.
                            </p>
                            <p className="intro-text">
                                In 2025, I pivoted back to my technical roots to become an AI Engineer. I joined the Gamuda AI Academy to master full-stack AI development (GenAI, LLM, RAG), and I am currently all in on deploying innovative AI solutions.
                            </p>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    );
}
