import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Target, Zap, Award, ArrowRight } from 'lucide-react';
import RevealOnScroll from '../components/RevealOnScroll';
import AnimatedCounter from '../components/AnimatedCounter';
import Timeline from '../components/Timeline';
import Footer from '../components/Footer';
import '../styles/About.css';

const About = () => {
    return (
        <div className="about-page">
            {/* About Hero */}
            <section className="about-hero">
                <div className="about-bg"></div>
                <div className="container text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        We Are <span className="gradient-text">Suveda Cloud AB</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="about-subtitle"
                    >
                        Architecting the future of business with resilient cloud solutions.
                    </motion.p>
                </div>
            </section>

            {/* Mission & Stats */}
            <RevealOnScroll>
                <section className="mission-section container">
                    <div className="mission-grid">
                        <div className="mission-content glass">
                            <h2>Our <span className="text-highlight">Mission</span></h2>
                            <p>
                                At Suveda Cloud AB, our mission is simple yet ambitious: to empower enterprises
                                with seamless, scalable, and secure cloud ecosystems. We believe that technology
                                should be an enabler, not a bottleneck.
                            </p>
                            <p>
                                By leveraging the power of Salesforce and HubSpot, we bridge the gap between
                                complex data and actionable insights. <strong>Our entire team is fully certified in Salesforce and HubSpot</strong>, ensuring that you receive world-class expertise and technically sound solutions for every project.
                            </p>
                        </div>
                        <div className="stats-grid">
                            <div className="stat-card glass">
                                <Users size={32} className="stat-icon" />
                                <h3><AnimatedCounter value={50} suffix="+" /></h3>
                                <p>Certified Experts</p>
                            </div>
                            <div className="stat-card glass">
                                <Target size={32} className="stat-icon" />
                                <h3><AnimatedCounter value={100} suffix="%" /></h3>
                                <p>Project Success</p>
                            </div>
                            <div className="stat-card glass">
                                <Zap size={32} className="stat-icon" />
                                <h3><AnimatedCounter value={5000000} suffix="+" /></h3>
                                <p>Records Migrated</p>
                            </div>
                            <div className="stat-card glass">
                                <Award size={32} className="stat-icon" />
                                <h3><AnimatedCounter value={10} suffix="+" /></h3>
                                <p>Years Experience</p>
                            </div>
                        </div>
                    </div>
                </section>
            </RevealOnScroll>

            {/* Timeline Section */}
            <Timeline />

            {/* Founder Spotlight */}
            <RevealOnScroll>
                <section className="founder-section">
                    <div className="container">
                        <div className="founder-wrapper glass">
                            <div className="founder-image-col">
                                <img
                                    src="https://media.licdn.com/dms/image/v2/D4D03AQGF7H6zdTc5Fg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1682582858282?e=1770249600&v=beta&t=RkcK5Nn6Tq8eFHj-TN3O0Za7U9LMpQouRsjEBMeSygs"
                                    alt="Mr. Vedprakash Kushwah"
                                    className="founder-image"
                                />
                            </div>
                            <div className="founder-content">
                                <span className="founder-role">CEO & Founder</span>
                                <h2>Mr. Vedprakash <span className="gradient-text">Kushwah</span></h2>
                                <div className="cert-badges">
                                    <span className="cert-badge">8x Salesforce Certified</span>
                                    <span className="cert-badge">HubSpot Certified</span>
                                    <span className="cert-badge">Cloud Architect</span>
                                    <span className="cert-badge">Agile Master</span>
                                </div>
                                <p className="founder-bio">
                                    A visionary leader in the cloud ecosystem, Mr. Vedprakash Kushwah brings over a decade of hands-on experience in digital transformation. His expertise is validated by <strong>8x Salesforce Certifications</strong> and multiple credentials across various cloud platforms.
                                </p>
                                <p>
                                    Mr. Kushwah founded Suveda Cloud AB with a commitment to excellence. He has personally overseen the architecture of complex CRM migrations and implementations for global enterprises. His deep technical knowledge in Salesforce and HubSpot allows him to lead a team that doesn't just deliver software, but delivers business value.
                                </p>
                                <div className="founder-quote">
                                    "True innovation happens when diverse certifications meet real-world problem solving. We build systems that last."
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </RevealOnScroll>

            {/* CTA Section */}
            <RevealOnScroll>
                <section className="cta-section container">
                    <div className="cta-card glass text-center">
                        <h2>Ready to <span className="gradient-text">Scale Up?</span></h2>
                        <p>Join the hundreds of companies that trust Suveda Cloud AB with their digital future.</p>
                        <Link to="/#contact" className="btn btn-primary cta-btn">
                            Start Your Transformation <ArrowRight size={20} />
                        </Link>
                    </div>
                </section>
            </RevealOnScroll>

            <Footer />
        </div>
    );
};

export default About;
