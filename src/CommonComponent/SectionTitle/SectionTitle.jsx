// SectionTitle.js
import React from "react";
import { FaBookOpenReader } from "react-icons/fa6";

const SectionTitle = ({ h3Title, h2Title, pContent }) => {
  return (
    <section>
      <div className="text-center">
        <SectionTitle
          h3Title="Events"
          h2Title={
            <>
              Our Upcoming <span className="text-customOrange">Events</span>
            </>
          }
          pContent="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        />
      </div>
    </section>
  );
};

export default SectionTitle;
