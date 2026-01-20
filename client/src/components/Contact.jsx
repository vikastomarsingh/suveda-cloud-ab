import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import '../styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        serviceOfInterest: 'Other',
        message: ''
    });
    const [status, setStatus] = useState(null); // idle, loading, success, error
    const [statusMsg, setStatusMsg] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setStatusMsg(data.message);
                setFormData({ name: '', email: '', company: '', serviceOfInterest: 'Other', message: '' });
                setTimeout(() => { setStatus(null); setStatusMsg(''); }, 8000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="contact-wrapper glass">
                    <div className="contact-info">
                        <h2>Let's Build Something <br /><span className="gradient-text">Great Together</span></h2>
                        <p>Ready to transform your business? Fill out the form and our team will get back to you within 24 hours.</p>

                        <div className="contact-details">
                            <div className="detail-item">
                                <h4>Email Us</h4>
                                <p>contact@suvedacloud.ab</p>
                            </div>
                            <div className="detail-item">
                                <h4>Call Us</h4>
                                <p>+1 (555) 123-4567</p>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="name@company.com"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Company</label>
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                placeholder="Company Name"
                            />
                        </div>
                        <div className="form-group">
                            <label>Service of Interest</label>
                            <select name="serviceOfInterest" value={formData.serviceOfInterest} onChange={handleChange}>
                                <option value="Salesforce">Salesforce</option>
                                <option value="HubSpot">HubSpot</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="form-group full-width">
                            <label>Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Tell us about your project..."
                                rows="4"
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary submit-btn" disabled={status === 'loading'}>
                            {status === 'loading' ? 'Sending...' : <>Send Message <Send size={18} /></>}
                        </button>

                        {status === 'success' && (
                            <div className="status-msg success">
                                <CheckCircle size={18} /> {statusMsg || 'Message sent successfully!'}
                            </div>
                        )}
                        {status === 'error' && (
                            <div className="status-msg error">
                                <AlertCircle size={18} /> Something went wrong. Try again.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
