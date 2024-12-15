// src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll'; // Using react-scroll for smooth scrolling
import '../styles/Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [navBackground, setNavBackground] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setNavBackground(true);
        } else {
            setNavBackground(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${navBackground ? 'navbar-black' : 'navbar-black'}`}>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    Tech Inventor's
                </Link>

                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link
                            to="projects"
                            className="nav-links"
                            smooth={true}
                            duration={500}
                            onClick={closeMobileMenu}
                        >
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="services"
                            className="nav-links"
                            smooth={true}
                            duration={500}
                            onClick={closeMobileMenu}
                        >
                            Services
                        </Link>
                    </li>
                    {/* {<li className="nav-item">
                        <Link
                            to="reviews"
                            className="nav-links"
                            smooth={true}
                            duration={500}
                            onClick={closeMobileMenu}
                        >
                            Reviews
                        </Link>
                    </li>} */}
                    <li className="nav-item">
                        <Link
                            to="about"
                            className="nav-links"
                            smooth={true}
                            duration={500}
                            onClick={closeMobileMenu}
                        >
                            About Us
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="contact"
                            className="nav-links"
                            smooth={true}
                            duration={500}
                            onClick={closeMobileMenu}
                        >
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
