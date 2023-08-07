import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const router = useRouter();

  return (
    <>
      <div
        className={`grid grid-cols-3 px-4 md:px-10 py-2 lg:py-0 text-black bg-[#fcf2f2] text-[15px] ${
          dropdown ? "bg-white" : "bg-none"
        }`}
      >
        <div className="flex flex-row items-center lg:justify-end justify-start">
          <div className="cursor-pointer lg:hidden block">
            {!dropdown ? (
              <img src="/menu.png" onClick={() => setDropdown(true)} />
            ) : (
              <img src="/close.png" onClick={() => setDropdown(false)} />
            )}
          </div>
          <div
            className="lg:flex hidden flex-col items-end text-[18px] cursor-pointer"
            href="tel:+919911828286"
          >
            <div className="flex flex-row items-center mb-2">
              <FaPhone className="mr-2" />
              <span>+1 (123) 456-7890</span>
            </div>
          </div>
        </div>

        <Link href={"/homepage"}>
          <div className="flex flex-row items-center justify-center">
            <img
              src="/logo2.png"
              alt="logo"
              className="md:w-[44%] rounded-lg cursor-pointer"
            />
          </div>
        </Link>

        <div
          className="lg:flex hidden flex-row items-center justify-start cursor-pointer"
          href="mailto:velvetandrose@gmail.com"
        >
          <div className="flex flex-col items-start text-[18px]">
            <div className="flex flex-row items-center mb-2">
              <FaEnvelope className="mr-2" />
              <span>velvetandrose@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#7f0f1e] text-white text-[14px] text-center lg:flex hidden flex-row w-full justify-evenly uppercase py-1">
        <Link
          href="/about-us"
          className="hover:bg-[#6a0c18] p-2 transition-colors"
        >
          About Us
        </Link>
        <Link
          href="/event-designing"
          className="hover:bg-[#6a0c18] py-2 px-4 transition-colors"
        >
          Event Designing
        </Link>
        <Link
          href="/event-planning"
          className="hover:bg-[#6a0c18] py-2 px-4 transition-colors"
        >
          Event Planning
        </Link>
        <Link
          href="/floral"
          className="hover:bg-[#6a0c18] py-2 px-4 transition-colors"
        >
          Floral
        </Link>
        <Link
          href="/our-packages"
          className="hover:bg-[#6a0c18] py-2 px-4 transition-colors"
        >
          Our Packages
        </Link>
        <Link
          href="/contact-us"
          className="hover:bg-[#6a0c18] py-2 px-4 transition-colors"
        >
          Contact Us
        </Link>
      </div>

      <AnimatePresence>
        {dropdown && (
          <motion.div
            initial="hidden"
            animate={dropdown ? "visible" : "hidden"}
            exit="hidden"
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: -10 },
            }}
          >
            <div className="h-max pb-5 flex flex-col md:px-10 px-5 text-white bg-[#7f0f1e]">
              <Link href="/about-us" className="md:my-3 my-1">
                About Us
              </Link>
              <Link href="/event-designing" className="my-3">
                Event Designing
              </Link>
              <Link href="/event-planning" className="my-3">
                Event Planning
              </Link>
              <Link href="/floral" className="my-3">
                Floral
              </Link>
              <Link href="/our-packages" className="my-3">
                Our Packages
              </Link>
              <Link href="/contact-us" className="my-3">
                Contact Us
              </Link>
              <div className="flex flex-col items-center my-3">
                <FaPhone className="mb-1" />
                +1 (123) 456-7890
              </div>
              <div className="flex flex-col items-center my-3">
                <FaEnvelope className="mb-1" />
                velvetandrose@gmail.com
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
