import React from 'react'
import HeroSection from '../Components/HeroSection/HeroSection'
import AboutUs from '../Components/About Us/AboutUs'
import CountUpAnimation from '../Components/CountUpAnimation/CountUpAnimation'
import OurCourses from '../Components/OurCourses/OurCourses'
import LatestUpdate from '../Components/LatestUpdate/LatestUpdate'
import Teachers from '../Components/Teachers/Teachers'
import Blog from '../Components/Blog/BlogSection'
import Testimonials from '../Components/Testimonials/Testimonials'
import Department from '../Components/Department/Department'
import Goal from '../Components/Goal/Goal'
import Gallery from '../Components/Gallery/Gallery'
import Events from '../Components/Events/Events'
import FeaturesSection from '../Components/Features/FeaturesSection'
import AganwadiVisit from '../Components/Events/AganwadiVisit/AganwadiVisit'


const MainPage = () => {
  return (
    <>
   <HeroSection/>
   <FeaturesSection/>
   <AboutUs/>
   <CountUpAnimation/>
   <OurCourses/>
   <LatestUpdate/>
   <Teachers/>
   <Goal/>
   <Gallery/>
   {/* <Events/> */}
   <Department/>
   <Testimonials/>
   {/* <AganwadiVisit/> */}
   {/* <Blog/> */}

    </>

  )
}

export default MainPage