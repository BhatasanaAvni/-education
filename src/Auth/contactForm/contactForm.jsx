
import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import Button from "../../CommonComponent/Btn/Button";
import "./Contact.css"
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    fathername: '',
    mothername: '',
    aadharnumber: '',
    bod: '',
    address: '',
    gender: '',
    cast: '',
    number: '',
    email: '',
    course: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  // Form validation function
  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.surname.trim()) newErrors.surname = "SurName is required";
    if (!formData.fathername.trim()) newErrors.fathername = "Father's Name is required";
    if (!formData.mothername.trim()) newErrors.mothername = "Mother's Name is required";
    if (!formData.aadharnumber.trim()) newErrors.aadharnumber = "Aadhar Number is required";
    if (!formData.bod.trim()) newErrors.bod = "Birth Date is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.gender.trim()) newErrors.gender = "Gender is required";
    if (!formData.cast.trim()) newErrors.cast = "Cast is required";
    if (!formData.number.trim()) newErrors.number = "Mobile Number is required";
    if (!formData.email.includes('@')) newErrors.email = "Valid email is required";
    if (!formData.course.trim()) newErrors.course = "Course is required";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Send form data to EmailJS
      emailjs
        .send(
          'service_5nnwdvf',  // Replace with your EmailJS Service ID
          'template_flc25jv',  // Replace with your EmailJS Template ID
          formData,            // Form data to send
          'q5yfKzBroX2TlSh5i'  // Replace with your EmailJS User ID
        )
        .then(() => {
          setSubmitted(true);
          // Reset form data after successful submission
          setFormData({
            name: '',
            surname: '',
            fathername: '',
            mothername: '',
            aadharnumber: '',
            bod: '',
            address: '',
            gender: '',
            cast: '',
            number: '',
            email: '',
            course: '',
            message: '',
          });
        })
        .catch((error) => {
          console.error("EmailJS error:", error);
        });
    }
  };

  // Reset submitted status after 3 seconds
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <div className=" flex flex-col md:flex-row gap-10 px-6  py-7  bg-gray-50 rounded-md shadow-lg  mx-auto" id="contact">
      {/* Form Section on Right */}
      <form onSubmit={handleSubmit} className="w-full md:w-1/2 flex flex-col gap-4 justify-center container">
        <h2 className="text-2xl font-bold text-gray-800 text-center">Get In Touch</h2>
        <p className="text-gray-600 mb-4 text-center">
          Feel free to reach out to us by filling out the form below.
        </p>


        {/* Name, Surname, and FatherName */}
        <div className="flex flex-wrap gap-4">
          <div className="flex-1 min-w-[200px]">
            <label className="text-customBlue font-semibold text-xl">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`p-2 border bg-customBlue text-customGold ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md w-full`}
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
          </div>

          <div className="flex-1 min-w-[200px]">
            <label className="text-customBlue font-semibold text-xl">Surname</label>
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              className={`p-2 border bg-customBlue text-customGold ${errors.surname ? 'border-red-500' : 'border-gray-300'} rounded-md w-full`}
            />
            {errors.surname && <span className="text-red-500 text-sm">{errors.surname}</span>}
          </div>

          <div className="flex-1 min-w-[200px]">
            <label className="text-customBlue font-semibold text-xl">Father's Name</label>
            <input
              type="text"
              name="fathername"
              value={formData.fathername}
              onChange={handleChange}
              className={`p-2 border bg-customBlue text-customGold ${errors.fathername ? 'border-red-500' : 'border-gray-300'} rounded-md w-full`}
            />
            {errors.fathername && <span className="text-red-500 text-sm">{errors.fathername}</span>}
          </div>
        </div>


        <div className=' flex flex-col lg:flex-row justify-between items-start gap-6'>
          <div className="flex flex-col w-full space-y-4">
            {/* Mother's Name */}
            <div>
              <label className="text-customBlue font-semibold text-xl">Mother's Name</label>
              <input
                type="text"
                name="mothername"
                value={formData.mothername}
                onChange={handleChange}
                className={`p-2 border bg-customBlue text-customGold ${errors.mothername ? 'border-red-500' : 'border-gray-300'} rounded-md w-full`}
              />
              {errors.mothername && <span className="text-red-500 text-sm">{errors.mothername}</span>}
            </div>

            {/* Address */}
            <div>
              <label className="text-customBlue font-semibold text-xl">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={`p-2 border bg-customBlue text-customGold ${errors.address ? 'border-red-500' : 'border-gray-300'} rounded-md w-full`}
              />
              {errors.address && <span className="text-red-500 text-sm">{errors.address}</span>}
            </div>

            {/* Course */}
            <div>
              <label className="text-customBlue font-semibold text-xl">Course</label>
              <select
                name="course"
                value={formData.course}
                onChange={handleChange}
                className={`p-2 border bg-customBlue text-customGold ${errors.course ? 'border-red-500' : 'border-gray-300'} rounded-md w-full`}
              >
                <option value="">Select a course</option>
                <option value="General Nursing and Midwifery (GNM)">General Nursing and Midwifery (GNM)</option>
                <option value="Auxiliary Nurse Midwifery (ANM)">Auxiliary Nurse Midwifery (ANM)</option>
              </select>
              {errors.course && <span className="text-red-500 text-sm">{errors.course}</span>}
            </div>
            {/* Mobile Number */}
            <div>
              <label className="text-customBlue font-semibold text-xl">Mobile Number</label>
              <input
                type="text"
                name="number"
                value={formData.number}
                onChange={handleChange}
                className={`p-2 border bg-customBlue text-customGold ${errors.number ? 'border-red-500' : 'border-gray-300'} rounded-md w-full`}
              />
              {errors.number && <span className="text-red-500 text-sm">{errors.number}</span>}
            </div>

            {/* Email */}
            <div>
              <label className="text-customBlue font-semibold text-xl">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`p-2 border bg-customBlue text-customGold ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md w-full`}
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
            </div>

            {/* Gender */}
            <div>
              <label className="text-customBlue font-semibold text-xl">Gender</label>
              <div className="flex gap-6">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    id="male"
                    checked={formData.gender === 'Male'}
                    onChange={handleChange}
                    className={`p-2 ${errors.gender ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                  />
                  <label htmlFor="male" className="text-customBlue font-semibold ml-2">Male</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    id="female"
                    checked={formData.gender === 'Female'}
                    onChange={handleChange}
                    className={`p-2 ${errors.gender ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                  />
                  <label htmlFor="female" className="text-customBlue font-semibold ml-2">Female</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    value="Other"
                    id="other"
                    checked={formData.gender === 'Other'}
                    onChange={handleChange}
                    className={`p-2 ${errors.gender ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                  />
                  <label htmlFor="other" className="text-customBlue font-semibold ml-2">Other</label>
                </div>
              </div>
              {errors.gender && <span className="text-red-500 text-sm">{errors.gender}</span>}
            </div>
          </div>

          <div className="flex flex-col w-full  space-y-4">
            {/* Aadhar Number */}
            <div>
              <label className="text-customBlue font-semibold text-xl">Aadhar Number</label>
              <input
                type="text"
                name="aadharnumber"
                value={formData.aadharnumber}
                onChange={handleChange}
                className={`p-2 border bg-customBlue text-customGold ${errors.aadharnumber ? 'border-red-500' : 'border-gray-300'} rounded-md w-full`}
              />
              {errors.aadharnumber && <span className="text-red-500 text-sm">{errors.aadharnumber}</span>}
            </div>

            {/* Birth Date */}
            <div>
              <label className="text-customBlue font-semibold text-xl">Birth Date</label>
              <input
                type="date"
                name="bod"
                value={formData.bod}
                onChange={handleChange}
                className={`p-2 border bg-customBlue text-customGold ${errors.bod ? 'border-red-500' : 'border-gray-300'} rounded-md w-full`}
              />
              {errors.bod && <span className="text-red-500 text-sm">{errors.bod}</span>}
            </div>



            {/* Cast */}
            <div>
              <label className="text-customBlue font-semibold text-xl">Cast</label>
              <select
                name="cast"
                value={formData.cast}
                onChange={handleChange}
                className={`p-2 border bg-customBlue text-customGold ${errors.cast ? 'border-red-500' : 'border-gray-300'} rounded-md w-full`}
              >
                <option value="">Select Cast</option>
                <option value="Open">Open</option>
                <option value="ST">ST</option>
                <option value="SC">SC</option>
                <option value="OBC">OBC</option>
              </select>
              {errors.cast && <span className="text-red-500 text-sm">{errors.cast}</span>}
            </div>




            {/* Message */}
            <div>
              <label className="text-customBlue font-semibold text-xl">Message</label>
              <textarea
                rows="8"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`p-2 border bg-customBlue text-customGold ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md w-full`}
              />
              {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
            </div>
          </div>
        </div>


        {/* Submit Button */}
        <Button type="submit" className="mt-4 bg-blue-600 text-white">Submit</Button>
      </form>

      {/* Success Message */}
      {submitted && (
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold text-green-500">Thank you for contacting us!</h2>
          <p className="text-green-600">Your message has been successfully sent.</p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;

