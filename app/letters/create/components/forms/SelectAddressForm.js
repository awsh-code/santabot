"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/components/ui/use-toast";
import { useLetter } from "@/lib/store/letter";
import { useOverlayBlocker } from "@/components/overlay-blocker";
import { useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import AddressCardList from "@/app/profile/components/AddressCardList";
// import { useTransform } from "framer-motion";

const appearanceFormSchema = z.object({
  selectedAddress: z.number({
    required_error: "Please select an address.",
  }),
});

export function SelectAddressForm({ userAddresses }) {
  // This can come from your database or API.
  const defaultValues = {
    selectedAddress: userAddresses[0].id,
  };

  const form = useForm({
    resolver: zodResolver(appearanceFormSchema),
    defaultValues,
  });
  const updateAddressSelected = useLetter(
    (state) => state.updateAddressSelected
  );

  function onSubmit(data) {
    console.log("address selected", data);
    updateAddressSelected(data);
  }

  return (
    <Form {...form}>
      <form
        // onSubmit={form.handleSubmit(onSubmit)}
        // onChange={form.handleSubmit(onSubmit)}
        className="space-y-8 flex flex-col"
      >
        <FormField
          control={form.control}
          name="selectedAddress"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel>address</FormLabel>
              <FormDescription>
                Select the address for the letter.
              </FormDescription>
              <FormMessage />
              <RadioGroup
                // onValueChange={form.handleSubmit(onSubmit)}
                onValueChange={(e) => onSubmit(e)}
                // onValueChange={field.onChange}
                // onValueChange={(event, value) => console.log(value)}
                defaultValue={field.value}
                className="grid max-w-md grid-cols-1 gap-8 pt-2"
              >
                <ScrollArea className=" ">
                  <div className="p-4 ">
                    {userAddresses.map((address) => (
                      <FormItem key={address.id}>
                        <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                          <FormControl>
                            <RadioGroupItem
                              value={address.id}
                              className="sr-only"
                            />
                          </FormControl>
                          <AddressCardList address={address} />
                        </FormLabel>
                      </FormItem>
                    ))}
                  </div>
                </ScrollArea>
              </RadioGroup>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
