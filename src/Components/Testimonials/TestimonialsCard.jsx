import React from "react";

const TestimonialsCard = ({ name, description, rating, img, position }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-black max-w-sm w-full mt-32">
      <h3 className="font-bold text-xl mb-2">{name}</h3>
      <p className="text-sm">{description}</p>
      <div className="flex items-center justify-start gap-6 mt-5">
        <div className="p-2 border-dashed border-customOrange w-24 h-24 border-2 rounded-full relative">
          <img
            src={img}
            alt={name}
            className="w-20 h-20 rounded-full absolute bottom-0 right-0"
          />
        </div>
        <div>
          <h3>{name}</h3>
          <p>{position}</p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center mt-3">
        <p className="text-yellow-500 font-bold">{rating}</p>
        <span className="ml-2 text-sm">/ 5</span>
      </div>
    </div>
  );
};

export default TestimonialsCard;