"use client";
import React, { useState } from "react";
import Pricing from "./Pricing";
import ChildInfo from "./ChildInfo";
import ChildDetails from "./ChildDetails";
import SelectTone from "./SelectTone";
import GeneratedLetter from "./GeneratedLetter";

function StepContent({ step, setStep }) {
  return (
    <>
      {step === 1 && <Pricing setStep={setStep} />}
      {step === 2 && <ChildInfo setStep={setStep} />}
      {step === 3 && <ChildDetails setStep={setStep} />}
      {step === 4 && <SelectTone setStep={setStep} />}
      {step === 5 && <GeneratedLetter setStep={setStep} />}
      {/* step 2 */}
      {/* step 3 */}
    </>
  );
}

export default StepContent;
