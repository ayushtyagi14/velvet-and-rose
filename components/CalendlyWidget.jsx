import React from "react";
import { motion } from "framer-motion";
import { textVariant, slideIn } from "../utils/motion";

const CalendlyWidget = () => {
  return (
    <>
      <motion.div
        className=" h-screen"
        variants={slideIn("up", "tween", 0.5, 0.8)}
        initial="hidden"
        whileInView="show"
      >
        <iframe
          src="/virtual.html"
          style={{ width: "100%", height: "100%" }}
        ></iframe>
      </motion.div>
    </>
  );
};

export default CalendlyWidget;
