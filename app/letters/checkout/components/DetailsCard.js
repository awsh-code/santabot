"use client";
import {
  BellIcon,
  EyeNoneIcon,
  PersonIcon,
  IdCardIcon,
} from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useLetter } from "@/lib/store/letter";

export function DetailsCard() {
  const letterCartState = useLetter((state) => state);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Product</CardTitle>
          <CardDescription>
            {letterCartState.letterPackage.title}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
            {/* <img className="mt-px h-10 w-10" src="/envelope.png" /> */}
            <IdCardIcon className="mt-px h-5 w-5" />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">Price</p>
              <p className="text-sm text-muted-foreground">
                {letterCartState.letterPackage.price}
              </p>
              <p className="text-sm font-medium leading-none">Description</p>
              <p className="text-sm text-muted-foreground">
                {letterCartState.letterPackage.description}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
// name: addressDetails.name,
// address: addressDetails.address,
// zipcode: addressDetails.zipcode,
// city: addressDetails.city,
// country: addressDetails.country,
