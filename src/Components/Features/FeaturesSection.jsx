import React from "react";
import { useInView } from 'react-intersection-observer'; // Import the hook
import Feature from "./Feature";
import { FaGraduationCap, FaMoneyBillWave, FaBook, FaUsers } from "react-icons/fa";

const FeaturesSection = () => {
  const featuresData = [
    {
      icon: <FaGraduationCap size={30} />,
      title: "Scholarship Facility",
      number: "01",
      description: "It is a long established fact that a reader will be distracted."
    },
    {
      icon: <FaBook size={30} />,
      title: "Courses Offered",
      number: "02",
      description: "Our wide range of courses can help you achieve your goals."
    },
    {
      icon: <FaUsers size={30} />,
      title: "Student Support",
      number: "03",
      description: "We offer continuous support to our students throughout their journey."
    }
  ];

  return (
    <div className="mx-auto mt-10">
      <div
        className="flex justify-between gap-5 flex-wrap ml-[0] sm:ml-[35%]"
        style={{ marginTop: "-8%" }}
      >
        {featuresData.map((feature, index) => (
          <Feature
            key={index}
            icon={feature.icon}
            title={feature.title}
            number={feature.number}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
