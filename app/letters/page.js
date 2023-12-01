import { Button } from "@/components/ui/button";
import { readUserSession } from "@/lib/actions";
import Link from "next/link";
import React from "react";
import CtaSection from "./components/cta-section";

export default async function LettersPage() {
  const { data } = await readUserSession();

  return (
    <section className="">
      {/* <div className="mx-auto max-w-screen-xl px-4 py-8 lg:flex lg:h-screen lg:items-center flex-col"> */}
      <CtaSection data={data} />
    </section>
  );
}
