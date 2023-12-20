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

const profileFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "name must be at least 2 characters.",
    })
    .max(30, {
      message: "name must not be longer than 30 characters.",
    }),
  address: z
    .string()
    .min(2, {
      message: "address must be at least 2 characters.",
    })
    .max(30, {
      message: "address must not be longer than 30 characters.",
    }),
  zipcode: z
    .string()
    .min(2, {
      message: "zip must be at least 2 characters.",
    })
    .max(30, {
      message: "zip must not be longer than 30 characters.",
    }),
  city: z
    .string()
    .min(2, {
      message: "city must be at least 2 characters.",
    })
    .max(30, {
      message: "city must not be longer than 30 characters.",
    }),
  country: z
    .string()
    .min(2, {
      message: "country must be at least 2 characters.",
    })
    .max(30, {
      message: "country must not be longer than 30 characters.",
    }),
});

// This can come from your database or API.
const defaultValues = {
  name: "",
  address: "",
  zipcode: "",
  city: "",
  country: "",
};

export function AddressForm() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  // This can come from your database or API.
  const defaultValues = {
    name: "",
    address: "",
    zipcode: "",
    city: "",
    country: "",
  };
  const form = useForm({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  });

  async function onSubmit(data) {
    startTransition(async () => {
      // const response = await updateUserAddress(data);
      try {
        const response = await createUserAddress(data);
        router.refresh();
        toast({
          title: "New address added",
        });
        form.reset();
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Something went wrong",
        });
      }
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
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Baby Jesus" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input placeholder="north pole av" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display address.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <FormField
            control={form.control}
            name="zipcode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Zip Code</FormLabel>
                <FormControl>
                  <Input placeholder="6969" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public zip region code.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="maracaibo" {...field} />
                </FormControl>
                <FormDescription>This is your current city.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input placeholder="venezuela" {...field} />
                </FormControl>
                <FormDescription>This is your current country.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="col-span-6 flex items-center sm:flex sm:items-center justify-center sm:justify-end sm:gap-4">
          <Button type="submit" disabled={isPending}>
            Add new address{" "}
            {/* <Loader className={cn(" animate-spin", { hidden: !isPending })} /> */}
          </Button>
        </div>
      </form>
    </Form>
  );
}
