import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBookOpenReader } from "react-icons/fa6";
import TeacherCard from "./TeacherCard";
import TeacherData from "../../Data/TeacherData";
import Button from "../../CommonComponent/Btn/Button";
import { useInView } from "react-intersection-observer"; // Import the hook

const Teachers = () => {
  const navigate = useNavigate();

  const handleMoreTeachers = () => {
    navigate("/all-teachers");
  };

  // Intersection observer for the section
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section
      ref={sectionRef} // Apply intersection observer to the section
      className={`container mx-auto px-4 py-8 transition-all duration-700 ease-in-out ${
        sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="text-center">
        <div className="flex justify-center items-center text-2xl gap-2 text-customGold">
          <h3 className="flex items-center justify-center text-2xl border-b-4 border-customGold gap-4 tracking-[4px] font-semibold">
            <FaBookOpenReader />
            Our Teachers
          </h3>
        </div>
        <h2 className="text-5xl font-bold my-4 text-customBlue">
          Meet With Our <span className="text-customGold">Teachers</span>
        </h2>
        <p className="text-contentColor w-full md:max-w-[40%] mx-auto">
          Meet the experienced and dedicated educators at{" "}
          <span className="text-customBlue font-bold">YASH CAMPUS</span> College,
          who are committed to guiding and mentoring students to achieve academic and professional excellence.
        </p>

        {/* Teacher Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          {TeacherData.slice(0, 4).map((teacher, index) => (
            <TeacherCardWithAnimation key={teacher.id} teacher={teacher} index={index} />
          ))}
        </div>

        <div className="flex items-center justify-center mt-8">
          <Button onClick={handleMoreTeachers} className="mt-8">
            MORE FACULTY
          </Button>
        </div>
      </div>
    </section>
  );
};

// Separate component for handling the card animation
const TeacherCardWithAnimation = ({ teacher, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      ref={ref} // Attach to intersection observer
      className={`transition-all duration-700 ease-in-out ${
        inView
          ? `opacity-100 translate-y-0 delay-[${index * 200}ms]` // Delay for each card
          : "opacity-0 translate-y-10"
      }`}
    >
      <TeacherCard {...teacher} />
    </div>
  );
};

export default Teachers;
