import React from 'react';
import '../styles/HeroSection.css'; // Import your custom styles


const HeroSection = () => {
    return (
        <div className="hero-container">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <h1 className="hero-title">Crafting Digital Experiences</h1>
                <p className="hero-subtitle">Innovative solutions tailored for your business needs</p>
                <div className="hero-buttons">
                    <button className="btn btn-primary">Explore Our Projects</button>
                    <button className="btn btn-secondary">Get in Touch</button>
                </div>
            </div>
        </div>
    );
};
export default HeroSection;
