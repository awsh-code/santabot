import { Separator } from "@/components/ui/separator";
import React from "react";
import { getUserAdress } from "@/lib/actions/addresses";
import { CreateAddressModal } from "../components/CreateAddressModal";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AddressCard } from "@/app/letters/checkout/components/AddressCard";
import AddressCardList from "../components/AddressCardList";

async function AddressPage() {
  const userAddress = await getUserAdress();
  console.log("userAddress", userAddress);
  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <div>
          <h3 className="text-lg font-medium">Address</h3>
          <p className="text-sm text-muted-foreground">
            This is your current address info for orders.
          </p>
        </div>
        {/* <div> */}
        <CreateAddressModal />
        {/* </div> */}
      </div>
      <Separator />
      <ScrollArea className="h-96 ">
        <div className="p-4 ">
          {userAddress.map((address) => (
            <AddressCardList key={address.id} address={address} />
            // <>
            //   <div key={address.id} className="text-sm">
            //     {address.name}
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
