"use client";

import { zodResolver } from "@hookform/resolvers/zod";

import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

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
import { useLetter } from "@/lib/store/letter";

const accountFormSchema = z.object({
  bad: z
    .array(
      z.object({
        value: z
          .string()
          .min(2, { message: "Please enter a valid bad thing." }),
      })
    )
    .optional(),
  nice: z
    .array(
      z.object({
        value: z
          .string()
          .min(2, { message: "Please enter a valid nice thing." }),
      })
    )
    .optional(),
  other: z
    .array(
      z.object({
        value: z
          .string()
          .min(2, { message: "Please enter a valid other thing." }),
      })
    )
    .optional(),
});

// This can come from your database or API.
const defaultValues = {
  bad: [{ value: "Killed a cat." }],
  nice: [{ value: "Helped an old lady." }],
  other: [{ value: "Doing well in school." }],
};

export function ChildDetailsForm() {
  const form = useForm({
    resolver: zodResolver(accountFormSchema),
    defaultValues,
  });

  const { fields, append, remove } = useFieldArray({
    name: "bad",
    control: form.control,
  });
  const {
    fields: niceFields,
    append: appendNice,
    remove: removeNice,
  } = useFieldArray({
    name: "nice",
    control: form.control,
  });
  const {
    fields: otherFields,
    append: appendOther,
    remove: removeOther,
  } = useFieldArray({
    name: "other",
    control: form.control,
  });
  const updateChildDetails = useLetter((state) => state.updateChildDetails);

  function onSubmit(data) {
    updateChildDetails(data);
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
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" mt-8 grid grid-cols-6 gap-6"
      >
        <div className="col-span-6 sm:col-span-3">
          {fields.map((field, index) => (
            <FormField
              control={form.control}
              key={field.id}
              name={`bad.${index}.value`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(index !== 0 && "sr-only")}>
                    Naughty Things They Did:
                  </FormLabel>
                  <FormDescription className={cn(index !== 0 && "sr-only")}>
                    Add bad things they did this year:
                  </FormDescription>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                  <button type="button" onClick={() => remove(index)}>
                    Delete
                  </button>
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
            Add nice things
          </Button>
        </div>
        <div className="col-span-6 sm:col-span-3">
          {niceFields.map((field, index) => (
            <FormField
              control={form.control}
              key={field.id}
              name={`nice.${index}.value`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(index !== 0 && "sr-only")}>
                    Nice Things They Did:
                  </FormLabel>
                  <FormDescription className={cn(index !== 0 && "sr-only")}>
                    Add nice things they did this year:
                  </FormDescription>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                  <button type="button" onClick={() => removeNice(index)}>
                    Delete
                  </button>
                </FormItem>
              )}
            />
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-2"
            onClick={() => appendNice({ value: "" })}
          >
            Add nice things
          </Button>
        </div>
        <div className="col-span-6 sm:col-span-3">
          {otherFields.map((field, index) => (
            <FormField
              control={form.control}
              key={field.id}
              name={`nice.${index}.value`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(index !== 0 && "sr-only")}>
                    Other Things They Did:
                  </FormLabel>
                  <FormDescription className={cn(index !== 0 && "sr-only")}>
                    Add Other things they did this year:
                  </FormDescription>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                  <button type="button" onClick={() => removeOther(index)}>
                    Delete
                  </button>
                </FormItem>
              )}
            />
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-2"
            onClick={() => appendOther({ value: "" })}
          >
            Add nice things
          </Button>
        </div>
        <div className="col-span-6 flex items-center sm:flex sm:items-center justify-center sm:justify-end sm:gap-4">
          <Button type="submit">Continue</Button>
        </div>
      </form>
    </Form>
  );
}
