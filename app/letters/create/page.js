"use client";
import React, { useEffect, useState } from "react";
import Stepper from "./components/Stepper";
import StepContent from "./components/StepContent";
import { motion } from "framer-motion";
import { useLetter } from "@/lib/store/letter";

function CreatePage() {
  const resetLetter = useLetter((state) => state.resetLetter);
  useEffect(() => {
    resetLetter();
    // restart cart
  }, []);
  return (
    <section className="  grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mx-auto max-w-screen-xl px-4 py-8 min-h-[520px] ">
      <div className="  h-full ">
        <Stepper />
      </div>

      <motion.img
        src="/santa-head.png"
        alt="snowman"
        className="hidden sm:block object-cover w-[200px] rotate-90 absolute top-24 left-[-25px] "
        // class="object-cover w-[200px] absolute bottom-0 left-0 "
        whileTap={{ scale: 0.9 }}
        drag={true}
        dragConstraints={{ left: 0, right: 350, top: 0, bottom: 50 }}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      />
      <div className=" h-full  lg:col-span-2 ">
        {/* steps */}
        <StepContent />
      </div>
    </section>
  );
}

export default CreatePage;
