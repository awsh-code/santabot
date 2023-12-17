import { Separator } from "@/components/ui/separator";
import React from "react";
import { getUserAdress } from "@/lib/actions/addresses";
import { CreateAddressModal } from "../components/CreateAddressModal";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AddressCard } from "@/app/letters/checkout/components/AddressCard";
import AddressCardList from "../components/AddressCardList";
import { getUserOrders } from "@/lib/actions/orders";
import OrderCard from "./components/order-card";

async function AddressPage() {
  const urderOrders = await getUserOrders();
  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <div>
          <h3 className="text-lg font-medium">Orders</h3>
          <p className="text-sm text-muted-foreground">
            This is your current successful orders list.
          </p>
        </div>
      </div>
      <Separator />
      <ScrollArea className="h-96 ">
        <div className="p-4 flex flex-col gap-2">
          {urderOrders.map((order) => (
            // <AddressCardList key={address.id} address={address} />
            <OrderCard key={order.id} order={order} />
            // <>
            //   <div key={order.id} className="text-sm">
            //     {order.name}
            //   </div>
            //   <Separator className="my-2" />
            // </>
          ))}
        </div>
      </ScrollArea>

      {/* address list  */}
      {/* <AddressForm /> */}
    </div>
  );
}

export default AddressPage;
