import React from "react";
import '../styles/Projects.css'; // Create and import your styles

// Projects.js
const Projects = () => {
    const projects = [
        {
            title: 'HRM System',
            description: 'Description of project 1',
            image: '/images/mobiledev.jpg',
            link: 'https://www.google.com',
        },

    ];

    return (
        <div className="projects-container" id='projects'>
            <h2 className="projects-title">Our Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <div className="project-image-container">
                            <img src={project.image} alt={project.title} className="project-image" />
                        </div>
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        <a href={project.link} className="btn" target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects