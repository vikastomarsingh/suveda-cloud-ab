import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Process from '../components/Process';
import FAQ from '../components/FAQ';
import RevealOnScroll from '../components/RevealOnScroll';
import Showcase from '../components/Showcase';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <div className="home-page">
            <Hero />

            <RevealOnScroll>
                <Services />
            </RevealOnScroll>

            <RevealOnScroll>
                <Process />
            </RevealOnScroll>

            <RevealOnScroll>
                <Showcase />
            </RevealOnScroll>

            <RevealOnScroll>
                <Testimonials />
            </RevealOnScroll>

            <RevealOnScroll>
                <FAQ />
            </RevealOnScroll>

            <RevealOnScroll>
                <Contact />
            </RevealOnScroll>

            <Footer />
        </div>
    );
};

export default Home;
