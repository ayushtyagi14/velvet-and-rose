import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const GetInTouch = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 items-center my-10 w-[90%] mx-auto">
        <div className="flex flex-col h-full items-start justify-evenly">
          <h1 className="font-Abramo lg:text-[60px] md:text-[50px] text-[36px]">Get In Touch</h1>
          <p className="w-[80%] font-inter text-[18px]">
            We make it simple to get the pricing, availability, and answers you
            need to make the best decision for your special day. Reach out to us
            now to get one step closer to securing a vendor that will work with
            your budget and eye to create your wedding exactly the way you
            envisioned it.
          </p>
          <div>
            <h1 className="font-Abramo lg:text-[40px] md:text-[30px] text-[28px]">Contact Information</h1>
            <div className="flex flex-row items-center mb-2 cursor-pointer">
              <FaPhone className="mr-2" />
              <span>+1 (123) 456-7890</span>
            </div>
            <div className="flex flex-row items-center mb-2 cursor-pointer">
              <FaEnvelope className="mr-2" />
              <span>velvetandrose@gmail.com</span>
            </div>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48347.798473753886!2d-73.524879!3d40.7678!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c280e2a613f791%3A0x4e233b780b4c98ac!2s12%20Herzog%20Pl%2C%20Hicksville%2C%20NY%2011801!5e0!3m2!1sen!2sus!4v1691329567197!5m2!1sen!2sus"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="rounded-2xl shadow-xl"
        ></iframe>
      </div>
    </>
  );
};

export default GetInTouch;
