"use client";
import React, { useState } from "react";
import Pricing from "./Pricing";
import ChildInfo from "./ChildInfo";
import ChildDetails from "./ChildDetails";
import SelectTone from "./SelectTone";
import GeneratedLetter from "./GeneratedLetter";
import { useLetter } from "@/lib/store/letter";
import { motion } from "framer-motion";

function StepContent() {
  const letter = useLetter((state) => state.letter);
  return (
    <>
      {letter.step === 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Pricing />
        </motion.div>
      )}
      {letter.step === 2 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ChildInfo />
        </motion.div>
      )}
      {letter.step === 3 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ChildDetails />
        </motion.div>
      )}
      {letter.step === 4 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <SelectTone />
        </motion.div>
      )}
      {letter.step === 5 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <GeneratedLetter />
        </motion.div>
      )}
      {/* step 2 */}
      {/* step 3 */}
    </>
  );
}

export default StepContent;
