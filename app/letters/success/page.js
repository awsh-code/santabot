import { Button } from "@/components/ui/button";
import React from "react";
import TestCard from "./components/TestCard";

import { getOrderById } from "@/lib/actions/orders";
import OrderNotFound from "./components/order-not-found";
import SantaSled from "./components/SantaSled";
import Link from "next/link";

async function SuccessPage(props) {
  const searchParams = props.searchParams;
  console.log("searchParams", searchParams.order);
  const order = await getOrderById(parseInt(searchParams.order));
  console.log("order", order);
  return (
    <>
      {order ? (
        <section className="bg-gray-50">
          <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
            <div className="mx-auto max-w-xl text-center">
              <h1 className="text-3xl font-extrabold sm:text-5xl">
                Your order
                <strong className="font-extrabold text-primary sm:block">
                  {" "}
                  Is on the way.{" "}
                </strong>
              </h1>

              <p className="mt-4 sm:text-xl/relaxed">
                Thanks for your purchase, we're getting it ready!
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button asChild>
                  <Link href={`/profile/orders/${order.id}`}>
                    Order Details
                  </Link>
                </Button>
              </div>

              <SantaSled />
            </div>
          </div>
        </section>
      ) : (
        <OrderNotFound />
      )}
    </>
  );
}

export default SuccessPage;
