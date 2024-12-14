import React, { useState } from 'react';
import '../styles/Contact.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { db } from '../Firebase';
import { collection, addDoc } from 'firebase/firestore';

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
            await addDoc(collection(db, 'contacts'), {
                name: formData.name,
                email: formData.email,
                message: formData.message,
                submittedAt: new Date().toLocaleString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric', 
                    hour: '2-digit', 
                    minute: '2-digit', 
                    second: '2-digit', 
                    hour12: true 
                }),
            });

            setIsSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Firebase submission error:', error);
            setErrorMessage('Something went wrong. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-container" id="contact">
            <h2 className="contact-title">Contact Us</h2>
            <p className="contact-description">
                Have questions or feedback? Fill out the form below, and we’ll respond as soon as possible.
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
                    <div className="success-message">
                        <h3>Thank You!</h3>
                        <p>Your message has been successfully sent. We’ll get back to you shortly!</p>
                        <button onClick={() => setIsSubmitted(false)} className="btn">Send Another Message</button>
                    </div>
                ) : (
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
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
                                placeholder="Enter your email"
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
                                placeholder="Write your message here"
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
