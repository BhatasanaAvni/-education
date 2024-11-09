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

import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="container mx-auto px-4 py-10" id="about">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Image Section */}
        <div className="flex flex-col gap-4 md:gap-8 md:flex-row md:w-1/2">
          <div className="flex flex-col items-center">
            <img
              src={aboutus01}
              alt="Quality Service"
              className=" w-full rounded-customRoundeImg  md:h-auto"
            />
            <div className="bg-customOrange p-3 rounded-customRoundedBtn mt-4 w-full text-white flex items-center justify-center gap-2">
              <div className="text-6xl bg-white text-customOrange p-2 rounded-full">
                <GiTeamIdea />
              </div>
              <p className="text-center md:text-left text-2xl md:w-48">
                30 Years Of Quality Service
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 md:gap-8">
            <img
              src={aboutus02}
              className="rounded-full w-96 border-dashed border-2 border-customOrange p-3
              "
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
        <div className="w-full max-w-md md:max-w-lg md:w-1/2 text-center md:text-left">
          <div className="flex justify-center md:justify-start items-center text-2xl gap-2 text-customOrange ">
            <div className="flex justify-center items-center border-b-4 border-customOrange gap-4 tracking-[4px] font-semibold">
              <FaBookOpenReader />
              <h3>About Us</h3>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold pt-6 md:pt-10 leading-tight">
            Our Education System{" "}
            <span className="text-customOrange">Inspires</span> You More.
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
                <div className="text-6xl bg-customgreen h-20 w-20 text-customOrange p-2 rounded-full flex items-center justify-center">
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
                <div className="text-6xl bg-customgreen h-20 w-20 text-customOrange p-2 rounded-full flex items-center justify-center">
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
            <div className="lg:w-[35%] w-full bg-[#116e6317] p-4 md:p-6 rounded-2xl text-[#19232e] text-lg border-2 border-dashed border-customOrange hover:-translate-y-2 transition-transform duration-300 relative">
              <p>
                It is a long established fact that a reader will be distracted
                by the content of a page when looking at its reader for the long
                words layout.
              </p>
              <p className="absolute right-3  text-4xl text-customgreen">99</p>
            </div>
          </div>
          <hr className="my-6" />

          <div className="flex justify-center items-center gap-5 md:justify-start mt-5 flex-col md:flex-row">
          <Link to="/about">
            <Button>DISCOVER MORE</Button>
            </Link>
            <div className="flex gap-3 items-center ">
              <div className="bg-customgreen p-2 rounded-customRoundedBtnNext text-3xl text-customOrange ">
                <MdWifiCalling3 />
              </div>
              <div>
                <p className="text-customOrange text-xl font-bold">Call Now</p>
                <p className="text-customgreen text-xl font-bold">
                  +99898 78965
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
