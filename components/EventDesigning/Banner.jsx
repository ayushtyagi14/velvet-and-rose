import React from "react";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../../utils/motion";

const Banner = () => {
  return (
    <div className="overflow-hidden">
      <div className="grid lg:grid-cols-2 grid-cols-1 w-[90%] mx-auto my-40 items-center gap-16">
        <motion.div
          className="flex flex-col justify-between h-full"
          variants={slideIn("right", "tween", 0.5, 1)}
          initial="hidden"
          whileInView="show"
        >
          <motion.h1
            className="lg:text-[50px] md:text-[44px] text-[30px] text-center leading-tight font-vibes"
            variants={fadeIn("up", "tween", 0.8, 0.5)}
            initial="hidden"
            whileInView="show"
          >
            Unveiling the Enchanting World of Event Designing
          </motion.h1>
          <motion.p
            className="font-medium mt-5"
            variants={fadeIn("up", "tween", 1, 0.5)}
            initial="hidden"
            whileInView="show"
          >
            Experience the art of event designing redefined by Velvet & Rose.
            Our skilled artisans weave elegance into every aspect of your event,
            creating a magical experience. From personalized themes to timeless
            embellishments, our attention to detail brings your vision to life.
            With seamless on-site coordination, we take the stress out of
            planning, allowing you to fully immerse in the joy of the occasion.
            Choose Velvet & Rose for a captivating event that leaves a lasting
            impression on your guests and cherished memories. Elevate your
            celebrations with our exceptional event designing services.
          </motion.p>
        </motion.div>
        <motion.img
          src="/ed2.jpg"
          alt="Event Designing"
          className="w-[500px] rounded-lg mx-auto lg:mx-0"
          variants={slideIn("left", "tween", 0.5, 1)}
          initial="hidden"
          whileInView="show"
        />
      </div>
    </div>
  );
};

export default Banner;
