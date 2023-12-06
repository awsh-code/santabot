import { getAllProducts } from "@/lib/actions/products";
import prisma from "@/lib/prisma/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // const res = await getAllProducts();
    // console.log("res", res);
    const products = await prisma.products.findMany();
    await prisma.$disconnect();
    console.log("products", products);
    return NextResponse.json(products);
    // return NextResponse.json(res);
  } catch (error) {
    console.log(error);
    await prisma.$disconnect();
    return new NextResponse("Something went wrong", { status: 400 });
  }
}