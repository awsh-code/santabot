import { Button } from "@/components/ui/button";
import React from "react";

function Pricing({ setStep }) {
  return (
    <div className=" container px-6  mx-auto max-w-xl lg:max-w-3xl">
      <h1 className=" text-2xl text-center font-bold text-gray-900 sm:text-3xl md:text-4xl">
        Santa Bot is coming to town!
      </h1>

      <p className="text-center mt-4 leading-relaxed text-gray-500">
        Choose a package
      </p>

      <div class="grid grid-cols-1 gap-8  xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3">
        <div class="w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg dark:border-gray-700">
          <p class="font-medium text-gray-500 uppercase dark:text-gray-300">
            Free
          </p>

          <h2 class="text-4xl font-semibold text-gray-800 uppercase dark:text-gray-100">
            $0
          </h2>

          <p class="font-medium text-gray-500 dark:text-gray-300">Life time</p>
          <Button
            onClick={() =>
              setStep((previous) => {
                return previous + 1;
              })
            }
          >
            Start Now
          </Button>

          {/* <button
            onClick={() =>
              setStep((previous) => {
                return previous + 1;
              })
            }
            class="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          >
            Start Now
          </button> */}
        </div>

        <div class="w-full p-8 space-y-8 text-center bg-primary rounded-lg">
          <p class="font-medium text-gray-200 uppercase">Premium</p>

          <h2 class="text-5xl font-bold text-white uppercase dark:text-gray-100">
            $40
          </h2>

          <p class="font-medium text-gray-200">Per month</p>

          <Button
            variant="outline"
            onClick={() =>
              setStep((previous) => {
                return previous + 1;
              })
            }
          >
            Start Now
          </Button>
          {/* <button class="w-full px-4 py-2 mt-10 tracking-wide text-blue-500 capitalize transition-colors duration-300 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:ring focus:ring-gray-200 focus:ring-opacity-80">
            Start Now
          </button> */}
        </div>

        <div class="w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg dark:border-gray-700">
          <p class="font-medium text-gray-500 uppercase dark:text-gray-300">
            Enterprise
          </p>

          <h2 class="text-4xl font-semibold text-gray-800 uppercase dark:text-gray-100">
            $100
          </h2>

          <p class="font-medium text-gray-500 dark:text-gray-300">Life time</p>
          <Button
            onClick={() =>
              setStep((previous) => {
                return previous + 1;
              })
            }
          >
            Start Now
          </Button>
          {/* 
          <button class="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            Start Now
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
