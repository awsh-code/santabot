"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import TestCard from "./components/TestCard";

import { motion } from "framer-motion";

function SuccessPage() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Your order
            <strong className="font-extrabold text-primary sm:block">
              {" "}
              Is on the way.{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Thanks for your purchase, we're getting it ready!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button>View order</Button>
          </div>
          {/* <motion.div
            // className="box"
            initial={{ opacity: 0, scale: 0.5, x: -500 }}
            animate={{ opacity: 1, scale: 1, x: 500 }}
            transition={{
              duration: 2,
              // delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          > */}
          <motion.img
            className="mt-px h-[200px] w-full"
            src="/santa_sleds_with_deers.png"
            initial={{ opacity: 0, scale: 0.8, x: -500 }}
            // variants={{
            //   initial: {
            //     y: [-20, 20],
            //     rotate: 0,
            //     transition: {
            //       delay: 0.2,
            //       duration: 2,
            //       repeat: Infinity,
            //       // repeatDelay: 0.2,
            //       repeatType: "reverse",
            //     },
            //   },
            // }}
            // animate={["initial"]}
            animate={{ opacity: 1, scale: 1, x: 32.5 }}
            transition={{
              duration: 2,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          />
          {/* </motion.div> */}
        </div>
      </div>
    </section>
  );
}

export default SuccessPage;
