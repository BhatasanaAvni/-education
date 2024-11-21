import React from 'react';

const LabinchargeCard = ({
  profileImage,
  name,
  teacherPosition,
  Experience,
  Education,
  facebook,
  instagram,
  whatsapp,
  phone,
}) => {
  return (
    <div className="p-7 bg-white rounded-customRoundedBtn relative overflow-hidden group transform transition-transform duration-300 hover:translate-y-[-10px] h-[350px]">
      <div className="relative w-full h-48 overflow-hidden rounded-customRoundedBtn">
        <img
          src={profileImage}
          alt={name}
          className="w-full  object-cover transition-transform duration-300 transform group-hover:scale-110"
        />
      </div>
      <div className="mt-1 text-center">
        <h4 className="text-xl font-bold text-customBlue">{name}</h4>
        <p className="text-lg text-contentColor pt-3"><span className="text-black">POSITION:</span><br/> {teacherPosition}</p>
        {/* <p className="text-lg text-contentColor">{Experience}</p> */}
        {/* <p className="text-lg text-contentColor">{Education}</p> */}
      </div>
    </div>
  );
};

export default LabinchargeCard;
