import React from 'react';
import img from '../../../assets/photos/amarchobi.png'

const About = () => {
    return (
        <div data-aos="fade-right" className='pt-12 max-w-[1440px] mx-auto grad' id='about'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img} className="bg-black lg:w-1/2 rounded-lg shadow-2xl lg:ml-11" alt='' />
                    <div className='ml-20'>
                        <h1 className="text-6xl font-extrabold  text-slate-300">About Me</h1>
                        <hr className='' />
                        <p className="py-6 sm:text-xl lg:text-2xl text-slate-300">Self-motivated team player, seeking a position as a web developer with Next Generation Web Development where I can apply my advanced knowledge of web design with my exploring abilities to meet client needs and exceed their expectations.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;