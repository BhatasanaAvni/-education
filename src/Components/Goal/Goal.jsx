
import React from "react";
import bgimg from "../../Assetes/Images/Goal/01.png";
import goalimg from "../../Assetes/Images/Goal/goal.jpg";
import { FaBookOpenReader } from "react-icons/fa6";
import { goalCards } from "../../Data/GoalData";

const Goal = () => {
  return (
    <section
      className="relative bg-no-repeat bg-cover bg-center text-white py-40"
      style={{ backgroundImage: `url(${bgimg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(1,39,88,0.85)]"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto flex flex-wrap  justify-center items-center px-4 md:px-0 md:gap-28">
        {/* Text Content - 50% Width */}
        <div className="w-full md:w-[40%] px-4 md:px-0 mb-8 md:mb-0">
          <div className="flex items-center text-2xl gap-2 text-customOrange">
            <h3 className="flex items-center text-2xl border-b-4 border-customOrange gap-4 tracking-[4px] font-semibold">
              <FaBookOpenReader />
              Why Choose Us
            </h3>
          </div>
          <h2 className="text-5xl font-bold my-10">
            We Are Expert &{" "}
            <span className="text-customOrange">Do Our Best</span> For Your Goal
          </h2>
          <p className="text-white text-lg font-semibold mb-3">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>

          {/* Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
            {goalCards.map((card, index) => (
              <div key={index} className="flex items-center border-2 rounded-customRoundedBtn bg-white p-4 gap-3 mt-6">
                <div className="h-20 w-20 bg-customOrange rounded-customRoundedBtn flex justify-center items-center text-4xl text-white">
                  {card.icon}
                </div>
                <div className="text-customOrange">
                  <h2 className="text-xl font-bold">{card.title}</h2>
                  <p className="text-base">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-[40%] relative group p-4 md:px-0 ">
          <div
            className="absolute inset-0 border-4 top-12 right-11 -left-5 bottom-0 border-customOrange transition-all duration-300 group-hover:opacity-0"
            style={{ borderRadius: "30% 0 30% 30%", zIndex: 1 }}
          ></div>
          <img
            src={goalimg}
            alt="Goal Image"
            className="relative transition-transform duration-300 group-hover:scale-110 border-t-[20px] border-customOrange"
            style={{
              borderRadius: "30% 0 30% 30%",
              width: "100%", // Ensures it occupies the full width of its container
              height: "auto",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Goal;
