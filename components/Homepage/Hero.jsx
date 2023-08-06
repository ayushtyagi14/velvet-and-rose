import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Navbar from "../Navbar";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";

import "swiper/css";
import "swiper/css/autoplay";

const Hero = () => {
  const autoplayDelay = 3000;
  const videoDelay = 1500;

  const [width, setWidth] = useState(null);
  let mobile = false;

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () => setWidth(window.innerWidth));
    };
  }, []);

  if (width < 1000) {
    mobile = true;
  } else {
    mobile = false;
  }

  const swiperRef = useRef(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const heroImages = [
    {
      id: "1",
      imgUrl: "/hero-banner3.jpg",
      title: "Your Vision, Our Expertise",
    },
    {
      id: "2",
      imgUrl: "/hero-banner4.jpg",
      title: "Experience the Extraordinary",
    },
    {
      id: "3",
      imgUrl: "/hero-banner5.jpg",
      title: "Creating Lasting Memories",
    },
  ];

  const handleSlideChange = (swiper) => {
    setCurrentSlideIndex(swiper.realIndex);
  };

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 z-10 opacity-[85%]">
        <Navbar />
      </div>
      <Swiper
        ref={swiperRef}
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: autoplayDelay,
          disableOnInteraction: false,
        }}
        speed={videoDelay}
        loop={true}
        centeredSlides={false}
        className="mySwiper"
        onSlideChange={handleSlideChange}
      >
        {heroImages.map((item, index) => (
          <SwiperSlide key={item.id}>
            <div className="lg:h-[98vh] md:h-[75vh] h-[55vh]">
              <Image
                src={item.imgUrl}
                alt="Hero Banner"
                fill
                className="brightness-[70%] object-cover"
              />
            </div>
            {currentSlideIndex === index && (
              <motion.div
                variants={slideIn("up", "tween", 0.5, 0.8)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="absolute top-[40%] lg:left-[20%] md:left-[10%] left-[0%] transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10"
              >
                <h1 className="lg:text-[90px] md:text-[70px] text-[40px] mt-20 font-vibes leading-none">
                  {item.title}
                </h1>
              </motion.div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
