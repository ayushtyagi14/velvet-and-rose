import React from "react";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../../utils/motion";

const Hero = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 lg:gap-0 mt-20 mb-10 w-[90%] mx-auto items-center">
        <motion.img
          src="/event-planning-hero.jpg"
          alt="Event Planning"
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
            Elevate Your Events with Our Event Planning Services
          </h1>
          <p className="font-medium">
            At Velvet & Rose, we specialize in creating seamless and
            unforgettable events through meticulous planning and attention to
            detail. Our dedicated team will work closely with you to understand
            your vision and bring it to life, ensuring every aspect of your
            event is perfectly coordinated. From intimate gatherings to grand
            celebrations, we pride ourselves on crafting personalized
            experiences that leave a lasting impression. Let us handle the
            logistics while you focus on creating cherished memories with your
            guests.
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
