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
      description: "Yash Campus College offers scholarships to support talented and deserving students. Unlock your potential with financial assistance for a brighter future."
    },
    {
      icon: <FaBook size={30} />,
      title: "Courses Offered",
      number: "02",
      description: "Yash Campus College offers a variety of programs, including undergraduate, postgraduate, professional courses, and skill-based diplomas, to shape your future."
    },
    {
      icon: <FaUsers size={30} />,
      title: "Student Support",
      number: "03",
      description: "Yash Campus College offers complete support through academic counseling, career guidance, and extracurricular activities, ensuring every student’s success."
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
