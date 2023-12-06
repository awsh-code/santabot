import { createSupabaseServerClient } from "../supabase/server";

export async function getAllProducts() {
  const supabase = await createSupabaseServerClient();
  return supabase
    .from("Products")
    .select("*")
    .order("created_at", { ascending: true });
}
