"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

function OrderCard({ order }) {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">
            Created at {new Date(order.created_at).toLocaleDateString()}
          </p>

          <p className="text-2xl font-medium text-gray-900">${order.total}</p>
        </div>

        <span className="rounded-full bg-green-100 p-3 text-green-600">
          <CheckIcon />
        </span>
      </div>

      <div className="mt-1 flex gap-1 text-green-600">
        <p className="flex gap-2 text-xs">
          <span className="font-medium"> Shipped to</span>

          <span className="text-gray-500">
            {order.address} {order.zipcode}, {order.city} {order.country}{" "}
          </span>
        </p>

        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>

        <p className="flex gap-2 text-xs">
          <span className="font-medium"> 67.81% </span>

          <span className="text-gray-500"> Since last week </span>
        </p> */}
      </div>
      <Button variant="link" asChild>
        <Link href={`/profile/orders/${order.id}`}>Order Details</Link>
      </Button>
    </Card>
  );
}

export default OrderCard;
