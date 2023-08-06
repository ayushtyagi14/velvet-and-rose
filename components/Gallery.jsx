import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect, useRef } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

const Gallery = ({galleryData, title}) => {
  const autoplayDelay = 6000;
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

  return (
    <>
      <div className="my-20">
        <h1 className="text-center font-vibes lg:text-[60px] md:text-[50px] text-[36px] mb-2">
          {title}
        </h1>
        <Swiper
          ref={swiperRef}
          modules={[Autoplay, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: autoplayDelay,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          speed={videoDelay}
          loop={true}
          centeredSlides={false}
          className="mySwiper"
        >
          {galleryData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="w-[90%] mx-auto lg:h-screen h-max lg:pb-20 pb-10">
                {item.type === "image" && (
                  <img
                    src={item.url}
                    alt={`Gallery ${item.id}`}
                    className="w-full rounded-lg"
                  />
                )}
                {item.type === "video" && (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full rounded-lg"
                  >
                    <source src={item.url} type="video/mp4" />
                  </video>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Gallery;
