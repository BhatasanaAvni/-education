import React from "react";
import TeacherCard from "./TeacherCard";
import TeacherData from "../../Data/TeacherData";

const AllTeachers = () => {
  return (
    <>

    <section className="container mx-auto px-4 py-28">
      <h2 className="text-center text-5xl font-bold my-4">
        All <span className="text-customOrange">Teachers</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
        {TeacherData.map((teacher) => (
            <TeacherCard key={teacher.id} {...teacher} />
        ))}
      </div>
    </section>
        </>
  );
};

export default AllTeachers;
