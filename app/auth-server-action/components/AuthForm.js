"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignInForm from "./SignInForm";
import RegisterForm from "./RegisterForm";
import OAuthForm from "./OAuthForm";
import { motion } from "framer-motion";

export function AuthForm() {
  return (
    <>
      <motion.img
        src="/santa_sleds_with_deers.png"
        alt="candy"
        className="object-cover  w-[250px] mb-5 "
        whileTap={{ scale: 0.6 }}
        drag={true}
        dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50 }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
      />
      <div className="w-full space-y-5">
        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="signin">SignIn</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <SignInForm />
          </TabsContent>
          <TabsContent value="register">
            <RegisterForm />
          </TabsContent>
        </Tabs>
        <OAuthForm />
      </div>
      <motion.img
        src="/candy_stick.png"
        alt="candy"
        className="object-cover  w-[100px]  absolute bottom-0 right-20"
        whileTap={{ scale: 0.6 }}
        drag={true}
        dragConstraints={{ left: 50, right: 0, top: 0, bottom: 50 }}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
      />
    </>
  );
}
