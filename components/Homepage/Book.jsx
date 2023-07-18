import React from "react";

const Book = () => {
  const eventsImages = [
    {
      id: "1",
      title: "Wedding & Bridal",
      imgUrl: "/wedding-bridal.jpg",
    },
    {
      id: "2",
      title: "Sweet 16's & Quinceañera",
      imgUrl: "/quinceanera.jpg",
    },
    {
      id: "3",
      title: "Bar/Bat Mitzvahs",
      imgUrl: "/bar-mitzvah.jpg",
    },
    {
      id: "4",
      title: "Corporate and Political",
      imgUrl: "/corporate.jpg",
    },
    {
      id: "5",
      title: "Intimate and Soiree",
      imgUrl: "/soiree.jpg",
    },
    {
      id: "6",
      title: "Some Event",
      imgUrl: "/event1.jpg",
    },
    {
      id: "7",
      title: "Some Event",
      imgUrl: "/event2.jpg",
    },
    {
      id: "8",
      title: "Some Event",
      imgUrl: "/event3.jpg",
    },
    {
      id: "8",
      title: "Some Event",
      imgUrl: "/floral.jpg",
    },
  ];

  return (
    <>
      <div className="mb-20 mt-10">
        <h1 className="md:text-[60px] text-[36px] text-center font-vibes">
          Book Your Event Today!
        </h1>
        <div className="grid grid-cols-3 gap-4 w-[95%] mx-auto mt-10">
          {eventsImages.map((item, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden brightness-[85%] cursor-pointer"
            >
              <img
                src={item.imgUrl}
                alt={item.title}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#473f3f] opacity-0 transition-opacity duration-300 hover:opacity-[70%]">
                <h3 className="text-white text-center md:text-[36px] font-vibes">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Book;
