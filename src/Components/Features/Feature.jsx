import React from "react";
import { useInView } from 'react-intersection-observer'; // Import the hook

const Feature = ({ icon, title, number, description }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div
      ref={ref}
      className={`flex-1 p-5 z-10 bg-customBlue md:flex-nowrap flex-wrap rounded-customRoundedBtn transform transition-transform duration-300 
        ${inView ? "hover:translate-y-[-20px]" : "translate-y-0 opacity-50"}`}  // Conditionally apply translate and opacity
      style={{ transition: "transform 0.3s ease-in-out" }}
    >
      <div className="flex items-center justify-between mb-4">
        <div
          className="p-5 bg-customGold text-CustomBlue rounded-full"
          style={{
            transition: "transform 0.3s ease-in-out",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "rotateY(360deg)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "rotateY(0deg)")
          }
        >
          {icon}
        </div>

        <h4 className="ml-2 text-7xl text-customGold">{number}</h4>
      </div>
      <h2 className="text-2xl mb-2 font-bold text-customGold">{title}</h2>
      <p className="text-white">{description}</p>
    </div>
  );
};

export default Feature;
