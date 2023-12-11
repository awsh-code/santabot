"use client";
import React, { useEffect, useTransition } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useOverlayBlocker } from "@/components/overlay-blocker";
import TestCard from "../../success/components/TestCard";
// import { loadStripe } from "@stripe/stripe-js";

function GeneratedLetter() {
  const { lockApp, unlockApp } = useOverlayBlocker();

  useEffect(() => {
    lockApp();
    setTimeout(() => unlockApp(), 5000);
  }, []);
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  // hardcoded
  const user = {
    email: "test@gmail.com",
  };

  const handleCheckOut = (e) => {
    e.preventDefault();
    // startTransition(async () => {
    //   const data = JSON.parse(
    //     await checkout(user?.email, location.origin + pathname)
    //   );
    //   const result = await loadStripe(
    //     process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY
    //   );
    //   await result?.redirectToCheckout({ sessionId: data.id });
    // });
  };
  return (
    // <div className=" container px-6  mx-auto max-w-xl lg:max-w-3xl ">
    <div className=" container flex flex-col justify-center items-center px-6  mx-auto max-w-xl lg:max-w-3xl ">
      <h1 className=" text-2xl text-center font-bold text-gray-900 sm:text-3xl md:text-4xl">
        Generated Letter Response
      </h1>

      <p className="text-center mt-4 leading-relaxed text-gray-500">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam
        dolorum aliquam, quibusdam aperiam voluptatum.
      </p>
      <br />
      <div className="flex items-center justify-center mt-4">
        <Button asChild>
          <Link href="/letters/checkout">Next to Payment</Link>
        </Button>
      </div>
      <div className="w-[500px]">
        <TestCard />
      </div>

      {/* <Card>
        <CardContent className="p-4">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </CardContent>
      </Card> */}
      {/* <div className="flex items-center justify-center mt-4">
        <Button asChild>
          <Link href="/letters/checkout">Next to Payment</Link>
        </Button>
      </div> */}
    </div>
  );
}

export default GeneratedLetter;
