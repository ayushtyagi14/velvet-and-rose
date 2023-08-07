import React from "react";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../../utils/motion";

const Hero = () => {
  return (
    <div className="overflow-hidden">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 lg:gap-0 mt-20 mb-10 w-[90%] mx-auto items-center">
        <motion.img
          src="/ed1.jpg"
          alt="Event Designing"
          className="w-[450px] rounded-lg mx-auto lg:mx-0"
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
          <h1 className="lg:text-[50px] md:text-[44px] text-[30px] text-center font-vibes leading-tight">
            Unleash Your Dreams with Our Event Designing Services
          </h1>
          <p className="font-medium">
            At Velvet & Rose, we create extraordinary events with elegance and
            heartwarming memories. Our dedicated team transforms your vision
            into reality, curating bespoke experiences that reflect your unique
            style. From grand weddings to sophisticated corporate events, we
            flawlessly execute every detail, ensuring unforgettable celebrations
            where velvet and roses unite in charm and beauty.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
