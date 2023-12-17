"use server";
import { readUserSession } from ".";
import { createSupabaseServerClient } from "../supabase/server";
import prisma from "@/lib/prisma/prisma";

export async function getOrderById(orderId) {
  const { data } = await readUserSession();
  try {
    const res = await prisma.orders.findFirst({
      where: { user_id: data?.session?.user?.id, id: orderId },
    });
    await prisma.$disconnect();
    return res;
  } catch (error) {
    console.log(error);
    await prisma.$disconnect();
  }
}
export async function getOrderDetailById(orderId) {
  console.log("orderId", orderId);
  const { data } = await readUserSession();
  try {
    const res = await prisma.orderItem.findFirst({
      where: { order_id: orderId },
    });
    await prisma.$disconnect();
    return res;
  } catch (error) {
    console.log(error);
    await prisma.$disconnect();
  }
}
export async function getUserOrders() {
  const { data } = await readUserSession();
  try {
    const res = await prisma.orders.findMany({
      where: { user_id: data?.session?.user?.id },
    });
    console.log("res", res);
    // const res = await prisma.orderItem.findMany({
    //   where: { user_id: data?.session?.user?.id },
    // });
    await prisma.$disconnect();
    return res;
  } catch (error) {
    console.log(error);
    await prisma.$disconnect();
  }
}
