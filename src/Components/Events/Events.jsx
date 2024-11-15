// Events.js
import React from "react";
import { FaBookOpenReader } from "react-icons/fa6";
import EventCard from "./EventCard.jsx";
import img1 from "../../Assetes/Images/Gallery/img01.jpeg";
import img2 from "../../Assetes/Images/Gallery/img02.jpeg";
import img3 from "../../Assetes/Images/Gallery/img03.webp";
import img4 from "../../Assetes/Images/Gallery/img04.webp";
import { useNavigate } from "react-router-dom";

const eventData = [
  {
    location: "Surat",
    image: img1,
    date: "16 Jun 2024",
    time: "10:00 AM - 04:00 PM",
    title: "Event 1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    location: "Mumbai",
    image: img2,
    date: "20 Jul 2024",
    time: "09:00 AM - 03:00 PM",
    title: "Event 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    location: "Delhi",
    image: img3,
    date: "25 Aug 2024",
    time: "11:00 AM - 05:00 PM",
    title: "Event 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    location: "Bangalore",
    image: img4,
    date: "30 Sep 2024",
    time: "12:00 PM - 06:00 PM",
    title: "Event 4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    location: "Delhi",
    image: img3,
    date: "25 Aug 2024",
    time: "11:00 AM - 05:00 PM",
    title: "Event 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    location: "Bangalore",
    image: img4,
    date: "30 Sep 2024",
    time: "12:00 PM - 06:00 PM",
    title: "Event 4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const Events = () => {
  const navigate = useNavigate();

  const handleJoinEvent = (event) => {
    navigate("/joinEvent", { state: { selectedEvent: event } });
  };

  return (
    <section className="container" id="Events">
      <div className="text-center">
      <div className="flex justify-center items-center text-2xl gap-2 text-customOrange">
        <h3 className="flex items-center justify-center text-2xl border-b-4 border-customOrange gap-4 tracking-[4px] font-semibold">
            <FaBookOpenReader />
            Events
          </h3>
          </div>
        <h2 className="text-5xl font-bold my-4">
          Our Upcoming <span className="text-customOrange">Events</span>
        </h2>
        <p className="text-contentColor text-xl w-full md:max-w-[50%] font-semibold mx-auto">
          It is a long established fact that a reader will be distracted by
          the readable content of a page when looking at its layout.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 px-4">
        {eventData.map((event, index) => (
          <EventCard
            key={index}
            event={event}
            onJoinEvent={() => handleJoinEvent(event)}
          />
        ))}
      </div>
    </section>
  );
};

export default Events;
