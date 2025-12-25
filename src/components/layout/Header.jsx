import { useState, useEffect } from 'react';
import { navLinks, companyInfo } from '../../data/services';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
            <div className="container">
                <nav className="nav">
                    <a href="#home" className="nav__logo" onClick={(e) => handleNavClick(e, '#home')}>
                        <img
                            src="/images/branding/Herbozone.f0a341f3805585c19925.png"
                            alt={companyInfo.name}
                            className="nav__logo-img"
                        />
                    </a>

                    <ul className={`nav__menu ${isMobileMenuOpen ? 'nav__menu--open' : ''}`}>
                        {navLinks.map((link) => (
                            <li key={link.id} className="nav__item">
                                <a
                                    href={link.href}
                                    className="nav__link"
                                    onClick={(e) => handleNavClick(e, link.href)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <button
                        className={`nav__hamburger ${isMobileMenuOpen ? 'nav__hamburger--active' : ''}`}
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
