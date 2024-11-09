import React from 'react'
import bg from "../Assetes/Images/Testimonial/bg.jpg";
import ContectData from "../Auth/contactForm/contactFormData"
import Map from "../Components/Map/Map"
import ContactForm1 from '../Auth/contactForm/contactForm';
const Contect = () => {
  return (
   <>
   
   <section
      className="relative w-full h-[600px] bg-cover bg-center" // Set the height to a custom value like 400px
      style={{ backgroundImage: `url(${bg})`, backgroundPosition: "center" }} // Ensures the image is centered
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
      <h1 className="relative flex justify-center flex-col items-center top-[50%] z-10 text-white text-4xl font-semibold ">
      CONTACT US
     <p>  Home &gt;&gt; &nbsp;<span className="text-customOrange">Contact Us</span> </p>
      </h1>
     
    </section>
    <div className="container">
    <ContectData/>
    </div>
    <ContactForm1 />
    <div className='my-20'>

   <Map />
    </div>
   </>
  )
}

export default Contect