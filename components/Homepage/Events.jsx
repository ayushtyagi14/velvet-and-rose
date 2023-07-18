import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/motion";
import ExploreCard from "../ExploreCard";

const Explore = () => {
  const [active, setActive] = useState("service-2");

  const exploreServices = [
    {
      id: "service-1",
      imgUrl: "/event-planning.jpg",
      title: "Event Planning",
      desc: "Expertly crafted events tailored to your unique vision"
    },
    {
      id: "service-2",
      imgUrl: "/event-designing.jpg",
      title: "Event Designing",
      desc: "Transform your occasions with our exquisite event design services"
    },
    {
      id: "service-3",
      imgUrl: "/floral.jpg",
      title: "Floral",
      desc: "Stunning floral arrangements adding elegance to your special moments"
    },
    {
      id: "service-4",
      imgUrl: "/interior.jpg",
      title: "Interior",
      desc: "Elevate your space with our captivating interior decor solutions"
    },
  ];

  return (
    <section className={`sm:p-16 xs:p-8 px-6`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`2xl:max-w-[1280px] w-full mx-auto flex flex-col`}
      >
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreServices.map((service, index) => (
            <ExploreCard
              key={service.id}
              {...service}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
