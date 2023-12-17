"use client";
import React from "react";
import { motion } from "framer-motion";

function SantaSled() {
  return (
    <motion.img
      className="mt-px h-[200px] w-full"
      src="/santa_sleds_with_deers.png"
      initial={{ opacity: 0, scale: 0.8, x: -500 }}
      animate={{ opacity: 1, scale: 1, x: 32.5 }}
      transition={{
        duration: 2,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    />
  );
}

export default SantaSled;
