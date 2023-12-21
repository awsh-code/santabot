"use client";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useRef, useState } from "react";
import { useLetter } from "@/lib/store/letter";
import { useOverlayBlocker } from "@/components/overlay-blocker";
import { useRouter } from "next/navigation";
import CouponModal from "@/components/letter/coupon-modal";

export function PaymentCard({ userAddresses }) {
  const router = useRouter();
  // router.push("/letters/success");
  const letterCartState = useLetter((state) => state);
  const couponState = useLetter((state) => state.coupon);
  const resetLetter = useLetter((state) => state.resetLetter);
  const addressSelected = useLetter((state) => state.addressSelected);
  const { lockApp, unlockApp } = useOverlayBlocker();

  // if (letterCartState.letter.step === 1) {
  //   router.push("/letters");
  // }

  let stripe = useRef(null);
  let elements = useRef(null);
  let card = useRef(null);
  let clientSecret = useRef(null);

  const calcPercentage = (num, per) => {
    const percentageTotal = (num / 100) * per;
    return num - percentageTotal;
  };

  // useEffect(() => {
  //   setTimeout(() => stripeInit(), 300);
  // }, [couponState]);

  const stripeInit = async () => {
    stripe.current = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PK_KEY || ""
    );

    console.log(
      "total",
      couponState
        ? calcPercentage(
            letterCartState.letterPackage.price,
            couponState.percentage
          )
        : letterCartState.letterPackage.price
    );
    const response = await fetch("/api/stripe", {
      method: "POST",
      body: JSON.stringify({
        amount: couponState
          ? calcPercentage(
              letterCartState.letterPackage.price,
              couponState.percentage
            )
          : letterCartState.letterPackage.price,
      }),
      // body: JSON.stringify({ amount: cart.cartTotal() }),
    });
    const result = await response.json();

    clientSecret.current = result.client_secret;
    elements.current = stripe.current.elements();
    var style = {
      base: { fontSize: "18px" },
      invalid: {
        fontFamily: "Arial, sans-serif",
        color: "#EE4B2B",
        iconColor: "#EE4B2B",
      },
    };
    card.current = elements.current.create("card", {
      hidePostalCode: true,
      style: style,
    });

    card.current.mount("#card-element");
    card.current.on("change", function (event) {
      document.querySelector("button").disabled = event.empty;
      document.querySelector("#card-error").textContent = event.error
        ? event.error.message
        : "";
    });
  };

  const [isPaying, setIsPaying] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const pay = async (event) => {
    event.preventDefault();
    setIsPaying(true);
    lockApp();

    if (Object.entries(addressSelected).length == 0) {
      toast({
        title: "Please select an address",
      });
      unlockApp();
      setIsPaying(false);
      return;
    }

    let result = await stripe.current.confirmCardPayment(clientSecret.current, {
      payment_method: { card: card.current },
    });
    console.log("result", result);

    if (result.error) {
      unlockApp();
      setIsPaying(false);
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: result.error.message,
      });
      // showError(result.error.message);
    } else {
      // useIsLoading(true)
      const addressDetails = {
        name: addressSelected.name,
        address: addressSelected.address,
        zipcode: addressSelected.zipcode,
        city: addressSelected.city,
        country: addressSelected.country,
      };
      const cart = [
        {
          ...letterCartState.letterPackage,
        },
      ];

      try {
        let response = await fetch("/api/orders/create", {
          method: "POST",
          body: JSON.stringify({
            stripe_id: result.paymentIntent.id,
            name: addressDetails.name,
            address: addressDetails.address,
            zipcode: addressDetails.zipcode,
            city: addressDetails.city,
            country: addressDetails.country,
            products: cart,
            total: couponState
              ? calcPercentage(
                  letterCartState.letterPackage.price,
                  couponState.percentage
                )
              : letterCartState.letterPackage.price,
            // total: letterCartState.letterPackage.price,
            // products: cart.getCart(),
            // total: cart.cartTotal()
          }),
        });
        const responseData = await response.json();
        if (response.status === 400) {
          setIsPaying(false);
          unlockApp();
          toast({
            variant: "destructive",
            title: "Something went wrong?",
            description: (
              <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                {/* <code className="text-white">{error.message}</code> */}
              </pre>
            ),
          });
        }

        if (response.status == 200) {
          router.push(`/letters/success?order=${responseData.order}`);
          unlockApp();
          // toast.success("Order Complete!", { autoClose: 3000 });
          toast({
            title: "Order Complete!",
          });
          resetLetter();
          // cart.clearCart();
        }
      } catch (error) {
        console.log(error);
        setIsPaying(false);
        unlockApp();
        toast({
          variant: "destructive",
          title: "Something went wrong?",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">{error.message}</code>
            </pre>
          ),
        });
        // toast.error("Something went wrong?", { autoClose: 3000 });
      }

      // useIsLoading(false)
    }
  };
  const payV2 = async (event) => {
    event.preventDefault();
    setIsPaying(true);
    lockApp();

    if (Object.entries(addressSelected).length == 0) {
      toast({
        title: "Please select an address",
      });
      unlockApp();
      setIsPaying(false);
      return;
    }

    const response = await fetch("/api/stripe", {
      method: "POST",
      body: JSON.stringify({
        amount: couponState
          ? calcPercentage(
              letterCartState.letterPackage.price,
              couponState.percentage
            )
          : letterCartState.letterPackage.price,
      }),
      // body: JSON.stringify({ amount: cart.cartTotal() }),
    });
    const data = await response.json();
    console.log("data", data);
    window.location.href = data.url;
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Card>
        <CardHeader className="flex flex-row justify-between">
          <div>
            <CardTitle>Payment Method</CardTitle>
            <CardDescription>
              Add a new payment method to your account.
            </CardDescription>
          </div>
          {/* <CouponModal /> */}
        </CardHeader>

        <CardContent className="grid gap-6">
          <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">
            <div>
              <RadioGroupItem value="card" id="card" className="peer sr-only" />
              <Label
                htmlFor="card"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="mb-3 h-6 w-6"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <path d="M2 10h20" />
                </svg>
                Card
              </Label>
            </div>
            <div>
              <RadioGroupItem
                disabled
                value="paypal"
                id="paypal"
                className="peer sr-only"
              />
              <Label
                htmlFor="paypal"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <Icons.paypal className="mb-3 h-6 w-6" />
                Paypal
              </Label>
            </div>
            <div>
              <RadioGroupItem
                value="apple"
                id="apple"
                className="peer sr-only"
                disabled
              />
              <Label
                htmlFor="apple"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <Icons.apple className="mb-3 h-6 w-6" />
                Apple
              </Label>
            </div>
          </RadioGroup>
          {/* <form onSubmit={pay}> */}
          <form onSubmit={payV2}>
            {/* <div
              className="border border-gray-500 p-2 rounded-sm"
              id="card-element"
            />

            <p
              id="card-error"
              role="alert"
              className="text-red-700 text-center font-semibold relative top-2"
            /> */}
            <Button className="w-full mt-4" type="submit" disabled={isPaying}>
              Continue
            </Button>
          </form>
        </CardContent>
        {/* <CardFooter>
        <Button className="w-full">Continue</Button>
      </CardFooter> */}
      </Card>
    </motion.div>
  );
}
