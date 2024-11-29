// src/Data/coursesData.js
import { Course1, Course2 } from "../Assetes/Images/Course/Course";
import ANM  from "../Assetes/pdfs/ANM.PDF"
import GNM from "../Assetes/pdfs/GNM.PDF"

const coursesData = [
  {
    id: 1,
    image: Course1,
    title: "General Nursing and Midwifery (GNM)",
    description:
      "General Nursing and Midwifery (GNM) is a paramedical diploma course that combines the care of patients in all settings with the care of women during pregnancy, childbirth, and postpartum.",
    lessons: "10 Lessons",
    rating: 4.0,
    seats: 60,
    duration: 3,
    price: 750,
    link: "",
    pdf: GNM, // Use relative path for PDF
    courseDepartment: "GNM",
  },
  {
    id: 2,
    image: Course2,
    title: "Auxiliary Nurse Midwifery (ANM)",
    description:
      "ANM-related work includes maternal and child health along with family planning services, health and nutrition education, efforts for maintaining environmental sanitation, immunisation for the control of communicable diseases, treatment of minor injuries, and first aid in emergencies and disasters.",
    lessons: "8 Lessons",
    rating: 4.5,
    seats: 60,
    duration: 2,
    price: 500,
    link: "",
    pdf: ANM, // Use relative path for PDF
    courseDepartment: "ANM",
  },
];

export default coursesData;
