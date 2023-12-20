"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CouponForm } from "./coupon-form";
import { useLetter } from "@/lib/store/letter";
import { useState } from "react";
function CouponModal() {
  const couponState = useLetter((state) => state.coupon);
  console.log("couponState", couponState);
  const [open, setOpen] = useState(true);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {/* <Button variant="outline" disabled={hasCoupon}> */}
        <Button variant="outline" disabled={couponState ? true : false}>
          Add Coupon
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Coupon</DialogTitle>
          <DialogDescription>
            Add a coupon and get a discount.
          </DialogDescription>
        </DialogHeader>
        <CouponForm setOpen={setOpen} />
        {/* <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}

export default CouponModal;
