import React from "react";
import { AddressCard } from "./components/AddressCard";
import { DetailsCard } from "./components/DetailsCard";
import { PaymentCard } from "./components/PaymentCard";

function CheckoutPage() {
  return (
    <div className="grid grid-cols-[1fr_1fr] grid-rows-1 gap-4 lg:grid-cols-2 lg:gap-8  mx-auto max-w-screen-xl px-4 py-8 min-h-[520px] ">
      <div className="gap-4 lg:gap-8 flex flex-col">
        <AddressCard />
        {/* <DetailsCard /> */}
      </div>
      <PaymentCard />
      {/* <div className="h-32 rounded-lg bg-gray-200 lg:col-span-2"></div> */}
    </div>
  );
}

export default CheckoutPage;
