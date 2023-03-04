import React from 'react';
import bg from '../../../assets/photos/plainblack.webp'
import myPhoto from '../../../assets/photos/amarchobi.png'
import Navbar from '../../../shares/Navbar/Navbar';
import Rive from '@rive-app/react-canvas';


const Header = () => {

    return (
        <div>

            <div className="hero py-48 lg:h-1/3 opacity-100 min-w-screen" style={{ backgroundImage: `url(${bg})` }}>

                <div className="hero-overlay bg-opacity-0 lg:my-72"></div>
                <div className="hero-content   flex-col lg:flex-row-reverse">
                    <img src={myPhoto} className="opacity-60 hidden md:block w-96 h-full ml-32 rounded-none" alt='' />
                    <div>
                        <h1 className="text-6xl font-thin text-white mt-9"> I'M Towhid Jamshed</h1>
                        <p className="py-6 text-white font-thin text-2xl">MERN stack Web Developer</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;