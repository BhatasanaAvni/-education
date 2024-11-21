import React from "react";

import AboutUs from "../Components/About Us/AboutUs";
import CountUp from "react-countup";
import Testimonials from "../Components/Testimonials/Testimonials";
import Teachers from "../Components/Teachers/Teachers";
import AboutContent from "../RoutingComponents/About/AboutContent";
import Charitable from "../Components/Charitable/Charitable"
const About = () => {
  return (
    <>


        <AboutContent />
        <Charitable/>
        <AboutUs />
        <CountUp />
        <Teachers />
        <Testimonials />
    

    </>
  );
};

export default About;
