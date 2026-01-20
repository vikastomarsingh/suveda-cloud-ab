import React from 'react';
import { motion } from 'framer-motion';
import { Circle } from 'lucide-react';
import '../styles/Timeline.css';

const timelineData = [
    { year: "2013", title: "Foundation", desc: "Vedprakash Kushwah founds Suveda Cloud AB as a boutique consultancy." },
    { year: "2016", title: "Salesforce Partnership", desc: "Achieved official Salesforce Consulting Partner status." },
    { year: "2019", title: "Global Expansion", desc: "Opened offices in London and Singapore to serve global clients." },
    { year: "2021", title: "HubSpot Integration", desc: "Launched dedicated HubSpot division." },
    { year: "2025", title: "Cloud Excellence", desc: "Recognized as Top Cloud Innovator with 50+ certified experts." }
];

const Timeline = () => {
    return (
        <section className="timeline-section">
            <div className="container">
                <h2 className="section-title text-center">Our <span className="gradient-text">Journey</span></h2>
                <div className="timeline-container">
                    <div className="timeline-line"></div>
                    {timelineData.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="timeline-content glass">
                                <span className="timeline-year">{item.year}</span>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                            <div className="timeline-dot">
                                <Circle size={16} fill="#6366f1" color="#6366f1" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
