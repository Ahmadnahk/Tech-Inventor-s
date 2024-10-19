// Footer.js
import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'; // Added Instagram icon// Importing icons from react-icons
import '../styles/Footer.css'; // Import the corresponding CSS file

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <h2 className="footer-title">Tech Inventor's</h2>
                <p className="footer-description">
                    Crafting quality digital solutions for a better future.
                </p>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Tech Inventor's. All Rights Reserved.</p>
                <div className="footer-socials">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <FaTwitter className="social-icon" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin className="social-icon" />
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub className="social-icon" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <FaInstagram className="social-icon" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;