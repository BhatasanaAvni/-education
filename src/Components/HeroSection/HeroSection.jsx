import React, { useState, useEffect } from "react";
import {
  Campus1,
  Campus2,
  Campus3,
} from "../../Assetes/Images/HeroSection/Heroimg";
import Button from "../../CommonComponent/Btn/Button";
import { Link } from "react-router-dom";


const HeroSection = () => {
  // Array of data for images, headings, and content
  const images = [
    {
      src: Campus1,
      heading: "Welcome to Our Service",
      content:
        "At BRIGHT, we provide essential medical services to support the health and well-being of our community..",
    },
    {
      src: Campus2,
      heading: "Transform Your Experience",
      content:
        "At BRIGHT, gain hands-on experience, world-class training, and expert mentorship to shape your future in healthcare.",
    },
    {
      src: Campus3,
      heading: "Discover New Possibilities",
      content:
        "At BRIGHT, we open doors to a world of opportunities in medical education, research, and healthcare careers, empowering you to make a difference..",
    },
    // Add more images here if needed
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change image, heading, and content every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 5000 ms = 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  // Change to the next image
  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Change to the previous image
  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <section
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${images[currentImageIndex].src})` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="absolute top-[85%] ">
          <button
            onClick={goToPreviousImage}
            className="absolute left-10 text-4xl w-30 h-30 border-none cursor-pointer p-2 rounded-customRoundedBtnPrevious  bg-white text-[#116e63]  hover:bg-heroBackground hover:text-black transition-all duration-300"
          >
            &#8592;
          </button>

          <button
            onClick={goToNextImage}
            className="absolute left-32 text-4xl w-30 h-30  bg-white text-[#116e63] border-none cursor-pointer p-2 rounded-customRoundedBtnNext hover:bg-heroBackground hover:text-black transition-all duration-300"
          >
            &#8594;
          </button>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 W-[60%]">
            {images[currentImageIndex].heading}
          </h1>
          <p className="text-lg mb-6">{images[currentImageIndex].content}</p>
          <div>
            <div className="flex gap-2 justify-center flex-wrap">
              <Link to="/about">
                <Button> ABOUT MORE</Button>
              </Link>
              <Link to="/contect">
                <Button style={{ backGround: "white" }}>Contact</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
   
    </>
  );
};

export default HeroSection;
