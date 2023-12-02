"use client";
import React, { useState } from "react";
import Pricing from "./Pricing";
import ChildInfo from "./ChildInfo";
import ChildDetails from "./ChildDetails";
import SelectTone from "./SelectTone";
import GeneratedLetter from "./GeneratedLetter";
import { useLetter } from "@/lib/store/letter";

function StepContent({}) {
  const letter = useLetter((state) => state.letter);
  return (
    <>
      {letter.step === 1 && <Pricing />}
      {letter.step === 2 && <ChildInfo />}
      {letter.step === 3 && <ChildDetails />}
      {letter.step === 4 && <SelectTone />}
      {letter.step === 5 && <GeneratedLetter />}
      {/* step 2 */}
      {/* step 3 */}
    </>
  );
}

export default StepContent;
