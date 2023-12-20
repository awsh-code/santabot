"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  CalendarIcon,
  CaretSortIcon,
  CheckIcon,
  ChevronRightIcon,
  MinusCircledIcon,
} from "@radix-ui/react-icons";
import { format } from "date-fns";
import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "@/components/ui/use-toast";
import { useLetter } from "@/lib/store/letter";
import React from "react";
import { CalendarYear } from "@/components/ui/calendar-year";

const genders = [
  { label: "Boy", value: "boy" },
  { label: "Girl", value: "girl" },
];

const accountFormSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(30, {
      message: "Name must not be longer than 30 characters.",
    }),
  age: z.string({
    required_error: "An age is required.",
  }),
  // dob: z.date({
  //   required_error: "A date of birth is required.",
  // }),
  gender: z.string({
    required_error: "Please select a gender.",
  }),
  toys: z
    .array(
      z.object({
        value: z
          .string()
          .min(2, { message: "Please enter a valid toy/thing." }),
      })
    )
    .optional(),
});

// This can come from your database or API.
const defaultValues = {
  // name: "Your name",
  // dob: new Date("2023-01-23"),
  toys: [{ value: "Drifting toy car" }],
};

export function ChildInfoForm() {
  // const [date, setDate] = React.useState();

  const updateChildInfo = useLetter((state) => state.updateChildInfo);
  const increaseStep = useLetter((state) => state.increaseStep);
  const form = useForm({
    resolver: zodResolver(accountFormSchema),
    defaultValues,
  });

  const { fields, append, remove } = useFieldArray({
    name: "toys",
    control: form.control,
  });

  function onSubmit(data) {
    updateChildInfo(data);
    increaseStep();
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" mt-8 grid grid-cols-6 gap-6"
      >
        <div className="col-span-6 sm:col-span-3">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Child Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormDescription>Lorem ipsum description.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <FormField
            control={form.control}
            name="nickName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nick Name (if any)</FormLabel>
                <FormControl>
                  <Input placeholder="His nickname" {...field} />
                </FormControl>
                <FormDescription>lorem ipsum</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Age</FormLabel>
                <FormControl>
                  <Input placeholder="8" type="number" min={1} {...field} />
                </FormControl>
                <FormDescription>how many years old</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* <div className="col-span-6 sm:col-span-3">
          <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date of birth</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] justify-start text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent align="start" className=" w-auto p-0">
                    <CalendarYear
                      mode="single"
                      captionLayout="dropdown-buttons"
                      selected={field.value}
                      onSelect={field.onChange}
                      fromYear={1960}
                      toYear={2030}
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  Your date of birth is used to calculate your age.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div> */}
        <div className="col-span-6 sm:col-span-3">
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Gender</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-[200px] justify-between",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value
                          ? genders.find(
                              (gender) => gender.value === field.value
                            )?.label
                          : "Select Gender"}
                        <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-[200px] p-0">
                    <Command>
                      <CommandInput placeholder="Search Gender..." />
                      <CommandEmpty>No Gender found.</CommandEmpty>
                      <CommandGroup>
                        {genders.map((gender) => (
                          <CommandItem
                            value={gender.label}
                            key={gender.value}
                            onSelect={() => {
                              form.setValue("gender", gender.value);
                            }}
                          >
                            <CheckIcon
                              className={cn(
                                "mr-2 h-4 w-4",
                                gender.value === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {gender.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  This is the gender that will be used in the letter.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          {fields.map((field, index) => (
            <FormField
              control={form.control}
              key={field.id}
              name={`toys.${index}.value`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(index !== 0 && "sr-only")}>
                    Toys/Things
                  </FormLabel>
                  <FormDescription className={cn(index !== 0 && "sr-only")}>
                    Add toys or things your kid wants.
                  </FormDescription>
                  <FormControl>
                    <div className="flex gap-2">
                      <Input {...field} />
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => remove(index)}
                      >
                        <MinusCircledIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </FormControl>

                  {/* <button type="button" onClick={() => remove(index)}>
                    Delete
                  </button> */}
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-2"
            onClick={() => append({ value: "" })}
          >
            Add Toys/Things
          </Button>
        </div>
        <div className="col-span-6 flex items-center sm:flex sm:items-center justify-center sm:justify-end sm:gap-4">
          <Button type="submit">Continue</Button>
        </div>
      </form>
    </Form>
  );
}
