// src/components/CoursesCard.js
import React from "react";
import { IoMdBookmarks } from "react-icons/io";
import { FaStar, FaStarHalfAlt, FaLink } from "react-icons/fa";
import { CiClock1, CiBookmark } from "react-icons/ci";
import { MdGroups } from "react-icons/md";

const CoursesCard = ({ course }) => {
  const {
    image,
    title,
    description,
    lessons,
    rating,
    seats,
    duration,
    price,
    link,
    courseDepartment
  } = course;

  return (
    <>
      <div className="p-7 bg-white rounded-customRoundedBtn mt-5 relative">
        <div className="relative overflow-hidden rounded-customRoundedBtn w-full h-48">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
          />

          {/* Overlay with Icon Link */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 bg-black bg-opacity-50 rounded-customRoundedBtn">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-2xl p-3 rounded-full bg-customOrange hover:bg-white hover:text-customOrange transition-colors duration-300"
            >
              <FaLink />
            </a>
          </div>
        </div>
        <div className="flex items-center gap-5 mt-4">
          <div className="flex items-center gap-2">
            <IoMdBookmarks className="text-customOrange" />
            <h5 className="text-contentColor font-bold">{lessons}</h5>
          </div>
          <div className="flex items-center gap-1 text-customOrange">
            {[...Array(Math.floor(rating))].map((_, i) => (
              <FaStar key={i} />
            ))}
            {rating % 1 !== 0 && <FaStarHalfAlt />}
            <span className="text-contentColor ml-1">
              ({rating.toFixed(1)})
            </span>
          </div>
        </div>
        <h2 className="text-xl font-semibold mt-2">{title}</h2>
        <p className="text-gray-500 mt-2">{description}</p>
        <hr className="my-4" />
        <div className="flex justify-between items-center">
          <div className="flex gap-4 text-xl">
            <div className="flex items-center gap-1">
              <MdGroups />
              <span>{seats} Seats</span>
            </div>
            <div className="flex items-center gap-1">
              <CiClock1 />
              <span>{duration} Years</span>
            </div>
          </div>
          <div className="bg-customOrange p-2 text-white font-bold rounded-customRoundedBtn">
            <p>${price}</p>
          </div>
        </div>
        <div className="absolute right-1 top-12 bg-customOrange  text-white rounded-customRoundedBtn p-2 flex items-center gap-1 font-bold">
          <CiBookmark className="font-bold text-2xl"  />
          <p>{courseDepartment}</p>
        </div>
      </div>
    </>
  );
};

export default CoursesCard;