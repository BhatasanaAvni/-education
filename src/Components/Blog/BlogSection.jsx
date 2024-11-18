import React from "react";
import { FaBookOpenReader } from "react-icons/fa6";
import BlogCard from "./BlogCard.jsx";
import BlogData from "../../Data/BlogData.js"

const BlogSection = () => {
  return (
    <section className="container py-16" id="Blog">
      <div className="text-center">
        <div className="flex justify-center  items-center text-2xl gap-2 text-customGold ">
          <h3 className="flex items-center justify-center text-2xl border-b-4 border-customGold gap-4 tracking-[4px] font-semibold">
            <FaBookOpenReader />
            Our Blog
          </h3>
        </div>
        <h2 className="text-5xl font-bold my-4">
        Latest News & <span className="text-customGold">Blog
        </span>{" "}
        </h2>
        <div className="flex justify-center items-center">

        <p className="text-contentColor text-1xl  w-full md:max-w-[50%] font-semibold
        ">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>
          </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-14">
        {BlogData.map((Blog) => (
          <BlogCard key={Blog.id} Blog={Blog} />
        ))}
      </div>
    </section>
  )
}

export default BlogSection