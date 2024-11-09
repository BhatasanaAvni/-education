import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBookOpenReader } from "react-icons/fa6";
import TeacherCard from "./TeacherCard";
import TeacherData from "../../Data/TeacherData";
import Button from "../../CommonComponent/Btn/Button";
const Teachers = () => {
  const navigate = useNavigate();

  const handleMoreTeachers = () => {
    navigate("/all-teachers");
  };

  return (
    <section className="container mx-auto px-4 py-8" id="Teachers">
      <div className="text-center">
        <div className="flex justify-center items-center text-2xl gap-2 text-customOrange">
          <h3 className="flex items-center justify-center text-2xl border-b-4 border-customOrange gap-4 tracking-[4px] font-semibold">
            <FaBookOpenReader />
            Our Teachers
          </h3>
        </div>
        <h2 className="text-5xl font-bold my-4">
          Meet With Our <span className="text-customOrange">Teachers</span>
        </h2>
        <p className="text-contentColor w-full md:max-w-[40%] mx-auto">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          {TeacherData.slice(0, 4).map((teacher) => (
            <TeacherCard key={teacher.id} {...teacher} />
          ))}
        </div>
        <div className="flex items-center justify-center mt-8">

        <Button onClick={handleMoreTeachers} className="mt-8 ">
       MORE FACULTY
        </Button>
        </div>
      </div>
    </section>
  );
};

export default Teachers;
