import React from "react";
import TeacherCard from "./TeacherCard";
import TeacherData from "../../Data/TeacherData";
import LabinchargeData from "../../Data/LabIncharge";
import LabinchargeCard from "../Labincharge/LabinchargeCard";  

const AllTeachers = () => {
  return (
    <>
      <section className="container mx-auto px-4 py-28" >
        <h2 className="text-center text-5xl font-bold my-4 text-customBlue">
          All <span className="text-customGold">Teachers</span>
        </h2>
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
