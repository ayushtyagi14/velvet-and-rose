import React from "react";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../../utils/motion";

const Intro = () => {
  return (
    <>
      <div className="flex flex-col items-center my-20 w-[90%] mx-auto">
        <motion.h1
          className="lg:text-[50px] md:text-[44px] text-[30px] font-Abramo text-center"
          variants={fadeIn("up", "tween", 0.5, 1)}
          initial="hidden"
          whileInView="show"
        >
          Blossoming Floral Artistry for Your Celebrations
        </motion.h1>
        <motion.p
          className="md:text-[18px] font-inter text-center mt-5"
          variants={slideIn("up", "tween", 0.5, 1)}
          initial="hidden"
          whileInView="show"
        >
          Experience the captivating allure of exquisite floral arrangements
          crafted by Velvet & Rose. Our floral service embraces the beauty of
          nature, bringing life and color to your cherished events. From elegant
          bouquets to stunning centerpieces, our skilled florists curate bespoke
          designs that perfectly complement your unique vision. Immerse yourself
          in a world of blossoms, where every petal holds a story of love and
          celebration. With meticulous attention to detail, we infuse your
          occasions with the freshness and fragrance of our premium blooms. Let
          our floral artistry weave enchanting moments into your special
          gatherings, leaving a lasting impression on your guests. Embrace the
          charm of nature with our unparalleled floral service.
        </motion.p>
      </div>
    </>
  );
};

export default Intro;
