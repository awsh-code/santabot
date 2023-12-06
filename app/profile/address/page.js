import { Separator } from "@/components/ui/separator";
import React from "react";
import { AddressForm } from "../components/AddressForm";

function page() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Address</h3>
        <p className="text-sm text-muted-foreground">
          This is your current address info for orders.
        </p>
      </div>
      <Separator />
      <AddressForm />
    </div>
  );
}

export default page;
