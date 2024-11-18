import React from "react";
import { IoMdBookmarks } from "react-icons/io";
import { FaRegComments } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import Button from "../../CommonComponent/Btn/Button";
import { Link } from "react-router-dom";

const BlogCard = ({ Blog }) => {
  const { image, title, description, Name, Comments, Date, link } = Blog;

  return (
    <>
      <div className="p-7 bg-white rounded-customRoundedBtn mt-5 relative">
        <div className="relative overflow-hidden rounded-customRoundedBtn w-full h-48">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
          />

          {/* Overlay with Icon Link */}
          <div className=" flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-customRoundedBtn">
            {/* Optionally add icons here if needed */}
          </div>
        </div>

        <div className="flex items-center gap-5 mt-4">
          <div>
            <div className="flex items-center gap-2 text-xl  group hover:text-customBlue">
              <IoMdBookmarks className= " group-hover:text-customGold transition-colors duration-300 text-customBlue" />
              <h5 className=" font-bold group-hover:text-customGold transition-colors duration-300 text-customBlue">
                {Name}
              </h5>
            </div>

            <div className="flex items-center gap-2 text-xl group hover:text-customOrange">
              <FaRegComments className="group-hover:text-customGold transition-colors duration-300 text-customBlue" />
              <h5 className=" font-bold group-hover:text-customGold transition-colors duration-300 text-customBlue">
                {Comments}
              </h5>
            </div>
          </div>
        </div>

        <hr className="my-4" />
        <div className="group">
          <p className="mt-2 text-[18px] group-hover:text-customGold   transition-colors duration-300 ">
            {description}
          </p>
        </div>

        <div className="flex justify-between items-center mt-9">
          <Link to="/blog">
            <Button>READ MORE</Button>
          </Link>
        </div>

        <div className="absolute right-1 top-12 bg-customBlue text-white rounded-customRoundedBtn p-2 flex items-center gap-2 font-bold">
          <SlCalender className="font-bold text-2xl" />
          <p>{Date}</p>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
