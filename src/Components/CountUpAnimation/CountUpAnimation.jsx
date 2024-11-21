import React from "react";
import CountUp from "react-countup";
import parallexImg from "../../Assetes/Images/CountUp/bg.jpeg";
import "./CountUpAnimation.css";
import { GiBookmarklet } from "react-icons/gi";
import { PiStudentBold } from "react-icons/pi";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaAward } from "react-icons/fa";
import { useInView } from 'react-intersection-observer'; // Import the hook

const CountUpAnimation = () => {
  const counters = [
    { target:2, label: "Total Courses", icon: <GiBookmarklet /> },
    { target: 10000 , label: "Our Students", icon: <PiStudentBold /> },
    { target:199 , label: "Skilled Lecturers", icon: <HiMiniUserGroup /> },
    { target: 4 , label: "Win Awards", icon: <FaAward /> },
  ];

  // Define inView hook for the counter section
  const { ref, inView } = useInView({
    triggerOnce: true,  // Trigger only once when the section comes into view
    threshold: 0.5,     // Trigger when 50% of the section is visible
  });

  return (
    <section
      className="py-16 my-14 bg-cover bg-center relative overflow-hidden cta-bg parallax"
      style={{ backgroundImage: `url(${parallexImg})` }}
    >
      <div className="absolute inset-0 bg-customBlue opacity-80 z-10"></div>
      <div className="container relative z-20">
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-700 ${inView ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"}`}
          id="counter"
          ref={ref} // Attach the counter section to the intersection observer
        >
          {counters.map((counter, index) => (
            <div className="text-center my-3" key={index}>
              <div className="flex items-center flex-col justify-start counter-content">
                <div className="relative flex-shrink-0 p-5 opacity-100 rounded-customRoundedBtnNext bg-customGold text-6xl  icon group">
                  <div className="absolute inset-0 border-2 p-14 rounded-customRoundedBtnNext opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
                  <div className="relative z-10">{counter.icon}</div>
                </div>
                <div className="flex-grow-1 mt-6">
                  <h1 className="text-white text-6xl">
                    <CountUp
                      start={0}
                      end={counter.target}
                      duration={2.75}
                      separator=","
                      suffix="+" 
                    />
                  </h1>
                  <p className="text-white uppercase mt-4 font-bold text-42l">
                    {counter.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountUpAnimation;
