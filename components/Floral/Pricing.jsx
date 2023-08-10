import React from "react";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../../utils/motion";

const Pricing = () => {
  const packages = [
    {
      id: 1,
      title: "Small Package",
      price: "$75-125",
      features: ["Basic decoration", "Event coordination", "Up to 50 guests"],
    },
    {
      id: 2,
      title: "Medium Package",
      price: "$100-150 (Silk $75)",
      features: [
        "Customized themes",
        "Floral arrangements",
        "Up to 150 guests",
      ],
    },
    {
      id: 3,
      title: "Large Package",
      price: "$175-200 (Silk $100)",
      features: [
        "Premium decoration",
        "Full event planning",
        "Up to 300 guests",
      ],
    },
  ];

  const additionalServices = [
    {
      id: 4,
      title: "Custom Stage and Backdrop Florals",
      price: "$1200+",
    },
    {
      id: 5,
      title: "Custom Arrangement",
      price: "$250+",
    },
    {
      id: 6,
      title: "Head Tables & Runners",
      price: "$250-$400",
    },
    {
      id: 7,
      title: "Bridal Bouquet",
      price: "$125-$200",
    },
  ];

  return (
    <div className="my-32">
      <motion.h1
        className="text-center lg:text-[60px] md:text-[50px] text-[38px] font-Abramo"
        variants={slideIn("up", "tween", 0.8, 0.5)}
        initial="hidden"
        whileInView="show"
      >
        Pricing
      </motion.h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 w-[90%] mx-auto mt-20">
        {packages.map((pkg) => (
          <motion.div
            key={pkg.id}
            className="bg-[#f7e3e3] flex flex-col rounded-xl shadow-lg p-6"
            variants={fadeIn("right", "tween", pkg.id * 0.1, 0.5)}
            initial="hidden"
            whileInView="show"
          >
            <h2 className="text-[24px] text-center uppercase font-semibold font-inter">
              {pkg.title}
            </h2>
            <p className="text-[18px] font-semibold mt-3">{pkg.price}</p>
            <ul className="mt-4">
              {pkg.features.map((feature, index) => (
                <li key={index} className="flex items-center mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-[#7f0f1e]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM5.293 9.293a1 1 0 011.414 0L9 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="mt-6 py-2 px-4 rounded-md w-[70%] mx-auto bg-[#7f0f1e] text-white font-medium hover:bg-[#b44554]">
              Book Now
            </button>
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 w-[90%] mx-auto mt-10 gap-6">
        {additionalServices.map((service) => (
          <motion.div
            key={service.id}
            className="bg-[#f7e3e3] rounded-xl shadow-lg p-6"
            variants={fadeIn("up", "tween", service.id * 0.1, 0.5)}
            initial="hidden"
            whileInView="show"
          >
            <h2 className="text-[24px] text-center uppercase font-semibold font-inter">
              {service.title}
            </h2>
            <p className="text-[18px] font-semibold mt-3">{service.price}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
