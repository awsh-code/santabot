// "use client";
import React from "react";
import { AuthForm } from "./components/AuthForm";
import { motion } from "framer-motion";

import { redirect } from "next/navigation";
import { readUserSession } from "@/lib/actions";

export default async function AuthServerPage() {
  const { data } = await readUserSession();
  if (data.session) {
    return redirect("/letters");
  }
  return (
    <div className="flex justify-center items-start  py-8">
      <div className="w-96 flex flex-col justify-center  items-center  ">
        <AuthForm />
      </div>
    </div>
  );
}
