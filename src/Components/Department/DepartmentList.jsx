


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
