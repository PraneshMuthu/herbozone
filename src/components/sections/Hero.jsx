import { useState, useEffect } from 'react';
import './Hero.css';

const slides = [
    {
        id: 1,
        title: 'Aquaculture',
        subtitle: 'Revolutionizing sectors through sustainable practices in',
        image: '/images/hero/aqua.7504599534c8ad173e3b.jpg'
    },
    {
        id: 2,
        title: 'Animal Care',
        subtitle: 'Revolutionizing sectors through sustainable practices in',
        image: '/images/hero/farm.23263f5a71c995181bc0.jpg'
    },
    {
        id: 3,
        title: 'Agriculture',
        subtitle: 'Revolutionizing sectors through sustainable practices in',
        image: '/images/hero/agri.16842b3cb2475e3a0241.jpg'
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <section className="hero" id="home">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`hero__slide ${index === currentSlide ? 'hero__slide--active' : ''}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                >
                    <div className="hero__overlay"></div>
                </div>
            ))}

            <div className="hero__content">
                <div className="container">
                    <div className="hero__text">
                        <p className="hero__subtitle animate-fade-in">
                            {slides[currentSlide].subtitle}
                        </p>
                        <h1 className="hero__title animate-fade-in">
                            <span className="text-green">{slides[currentSlide].title}</span>
                        </h1>
                        <div className="hero__buttons animate-fade-in">
                            <a href="#about" className="btn btn-primary">
                                Learn More
                            </a>
                            <a href="#products" className="btn btn-secondary btn-white-outline">
                                Our Products
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero__dots">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`hero__dot ${index === currentSlide ? 'hero__dot--active' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;
