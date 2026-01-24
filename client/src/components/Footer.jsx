import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import logo from '../assets/logo.png';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-bg-mesh"></div>
            <div className="container">
                <div className="footer-content">
                    {/* Column 1: Brand */}
                    <div className="footer-brand column">
                        <Link to="/" className="footer-logo-link">
                            <img src={logo} alt="Suveda Cloud AB" className="footer-logo" />
                        </Link>
                        <p className="footer-desc">
                            Empowering enterprises with resilient Salesforce and HubSpot solutions. We engineer growth and stability for your digital future.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="footer-links column">
                        <h4>Company</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><a href="/#contact">Contact</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div className="footer-links column">
                        <h4>Expertise</h4>
                        <ul>
                            <li><Link to="/services">Salesforce Cloud</Link></li>
                            <li><Link to="/services">HubSpot CRM</Link></li>
                            <li><Link to="/services">Data Migration</Link></li>
                            <li><Link to="/services">Cloud Security</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact & Social */}
                    <div className="footer-contact column">
                        <h4>Get in Touch</h4>
                        <ul className="contact-list">
                            <li>
                                <MapPin size={18} className="contact-icon" />
                                <span>Stockholm, Sweden | India</span>
                            </li>
                            <li>
                                <Mail size={18} className="contact-icon" />
                                <a href="mailto:contact@suvedacloud.ab">contact@suvedacloud.ab</a>
                            </li>
                            <li>
                                <Phone size={18} className="contact-icon" />
                                <span>+46 123 456 789</span>
                            </li>
                        </ul>
                        <div className="social-icons">
                            <a href="#" className="social-icon" aria-label="LinkedIn"><Linkedin size={18} /></a>
                            <a href="#" className="social-icon" aria-label="Twitter"><Twitter size={18} /></a>
                            <a href="#" className="social-icon" aria-label="Facebook"><Facebook size={18} /></a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <p>&copy; {new Date().getFullYear()} Suveda Cloud AB. All rights reserved.</p>
                        <div className="legal-links">
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
