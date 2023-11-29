import { createSupabaseServerClient } from "@/lib/supabase/server";
import React from "react";
import { Button } from "./ui/button";
import { redirect } from "next/navigation";

function SignOut() {
  const logout = async () => {
    "use server";
    const supabase = await createSupabaseServerClient();
    await supabase.auth.signOut();
    redirect("/auth-server-action");
  };
  return (
    <form action={logout}>
      <Button>Signout</Button>
    </form>
  );
}

export default SignOut;
