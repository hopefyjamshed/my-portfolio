import React from 'react';
import { Link } from 'react-router-dom';




const Navbar = () => {
    return (
        <div className=' bg-black opacity-100 max-w-[1440px] mx-auto' data-aos="fade-down">
            <div className="navbar fixed z-10 opacity-90 bg-black py-4 text-neutral-content max-w-[1440px] mx-auto">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>

                            <li><Link to='/about' spy={true} smooth={true} offset={-100} duration={500}></Link></li>
                            <li><Link to='/blogs' className=''>Blogs</Link></li>
                        </ul>
                        {/* <Link to='about' spy={true} smooth={true} duration={500} offset={50} className=''>About</Link> */}
                    </div>
                    <Link to='/' className="btn btn-ghost italic text-5xl font-extrabold">J</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 ">
                        <li className=''><Link to='/'>Home</Link></li>

                        <li className=''><a href='#about' className=''>About</a></li>
                        <li><Link to='/blogs' className=''>Blogs</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href='https://drive.google.com/file/d/1OoZ5qxp4ZJmUjw4J0XL0M2fGmFqtY707/view?usp=share_link' target='_blank' className="btn">My Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;