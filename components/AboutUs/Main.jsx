import React from "react";
import { motion } from "framer-motion";
import {
  textContainer,
  textVariant2,
  slideIn,
  fadeIn,
} from "../../utils/motion";

const Main = () => {
  return (
    <>
      <div className="my-16">
        <div className="lg:w-[90%] w-[95%] mx-auto">
          <motion.h2
            className="lg:text-[60px] md:text-[50px] text-[36px] font-vibes text-center mb-10"
            variants={slideIn("up", "spring", 0, 1)}
            initial="hidden"
            whileInView="show"
          >
            Welcome to Velvet & Rose
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.p
              className="text-center lg:text-left"
              variants={textVariant2}
              initial="hidden"
              whileInView="show"
            >
              Velvet & Rose is a full-service event management company that
              specializes in creating unforgettable experiences for our clients.
              From weddings and private parties to corporate galas and political
              events, we have the expertise and passion to bring your vision to
              life.
            </motion.p>
            <motion.img
              src="/about-us.jpg"
              alt="About Us"
              className="w-full h-full object-cover rounded-lg"
              variants={slideIn("left", "tween", 0.5, 1)}
              initial="hidden"
              whileInView="show"
            />
          </div>
        </div>
      </div>

      <div className="bg-[#fdebeb] py-16">
        <div className="lg:w-[90%] w-[95%] mx-auto">
          <motion.h2
            className="lg:text-[60px] md:text-[50px] text-[36px] font-vibes text-center mb-10"
            variants={slideIn("up", "spring", 0, 1)}
            initial="hidden"
            whileInView="show"
          >
            Our Mission
          </motion.h2>
          <motion.p
            className="text-center text-[18px]"
            variants={textVariant2}
            initial="hidden"
            whileInView="show"
          >
            At Velvet & Rose, our mission is to create extraordinary events that
            leave a lasting impression. We believe that every event should be a
            unique reflection of our clients' vision and personality. Our
            dedicated team works tirelessly to ensure that every detail is
            carefully considered, from the initial planning stages to the final
            execution. Whether it's a lavish wedding, a corporate gala, or an
            intimate celebration, we bring creativity, passion, and precision to
            every project we undertake. Our commitment to excellence extends to
            our relationships with our clients and partners. We value open
            communication and collaboration, fostering strong connections to
            understand and fulfill our clients' needs. With our years of
            experience in the industry, we continually explore innovative ideas
            and concepts to create events that are truly one-of-a-kind. We take
            pride in our reputation for delivering exceptional experiences that
            exceed expectations. Our clients' satisfaction is at the heart of
            everything we do, and we strive to make their dreams a reality. With
            Velvet & Rose as your event partner, you can rest assured that your
            special occasion will be flawlessly executed and filled with
            cherished memories. Whether it's a grand affair or an intimate
            gathering, we approach every project with enthusiasm, creativity,
            and meticulous attention to detail. From conceptualization to
            execution, Velvet & Rose is dedicated to crafting events that are
            both breathtaking and unforgettable.
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default Main;
