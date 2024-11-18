import React, { useState } from "react";
import Button from "../../CommonComponent/Btn/Button";
const eventData = [
    {
      location: "Surat",
      image: "img1",
      date: "16 Jun 2024",
      time: "10:00 AM - 04:00 PM",
      title: "Event 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      location: "Mumbai",
      image: "img2",
      date: "20 Jul 2024",
      time: "09:00 AM - 03:00 PM",
      title: "Event 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      location: "Delhi",
      image: "img3",
      date: "25 Aug 2024",
      time: "11:00 AM - 05:00 PM",
      title: "Event 3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      location: "Bangalore",
      image: "img4",
      date: "30 Sep 2024",
      time: "12:00 PM - 06:00 PM",
      title: "Event 4",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      location: "Delhi",
      image: "img3",
      date: "25 Aug 2024",
      time: "11:00 AM - 05:00 PM",
      title: "Event 3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      location: "Bangalore",
      image: "img4",
      date: "30 Sep 2024",
      time: "12:00 PM - 06:00 PM",
      title: "Event 4",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

const JoinEventForm = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    email: "",
    studentId: "",
    course: "",
    attendanceStatus: "Present",
    message: "",
    age: "",
    gender: "",
    dob: "",
    mobile: "",
    selectedEvent: "", // Added field for selected event
    eventType: "", 
  });

  // Calculate age based on date of birth
  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const ageDifMs = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  // Handle input changes and calculate age if dob changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      age: name === "dob" ? calculateAge(value) : prevState.age,
    }));
  };

  // Validate age (must be 18+)
  const isAgeValid = () => formData.age >= 18;

  // Validate mobile number format
  const isMobileValid = () => /^[0-9]{10}$/.test(formData.mobile);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validations
    if (!isAgeValid()) {
      alert("You must be at least 18 years old to attend.");
      return;
    }
    if (!isMobileValid()) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    // Save form data to localStorage
    const existingData = JSON.parse(localStorage.getItem("attendanceFormData")) || [];
    existingData.push(formData);
    localStorage.setItem("attendanceFormData", JSON.stringify(existingData));

    alert("Attendance recorded successfully!");

    // Clear the form after submission
    setFormData({
      studentName: "",
      email: "",
      studentId: "",
      course: "",
      attendanceStatus: "Present",
      message: "",
      age: "",
      gender: "",
      dob: "",
      mobile: "",
      selectedEvent: "", // Added field for selected event
      eventType: "", 
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-md shadow-md  my-32">
      <h2 className="text-3xl font-bold text-center mb-6 text-customGold">
        Student Event Attendance
      </h2>
      <form onSubmit={handleSubmit}>
        {/* Existing form fields */}
        <div className="mb-4">
          <label htmlFor="studentName" className="block text-lg font-medium mb-2">Student Name</label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            value={formData.studentName}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-customGold"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium mb-2">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-customGold"
          />
        </div>

        {/* New fields for Age, Gender, Date of Birth, Mobile */}
        <div className="mb-4">
          <label htmlFor="dob" className="block text-lg font-medium mb-2">Date of Birth</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-customGold"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="age" className="block text-lg font-medium mb-2">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            readOnly
            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-gray-100"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="gender" className="block text-lg font-medium mb-2">Gender</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-customGold"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="mobile" className="block text-lg font-medium mb-2">Mobile Number</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-customGold"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="selectedEvent" className="block text-lg font-medium mb-2">Select Event</label>
          <select
            id="selectedEvent"
            name="selectedEvent"
            value={formData.selectedEvent}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-customGold"
          >
            <option value="">Choose an Event</option>
            {eventData.map((event, index) => (
              <option key={index} value={event.title}>
                {event.title}
              </option>
            ))}
          </select>
        </div>

        {/* New Event Type Dropdown */}
        <div className="mb-4">
          <label htmlFor="eventType" className="block text-lg font-medium mb-2">Event Type</label>
          <select
            id="eventType"
            name="eventType"
            value={formData.eventType}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-customGold"
          >
            <option value="">Select Event Type</option>
            <option value="Workshop">Workshop</option>
            <option value="Seminar">Seminar</option>
            <option value="Competition">Competition</option>
          </select>
        </div>

        {/* Existing form fields */}
       

        <div className="flex justify-center ">
          <Button
            type="submit"
           
          >
            Submit Attendance
          </Button>
        </div>
      </form>
    </div>
  );
};

export default JoinEventForm;
