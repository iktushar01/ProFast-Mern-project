import React from 'react';
import logo from '../../../assets/logo.png'

const ProfastLogo = () => {
    return (
        <div>
            <div className='flex'>
                <img src={logo} alt="" />
            <p className='w-32'>ProFast</p>
            </div>
        </div>
    );
};

export default ProfastLogo;