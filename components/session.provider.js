"use client";
import { useUser } from "@/lib/store/user";
import createSupabaseBrowerClient from "@/lib/supabase/client";
import { createBrowserClient } from "@supabase/ssr";
import React, { useEffect } from "react";

export default function SessionProvider() {
  const setUser = useUser((state) => state.setUser);
  const supabase = createSupabaseBrowerClient();

  const readUserSession = async () => {
    const { data } = await supabase.auth.getSession();
    setUser(data.session?.user);
  };

  useEffect(() => {
    readUserSession();
    //eslint-disable-next-line
  }, []);
  return <></>;
}
