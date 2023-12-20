"use client";
import { logout } from "@/app/auth/actions";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React, { useTransition } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function SignOutV2() {
  const [isPending, startTransition] = useTransition();
  const { lockApp, unlockApp } = useOverlayBlocker();
  const onSubmit = async () => {
    startTransition(async () => {
      lockApp();
      await logout();
      unlockApp();
    });
  };

  return (
    <form action={onSubmit}>
      <Button className="w-full flex items-center gap-2" variant="outline">
        SignOut{" "}
        <AiOutlineLoading3Quarters
          className={cn(" animate-spin", { hidden: !isPending })}
        />
      </Button>
    </form>
  );
}
