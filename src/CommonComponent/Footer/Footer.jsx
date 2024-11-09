import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { LogoFooter } from "../../Assetes/Images/Image";
import footerbg from "../../Assetes/Images/Goal/01.png";

const Footer = () => {
  return (
    <footer
      className="text-white py-10 px-5 relative bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${footerbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[rgba(1,39,88,0.85)] z-0"></div>
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="p-6">
            <img src={LogoFooter} alt="" className="w-28" />
            <p className="mt-4 text-[15px]">
              We are many variations of passages available but the majority have
              suffered alteration in some form by injected humour words
              believable.
            </p>
            <div className="mt-4 space-y-2">
              <p className="flex items-center">
                <span className="mr-2 text-lg p-[8px] bg-customOrange rounded-customRounded">
                  <IoCallOutline />
                </span>
                +2 123 654 7898
              </p>
              <p className="flex items-center">
                <span className="mr-2 text-lg p-[8px] bg-customOrange rounded-customRounded">
                  <IoLocationOutline />
                </span>
                25/B Milford Road, New York
              </p>
              <p className="flex items-center">
                <span className="mr-2 text-lg p-[8px] bg-customOrange rounded-customRounded">
                  <MdOutlineEmail />
                </span>
                info@example.com
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="p-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-customOrange pb-2">
              <u>Quick Links</u>
            </h3>
            <ul className="space-y-2 text-[18px] pt-3">
              <li className="hover:translate-x-2 transition-all duration-300">
                About Us
              </li>
              <li className="hover:translate-x-2 transition-all duration-300">
                FAQ's
              </li>
              <li className="hover:translate-x-2 transition-all duration-300">
                Testimonials
              </li>
              <li className="hover:translate-x-2 transition-all duration-300">
                Terms Of Service
              </li>
              <li className="hover:translate-x-2 transition-all duration-300">
                Privacy Policy
              </li>
              <li className="hover:translate-x-2 transition-all duration-300">
                Update News
              </li>
            </ul>
          </div>

          {/* Our Campus */}
          <div className="p-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-customOrange pb-2">
              <u>Our Campus</u>
            </h3>
            <ul className="space-y-2 text-[18px] pt-3">
              <li className="hover:translate-x-2 transition-all duration-300">
                Campus Safety
              </li>
              <li className="hover:translate-x-2 transition-all duration-300">
                Student Activities
              </li>
              <li className="hover:translate-x-2 transition-all duration-300">
                Academic Department
              </li>
              <li className="hover:translate-x-2 transition-all duration-300">
                Planning & Administration
              </li>
              <li className="hover:translate-x-2 transition-all duration-300">
                Office Of The Chancellor
              </li>
              <li className="hover:translate-x-2 transition-all duration-300">
                Facility Services
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="p-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-customOrange pb-2">
              <u>Newsletter</u>
            </h3>
            <p className="text-xl pt-3 mb-4">
              Subscribe to our newsletter to get the latest updates and news.
            </p>
            <form className="flex flex-col">
              <input
                type="email"
                placeholder="Your Email"
                className="p-2 mb-4 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button
                type="submit"
                className="bg-customOrange text-white px-5 py-3 rounded-customRoundedBtn flex items-center justify-center"
              >
                SUBSCRIBE NOW{" "}
                <span className="ml-2">
                  <FaRegPaperPlane />
                </span>
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="max-w-6xl mx-auto mt-10 text-center border-t border-customOrange pt-4 flex justify-between items-center flex-wrap">
          <p className="text-xl text-white">
            &copy; Copyright 2024{" "}
            <span className="text-customOrange">Bright</span>. All Rights Reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-4 text-xl">
            <a
              href="#"
              className="text-customOrange hover:text-white p-[8px] bg-white hover:bg-customOrange duration-500 rounded-customRounded"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-customOrange hover:text-white p-[8px] bg-white hover:bg-customOrange duration-500 rounded-customRounded"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="text-customOrange hover:text-white p-[8px] bg-white hover:bg-customOrange duration-500 rounded-customRounded"
            >
              <FaWhatsapp />
            </a>
            <a
              href="#"
              className="text-customOrange hover:text-white p-[8px] bg-white hover:bg-customOrange duration-500 rounded-customRounded"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
