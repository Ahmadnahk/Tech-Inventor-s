import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
    return (
        <div className="hero-container">
            {/* Video Background */}
            <video 
                className="hero-video" 
                src="/background.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline
            ></video>
            {/* Gradient Overlay */}
            <div className="hero-overlay"></div>
            {/* Content */}
            <div className="hero-content">
                <h1 className="hero-title">
                    <span className="highlight-text">Innovate</span>, <span className="highlight-text">Create</span>, and <span className="highlight-text">Lead</span>
                </h1>
                <p className="hero-subtitle">
                    Redefining the future with cutting-edge technology and solutions tailored to your business.
                </p>
                <div className="hero-buttons">
                    <button className="btn btn-primary">View Our Work</button>
                    <button className="btn btn-secondary">Let’s Collaborate</button>
                </div>
                <div className="hero-stats">
                    <div className="stat-item">
                        <h2>500+</h2>
                        <p>Projects Delivered</p>
                    </div>
                    <div className="stat-item">
                        <h2>300+</h2>
                        <p>Satisfied Clients</p>
                    </div>
                    <div className="stat-item">
                        <h2>50+</h2>
                        <p>Industry Awards</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
