// EventCard.js
import React from "react";

import { GrGallery } from "react-icons/gr";
const EventCard = ({ event, onJoinEvent }) => {
  const { EventName, image, date, time, title, description } = event;

  return (
    <div className="bg-white rounded-customRoundedBtn p-5 shadow-md relative">
      <div className="flex justify-center items-center text-xl gap-2 text-customGold my-3">

        {EventName}
      </div>
      <img src={image} className="w-full rounded-customRoundedBtn " alt="Event" />
      {/* <div className="my-4">
        <div className="flex justify-center items-center text-lg gap-2 text-customBlue">
          <FaCalendarCheck />
          {date}
        </div>
        <hr className="h-1 bg-customGold mx-5 my-2" />
        <div className="flex justify-center items-center text-lg gap-2 text-customBlue">
          <FaClock />
          {time}
        </div>
      </div> */}
      {/* <h2 className="font-bold text-lg text-customBlue  ">{title}</h2> */}
      {/* <p className="my-2 text-contentColor">{description}</p> */}
      {/* <Button
        onClick={onJoinEvent}
        className="px-6 py-3 text-white font-bold rounded-md w-full"
      >
        Join Event
      </Button> */}

      <buttom
        onClick={onJoinEvent}
        className=" text-customBlue text-3xl font-bold rounded-customRoundedBtn absolute bottom-5 h-16 w-16 flex justify-center items-center bg-customGold"
      >
        <GrGallery />
      </buttom>

    </div>
  );
};

export default EventCard;
