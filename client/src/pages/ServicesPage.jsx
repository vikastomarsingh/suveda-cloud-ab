import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Database, Shield, Zap, Layout, Users } from 'lucide-react';
import RevealOnScroll from '../components/RevealOnScroll';
import Footer from '../components/Footer';
import '../styles/ServicesPage.css';

const ServicesPage = () => {
    return (
        <div className="services-page">
            <section className="services-hero">
                <div className="container text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Our <span className="gradient-text">Expertise</span>
                    </motion.h1>
                    <p className="services-subtitle">Comprehensive cloud solutions tailored for your growth.</p>
                </div>
            </section>

            <RevealOnScroll>
                <section className="service-detail-section">
                    <div className="container">
                        <div className="service-block glass">
                            <div className="service-icon-large salesforce-bg">
                                <Cloud size={48} />
                            </div>
                            <div className="service-content">
                                <h2>Salesforce Solutions</h2>
                                <p className="lead-text">
                                    Transform your customer relationships with the world's #1 CRM. We specialize in end-to-end Salesforce consultancy.
                                </p>
                                <ul className="service-list">
                                    <li><strong>Sales Cloud:</strong> Optimize your sales pipeline and close deals faster with AI-driven insights.</li>
                                    <li><strong>Service Cloud:</strong> Deliver personalized customer support across all channels.</li>
                                    <li><strong>Marketing Cloud:</strong> Create 1:1 customer journeys that drive simplified engagement.</li>
                                    <li><strong>CPQ Services:</strong> Configure complex products and price them correctly every time.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="service-block glass reverse">
                            <div className="service-icon-large hubspot-bg">
                                <Users size={48} />
                            </div>
                            <div className="service-content">
                                <h2>HubSpot Integration</h2>
                                <p className="lead-text">
                                    Scale your inbound marketing and align sales with marketing using the powerful HubSpot ecosystem.
                                </p>
                                <ul className="service-list">
                                    <li><strong>CRM Implementation:</strong> Clean, organized, and automated contact management.</li>
                                    <li><strong>Inbound Marketing:</strong> Blog, social media, and ad management in one place.</li>
                                    <li><strong>Sales Hub:</strong> Email tracking, meeting scheduling, and deal automation.</li>
                                    <li><strong>CMS Hub:</strong> Build secure, powerful websites grounded in your CRM data.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="service-grid-extras">
                            <div className="extra-card glass">
                                <Database size={32} className="accent-icon" />
                                <h3>Data Migration</h3>
                                <p>Secure transfer of legacy data with 100% integrity checks.</p>
                            </div>
                            <div className="extra-card glass">
                                <Shield size={32} className="accent-icon" />
                                <h3>Security Audits</h3>
                                <p>Role-based access controls and vulnerability assessments.</p>
                            </div>
                            <div className="extra-card glass">
                                <Zap size={32} className="accent-icon" />
                                <h3>Automation</h3>
                                <p>Custom workflows to eliminate repetitive manual tasks.</p>
                            </div>
                            <div className="extra-card glass">
                                <Layout size={32} className="accent-icon" />
                                <h3>Custom Dev</h3>
                                <p>Tailored LWC and API integrations for unique needs.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </RevealOnScroll>

            <Footer />
        </div>
    );
};

export default ServicesPage;
