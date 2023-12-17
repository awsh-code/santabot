"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function OrderNotFound() {
  return (
    <div className="grid h-screen place-content-center bg-white px-4">
      <div className="text-center flex flex-col justify-center align-middle items-center">
        <motion.img
          src="/candy_stick.png"
          alt="candy"
          className="  w-24"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        />
        <h1 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </h1>

        <p className="mt-4 text-gray-500">We can't find that page.</p>
        <Button asChild>
          <Link href="/">Go Home</Link>
        </Button>
      </div>
    </div>
  );
}

export default OrderNotFound;
