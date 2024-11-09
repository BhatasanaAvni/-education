import React from "react";

import AboutUs from "../Components/About Us/AboutUs";
import CountUp from "react-countup";
import Testimonials from "../Components/Testimonials/Testimonials";
import Teachers from "../Components/Teachers/Teachers";
import AboutContent from "../RoutingComponents/About/AboutContent";

const About = () => {
  return (
    <>
 
        <AboutContent />
        <AboutUs />
        <CountUp />
        <Testimonials />
        <Teachers />      
  
    </>
  );
};

export default About;
