import React from "react";
import { motion } from "framer-motion";

const Card = ({ title, desc }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 120 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-card-gradient shadow-custom border flex flex-col px-4 py-8 gap-3 rounded-md text-white"
    >
      <h1 className="text-xl font-bold font-montserrat">{title}</h1>
      <p className="text-sm font-roboto">{desc}</p>
    </motion.div>
  );
};

export default Card;
