import React from "react";

const TestimonialsCard = ({ name, description, rating, img, position,Coures }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-black max-w-sm w-full mt-32">
      <h3 className="font-bold text-xl mb-2 text-customBlue">{name}</h3>
      <p className="text-sm  text-contentColor">{description}</p>
      <div className="flex items-center justify-start gap-6 mt-5 ">
        <div className="p-2 border-dashed border-customBlue w-28 h-28 border-2 rounded-full relative">
          <img
            src={img}
            alt={name}
            className="w-24 h-24 rounded-full absolute border-2 border top-3 border-customBlue right-0"
          />
        </div>
        <div>
          {/* <h3 className="text-customGold">{name}</h3> */}
          <p className="text-customGold">{position} </p>
          <p><span>{Coures}</span></p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center mt-3">
        <p className="text-customGold font-bold">{rating}</p>
        <span className="ml-2 text-sm">/ 5</span>
      </div>
    </div>
  );
};

export default TestimonialsCard;
