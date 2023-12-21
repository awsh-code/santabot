"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui//button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { createUserAddress, updateUserAddress } from "@/lib/actions/addresses";
import { useRouter } from "next/navigation";
import { startTransition, useTransition } from "react";
import Loader from "@/components/loader";
import { cn } from "@/lib/utils";
import { useLetter } from "@/lib/store/letter";

const couponFormSchema = z.object({
  coupon: z.string().min(2, {
    message: "coupon must be at least 2 characters.",
  }),
});

export function CouponForm({ setOpen }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const updateCoupon = useLetter((state) => state.updateCoupon);
  // This can come from your database or API.
  const defaultValues = {
    coupon: "",
  };
  const form = useForm({
    resolver: zodResolver(couponFormSchema),
    defaultValues,
    mode: "onChange",
  });

  async function onSubmit(data) {
    startTransition(async () => {
      console.log("data", data);
      updateCoupon({
        code: "test",
        percentage: 20,
      });
      setOpen(false);
      // const response = await updateUserAddress(data);
      //   try {
      //     const response = await createUserAddress(data);
      //     router.refresh();
      //     toast({
      //       title: "New address added",
      //     });
      //     form.reset();
      //   } catch (error) {
      //     toast({
      //       variant: "destructive",
      //       title: "Something went wrong",
      //     });
      //   }
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-6 gap-6"
      >
        <div className="col-span-6 sm:col-span-3">
          <FormField
            control={form.control}
            name="coupon"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Coupon Code</FormLabel>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormDescription>Submit the coupon code.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="col-span-6 flex items-center sm:flex sm:items-center justify-center sm:justify-end sm:gap-4">
          <Button type="submit" disabled={isPending}>
            Add coupon{" "}
            {/* <Loader className={cn(" animate-spin", { hidden: !isPending })} /> */}
          </Button>
        </div>
      </form>
    </Form>
  );
}