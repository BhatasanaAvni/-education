import React from "react";
import { Link } from "react-router-dom";
import { BiSolidMessageSquareDetail } from "react-icons/bi";

function FloatingButton() {
  return (
    <div className="fixed top-1/2 left-0 transform -translate-y-1/2 z-50">
      <Link to="/contact">
        <button
          className="bg-customGold p-2 text-2xl py-[10px] px-[15px] uppercase font-semibold tracking-wider cursor-pointer text-center rounded-customRoundedBtn overflow-hidden z-[1] text-customBlue hover:text-white flex items-center justify-center gap-2
            transition-colors duration-300 ease-in-out hover:bg-customBlue"
        >
          <BiSolidMessageSquareDetail />
        </button>
      </Link>
    </div>
  );
}

export default FloatingButton;
