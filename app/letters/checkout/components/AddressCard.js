"use client";
import {
  BellIcon,
  EyeNoneIcon,
  IdCardIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { useLetter } from "@/lib/store/letter";
import { ScrollArea } from "@/components/ui/scroll-area";
import AddressCardList from "@/app/profile/components/AddressCardList";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { SelectAddressForm } from "../../create/components/forms/SelectAddressForm";
import { CreateAddressModal } from "@/app/profile/components/CreateAddressModal";

export function AddressCard({ userAddresses }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Card>
        <CardHeader className="pb-3 flex flex-row justify-between">
          <div>
            <CardTitle>Address</CardTitle>
            <CardDescription>Choose your shipping address.</CardDescription>
          </div>
          <CreateAddressModal />
        </CardHeader>
        <CardContent>
          <ScrollArea className=" h-40">
            <div className="p-4 ">
              <SelectAddressForm userAddresses={userAddresses} />
            </div>
          </ScrollArea>
          {/* <ScrollArea className=" ">
            <div className="p-4 ">
              {userAddresses.map((address) => (
                <AddressCardList key={address.id} address={address} />
              ))}
            </div>
          </ScrollArea> */}
          {/* <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
            <IdCardIcon className="mt-px h-5 w-5" />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">Name</p>
              <p className="text-sm text-muted-foreground">John Doe</p>
              <p className="text-sm font-medium leading-none">Address</p>
              <p className="text-sm text-muted-foreground">Land o lakes</p>
              <p className="text-sm font-medium leading-none">Zipcode</p>
              <p className="text-sm text-muted-foreground">666</p>
              <p className="text-sm font-medium leading-none">City</p>
              <p className="text-sm text-muted-foreground">Tampa</p>
              <p className="text-sm font-medium leading-none">Country</p>
              <p className="text-sm text-muted-foreground">United states</p>
            </div>
          </div> */}
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
