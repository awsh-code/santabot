"use client";
import { Button } from "@/components/ui/button";
import { Lobster, Mountains_of_Christmas } from "next/font/google";
import { motion } from "framer-motion";

const xmas = Mountains_of_Christmas({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
});
const lobster = Lobster({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
});

export default function IndexPage() {
  return (
    // <section className="container  sm:grid sm:grid-cols-2 sm:items-center gap-6 pb-8 pt-6 md:py-10 px-8">
    <section className="container min-h-[600px]  grid grid-cols-[1fr_1fr] xs:grid-cols-[1fr]  sm:items-center gap-6 pb-8 pt-6 md:py-10 px-8">
      <div className="flex max-w-[980px] flex-col items-start justify-center gap-2">
        <h1
          className={` ${xmas.className} text-3xl  leading-tight tracking-tighter md:text-7xl`}
        >
          Happy Christmas with
        </h1>
        <h1
          className={` ${xmas.className} text-3xl font-extrabold  leading-tight tracking-tighter md:text-8xl`}
        >
          SantaBot
        </h1>
        <p className={` max-w-[700px] text-lg `}>
          Little Stories to Make You Smile
        </p>
        <div className="flex mt-2 gap-4">
          <Button variant="outline">Send Santa</Button>
          <Button>Learn More</Button>
        </div>
      </div>
      <div className="flex justify-center align-middle p-2 relative">
        {/* <img
          alt="snowman"
          src="/snowman_angle.png"
          class=" h-full w-full   absolute top-2 left-2"
        /> */}
        <motion.img
          src="/snowman_angle.png"
          // src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
          alt="snowman"
          class="object-cover w-[150px] absolute bottom-0 left-0 "
          whileTap={{ scale: 0.9 }}
          drag={true}
          dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        />

        <motion.img
          src="/candy_stick.png"
          alt="candy"
          class="object-cover  w-[100px]  absolute bottom-10 right-36"
          // class="object-cover  w-[100px]  absolute top-[50px] right-[150px]"
          whileTap={{ scale: 0.6 }}
          drag={true}
          dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50 }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        />
        <motion.img
          src="/sock.png"
          alt="sock"
          className="object-cover  w-[125px]  absolute top-[100px] left-[125px]"
          whileTap={{ scale: 0.8 }}
          drag={true}
          dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        />
        <motion.img
          src="/christmas_tree.png"
          alt="christmas_tree"
          className="object-cover  w-[125px]  absolute  right-[10px]"
          // className="object-cover  w-[125px]  absolute top-[100px] right-[10px]"
          whileTap={{ scale: 0.9 }}
          drag={true}
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        />
      </div>
    </section>
  );
}
