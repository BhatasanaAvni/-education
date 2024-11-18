import React from "react";
import { FaBookOpenReader } from "react-icons/fa6";
import Slider from "react-slick";

import DepartmentList from "./DepartmentList";
import DepartmentData from "../../Data/DepartmentData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Previous Arrow Button
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="slick-prev custom-arrow"
      style={{ position: "absolute", top: "50%", left: "-30px", zIndex: 1 }}
    >
      &lt;
    </button>
  );
};

// Custom Next Arrow Button
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="slick-next custom-arrow"
      style={{ position: "absolute", top: "50%", right: "-30px", zIndex: 1 }}
    >
      &gt;
    </button>
  );
};

const Department = () => {
  const settings = {
    dots: false, // Remove the dots by setting it to false
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    centerMode: true,
    centerPadding: "20px",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "20px", // Adjust space for medium screens
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "20px", // Adjust space for small screens
        },
      },
    ],
  };

  return (
    <section className="container overflow-x-hidden py-16" id="Department">
      <div className="text-center">
        <div className="flex justify-center items-center text-2xl gap-2 text-customGold">
          <h3 className="flex items-center text-2xl border-b-4 border-customGold gap-4 tracking-[4px] font-semibold">
            <FaBookOpenReader />
            Department
          </h3>
        </div>
        <h2 className="text-5xl font-bold my-4 text-customBlue">
          Browse Our <span className="text-customGold">Department</span>
        </h2>
        <div className="flex justify-center items-center">
          <p className="text-contentColor text-1xl w-full md:max-w-[50%] font-semibold">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
      </div>
      <div className="relative z-10 gap-3 container">
        <Slider {...settings}>
          {DepartmentData.map((department) => (
            <div key={department.id} className="px-3">
              {" "}
              {/* Add padding around each card */}
              <DepartmentList
                name={department.name}
                icon={department.icon}
                description={department.description}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Department;
