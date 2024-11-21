import React from "react";

const ContactCard = ({ icon: Icon, title, text, link }) => {
  return (
    <div className="bg-white rounded-customRoundeImg flex flex-col items-center p-10 w-full h-full">
      <a href={link} target="_blank" rel="noopener noreferrer" className="bg-customBlue p-5 text-customGold text-5xl rounded-customRoundedBtnNext">
        <Icon />
      </a>
      <h2 className="text-xl mt-4 text-customBlue">{title}</h2>
      <p className="text-[15px] text-center mt-2 text-customBlue">{text}</p>
    </div>
  );
};

export default ContactCard;
