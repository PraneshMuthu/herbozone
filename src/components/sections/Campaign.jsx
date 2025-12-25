import { useState, useEffect, useRef } from 'react';
import './Campaign.css';

const StatCounter = ({ end, label, duration = 2000, startAnimation }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!startAnimation) return;

        let startTime = null;
        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }, [end, duration, startAnimation]);

    return (
        <div className="campaign__stat">
            <span className="campaign__stat-number">{count}+</span>
            <span className="campaign__stat-label">{label}</span>
        </div>
    );
};

const Campaign = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section className="campaign section" id="mission-gblue" ref={sectionRef}>
            <div className="container">
                <div className="campaign__card">
                    <div className="campaign__content">
                        <div className="campaign__header">
                            <span className="campaign__badge">Our Initiative</span>
                            <h2 className="campaign__title">Mission <span className="text-blue">G-BLUE</span></h2>
                            <p className="campaign__promoter">(Promoted by HERBOZONE)</p>
                        </div>

                        <div className="campaign__body">
                            <p>
                                The Earth's environment is confronting an unprecedented crisis marked by
                                escalating pollution, climate change, and the depletion of the ozone layer.
                                In response to these global challenges, MISSION G-BLUE emerges as a visionary
                                scientific initiative and public awareness campaign.
                            </p>
                            <p>
                                This mission is designed to foster environmental responsibility and explore
                                practical solutions for ozone preservation. The name embodies its purpose:
                                'G' for a Green Earth and 'Blue' for the ozone layer—both essential to
                                sustaining life and planetary health.
                            </p>
                            <p>
                                MISSION G-BLUE integrates experimental research with community outreach to
                                examine the impact of pollutants on ozone depletion and promote eco-friendly
                                practices that support ozone recovery. Through this initiative, we aim to:
                            </p>
                            <ul className="campaign__list">
                                <li>Emphasize the urgent need to reduce harmful emissions</li>
                                <li>Advocate for sustainable, science-based alternatives</li>
                                <li>Enhance public understanding of atmospheric science and its critical role in protecting the Earth</li>
                            </ul>
                            <p className="campaign__footer-text">
                                By combining scientific inquiry with environmental education, MISSION G-BLUE
                                is not only a project of discovery but also a movement for action—empowering
                                individuals and communities to join the collective effort to restore and
                                protect our planet.
                            </p>
                        </div>

                        <div className="campaign__stats">
                            <StatCounter end={500} label="Ponds Restored" startAnimation={isVisible} />
                            <StatCounter end={100} label="Farmers Trained" startAnimation={isVisible} />
                            <StatCounter end={25} label="Bio Solutions" startAnimation={isVisible} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Campaign;
