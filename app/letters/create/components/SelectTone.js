import React from "react";
import { ToneForm } from "./forms/ToneForm";
import { TemplateForm } from "./forms/TemplateForm";

function SelectTone({ setStep }) {
  return (
    <div className="container px-6 py-8 mx-auto max-w-xl lg:max-w-3xl">
      <h1 className="mt-6 text-2xl text-center font-bold text-gray-900 sm:text-3xl md:text-4xl">
        It's time for Santa Bot what behaviour you want
      </h1>

      <p className="text-center mt-4 leading-relaxed text-gray-500">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam
        dolorum aliquam, quibusdam aperiam voluptatum.
      </p>

      {/* <ToneForm setStep={setStep} /> */}
      <TemplateForm setStep={setStep} />
      <div className="col-span-6 sm:flex sm:items-center justify-between sm:gap-4">
        <button
          onClick={() =>
            setStep((previous) => {
              return previous - 1;
            })
          }
          className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
        >
          Back
        </button>
        <button
          onClick={() =>
            setStep((previous) => {
              return previous + 1;
            })
          }
          className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default SelectTone;
