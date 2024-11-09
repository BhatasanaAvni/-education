// EventCard.js
import React from "react";
import { FaCalendarCheck, FaClock, FaLocationDot } from "react-icons/fa6";
import Button from "../../CommonComponent/Btn/Button";

const EventCard = ({ event, onJoinEvent }) => {
  const { location, image, date, time, title, description } = event;

  return (
    <div className="bg-white rounded-customRoundedBtn p-5 shadow-md">
      <div className="flex justify-center items-center text-xl gap-2 text-customOrange my-3">
        <FaLocationDot />
        {location}
      </div>
      <img src={image} className="w-full rounded-customRoundedBtn" alt="Event" />
      <div className="my-4">
        <div className="flex justify-center items-center text-lg gap-2">
          <FaCalendarCheck />
          {date}
        </div>
        <hr className="h-1 bg-customgreen mx-5 my-2" />
        <div className="flex justify-center items-center text-lg gap-2">
          <FaClock />
          {time}
        </div>
      </div>
      <h2 className="font-bold text-lg">{title}</h2>
      <p className="my-2 text-contentColor">{description}</p>
      <Button
        onClick={onJoinEvent}
        className="px-6 py-3 bg-customOrange text-white font-bold rounded-md w-full"
      >
        Join Event
      </Button>
    </div>
  );
};

export default EventCard;
