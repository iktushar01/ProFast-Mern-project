import React from 'react';
import logo from '../../../assets/logo.png'
import { Link } from 'react-router';

const ProfastLogo = () => {
    return (
        <div>
            <Link to= '/'><div className='flex items-end gap-1.5'>
                <img className='' src={logo} alt="" />
            <p className='text-3xl -ml-5 '>ProFast</p>
            </div></Link>
        </div>
    );
};

export default ProfastLogo;