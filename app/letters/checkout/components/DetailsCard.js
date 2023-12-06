import { BellIcon, EyeNoneIcon, PersonIcon } from "@radix-ui/react-icons";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function DetailsCard() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Address</CardTitle>
        <CardDescription>Choose your shipping address.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
          <img className="mt-px h-10 w-10" src="/gift-box.png" />
          {/* <BellIcon className="mt-px h-5 w-5" /> */}
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
        </div>
      </CardContent>
    </Card>
  );
}
// name: addressDetails.name,
// address: addressDetails.address,
// zipcode: addressDetails.zipcode,
// city: addressDetails.city,
// country: addressDetails.country,
