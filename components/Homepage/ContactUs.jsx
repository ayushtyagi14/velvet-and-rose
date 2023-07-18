import React, { useState } from "react";
import { motion } from "framer-motion";
import { textVariant, slideIn } from "../../utils/motion";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <>
      <motion.h1
        className="text-center font-vibes lg:text-[60px] md:text-[50px] text-[36px]"
        variants={textVariant(0.5)}
        initial="hidden"
        whileInView="show"
      >
        Contact Us
      </motion.h1>
      <motion.form
        className="md:w-[70%] w-[90%] mx-auto mb-20"
        onSubmit={handleSubmit}
        variants={slideIn("up", "tween", 0.5, 0.8)}
        initial="hidden"
        whileInView="show"
      >
        <div className="mb-2 flex flex-row w-full">
          <div className="w-full mr-4">
            <label htmlFor="name" className="block font-bold mb-1">
              First Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="w-full">
            <label htmlFor="name" className="block font-bold mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
        </div>
        <div className="mb-2 flex flex-row w-full">
          <div className="w-full mr-4">
            <label htmlFor="email" className="block font-bold mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="w-full">
            <label htmlFor="phone" className="block font-bold mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block font-bold mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            rows="3"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-[#7f0f1e] text-white px-4 lg:w-[15%] md:w-[30%] w-full mx-auto py-2 rounded-md hover:bg-[#9e2535] uppercase transition-colors"
          >
            Submit
          </button>
        </div>
      </motion.form>
    </>
  );
};

export default ContactUs;
