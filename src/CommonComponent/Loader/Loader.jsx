import React from 'react';
// import Loadergif from '../../Images/Loader.gif';
import Loadergif from '../../Assetes/Images/BORCELLE-1--unscreen.gif';

const Loader = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center bg-customgreen'>
            <img src={Loadergif} alt="loader" className='' />
        </div>
    );
};

export default Loader;
