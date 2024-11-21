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
      // description: "The Government of India has implemented the Post-Matric Scholarship Scheme for students belonging to Scheduled Castes (SC) and Scheduled Tribes (ST). Under this scheme, students can use the Free Ship Card to avail free education at any private college."
      description: "The Government of India’s Post-Matric Scholarship Scheme offers SC and ST students a Free Ship Card, allowing them to access free education at private colleges."
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
    },
    {
      icon: <FaUsers size={30} />,
      title: "Hostel Facility",
      number: "04",
      description: "Yash Campus offers safe, well-equipped hostels with 24/7 security, Wi-Fi, meals, and study spaces for a comfortable student experience."
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
