import React from "react";
import TeacherCard from "./TeacherCard";
import TeacherData from "../../Data/TeacherData";
import LabinchargeData from "../../Data/LabIncharge";
import LabinchargeCard from "../Labincharge/LabinchargeCard";  
import bg from "../../Assetes/Images/contectbg.jpeg"
const AllTeachers = () => {
  return (
    <>
    <section
      className="relative w-full h-[600px] bg-cover bg-center" // Set the height to a custom value like 400px
      style={{ backgroundImage: `url(${bg})`, backgroundPosition: "center" }} // Ensures the image is centered
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>
      <h1 className="relative flex justify-center flex-col items-center top-[50%] z-10 text-white text-4xl font-semibold uppercase">
      our faculties
     
      </h1>
     
    </section>
      <section className="container mx-auto px-4 py-28" >
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          {TeacherData.map((teacher) => (
            <TeacherCard
             key={teacher.id} {...teacher} />
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <h2 className="text-center text-5xl font-bold my-4 text-customBlue ">
        Lab Incharge <span className="text-customGold">Details</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          {LabinchargeData.map((labIncharge) => (
            <LabinchargeCard key={labIncharge.id} {...labIncharge} />
          ))}
        </div>
      </section>
    </>
  );
};

export default AllTeachers;
