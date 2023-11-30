import { Button } from "@/components/ui/button";
import { readUserSession } from "@/lib/actions";
import Link from "next/link";
import React from "react";

export default async function LettersPage() {
  const { data } = await readUserSession();

  return (
    <section className="">
      {/* <div className="mx-auto max-w-screen-xl px-4 py-8 lg:flex lg:h-screen lg:items-center flex-col"> */}
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:flex  lg:items-center flex-col">
        <img
          src="/envelope.png"
          alt=""
          class="   w-[200px] object-cover opacity-100 "
        />
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Ho-ho-ho!
            <strong className="font-extrabold text-primary sm:block">
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
    </section>
  );
}
