import React from "react";
import { motion } from "framer-motion";
import { textContainer, textVariant2, slideIn, fadeIn } from "../../utils/motion";

const AboutUs = () => {
  return (
    <>
      <motion.div
        className="flex flex-col lg:flex-row items-center my-16 lg:w-[95%] w-[90%] mx-auto justify-between h-[70vh]"
        variants={slideIn("right", "spring", 0.5, 1)}
        initial="hidden"
        whileInView="show"
      >
        <motion.div
          className="flex flex-col lg:items-start items-center lg:mr-20 h-full justify-center"
          variants={textContainer}
        >
          <motion.h1
            className="lg:text-[50px] md:text-[40px] text-[36px] mb-4 font-vibes text-center lg:text-start"
            variants={textVariant2}
          >
            Elevate Your Events With <br className="hidden lg:block" /> Velvet & Rose
          </motion.h1>
          <motion.p className="mb-8 text-center lg:text-start" variants={textVariant2}>
            Welcome to Velvet & Rose, where your dream events come to life. As a
            premier event management company, we take pride in crafting
            unforgettable experiences tailored to your unique vision. Our team
            of dedicated experts is committed to turning your ideas into
            reality, ensuring every detail is meticulously planned and
            flawlessly executed.
          </motion.p>
          <motion.button
            className="px-6 py-2 rounded border-black border"
            variants={fadeIn("down", "tween", 0.8, 0.5)}
          >
            Book Your Event Now
          </motion.button>
        </motion.div>
        <motion.img
          src="/about-us.jpg"
          alt="About Us"
          className="lg:w-1/2 w-full mt-10 lg:mt-0 object-cover rounded-lg"
          variants={slideIn("left", "tween", 0.5, 1)}
        />
      </motion.div>
    </>
  );
};

export default AboutUs;
