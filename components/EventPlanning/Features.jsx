import React from "react";
import { motion } from "framer-motion";
import { fadeIn, zoomIn } from "../../utils/motion";

const Features = () => {
  const Features = [
    {
      id: 1,
      imgUrl: "/bow.png",
      title: "Elegant Touch",
      para: "Add a touch of timeless beauty and sophistication to your celebration",
    },
    {
      id: 2,
      imgUrl: "/seamless.png",
      title: "Seamless Coordination",
      para: "Leave the logistics to us, our team ensures a smooth and seamless event",
    },
    {
      id: 3,
      imgUrl: "/memorable.png",
      title: "Memorable Moments",
      para: "Create cherished memories with meticulously planned and executed events",
    },
  ];

  return (
    <>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 w-[90%] mx-auto my-40">
        {Features.map((item) => (
          <motion.div
            key={item.id}
            className="flex flex-col items-center"
            variants={fadeIn("up", "tween", item.id * 0.1, 0.5)}
            initial="hidden"
            whileInView="show"
          >
            <motion.img
              src={item.imgUrl}
              alt={item.title}
              variants={zoomIn(item.id * 0.2, 0.5)}
              initial="hidden"
              whileInView="show"
              className="w-20"
            />
            <motion.h1
              className="uppercase font-inter font-medium text-center text-[18px] mt-2"
              variants={fadeIn("up", "tween", item.id * 0.1 + 0.1, 0.5)}
              initial="hidden"
              whileInView="show"
            >
              {item.title}
            </motion.h1>
            <motion.p
              className="text-center font-inter"
              variants={fadeIn("up", "tween", item.id * 0.1 + 0.2, 0.5)}
              initial="hidden"
              whileInView="show"
            >
              {item.para}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Features;
