import React, { useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import Modal from './Modal';
import '../styles/Showcase.css';

const projects = [
    {
        id: 1,
        title: "Global Salesforce Migration",
        category: "Salesforce CRM",
        summary: "Migrated 5M+ records for a Fortune 500 retailer with zero downtime.",
        details: "Detailed breakdown: We utilized a custom ETL process to map data fields from the legacy system to Salesforce Service Cloud. The project involved 500+ users, complex role hierarchies, and extensive Apex automation to match business logic. Post-launch support reduced ticket resolution time by 30%.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "HubSpot Marketing Automation",
        category: "HubSpot",
        summary: "Implemented full-scale inbound marketing workflows increasing conversion by 150%.",
        details: "We designed a comprehensive lead nurturing infrastructure using HubSpot Marketing Hub Enterprise. Features included advanced segmentation, cross-channel campaigns, and integration with Salesforce for a unified revenue view. The result was a 150% increase in lead-to-opportunity conversion within 6 months.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "FinTech Data Security Audit",
        category: "Security & Cloud",
        summary: "Enhanced data security protocols ensuring ISO 27001 compliance.",
        details: "Our team conducted a rigorous audit of the client's cloud infrastructure. We implemented detailed encryption at rest and in transit, refined IAM roles, and set up continuous monitoring dashboards. This project successfully cleared the path for the client's ISO 27001 certification.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop"
    }
];

const Showcase = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section className="showcase-section">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-title">Our <span className="gradient-text">Work Showcase</span></h2>
                    <p className="section-subtitle">Real results for real businesses.</p>
                </div>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card group" onClick={() => setSelectedProject(project)}>
                            <div className="project-image-wrapper">
                                <img src={project.image} alt={project.title} className="project-image" />
                                <div className="project-overlay">
                                    <span className="view-case-btn">View Case Study <ArrowRight size={16} /></span>
                                </div>
                            </div>
                            <div className="project-content">
                                <span className="project-category">{project.category}</span>
                                <h3>{project.title}</h3>
                                <p>{project.summary}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Detailed Modal */}
            <Modal
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                title={selectedProject?.title}
            >
                {selectedProject && (
                    <div className="project-modal-details">
                        <img src={selectedProject.image} alt={selectedProject.title} className="modal-hero-image" />
                        <div className="modal-text">
                            <span className="badge">{selectedProject.category}</span>
                            <h4>Project Challenge & Solution</h4>
                            <p>{selectedProject.details}</p>
                            <div className="modal-actions">
                                <a href="#contact" className="btn btn-primary" onClick={() => setSelectedProject(null)}>
                                    Contact us about this <ExternalLink size={16} />
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </section>
    );
};

export default Showcase;
