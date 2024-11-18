// import React from "react";
// import Spinner from 'react-bootstrap/Spinner';

// const DepartmentList = ({ name, icon, description }) => {
//   return (
//     <div className="group rounded-customRoundedBtn border-b-8 border-customGold bg-white relative p-10 my-28 hover:border-customGreen">
//       {/* Orange Circle with Border */}
//       {/* <div className="absolute h-20 w-20 bg-white border-4 border-customLightGold group-hover:border-customGold right-0 top-0 rounded-full shadow-md group-hover:shadow-lg flex justify-center items-center">
//         {/* <Spinner animation="border" variant="danger" size="sm" /> */}
//       {/* </div> */} 

//       {/* Icon and Department Details */}
//       {/* <p className="text-customGold">{icon}</p> */}
//       <h3 className="text-2xl hover:text-customGold group-hover:text-customGold mt-5 w-4/6">{name}</h3>
//       <p className="text-contentColor mt-5">{description}</p>
//     </div>
//   );
// };

// export default DepartmentList;


import React from "react";
import Accordion from "react-bootstrap/Accordion";

const DepartmentList = ({ departments }) => {
  return (
    <Accordion className="my-4">
      {departments.map((department, index) => (
        <Accordion.Item eventKey={index.toString()} key={index} className="border-customGold my-3 ">
          <Accordion.Header className="text-2xl text-customGreen">
            {department.name}
          </Accordion.Header>
          <Accordion.Body className="text-contentColor">
            {/* Icon */}
            <div className="text-customGold">{department.icon}</div>
            {/* Description */}
            <p className="mt-3">{department.description}</p>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default DepartmentList;
