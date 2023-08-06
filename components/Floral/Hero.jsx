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
        <img
          src="/floral-banner.jpg"
          alt="Floral"
          className="lg:h-[96vh] md:h-[75vh] h-[42vh] w-full brightness-[70%]"
        />
        <motion.div
          variants={slideIn("up", "tween", 0.5, 0.8)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="absolute top-[40%] left-[40%] transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10"
        >
          <h1 className="lg:text-[90px] md:text-[70px] text-[40px] mt-20 font-vibes leading-none">
            Floral
          </h1>
        </motion.div>
      </div>
    </>
  );
};

export default Hero;
