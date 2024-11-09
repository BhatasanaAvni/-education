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
      title: "Office Address",
      text: "25/B Milford, New York, USA",
      link: "https://www.google.com/maps/search/?api=1&query=25+B+Milford,+New+York,+USA",
    },
    {
      icon: BiPhoneCall,
      title: "Call Us",
      text: "+2 123 4565 789",
      link: "tel:+21234565789",
    },
    {
      icon: MdMarkEmailRead,
      title: "Email Us",
      text: "info@example.com",
      link: "mailto:info@example.com",
    },
    {
      icon: GiClockwork,
      title: "Open Time",
      text: "Mon - Sat (10.00AM - 05.30PM)",
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
