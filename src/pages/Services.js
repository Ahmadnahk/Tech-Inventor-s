

import React from 'react';
import '../styles/Services.css';

const services = [
    {
        title: 'Custom Software Solutions',
        description: 'We build responsive, fast, and modern websites.',
        image: '/images/customdev.png',
    },
    {
        title: 'Mobile App Development',
        description: 'We create mobile applications with stunning UI and UX.',
        image: '/images/mobiledev.png',
    },
    {
        title: 'Web dev Development',
        description: 'We create mobile applications with stunning UI and UX.',
        image: '/images/webdev.png',
    },
    {
        title: 'API Development',
        description: 'We create mobile applications with stunning UI and UX.',
        image: '/images/apidev.png',
    },
    {
        title: 'UI / UX Designing',
        description: 'We create mobile applications with stunning UI and UX.',
        image: '/images/uiux.png',
    },
];

const Services = () => {
    return (
        <div className="services-container" id='services'>
            <h2 className="services-title">Our Services</h2>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div className="service-card" key={index}>
                        <div className="service-image-container">
                            <img src={service.image} alt={service.title} className="service-image" />
                        </div>
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-description">{service.description}</p>
                    </div>
                ))}
            </div>

        </div>
    );
};
export default Services;
