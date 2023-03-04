import React from 'react';
import { Link } from 'react-router-dom';
import { FaBeer, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='max-w-[1440px] mx-auto'>
            <footer data-aos="fade-in" className=" footer
        mr-5 p-10 bg-black text-neutral-content" >
                <div>

                    <p className="fill-current italic font-bold text-4xl">J</p>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <div className="grid grid-flow-col gap-4">
                        <a data-aos="fade-right" href='https://www.linkedin.com/in/towhidjamshed/' target="_blank"><FaLinkedin className='text-2xl'></FaLinkedin></a>

                        <a data-aos="fade-up" href='https://github.com/hopefyjamshed' target="_blank"><FaGithub className='text-2xl'></FaGithub></a>

                        <a data-aos="fade-left" href="https://www.facebook.com/towhidulislam.jamshed/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg>
                        </a>
                        <Link to='/'></Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;