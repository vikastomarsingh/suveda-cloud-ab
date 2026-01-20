import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Cloud } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled glass' : ''}`}>
            <div className="container nav-content">
                <Link to="/" className="logo">
                    <Cloud className="logo-icon" size={32} />
                    <span>Suveda<span className="text-highlight">Cloud</span></span>
                </Link>

                {/* Desktop Menu */}
                <ul className="nav-links desktop-only">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><a href="/#contact" className="btn btn-primary">Get Started</a></li>
                </ul>

                {/* Mobile Menu Toggle */}
                <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="mobile-menu glass"
                        >
                            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                            <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
                            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
                            <a href="#contact" onClick={() => setIsOpen(false)} className="btn btn-primary">Get Started</a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
