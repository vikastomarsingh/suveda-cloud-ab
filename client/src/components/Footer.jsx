import React from 'react';
import { Cloud, Linkedin, Twitter, Facebook } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="logo">
                            <Cloud className="logo-icon" size={24} />
                            <span>Suveda<span className="text-highlight">Cloud</span></span>
                        </div>
                        <p className="footer-desc">
                            Your trusted partner for Salesforce and HubSpot implementations.
                            We drive digital transformation with precision and care.
                        </p>
                    </div>

                    <div className="footer-links">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/#services">Services</a></li>
                            <li><a href="/#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-social">
                        <h4>Connect</h4>
                        <div className="social-icons">
                            <a href="#" className="social-icon" aria-label="LinkedIn"><Linkedin size={20} /></a>
                            <a href="#" className="social-icon" aria-label="Twitter"><Twitter size={20} /></a>
                            <a href="#" className="social-icon" aria-label="Facebook"><Facebook size={20} /></a>
                        </div>
                        <p className="social-tagline">Follow us for updates</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Suveda Cloud AB. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
