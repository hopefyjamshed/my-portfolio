import React from 'react';
import About from '../About/About';
import Contact from '../contact/Contact';
import Header from '../Header/Header';
import Projects from '../projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div className=' scroll-smooth duration-500 min-h-screen scroll-m-44'>
            <Header></Header>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;