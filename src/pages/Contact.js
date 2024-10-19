
import React from 'react';
import '../styles/Contact.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="contact-container" id='contact'>
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
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="btn">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
