import React from "react";

const ContactCard = ({ icon: Icon, title, text, link }) => {
  return (
    <div className="bg-white rounded-customRoundeImg flex flex-col items-center p-10 w-full h-full">
      <a href={link} target="_blank" rel="noopener noreferrer" className="bg-customgreen p-5 text-white text-5xl rounded-customRoundedBtnNext">
        <Icon />
      </a>
      <h2 className="text-xl mt-4">{title}</h2>
      <p className="text-xs text-center mt-2">{text}</p>
    </div>
  );
};

export default ContactCard;
