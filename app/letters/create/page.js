"use client";
import React, { useState } from "react";
import Stepper from "./components/Stepper";
import StepContent from "./components/StepContent";
import { motion } from "framer-motion";

function CreatePage() {
  const [step, setStep] = useState(1);
  return (
    <section class="  grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mx-auto max-w-screen-xl px-4 py-8 min-h-[520px] ">
      <div class=" rounded-lg h-full ">
        {/* step */}

        <Stepper step={step} />
      </div>
      {/* <div className="absolute top-[10px] left-[-150px] z-[-1] ">
        <img src="http://www.google.com/logos/worldcupfinale10-hp.gif" />
      </div> */}

      <motion.img
        src="/santa-head.png"
        alt="snowman"
        class="object-cover w-[200px] rotate-90 absolute top-0 left-[-25px] "
        // class="object-cover w-[200px] absolute bottom-0 left-0 "
        whileTap={{ scale: 0.9 }}
        drag={true}
        dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      />
      <div class=" h-full  lg:col-span-2 ">
        {/* steps */}
        <StepContent step={step} setStep={setStep} />
      </div>
    </section>
  );
}

export default CreatePage;
