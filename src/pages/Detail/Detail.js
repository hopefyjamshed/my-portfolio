import { data } from 'autoprefixer';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Features from './Features';
import Ss from './Ss';
import Tech from './Tech';

const Detail = () => {

    const details = useLoaderData()
    console.log(details)



    return (
        <div className=' max-w-[1440px] mx-auto  pt-32'>
            <div className=' flex items-center justify-between'>
                <div className="avatar">
                    <div className="w-24 rounded">
                        <img src={details[0].img} alt='' />
                    </div>

                </div>
                <div className='ml-9'>
                    <h1 className='text-3xl text-white/90 font-bold'> {details[0].name}</h1>
                </div>
                <div>
                    <button className='btn rounded-full hov hover:border-transparent border-xl duration-700'><a href={details[0].link} target='_blank'> Show project</a></button>
                </div>
            </div>
            <div className='flex flex-wrap gap-4 my-9'>
                {
                    details[0].tech.map(data => <Tech
                        key={data._id}
                        data={data}
                    ></Tech>)
                }
            </div>

            <div>
                {
                    details[0].ss.map(data => <Ss
                        key={data._id}
                        data={data}
                    ></Ss>)
                }
            </div>
            <div className="divider"><span className='text-4xl font-bold text-white/90'>Features</span></div>

            <div className='my-8'>
                {
                    details[0].detail.map(data => <Features
                        key={data._id}
                        data={data}
                    ></Features>)
                }
            </div>
            <h1 className='mt-12 text-3xl font-bold text-white mb-12'>Still Working on It <span className=' animate-pulse'>...</span></h1>
        </div>
    );
};

export default Detail;