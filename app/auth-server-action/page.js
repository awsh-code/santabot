// "use client";
import React from "react";
import { AuthForm } from "./components/AuthForm";
import { motion } from "framer-motion";

import { redirect } from "next/navigation";
import { readUserSession } from "@/lib/actions";

export default async function AuthServerPage() {
  const { data } = await readUserSession();
  if (data.session) {
    return redirect("/todo");
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 flex flex-col justify-center  items-center">
        {/* <motion.img
          src="/candy_stick.png"
          alt="candy"
          class="object-cover  w-[100px]  absolute bottom-10 right-20"
          whileTap={{ scale: 0.6 }}
          drag={true}
          dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50 }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        />
        <motion.img
          src="/santa_sleds_with_deers.png"
          alt="candy"
          class="object-cover  w-[250px] mb-5 "
          whileTap={{ scale: 0.6 }}
          drag={true}
          dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50 }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        /> */}

        <AuthForm />
      </div>
    </div>
  );
}
