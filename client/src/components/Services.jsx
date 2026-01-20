import React from 'react';
import { motion } from 'framer-motion';
import { Database, TrendingUp, CheckCircle } from 'lucide-react';
import '../styles/Services.css';

const Services = () => {
    return (
        <section id="services" className="services-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Our <span className="gradient-text">Expertise</span></h2>
                    <p className="section-subtitle">We specialize in world-leading CRM and Marketing platforms.</p>
                </div>

                <div className="services-grid">
                    <motion.div
                        whileHover={{ y: -10 }}
                        className="service-card glass"
                    >
                        <div className="icon-wrapper salesforce-bg">
                            <CloudIcon />
                        </div>
                        <h3>Salesforce Solutions</h3>
                        <p>Optimize your sales, service, and marketing with the world's #1 CRM.</p>
                        <ul className="feature-list">
                            <li><CheckCircle size={16} className="text-primary" /> CRM Implementation</li>
                            <li><CheckCircle size={16} className="text-primary" /> Automation & Workflows</li>
                            <li><CheckCircle size={16} className="text-primary" /> Custom Development</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -10 }}
                        className="service-card glass"
                    >
                        <div className="icon-wrapper hubspot-bg">
                            <TrendingUp size={32} />
                        </div>
                        <h3>HubSpot Growth</h3>
                        <p>Inbound marketing, sales, and service software that helps your business grow better.</p>
                        <ul className="feature-list">
                            <li><CheckCircle size={16} className="text-secondary" /> Marketing Hub Setup</li>
                            <li><CheckCircle size={16} className="text-secondary" /> Sales Pipeline Management</li>
                            <li><CheckCircle size={16} className="text-secondary" /> Content Strategy</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

// Simple cloud icon helper
const CloudIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
    </svg>
);

export default Services;
