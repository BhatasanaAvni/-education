import React, { useState, useEffect } from 'react';
import FormImg from "../../Assetes/Images/FormImg.jpg";
import Button from "../../CommonComponent/Btn/Button"
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
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
    <div className="flex flex-col md:flex-row gap-10 p-6 bg-gray-50 rounded-md shadow-lg max-w-4xl mx-auto">
      {/* Image Section on Left */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-start relative">
        <img src={FormImg} alt="Contact" className="shadow-md w-full md:w-11/12 h-auto object-cover border-b-8 border-t-8 border-customOrange rounded-customRoundeImg " />
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
