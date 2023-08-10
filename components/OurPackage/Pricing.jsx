import React from "react";
import { fadeIn, slideIn } from "../../utils/motion";
import { motion } from "framer-motion";

const Pricing = ({ price, features, title }) => {
  return (
    <div className="my-32">
      <motion.h1
        className="text-center lg:text-[50px] md:text-[44px] text-[38px] font-Abramo"
        variants={fadeIn("left", "tween", 0.5, 1)}
        initial="hidden"
        whileInView="show"
      >
        Pricing
      </motion.h1>
      <motion.div
        className="bg-[#f7e3e3] flex flex-col rounded-xl shadow-lg p-6 md:w-[70%] w-[90%] mx-auto mt-5"
        variants={fadeIn("up", "tween", 0.5, 1)}
        initial="hidden"
        whileInView="show"
      >
        <h2 className="text-[26px] text-center uppercase font-semibold font-inter">
          {title} Package
        </h2>
        <p className="text-[20px] text-center font-semibold mt-3">
          Starting From {price}
        </p>
        <ul className="mt-6 list-disc list-inside">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 text-[#7f0f1e]"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM5.293 9.293a1 1 0 011.414 0L9 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        <button className="mt-6 py-2 px-4 rounded-md w-[70%] mx-auto bg-[#7f0f1e] text-white font-medium hover:bg-[#b44554]">
          Book Now
        </button>
      </motion.div>
    </div>
  );
};

export default Pricing;
