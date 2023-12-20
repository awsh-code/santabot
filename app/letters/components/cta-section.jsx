"use client";
import { Button } from "@/components/ui/button";
import { useConfirmLeave } from "@/hooks/useConfirmLeave";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

function CtaSection({ data }) {
  return (
    <div className="mx-auto max-w-screen-xl flex items-center justify-center  px-4 py-8 lg:flex  lg:items-center flex-col">
      <motion.img
        src="/envelope.png"
        alt=""
        className="   w-[200px] object-cover opacity-100 "
        whileTap={{ scale: 0.9 }}
        drag={true}
        dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      />
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-3xl font-extrabold sm:text-5xl">
          Ho-ho-ho!
          <strong className="font-extrabold text-primary block">
            {/* <strong className="font-extrabold text-red-700 sm:block"> */}
            Let's create your Santa Letter
          </strong>
        </h1>

        <p className="mt-4 sm:text-xl/relaxed">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
          illo tenetur fuga ducimus numquam ea!
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {data.session ? (
            <>
              <Button asChild>
                <Link href="/letters/create">Get Started</Link>
              </Button>
            </>
          ) : (
            <Button asChild>
              <Link href="/auth-server-action">Sign in to continue</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CtaSection;
