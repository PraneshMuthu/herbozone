import './About.css';

const About = () => {
    return (
        <section className="about section section-light" id="about">
            <div className="container">
                <div className="about__grid">
                    <div className="about__content">
                        <h2 className="about__title">
                            Our <span className="text-green">Story</span>
                        </h2>
                        <h3 className="h4" style={{ marginBottom: '1rem', color: 'var(--primary-green)' }}>Change through Alternative Approaches</h3>
                        <p className="about__description">
                            HerboZone was founded on a simple yet powerful premise: <strong>Change</strong>.
                            We believe in shifting the paradigm from conventional chemical-heavy practices to
                            sustainable, bio-based alternatives.
                        </p>
                        <p className="about__description">
                            Our strength lies in <strong>Diversification</strong>, justified by our robust
                            Research & Development capabilities. We bridge the gap between morale and science,
                            creating a harmonious ecosystem that serves the industry without compromising the planet.
                        </p>

                        <div className="about__features">
                            <div className="about__feature">
                                <span className="about__feature-icon">✨</span>
                                <div>
                                    <h4>Morale + Science</h4>
                                    <p>Ethical Innovation</p>
                                </div>
                            </div>
                            <div className="about__feature">
                                <span className="about__feature-icon">🌏</span>
                                <div>
                                    <h4>Ecosystem + Industry</h4>
                                    <p>Harmonious Growth</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about__image">
                        <img
                            src="/images/hero/research.c9f79c3c90df310d5e9e.jpg"
                            alt="HerboZone Research"
                        />
                        <div className="about__badge">
                            <span className="about__badge-number">25+</span>
                            <span className="about__badge-text">Years Experience</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
