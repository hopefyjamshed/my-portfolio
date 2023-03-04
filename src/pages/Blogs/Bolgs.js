import React from 'react';
import img from '../../assets/Hidden person.gif'

const Bolgs = () => {
    return (
        <div className='pt-32 pb-12 flex items-center min-h-screen justify-center'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h1 className='text-4xl font-bold animate-bounce text-white/90'>Commign Soon <span className='text-4xl animate-ping'>...</span></h1>
            </div>
        </div>
    );
};

export default Bolgs;