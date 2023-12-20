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
import { Badge } from "@/components/ui/badge";

export function DetailsCard() {
  const letterCartState = useLetter((state) => state);
  const couponState = useLetter((state) => state.coupon);

  const calcPercentage = (num, per) => {
    const percentageTotal = (num / 100) * per;
    return num - percentageTotal;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Card>
        <CardHeader className="pb-3 flex flex-row justify-between">
          <div>
            <CardTitle>Product</CardTitle>
            <CardDescription>
              {letterCartState.letterPackage.title}
            </CardDescription>
          </div>
          {couponState && <Badge>Coupon applied</Badge>}
        </CardHeader>
        <CardContent>
          <div className="flow-root">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
              {couponState && (
                <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                  <dt className="font-medium text-gray-900">Total</dt>
                  <dd className="text-sm text-muted-foreground sm:col-span-2">
                    {" "}
                    {calcPercentage(
                      letterCartState.letterPackage.price,
                      couponState.percentage
                    )}
                  </dd>
                </div>
              )}

              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Price</dt>
                <dd className="text-sm text-muted-foreground sm:col-span-2">
                  {" "}
                  {letterCartState.letterPackage.price}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                <dt className="text-sm font-medium leading-none">
                  Description
                </dt>
                <dd className="text-sm text-muted-foreground sm:col-span-2">
                  {letterCartState.letterPackage.description}
                </dd>
              </div>
            </dl>
          </div>

          {/* <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
          
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
