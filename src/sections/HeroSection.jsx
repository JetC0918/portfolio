
import { Link } from 'react-router-dom';
import './Sections.css';

export function HeroSection() {
    return (
        <section className="section hero-section" id="about">
            <div className="section-header">
                <h2 className="section-title">About Me</h2>
                <Link to="/about" className="section-more">Read More ↗</Link>
            </div>

            <div className="hero-content">
                <p>
                    I am Nyee Wen Jet, a 2020 Master of Engineering Science graduate from UTAR. During my studies, I specialized in deep learning and computer vision, publishing two papers and laying the foundation for my AI career.
                </p>
                <p>
                    In 2021, I joined Vertiv as a Content Specialist. In this role, I leveraged data-driven strategies to optimize global user experiences, broadening my technical horizons beyond academia.
                </p>
                <p>
                    In 2025, I transitioned to AI Engineering. After mastering full-stack AI development at Gamuda AI Academy, I am currently all in on building and deploying innovative AI applications.
                </p>
            </div>
        </section>
    );
}
