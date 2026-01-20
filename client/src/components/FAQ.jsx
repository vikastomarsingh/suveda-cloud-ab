import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import '../styles/FAQ.css';

const faqData = [
    {
        question: "How long does a typical implementation take?",
        answer: "Implementation timelines vary by complexity. A standard QuickStart package takes 2-4 weeks, while enterprise-grade migrations and custom developments can take 3-6 months. We provide a detailed roadmap during our initial consultation."
    },
    {
        question: "Do you offer post-implementation support?",
        answer: "Absolutely. We offer various managed service tiers including 24/7 global support, ongoing system optimization, and user training. We ensure your team is confident and your system remains peak-performing."
    },
    {
        question: "Can you migrate data from legacy systems?",
        answer: "Yes, data migration is one of our core strengths. We have specialized tools and scripts to migrate data from on-premise databases, spreadsheets, or other CRMs (like Zoho, Dynamics) into Salesforce or HubSpot with near-zero data loss."
    },
    {
        question: "Are your consultants certified?",
        answer: "100% of our technical staff holds relevant certifications. Our team cumulatively holds over 200 certifications across the Salesforce and HubSpot ecosystems, ensuring you get expert-level guidance."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <div className="container">
                <h2 className="section-title text-center">Frequently Asked <span className="gradient-text">Questions</span></h2>

                <div className="faq-container">
                    {faqData.map((item, index) => (
                        <div key={index} className={`faq-item glass ${activeIndex === index ? 'active' : ''}`}>
                            <div className="faq-question clickable" onClick={() => toggleAccordion(index)}>
                                <h3>{item.question}</h3>
                                <span className="faq-icon">
                                    {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </div>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="faq-answer-wrapper"
                                    >
                                        <p className="faq-answer">{item.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
