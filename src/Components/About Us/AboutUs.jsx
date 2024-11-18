import React from "react";
import { Link } from "react-router-dom";
import {
  aboutus01,
  aboutus02,
  aboutus03,
} from "../../Assetes/Images/About Us/AboutUs";
import Button from "../../CommonComponent/Btn/Button";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdWifiCalling3 } from "react-icons/md";
import { GiTeamIdea } from "react-icons/gi";
import { useInView } from 'react-intersection-observer'; // Import the hook

import "./AboutUs.css";

const AboutUs = () => {
  // Define inView hooks for the image and content sections
  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true, // Trigger once when the element comes into view
    threshold: 0.5, // The percentage of the element visible when the trigger happens
  });

  const { ref: contentRef, inView: contentInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="container mx-auto px-4 py-10" id="about">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Image Section */}
        <div
          className={`flex flex-col gap-4 md:gap-8 md:flex-row md:w-1/2 transition-transform duration-700 ${
            imageInView ? "transform translate-x-0 opacity-100" : "transform -translate-x-10 opacity-0"
          }`}
          ref={imageRef} // Attach the image section to the intersection observer
        >
          <div className="flex flex-col items-center">
            <img
              src={aboutus01}
              alt="Quality Service"
              className=" w-full rounded-customRoundeImg  md:h-auto"
            />
            <div className="bg-customGold p-3 rounded-customRoundedBtn mt-4 w-full text-white flex items-center justify-center gap-2">
              <div className="text-6xl bg-customBlue text-customGold p-2 rounded-full">
                <GiTeamIdea />
              </div>
              <p className="text-center md:text-left text-2xl md:w-48 text-customBlue">
                30 Years Of Quality Service
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 md:gap-8">
            <img
              src={aboutus02}
              className="rounded-full w-96 border-dashed border-2 border-customGold p-3"
              alt="Service"
            />
            <img
              src={aboutus03}
              alt="Education System"
              className=" w-full"
              style={{ borderRadius: "0 60px 60px 60px" }}
            />
          </div>
        </div>

        {/* Text Section */}
        <div
          ref={contentRef} // Attach the content section to the intersection observer
          className={`w-full max-w-md md:max-w-lg md:w-1/2 text-center md:text-left transition-transform duration-700 ${
            contentInView ? "transform translate-x-0 opacity-100" : "transform translate-x-10 opacity-0"
          }`}
        >
          <div className="flex justify-center md:justify-start items-center text-2xl gap-2 text-customGold ">
            <div className="flex justify-center items-center border-b-4 border-customGold gap-4 tracking-[4px] font-semibold">
              <FaBookOpenReader />
              <h3>About Us</h3>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold pt-6 md:pt-10 leading-tight text-customBlue">
            Our Education System{" "}
            <span className="text-customGold">Inspires</span> You More.
          </h2>

          <p className="text-contentColor pt-6 md:pt-10">
            There are many variations of passages available, but the majority
            have suffered alteration in some form by injected humour or
            randomized words, which don't look even slightly believable. If you
            are going to use a passage.
          </p>
          <div className="flex flex-col justify-center items-center lg:flex-row gap-6 lg:gap-9 mt-5">
            {/* Left Column */}
            <div className="lg:w-[60%] w-full">
              <div className="flex gap-2 items-center mb-4">
                <div className="text-6xl bg-customBlue h-20 w-20 text-customGold p-2 rounded-full flex items-center justify-center">
                  <GiTeamIdea />
                </div>
                <div>
                  <h4 className="text-2xl font-semibold">Bright Services</h4>
                  <p className="mt-1 text-lg text-contentColor">
                    It is a long established fact that reader will to using
                    content.
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="text-6xl bg-customBlue h-20 w-20 text-customGold p-2 rounded-full flex items-center justify-center">
                  <GiTeamIdea />
                </div>
                <div>
                  <h4 className="text-2xl font-semibold">International Hubs</h4>
                  <p className="mt-1 text-lg text-contentColor">
                    It is a long established fact that reader will to using
                    content.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:w-[35%] w-full bg-customLightGold  p-4 md:p-6 rounded-2xl text-customBlue text-lg border-2 border-dashed border-customBlue hover:-translate-y-2 transition-transform duration-300 relative">
              <p>
                It is a long established fact that a reader will be distracted
                by the content of a page when looking at its reader for the long
                words layout.
              </p>
              <p className="absolute right-3  text-4xl text-customBlue">66</p>
            </div>
          </div>
          <hr className="my-6" />

          <div className="flex justify-center items-center gap-5 md:justify-start mt-5 flex-col md:flex-row">
            <Link to="/about">
              <Button>DISCOVER MORE</Button>
            </Link>
            <div className="flex gap-3 items-center">
              <a href="tel:+919989878965" className="flex gap-3 items-center">
                <div className="bg-customBlue p-2 rounded-customRoundedBtnNext text-3xl text-customGold">
                  <MdWifiCalling3 />
                </div>
                <div>
                  <p className="text-customGold text-xl font-bold">Call Now</p>
                  <p className="text-customBlue text-xl font-bold">+91 99898 78965</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
