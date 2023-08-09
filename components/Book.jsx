import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Book = ({ title, homepage }) => {
  const router = useRouter();

  const eventsImages = [
    {
      id: "1",
      title: "Wedding & Bridal",
      imgUrl: "/wedding-bridal.jpg",
      slug: "wedding-and-bridal",
    },
    {
      id: "2",
      title: "Sweet 16's & Quinceañera",
      imgUrl: "/quinceanera.jpg",
      slug: "sweet-16-and-quinceañera",
    },
    {
      id: "3",
      title: "Bar/Bat Mitzvahs",
      imgUrl: "/bar-mitzvah.jpg",
      slug: "bar-bat-mitzvahs",
    },
    {
      id: "4",
      title: "Corporate and Political",
      imgUrl: "/corporate.jpg",
      slug: "corporate-and-political",
    },
    {
      id: "5",
      title: "Intimate and Soiree",
      imgUrl: "/soiree.jpg",
      slug: "intimate-and-soiree",
    },
    {
      id: "6",
      title: "Some Event",
      imgUrl: "/event1.jpg",
      slug: "some-event",
    },
    {
      id: "7",
      title: "Some Event",
      imgUrl: "/event2.jpg",
      slug: "some-event",
    },
    {
      id: "8",
      title: "Some Event",
      imgUrl: "/event3.jpg",
      slug: "some-event",
    },
    {
      id: "9",
      title: "Some Event",
      imgUrl: "/floral.jpg",
      slug: "some-event",
    },
  ];

  return (
    <>
      <div className="mb-20 mt-10">
        <h1 className="md:text-[60px] text-[36px] text-center font-vibes">
          {title}
        </h1>
        <div className="grid grid-cols-3 gap-4 w-[95%] mx-auto mt-10">
          {eventsImages.map((item) => (
            <div
              key={item.id}
              className={`relative rounded-lg overflow-hidden brightness-[85%] cursor-pointer ${
                !homepage && "hover:border-2 border-[#7f0f1e]"
              }`}
            >
              <Link href={`/our-packages/${item.slug}`} key={item.id}>
                <img
                  src={item.imgUrl}
                  alt={item.title}
                  className="w-full"
                />
                {!homepage && (
                  <h3 className="text-center md:text-[36px] font-vibes">
                    {item.title}
                  </h3>
                )}
              </Link>
              {homepage && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#473f3f] opacity-0 transition-opacity duration-300 hover:opacity-[70%]">
                  <Link href={`/our-packages/${item.slug}`} key={item.id}>
                    <h3 className="text-white text-center md:text-[36px] font-vibes">
                      {item.title}
                    </h3>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Book;
