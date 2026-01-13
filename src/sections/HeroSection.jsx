
import './Sections.css';

export function HeroSection() {
    return (
        <section className="section hero-section" id="about">
            <div className="section-header">
                <h2 className="section-title">About Me</h2>
                <a href="#" className="section-more">Read More ↗</a>
            </div>

            <div className="hero-content">
                <p>
                    I am a passionate Full Stack Developer and AI Enthusiast. I graduated with a degree in Computer Science and have since fallen in love with building software that matters.
                </p>
                <p>
                    In 2026, I started my journey as an independent developer, focusing on building AI-native applications and exploring the potential of Agents and Large Language Models.
                </p>
                <p>
                    I love sharing my knowledge and contributing to the open-source community.
                </p>
            </div>
        </section>
    );
}
