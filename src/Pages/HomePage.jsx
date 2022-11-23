import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import About from './About'
import Services from './Services'
import Projects from './Projects'
import Footer from '../components/Footer'
import MyTeam from './MyTeam'
import ContactUs from './ContactUs'
import '../css/bootstrap.min.css';
import '../css/bootstrap-icons.css';
import '../css/magnific-popup.css';
import '../css/templatemo-first-portfolio-style.css';


const HomePage = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <About />
            <Services />
            <Projects />
            <MyTeam />
            <ContactUs />
            <Footer />
        </>
    )
}

export default HomePage