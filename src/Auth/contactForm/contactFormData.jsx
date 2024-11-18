import React from "react";
import { MdOutlineLocationCity } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { MdMarkEmailRead } from "react-icons/md";
import { GiClockwork } from "react-icons/gi";
import ContactCard from "./ContactCard ";

const ContactFormData = () => {
  const contactData = [
    {
      icon: MdOutlineLocationCity,
      title: "Address",
      text: "Mahuwash, Sara Rd, Vansda, Gujarat 396580",
      link:"https://maps.app.goo.gl/7tMDbFZNhPp1g1U98",
    },

    {
      icon: BiPhoneCall,
      title: "Call Us",
      text: "+91 98987 87875",
      link: "tel:+98987 87875",
    },
    {
      icon: MdMarkEmailRead,
      title: "Email Us",
      text: "info@yashcampus.in",
      link: "mailto:info@yashcampus.in",
    },
    {
      icon: GiClockwork,
      title: "Open Time",
      text: "Mon - Sat (09.00AM - 06.00PM)",
      link: "#",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 my-20">
      {contactData.map((item, index) => (
        <ContactCard
          key={index}
          icon={item.icon}
          title={item.title}
          text={item.text}
          link={item.link}
        />
      ))}
    </div>
  );
};

export default ContactFormData;

