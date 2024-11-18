import React, { useState } from "react";
import { FaBookOpenReader } from "react-icons/fa6";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "react-accessible-accordion/dist/fancy-example.css"; // Optional default styles
import DepartmentData from "../../Data/DepartmentData";

const Department = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  if (!DepartmentData || DepartmentData.length === 0) {
    return (
      <section className="container py-16 text-center">
        <h2 className="text-2xl text-customBlue">No Departments Available</h2>
      </section>
    );
  }

  // Split data into two halves
  const leftSideData = DepartmentData.slice(0, 3);
  const rightSideData = DepartmentData.slice(3, 6);

  return (
    <section className="container overflow-x-hidden py-16" id="Department">
      <div className="text-center">
        <div className="flex justify-center items-center text-2xl gap-2 text-customGold">
          <h3 className="flex items-center text-2xl border-b-4 border-customGold gap-4 tracking-[4px] font-semibold">
            <FaBookOpenReader />
            Department
          </h3>
        </div>
        <h2 className="text-5xl font-bold my-4 text-customBlue">
          Browse Our <span className="text-customGold">Department</span>
        </h2>
        <div className="flex justify-center items-center">
          <p className="text-contentColor text-1xl w-full md:max-w-[50%] font-semibold">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
      </div>
      <div className="relative z-10 container grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Side Accordion */}
        <div>
          <Accordion allowZeroExpanded>
            {leftSideData.map((department, index) => (
              <AccordionItem key={department.id}>
                <AccordionItemHeading>
                  <AccordionItemButton
                    onClick={() => handleAccordionToggle(index)}
                    className="flex items-center justify-between text-lg font-bold bg-customBlue text-white p-4 rounded-md hover:bg-customGreen transition"
                  >
                    <div className="flex items-center gap-2">
                      {department.icon}
                      {department.name}
                    </div>
                    {activeIndex === index ? (
                      <FaChevronUp className="text-white" />
                    ) : (
                      <FaChevronDown className="text-white" />
                    )}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="bg-gray-100 p-4 rounded-md mt-2 text-contentColor">
                  {department.description}
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        {/* Right Side Accordion */}
        <div>
          <Accordion allowZeroExpanded>
            {rightSideData.map((department, index) => (
              <AccordionItem key={department.id}>
                <AccordionItemHeading>
                  <AccordionItemButton
                    onClick={() => handleAccordionToggle(index + 3)}
                    className="flex items-center justify-between text-lg font-bold bg-customBlue text-white p-4 rounded-md hover:bg-customGreen transition"
                  >
                    <div className="flex items-center gap-2">
                      {department.icon}
                      {department.name}
                    </div>
                    {activeIndex === index + 3 ? (
                      <FaChevronUp className="text-white" />
                    ) : (
                      <FaChevronDown className="text-white" />
                    )}
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="bg-gray-100 p-4 rounded-md mt-2 text-contentColor">
                  {department.description}
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Department;
