"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Icons } from "./icons";
import { buttonVariants } from "./ui/button";

export const Menu = ({ items }) => {
  return (
    <Sheet>
      <SheetTrigger>
        <Icons.menu className="rotate-0 scale-100 transition-all dark:-rotate-180 dark:scale-100" />
      </SheetTrigger>
      <SheetContent position={"left"} size={"content"}>
        <SheetHeader>
          <Icons.logo className="h-6 w-6" />
          <SheetTitle>Santa Bot</SheetTitle>
          <SheetDescription>
            This is just some description about this dunno
          </SheetDescription>
          {items?.length ? (
            <nav className="flex flex-col items-center gap-6">
              {items?.map(
                (item, index) =>
                  item.href && (
                    <Link
                      key={index}
                      href={item.href}
                      className={buttonVariants({
                        variant: "ghost",
                        size: "lg",
                        full: "menu",
                      })}
                      //   className={cn(
                      //     "flex items-center text-sm font-medium text-muted-foreground",
                      //     item.disabled && "cursor-not-allowed opacity-80"
                      //   )}
                    >
                      {item.title}
                    </Link>
                  )
              )}
            </nav>
          ) : null}
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
