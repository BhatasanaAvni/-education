import React from "react";

import AboutUs from "../Components/About Us/AboutUs";
import CountUp from "react-countup";
import Testimonials from "../Components/Testimonials/Testimonials";
import Teachers from "../Components/Teachers/Teachers";
import AboutContent from "../RoutingComponents/About/AboutContent";
import Charitable from "../Components/Charitable/Charitable"
import Navbar from "../CommonComponent/Navbar/Navbar";
import Footer from "../CommonComponent/Footer/Footer";
const About = () => {
  return (
    <>
      <Navbar />
      <AboutContent />
      <Charitable />
      <AboutUs />
      <CountUp />
      <Teachers />
      <Testimonials />
      <Footer />

    </>
  );
};

export default About;
