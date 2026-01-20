import React from 'react';
import { Star } from 'lucide-react';
import '../styles/Testimonials.css';

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "CTO, TechFlow",
        content: "Suveda Cloud AB transformed our Salesforce implementation. Their team is simply world-class.",
        rating: 5
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Director, Growth Inc.",
        content: "The HubSpot migration was seamless. We saw a 40% increase in leads within the first month.",
        rating: 5
    },
    {
        id: 3,
        name: "Emma Davis",
        role: "CEO, StartScale",
        content: "Professional, reliable, and incredibly skilled. Highly recommended for any cloud needs.",
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <div className="container">
                <h2 className="section-title text-center">Trusted by <span className="gradient-text">Industry Leaders</span></h2>

                <div className="testimonials-grid">
                    {testimonials.map((item) => (
                        <div key={item.id} className="testimonial-card glass">
                            <div className="stars">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="#fbbf24" stroke="#fbbf24" />
                                ))}
                            </div>
                            <p className="testimonial-content">"{item.content}"</p>
                            <div className="testimonial-author">
                                <h4>{item.name}</h4>
                                <span>{item.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
