import React from "react";

const Feature = ({ icon, title, number, description }) => {
  return (
    <div className="flex-1  p-5 z-10 bg-white md:flex-nowrap flex-wrap rounded-customRoundedBtn">
      <div className="flex items-center justify-between mb-4">
        <div
          className="p-5 bg-customgreen text-white rounded-full "
          style={{
            transition: "transform 0.3s ease-in-out", // Add transition for smooth effect
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

        <h4 className="ml-2 text-7xl text-customgreen">{number}</h4>
      </div>
      <h2 className="text-2xl mb-2 font-bold">{title}</h2>
      <p className="">{description}</p>
    </div>
  );
};

export default Feature;
