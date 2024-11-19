import React from "react";
import { FaBookOpenReader } from "react-icons/fa6";
import CoursesCard from "./CoursesCard";
import coursesData from "../../Data/coursesData";
import { useInView } from 'react-intersection-observer';

const OurCourses = () => {
  // Using IntersectionObserver to track when the courses grid is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.2, // Trigger when 20% of the component is in the viewport
  });

  return (
    <section className="container" id="Courses">
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-start items-center text-2xl gap-2 text-customGold">
          <h3 className="flex items-center justify-start text-2xl border-b-4 border-customGold gap-4 tracking-[4px] font-semibold">
            <FaBookOpenReader />
            Our Courses
          </h3>
        </div>
        <h2 className="text-5xl font-bold my-4 text-customBlue text-center">
          Let's Check Our <span className="text-customGold">Courses</span>
        </h2>
        <div className="flex justify-center  items-center">
          <p className="text-contentColor text-xl w-full md:max-w-[70%]  text-center">
          <sapn className="text-customBlue font-bold">YASH CAMPUS</sapn> College offers specialized programs in General Nursing and Midwifery (GNM) and Auxiliary Nurse Midwifery (ANM), designed to equip students with the knowledge and skills needed for a successful career in healthcare.
          </p>
        </div>
      </div>

      {/* Grid layout for courses */}
      <div
        ref={ref} 
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 my-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        {coursesData.map((course) => (
          <CoursesCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
};

export default OurCourses;
