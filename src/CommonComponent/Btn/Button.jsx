import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative text-[18px] py-[14px] px-[20px] uppercase font-semibold tracking-wider cursor-pointer text-center rounded-customRoundedBtn overflow-hidden z-[1] text-white bg-orange-500 flex items-center justify-center gap-2
      transition-colors duration-300 ease-in-out hover:bg-customgreen"
    >
      <span className="relative z-[2] flex items-center gap-2">
        {children}
        <FaLongArrowAltRight />
      </span>
    </button>
  );
};

export default Button;
