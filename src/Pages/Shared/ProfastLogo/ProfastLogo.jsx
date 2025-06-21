import React from 'react';
import logo from '../../../assets/logo.png'

const ProfastLogo = () => {
    return (
        <div>
            <div className='flex items-end gap-1.5'>
                <img className='mt-2' src={logo} alt="" />
            <p className='text-3xl -ml-5 '>ProFast</p>
            </div>
        </div>
    );
};

export default ProfastLogo;