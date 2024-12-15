
import React from 'react';
import HeroSection from '../sections/HeroSection';
import Services from './Services';
import Projects from './Projects';
import Footer from '../components/Footer';
// import Review from './Review';
import About from './About';
import Contact from './Contact';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <Services />
            <Projects />
            <About />
            <Contact />
            {/* <Review /> */}
            <Footer />
        </div>
    );
};

export default Home;
