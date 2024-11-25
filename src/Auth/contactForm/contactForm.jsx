// import React, { useState, useEffect } from 'react';
// import FormImg from "../../Assetes/Images/FormImg.jpg";
// import Button from "../../CommonComponent/Btn/Button"
// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//     setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
//   };

//   const validate = () => {
//     let newErrors = {};
//     if (!formData.name.trim()) newErrors.name = "Name is required";
//     if (!formData.email.includes('@')) newErrors.email = "Valid email is required";
//     if (!formData.subject.trim()) newErrors.subject = "Subject is required";
//     if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
//     if (!formData.number.trim()) newErrors.number = "Mobile Number is required";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       localStorage.setItem('contactData', JSON.stringify(formData));
//       setSubmitted(true);
//     }
//   };

//   useEffect(() => {
//     if (submitted) {
//       const timer = setTimeout(() => setSubmitted(false), 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [submitted]);

//   return (
//     <div className="flex flex-col md:flex-row gap-10 p-6 my-32 bg-gray-50 rounded-md shadow-lg max-w-4xl mx-auto" id="Contact">
//       {/* Image Section on Left */}
//       <div className="w-full md:w-1/2 flex justify-center md:justify-start relative">
//         <img src={FormImg} alt="Contact" className="shadow-md w-full md:w-11/12 h-auto object-cover border-b-8 border-t-8 border-customGold rounded-customRoundeImg " />
//       </div>

//       {/* Form Section on Right */}
//       <form onSubmit={handleSubmit} className="w-full md:w-1/2 flex flex-col gap-4 justify-center">
//         <h2 className="text-2xl font-bold text-gray-800 text-left">Get In Touch</h2>
//         <p className="text-gray-600 mb-4 text-left">
//           Feel free to reach out to us by filling out the form below.
//         </p>
        
//         {/* Name Input */}
//         <label className="text-gray-700">Name</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           className={`p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md`}
//         />
//         {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}

//         {/* Email Input */}
//         <label className="text-gray-700">Email</label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           className={`p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md`}
//         />
//         {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}

//         {/* Subject Input */}
//         <label className="text-gray-700">Subject</label>
//         <input
//           type="text"
//           name="subject"
//           value={formData.subject}
//           onChange={handleChange}
//           className={`p-2 border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-md`}
//         />
//          {errors.subject && <span className="text-red-500 text-sm">{errors.subject}</span>}
//         {/* {Mobile number} */}
//          <label className="text-gray-700">Mo Number</label>
//         <input
//           type="number"
//           name="number"
//           value={formData.number}
//           onChange={handleChange}
//           className={`p-2 border ${errors.number ? 'border-red-500' : 'border-gray-300'} rounded-md`}
//         />
//         {errors.number && <span className="text-red-500 text-sm">{errors.number}</span>}

//         {/* Message Textarea */}
//         <label className="text-gray-700">Message</label>
//         <textarea
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           className={`p-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md h-28`}
//         ></textarea>
//         {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}

//         {/* Submit Button */}
//         <Button
//           type="submit"
//           className="mt-4 py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-colors"
//         >
//           Submit
//         </Button>

//         {/* Success Message */}
//         {submitted && <p className="text-green-500 mt-2">Thank you! Your message has been sent.</p>}
//       </form>
//     </div>
//   );
// };

// export default ContactForm;



import React, { useState, useEffect } from 'react';
import FormImg from "../../Assetes/Images/FormImg.jpg";
import Button from "../../CommonComponent/Btn/Button"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    gender: '', // Add gender field
    course: '' // Add course field (you can choose either gender or course or both)
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.includes('@')) newErrors.email = "Valid email is required";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    if (!formData.number.trim()) newErrors.number = "Mobile Number is required";
    if (!formData.gender.trim()) newErrors.gender = "Gender is required"; // Add validation for gender
    if (!formData.course.trim()) newErrors.course = "Course is required"; // Add validation for course
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem('contactData', JSON.stringify(formData));
      setSubmitted(true);
    }
  };

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <div className="flex flex-col md:flex-row gap-10 p-6 my-32 bg-gray-50 rounded-md shadow-lg max-w-7xl mx-auto" id="Contact">
      {/* Image Section on Left */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start relative">
        <img src={FormImg} alt="Contact" className="shadow-md w-full md:w-11/12 h-auto object-cover border-b-8 border-t-8 border-customGold rounded-customRoundeImg " />
      </div>

      {/* Form Section on Right */}
      <form onSubmit={handleSubmit} className="w-full md:w-1/2 flex flex-col gap-4 justify-center">
        <h2 className="text-2xl font-bold text-gray-800 text-left">Get In Touch</h2>
        <p className="text-gray-600 mb-4 text-left">
          Feel free to reach out to us by filling out the form below.
        </p>
        
        {/* Name Input */}
        <label className="text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md`}
        />
        {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}

        {/* Email Input */}
        <label className="text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md`}
        />
        {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}

        {/* Subject Input */}
        <label className="text-gray-700">Subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`p-2 border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-md`}
        />
        {errors.subject && <span className="text-red-500 text-sm">{errors.subject}</span>}

        {/* Mobile Number */}
        <label className="text-gray-700">Mobile Number</label>
        <input
          type="number"
          name="number"
          value={formData.number}
          onChange={handleChange}
          className={`p-2 border ${errors.number ? 'border-red-500' : 'border-gray-300'} rounded-md`}
        />
        {errors.number && <span className="text-red-500 text-sm">{errors.number}</span>}

        {/* Gender Dropdown */}
        <label className="text-gray-700">Gender</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className={`p-2 border ${errors.gender ? 'border-red-500' : 'border-gray-300'} rounded-md`}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          {/* <option value="Other">Other</option> */}
        </select>
        {errors.gender && <span className="text-red-500 text-sm">{errors.gender}</span>}

        {/* Course Dropdown */}
        <label className="text-gray-700">Course</label>
        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
          className={`p-2 border ${errors.course ? 'border-red-500' : 'border-gray-300'} rounded-md`}
        >
          <option value="">Select Course</option>
          <option value="gnm">General Nursing and Midwifery (GNM) </option>
          <option value="anm">Auxiliary Nurse Midwifery (ANM)</option>
          {/* <option value="UI/UX Design">UI/UX Design</option> */}
        </select>
        {errors.course && <span className="text-red-500 text-sm">{errors.course}</span>}

        {/* Message Textarea */}
        <label className="text-gray-700">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={`p-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md h-28`}
        ></textarea>
        {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}

        {/* Submit Button */}
        <Button
          type="submit"
          className="mt-4 py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition-colors"
        >
          Submit
        </Button>

        {/* Success Message */}
        {submitted && <p className="text-green-500 mt-2">Thank you! Your message has been sent.</p>}
      </form>
    </div>
  );
};

export default ContactForm;
