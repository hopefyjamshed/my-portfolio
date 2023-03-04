import React from 'react';
import { FaArrowAltCircleDown, FaArrowDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Detail from '../../Detail/Detail';
import monitor from '../../../assets/photos/Monitor-HD-img.jpg'
import shawrav from '../../../assets/photos/Shawrav-HD-img.jpg'
import doctors from '../../../assets/photos/HD-wallpaper-doctor-medical.jpg'

const ProjectsCard = ({ data }) => {
    const { name, _id, img, link } = data
    return (
        <div className=''>

            {/* actual card  */}

            <div className="card group-hover:blur-lg group-hover:scale-[0.85] hover:!scale-100 hover:!blur-none duration-700 w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" className='h-[350px] w-full' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p></p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"><Link to={`/detail/${_id}`}>See Detail</Link></button>
                    </div>
                </div>
            </div>
            {/* actual card  */}
        </div>
    );
};

export default ProjectsCard;