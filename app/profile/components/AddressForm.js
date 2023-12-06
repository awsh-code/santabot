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
  name: "Jesus",
  address: "123 main street",
  zipcode: "SW2 SW@",
  city: "Maracaibo",
  country: "Venezuela",
};

export function AddressForm() {
  const form = useForm({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: "onChange",
  });

  let currentAddress = true;

  async function onSubmit(data) {
    if (currentAddress) {
      data.addressId = 3;

      const response = await updateUserAddress(data);
    } else {
      const response = await createUserAddress(data);
    }
    // const response = await createUserAddress({
    // //   addressId,
    //   name,
    //   address,
    //   zipcode,
    //   city,
    //   country,
    // });
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>country</FormLabel>
              <FormControl>
                <Input placeholder="venezuela" {...field} />
              </FormControl>
              <FormDescription>This is your current country.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Update profile</Button>
      </form>
    </Form>
  );
}
