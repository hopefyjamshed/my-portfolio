import React from 'react';

const Tech = ({ data }) => {
    console.log(data)
    return (
        <div className=''>
            <div className='border bg-white text-black  font-bold px-3 py-1 rounded-xl text-white'>{data}</div>
        </div>
    );
};

export default Tech;