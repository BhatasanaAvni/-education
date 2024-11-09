// Gallery.js
import React from "react";
import { FaBookOpenReader } from "react-icons/fa6";
import {
  img01,
  img02,
  img03,
  img04,
  img05,
  img06,
} from "../../Assetes/Images/Gallery/Gallery";

const Gallery = () => {
  const galleryImages = [img01, img02, img03, img04, img05, img06];

  // Array of different heights for each image
  const imageHeights = ["h-96", "h-56", "h-96", "h-56", "h-96", "h-56"];

  return (
    <section className="container  py-16 " id="Gallery">
      <div className="text-center">
        <div className="flex justify-center items-center text-2xl gap-2 text-customOrange">
          <h3 className="flex items-center justify-center text-2xl border-b-4 border-customOrange gap-4 tracking-[4px] font-semibold">
            <FaBookOpenReader />
            Gallery
          </h3>
        </div>
        <h2 className="text-5xl font-bold my-4">
          Our Photo <span className="text-customOrange">Gallery</span>
        </h2>
        <div className="flex justify-center items-center">
          <p className="text-contentColor text-xl w-full md:max-w-[50%] font-semibold">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        {/* Gallery Images with Varying Heights */}
        <div className=" flex flex-wrap justify-center gap-4 mt-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`w-full md:w-1/4 p-2 ${
                imageHeights[index % imageHeights.length]
              } ${index === 1 ? "mt-0 md:mt-[136px]" : ""}`}
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover shadow-lg rounded-customRoundedBtn  hover:bg-customgreen  hover:p-5 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
