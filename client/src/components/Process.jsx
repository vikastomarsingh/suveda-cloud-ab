import React from 'react';
import { motion } from 'framer-motion';
import { Search, Lightbulb, Code, Rocket } from 'lucide-react';
import '../styles/Process.css';

const steps = [
    {
        icon: <Search size={32} />,
        title: "Discovery",
        desc: "We analyze your business processes, pain points, and goals to blueprint the perfect cloud strategy."
    },
    {
        icon: <Lightbulb size={32} />,
        title: "Strategy",
        desc: "Our architects design a scalable solution, selecting the right mix of Salesforce and HubSpot tools."
    },
    {
        icon: <Code size={32} />,
        title: "Development",
        desc: "Agile implementation cycles with regular check-ins ensure the final product matches your vision perfectly."
    },
    {
        icon: <Rocket size={32} />,
        title: "Launch & Scale",
        desc: "We deploy your solution with zero downtime and provide training to help your team hit the ground running."
    }
];

const Process = () => {
    return (
        <section className="process-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2 className="section-title">How We <span className="gradient-text">Work</span></h2>
                    <p className="section-subtitle">A proven methodology for digital transformation.</p>
                </div>

                <div className="process-grid">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="process-card glass"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <div className="process-icon-wrapper">
                                {step.icon}
                                <span className="step-number">0{index + 1}</span>
                            </div>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
