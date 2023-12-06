"use server";
import { readUserSession } from ".";
import { createSupabaseServerClient } from "../supabase/server";
import prisma from "@/lib/prisma/prisma";

export async function getUserAdress() {
  const supabase = await createSupabaseServerClient();
  return supabase
    .from("Addresses")
    .select("*")
    .order("created_at", { ascending: true });
}
export async function createUserAddress(details) {
  try {
    // const { data: { user } } = await supabase.auth.getUser()

    // if (!user) throw Error()
    const { data } = await readUserSession();

    const res = await prisma.addresses.create({
      data: {
        user_id: "42ba4c71-9d28-4fce-8a20-7c224eaca585",
        user_id: data?.session?.user?.id,
        name: details.name,
        address: details.address,
        zipcode: details.zipcode,
        city: details.city,
        country: details.country,
      },
    });
    await prisma.$disconnect();
    return res;
  } catch (error) {
    console.log(error);
    await prisma.$disconnect();
    return error.message;
  }
}
export async function updateUserAddress(details) {
  try {
    // const { data: { user } } = await supabase.auth.getUser()

    // if (!user) throw Error()
    const { data } = await readUserSession();

    const res = await prisma.addresses.update({
      where: { id: Number(details.addressId) },
      data: {
        name: details.name,
        address: details.address,
        zipcode: details.zipcode,
        city: details.city,
        country: details.country,
      },
    });
    await prisma.$disconnect();
    return res;
  } catch (error) {
    console.log(error);
    await prisma.$disconnect();
    return error.message;
  }
}
