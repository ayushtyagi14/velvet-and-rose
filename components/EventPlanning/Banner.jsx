import React from "react";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../../utils/motion";

const Banner = () => {
  return (
    <div className="overflow-hidden">
      <div className="grid lg:grid-cols-2 grid-cols-1 w-[90%] mx-auto my-40 items-center gap-16">
        <motion.img
          src="/ep1.jpg"
          alt="Event Planning"
          className="w-[500px] rounded-lg mx-auto lg:mx-0"
          variants={slideIn("right", "tween", 0.5, 1)}
          initial="hidden"
          whileInView="show"
        />
        <motion.div
          className="flex flex-col justify-between h-full"
          variants={fadeIn("left", "tween", 0.5, 1)}
          initial="hidden"
          whileInView="show"
        >
          <motion.h1
            className="lg:text-[50px] md:text-[44px] text-[30px] text-center leading-tight font-vibes"
            variants={fadeIn("up", "tween", 0.8, 0.5)}
            initial="hidden"
            whileInView="show"
          >
            Unravel the Magic of Memorable Occasions
          </motion.h1>
          <motion.p
            className="font-medium mt-5"
            variants={fadeIn("up", "tween", 1, 0.5)}
            initial="hidden"
            whileInView="show"
          >
            Discover the perfect blend of creativity and meticulous planning
            with Velvet & Rose. Our event planning services are designed to
            bring your visions to life, ensuring unforgettable celebrations
            that are flawlessly executed. From conceptualization to execution,
            our dedicated team will handle every detail with precision, leaving
            you free to bask in the joy of your special day. Let us craft an
            enchanting experience that will be cherished forever.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
