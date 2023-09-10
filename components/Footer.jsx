import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#7f0f1e] text-white text-center py-6">
      <div className="flex flex-col items-center">
        <div className="flex md:flex-row flex-col items-center">
          <div
            className="flex flex-row items-center md:mr-10 mb-3 md:mb-0 cursor-pointer"
            href="tel:+15169048852"
          >
            <FaPhone className="text-white mr-2" />
            +1 (516) 904-8852
          </div>
          <div
            className="flex flex-row items-center cursor-pointer"
            href="mailto:info@velvetandrose.events"
          >
            <FaEnvelope className="text-white mr-2" />
            velvetandrose@gmail.com
          </div>
        </div>
        <div className="flex flex-row items-center mt-5 justify-center text-[24px]">
          {/* <a href="#" className="hover:bg-[#6a0c18] rounded-full p-2 mr-2">
            <FaFacebookF className="text-white" />
          </a>
          <a href="#" className="hover:bg-[#6a0c18] rounded-full p-2 mr-2">
            <FaTwitter className="text-white" />
          </a> */}
          <a
            href="https://www.instagram.com/velvetandrose_events/"
            className="hover:bg-[#6a0c18] rounded-full p-2 flex flex-row items-center gap-4"
          >
            <FaInstagram className="text-white" />
            <span>Instagram</span>
          </a>
        </div>
      </div>
      <div className="text-white text-center mt-5">
        © {new Date().getFullYear()} Velvet And Rose. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
