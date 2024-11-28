import React, { useState } from 'react';
import '../styles/Contact.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { client } from '../SanityClient'; 

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage('');

        try {
            
           let data = await client.create({
                _type: 'contact',         
                name: formData.name,
                email: formData.email,
                message: formData.message,
                submittedAt: new Date().toISOString(), 
           });
            
            console.log(data);

            
            setIsSubmitted(true);
            setFormData({ name: '', email: '', message: '' }); 
        } catch (error) {
            setErrorMessage('Error submitting the form. Please try again.');
            console.error('Sanity submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-container" id="contact">
            <h2 className="contact-title">Get in Touch</h2>
            <p className="contact-description">
                We’d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.
            </p>
            <div className="contact-info">
                <div className="contact-info-item">
                    <FaMapMarkerAlt className="contact-icon" />
                    <h4>Our Location</h4>
                    <p>Rawalpindi, Islamabad Stadium Road</p>
                </div>
                <div className="contact-info-item">
                    <FaPhoneAlt className="contact-icon" />
                    <h4>Call Us</h4>
                    <p>+92 322 944 783 4</p>
                </div>
                <div className="contact-info-item">
                    <FaEnvelope className="contact-icon" />
                    <h4>Email Us</h4>
                    <p>ahmadakbar17894@gmail.com</p>
                </div>
            </div>
            <div className="contact-form-container">
                {isSubmitted ? (
                    <p className="success-message">Thank you for your message! We'll get back to you soon.</p>
                ) : (
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn" disabled={isSubmitting}>
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                    </form>
                )}
            </div>
        </div>
    );
};

export default Contact;
