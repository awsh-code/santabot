import { createSupabaseServerClient } from "../supabase/server";
import prisma from "@/lib/prisma/prisma";
import { readUserSession } from ".";

export async function getAllProducts() {
  const supabase = await createSupabaseServerClient();
  return supabase
    .from("Products")
    .select("*")
    .order("created_at", { ascending: true });
}

export async function getProductById(productId) {
  const { data } = await readUserSession();
  try {
    const res = await prisma.products.findFirst({
      where: { id: productId },
    });
    await prisma.$disconnect();
    return res;
  } catch (error) {
    console.log(error);
    await prisma.$disconnect();
  }
}
