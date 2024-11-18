import React from 'react';

import Logo from '../../Assetes/Videos/loder.gif';

const Loader = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center bg-customBlue '>
            <img src={Logo} alt="loader" className='w-[350px]' />
        </div>
    );
};

export default Loader;
