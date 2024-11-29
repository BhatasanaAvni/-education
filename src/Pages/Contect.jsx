import React from 'react'
import bg from "../Assetes/Images/contectbg.jpeg";
import ContectData from "../Auth/contactForm/contactFormData"
import MapEmbed from "../Auth/contactForm/MapEmbed/MapEmbed"
import ContactForm1 from '../Auth/contactForm/contactForm';
import Navbar from '../CommonComponent/Navbar/Navbar';
import Footer from '../CommonComponent/Footer/Footer';
const Contect = () => {
  return (
    <>
<Navbar/>
      <section
        className="relative w-full h-[600px] bg-cover bg-center" // Set the height to a custom value like 400px
        style={{ backgroundImage: `url(${bg})`, backgroundPosition: "center" }} // Ensures the image is centered
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
        <h1 className="relative flex justify-center flex-col items-center top-[50%] z-10 text-white text-4xl font-semibold ">
          CONTACT US
        
        </h1>

      </section>
      <div className="container">
        <ContectData />
      </div>
      <ContactForm1 />
      <div className='my-20'>

        <MapEmbed />
      </div>
      <Footer/>
    </>
  )
}

export default Contect