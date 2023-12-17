"use client";
import {
  BellIcon,
  DotsHorizontalIcon,
  DrawingPinIcon,
} from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { deleteUserAddress } from "@/lib/actions/addresses";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

function AddressCardList({ address }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const handleDeleteAddress = async (id) => {
    setIsLoading(true);
    try {
      const response = await deleteUserAddress(id);
      toast({
        title: "Address delete",
      });
      router.refresh();
    } catch (error) {
      console.log("error", error);
      toast({
        title: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className=" flex items-center space-x-4 rounded-md border p-4 mb-4">
      <DrawingPinIcon />

      <div className="flex-1 space-y-1">
        <p className="text-sm font-medium leading-none">{address.name}</p>
        <p className="text-sm text-muted-foreground">
          {address.address} {address.zipcode}, {address.city} {address.country}
        </p>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <DotsHorizontalIcon className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          <DropdownMenuItem
            onClick={() => handleDeleteAddress(address.id)}
            disabled={isLoading}
          >
            Delete
            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {/* <Switch /> */}
    </div>
  );
}

export default AddressCardList;
