import React from 'react';
import ContactForm from "../Auth/contactForm/contactForm";
import Navbar from '../CommonComponent/Navbar/Navbar';
import Footer from '../CommonComponent/Footer/Footer';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Button from '../CommonComponent/Btn/Button';

const AdmisionOPen = () => {
    const navigate = useNavigate(); // Hook to navigate programmatically

    const handleBackClick = () => {
        navigate('/'); // Navigate to the home page
    };

    return (
        <>
            <Navbar />
            <div className="pt-28 md:pt-28">
                <ContactForm />

            </div>

            <div className='flex items-center justify-center py-6'>
                <Button
                    onClick={handleBackClick}
                    className="bg-customBlue text-white px-4 py-2 "
                >
                    Back to Home
                </Button>

            </div>
            <Footer />
        </>
    );
}

export default AdmisionOPen;
