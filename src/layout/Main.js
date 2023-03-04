import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shares/footer/Footer';
import Navbar from '../shares/Navbar/Navbar';

const Main = () => {
    return (
        <div className=''>

            <Navbar></Navbar>

            <Outlet></Outlet>

            <Footer></Footer>
        </div>
    );
};

export default Main;