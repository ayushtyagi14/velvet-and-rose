import React from "react";
import Navbar from "../Navbar";
import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";

const Hero = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 z-10 opacity-[85%]">
          <Navbar />
        </div>
        <div className="lg:h-[98vh] md:h-[75vh] h-[55vh]">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="brightness-[65%] w-full h-full object-cover"
          >
            <source src={"/about-us.mp4"} type="video/mp4" />
          </video>
        </div>
        <motion.div
          variants={slideIn("up", "tween", 0.5, 0.8)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="absolute top-[40%] left-[35%] transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10"
        >
          <h1 className="lg:text-[90px] md:text-[70px] text-[40px] mt-20 font-Abramo leading-none">
            About Us
          </h1>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
