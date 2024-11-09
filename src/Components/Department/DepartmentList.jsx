import React from "react";
import Spinner from 'react-bootstrap/Spinner';

const DepartmentList = ({ name, icon, description }) => {
  return (
    <div className="group rounded-customRoundedBtn border-b-8 border-customOrange bg-white relative p-10 my-28 hover:border-customGreen">
      {/* Orange Circle with Border */}
      <div className="absolute h-20 w-20 bg-white border-4 border-orange-200 group-hover:border-customOrange right-0 top-0 rounded-full shadow-md group-hover:shadow-lg flex justify-center items-center">
        <Spinner animation="border" variant="danger" size="sm" />
      </div>

      {/* Icon and Department Details */}
      <p className="text-customOrange">{icon}</p>
      <h3 className="text-2xl hover:text-customOrange group-hover:text-customOrange mt-5 w-4/6">{name}</h3>
      <p className="text-contentColor mt-5">{description}</p>
    </div>
  );
};

export default DepartmentList;
