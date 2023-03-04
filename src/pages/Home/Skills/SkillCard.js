import React from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const SkillCard = ({ skill }) => {
    const { name, link, img } = skill

    return (

        <div className="card h-[200px] liner relative group card-side bg-base-100 shadow-xl" data-aos="fade-left">

            {/* image area  */}
            <figure>
                <img src={img} className='h-[200px] group-hover:animate-ping group-hover:hidden duration-700 w-[250px]' alt="logo" />
            </figure>

            <div className="card-body">

                {
                    name.length > 8 ?
                        <h1 className="card-title group-hover:text-5xl group-hover:text-left duration-700 group-hover:absolute group-hover:left-0 group-hover:top-0 group-hover:bottom-0 group-hover:pl-5 group-hover:text-white group-hover:pt-[30px] text-2xl">{name}</h1>
                        :
                        <h1 className="card-title group-hover:text-6xl group-hover:text-left duration-700 group-hover:absolute group-hover:left-0 group-hover:top-0 group-hover:bottom-0 group-hover:pl-5 group-hover:text-white group-hover:pt-[30px] text-4xl">{name}</h1>
                }

                <div target='_blank' className="card-actions justify-end items-center">
                    <a href={link} data-title='Go for the Details' target='_blank'>
                        <FaArrowAltCircleRight className=' text-8xl hidden group-hover:inline text-white mt-5'></FaArrowAltCircleRight>
                    </a>
                </div>
            </div>
        </div>


    );
};

export default SkillCard;