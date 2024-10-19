
import React from 'react';
import '../styles/About.css'

const About = () => {
    return (
        <div className="about-container" id='about'>
            <div className="about-content">
                <h2 className="about-title">About Us</h2>
                <p className="about-description">
                    Welcome to <span className="highlight">Tech Inventor's</span>, where we believe in transforming ideas into reality. With a dedicated team of professionals, we strive to deliver innovative solutions tailored to your needs. Our mission is to provide exceptional services that not only meet but exceed your expectations.
                </p>
                <h3 className="about-subtitle">Our Values</h3>
                <ul className="about-values">
                    <li>🌟 <strong>Integrity</strong>: We uphold the highest standards of integrity in all our actions.</li>
                    <li>🚀 <strong>Innovation</strong>: We pursue innovation to deliver cutting-edge solutions.</li>
                    <li>🤝 <strong>Customer Focus</strong>: Our clients are at the center of everything we do.</li>
                    <li>🌍 <strong>Sustainability</strong>: We are committed to sustainable practices in our operations.</li>
                </ul>
            </div>
        </div>
    );
};
export default About;
