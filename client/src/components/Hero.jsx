import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-bg">
                <ParticleBackground />
            </div>

            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                    className="hero-text"
                >
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1, duration: 0.8, type: "spring" }}
                        className="hero-title"
                    >
                        Empowering Business with <br />
                        <span className="gradient-text">Cloud Excellence</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="hero-subtitle"
                    >
                        Suveda Cloud AB connects your enterprise with top-tier Salesforce and HubSpot solutions.
                        We build trust, drive growth, and manage your data with precision.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5, type: "spring", stiffness: 200 }}
                        className="hero-actions"
                    >
                        <a href="#contact" className="btn btn-primary">
                            Get a Contract <ArrowRight size={20} />
                        </a>
                        <a href="/services" className="btn btn-outline">
                            Our Services
                        </a>
                    </motion.div>
                </motion.div>

                {/* Optional right side visual or keep centered for cleaner look */}
            </div>
        </section>
    );
};

export default Hero;
