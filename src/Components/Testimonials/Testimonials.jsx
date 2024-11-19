import React from "react";
import { FaBookOpenReader } from "react-icons/fa6";
import Slider from "react-slick";
import bgimg from "../../Assetes/Images/Testimonial/bg.jpg";
import TestimonialsCard from "./TestimonialsCard";
import { TestimonialsData } from "../../Data/TestimonialsData"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import "../Testimonials/Testimonials.Css"; 

const Testimonials = () => {
  const settings = {
    dots: true, 
    infinite: true,  // Ensures the slider loops infinitely
    speed: 500,  // Controls the speed of the slide transition (in ms)
    autoplay: true,  // Enable autoplay
    autoplaySpeed: 1000,  // Auto transition every 2 seconds
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,  // Remove left and right buttons
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      className="relative bg-no-repeat bg-cover bg-center text-white py-40"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(1,39,88,0.85)]"></div>

      {/* Content */}
      <div className="relative text-center z-10 px-4 md:px-0">
        <div className="flex justify-center items-center text-2xl gap-2 text-customGold">
          <h3 className="flex items-center justify-center text-2xl border-b-4 border-customGold gap-4 tracking-[4px] font-semibold">
            <FaBookOpenReader />
            Reviews
          </h3>
        </div>
        <h2 className="text-5xl font-bold my-4">
          What Our Students <span className="text-customGold">Say's</span>
        </h2>
        <div className="flex justify-center items-center">
          <p className="text-white text-lg md:max-w-[40%] font-semibold">
          Hear from our students about their experiences at <sapn className="text-customBlue font-bold">YASH CAMPUS</sapn> College and how it has shaped their journey toward a successful healthcare career.
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative z-10 gap-3  container">
        <Slider {...settings}>
          {TestimonialsData.map((testimonial) => (
            <TestimonialsCard
              key={testimonial.id}
              name={testimonial.studentName}
              description={testimonial.description}
              rating={testimonial.rating}
              img={testimonial.img}
              position={testimonial.position}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
