import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const TeacherCard = ({
  profileImage,
  name,
  teacherPosition,
  facebook,
  instagram,
  whatsapp,
  phone,
  className,
}) => {
  return (
    <div
      className={`p-7 bg-white rounded-customRoundedBtn relative overflow-hidden group transform transition-transform duration-300 hover:translate-y-[-10px] ${className} h-[300px]`}
    >
      <div className="relative w-full h-48 overflow-hidden rounded-customRoundedBtn">
        <img
          src={profileImage}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 transform group-hover:scale-110"
        />
      </div>
      <div className="mt-4 text-center">
        <h4 className="text-xl font-bold">{name}</h4>
        <p className="text-lg text-contentColor">{teacherPosition}</p>
      </div>
      <div className="absolute bottom-0 bg-customgreen p-1 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-customRoundedBtn">
        <div className="flex flex-col gap-4">
          <a
            href={facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl p-3 rounded-full bg-customOrange hover:bg-white hover:text-customOrange transition-colors duration-300"
          >
            <FaFacebook />
          </a>
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl p-3 rounded-full bg-customOrange hover:bg-white hover:text-customOrange transition-colors duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-3xl p-3 rounded-full bg-customOrange hover:bg-white hover:text-customOrange transition-colors duration-300"
          >
            <FaWhatsapp />
          </a>
          <a
            href={`tel:${phone}`}
            className="text-white text-3xl p-3 rounded-full bg-customOrange hover:bg-white hover:text-customOrange transition-colors duration-300"
          >
            <FaPhoneAlt />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
