import React from "react";
import { motion } from "framer-motion";

const TeamMemberCard = ({ name, role, photoUrl, description }) => {
  return (
    <motion.div
      className="bg-[#fff1f1] p-6 rounded-lg shadow-md"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img
        src={photoUrl}
        alt={name}
        className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 text-center text-[18px] font-bold">{role}</p>
      <p className="mt-2">{description}</p>
    </motion.div>
  );
};

export default TeamMemberCard;
