import React from "react";
import { IoCallOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Logo } from "../../Assetes/Images/Image";
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
      <div className="absolute inset-0 bg-customBlue z-0"></div>
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="p-6">
            <img src={Logo} alt="" className="w-28" />
            <p className="mt-4 text-[15px]">
              We are many variations of passages available but the majority have
              suffered alteration in some form by injected humour words
              believable.
            </p>
          </div>
          <div className="p-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-customGold pb-2">
                <u>Quick Links</u>
              </h3>
              </div>
              <div className="mt-4 space-y-2 cursor-pointer">
                <a href="tel:+98987 87875" className="flex items-center">
                  <span className="mr-2 text-lg p-[8px] bg-customGold rounded-customRounded">
                    <IoCallOutline />
                  </span>
                  +91 98987 87875
                </a>

                <a
                  className="flex items-center"
                  href="https://maps.app.goo.gl/7tMDbFZNhPp1g1U98"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="mr-2 text-lg p-[8px] bg-customGold rounded-customRounded">
                    <IoLocationOutline />
                  </span>
                  Mahuwash, Sara Rd, Vansda, Gujarat 396580
                </a>

                <a href="mailto:info@yashcampus.in" className="flex items-center" >
                  <span className="mr-2 text-lg p-[8px] bg-customGold rounded-customRounded">
                    <MdOutlineEmail />
                  </span>
                  info@yashcampus.in
                </a>
              </div>
            </div>
   

          {/* Quick Links */}
          {/* <div className="p-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-customGold pb-2">
              <u>Quick Links</u>
            </h3>
            <ul className="space-y-2 text-[18px] pt-3">
              <li className="hover:translate-x-2 transition-all duration-300 hover:text-customGold">
                About Us
              </li>
              <li className="hover:translate-x-2 transition-all duration-300 hover:text-customGold">
                FAQ's
              </li>
              <li className="hover:translate-x-2 transition-all duration-300 hover:text-customGold">
                Testimonials
              </li>
              <li className="hover:translate-x-2 transition-all duration-300 hover:text-customGold">
                Terms Of Service
              </li>
              <li className="hover:translate-x-2 transition-all duration-300 hover:text-customGold">
                Privacy Policy
              </li>
              <li className="hover:translate-x-2 transition-all duration-300 hover:text-customGold">
                Update News
              </li>
            </ul>
          </div> */}

          {/* Our Campus */}
          <div className="p-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-customGold pb-2">
              <u>Our Campus</u>
            </h3>
            <ul className="space-y-2 text-[18px] pt-3">
              <li className="hover:translate-x-2 transition-all duration-300 hover:text-customGold">
                Campus Safety
              </li>
              <li className="hover:translate-x-2 transition-all duration-300 hover:text-customGold">
                Student Activities
              </li>
              <li className="hover:translate-x-2 transition-all duration-300 hover:text-customGold">
                Academic Department
              </li>
              <li className="hover:translate-x-2 transition-all duration-300 hover:text-customGold">
                Planning & Administration
              </li>
              <li className="hover:translate-x-2 transition-all duration-300 hover:text-customGold">
                Office Of The Chancellor
              </li>
              <li className="hover:translate-x-2 transition-all duration-300 hover:text-customGold">
                Facility Services
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="p-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-customGold pb-2">
              <u>Newsletter</u>
            </h3>
            <p className="text-xl pt-3 mb-4">
              Subscribe to our newsletter to get the latest updates and news.
            </p>
            <form className="flex flex-col">
              <input
                type="email"
                placeholder="Your Email"
                className="p-2 mb-4 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-customGold"
              />
              <button
                type="submit"
                className="bg-customGold text-white px-5 py-3 rounded-customRoundedBtn flex items-center justify-center"
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
        <div className="max-w-6xl mx-auto mt-10 text-center border-t border-customGold pt-4 flex justify-between items-center flex-wrap">
          <p className="text-xl text-white">
            &copy; Copyright 2024{" "}
            <a className="text-customGold"    href="#">Yash Campus</a>. All Rights Reserved. D&D by <a href="https://vaanyawebservice.com/ " className="text-customGold">VWS</a>
          </p>
          <div className="flex justify-center space-x-4 mt-4 text-xl">
            <a
              href="https://www.facebook.com/yashcampuss"
              target="_blank"
              className="text-customGold hover:text-white p-[8px] bg-white hover:bg-customGold duration-500 rounded-customRounded"
            >
              <FaFacebookF />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/yashcampuss/"
              className="text-customGold hover:text-white p-[8px] bg-white hover:bg-customGold duration-500 rounded-customRounded"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/9898787875"
              className="text-customGold hover:text-white p-[8px] bg-white hover:bg-customGold duration-500 rounded-customRounded"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>

            {/* <a
              target="_blank"
              href="#"
              className="text-customGold hover:text-white p-[8px] bg-white hover:bg-customGold duration-500 rounded-customRounded"
            >
              <FaYoutube />
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
