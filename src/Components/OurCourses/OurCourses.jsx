import React from "react";
import { FaBookOpenReader } from "react-icons/fa6";
import CoursesCard from "./CoursesCard";
import coursesData from "../../Data/coursesData"
const OurCourses = () => {
  return (
    <section className="container" id="Courses">
      <div className="text-center">
        <div className="flex justify-center  items-center text-2xl gap-2 text-customOrange ">
          <h3 className="flex items-center justify-center text-2xl border-b-4 border-customOrange gap-4 tracking-[4px] font-semibold">
            <FaBookOpenReader />
            Our Courses
          </h3>
        </div>
        <h2 className="text-5xl font-bold my-4">
          Let's Check Our <span className="text-customOrange">Courses</span>{" "}
        </h2>
        <div className="flex justify-center items-center">

        <p className="text-contentColor text-1xl  w-full md:max-w-[40%] font-semibold
        ">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
          </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-14">
        {coursesData.map((course) => (
          <CoursesCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default OurCourses;
