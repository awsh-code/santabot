import Stripe from "stripe";
import { NextResponse } from "next/server";
// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

// const stripe = require('stripe')('sk_test_51IK1rBINj6G1UXatJUCwFrTh63PZiy3kkJWIXhWk72qQX5N2tD2uCqbbC4oH8ibcGcNkRo53bbDKy3816sQCV00d00OElzbcse');

// const session = await stripe.checkout.sessions.create({
//   success_url: 'https://example.com/success',
//   line_items: [
//     {
//       price: 'price_1MotwRLkdIwHu7ixYcPLm5uZ',
//       quantity: 2,
//     },
//   ],
//   mode: 'payment',
// });

export async function POST(req) {
  //   const supabase = createServerComponentClient({ cookies });
  console.log("req", req);
  console.log("req", req.body);

  try {
    // const {
    //   data: { user },
    // } = await supabase.auth.getUser();

    // if (!user) throw Error();

    const body = await req.json();
    const stripe = new Stripe(process.env.STRIPE_SK_KEY || "");

    // const res = await stripe.paymentIntents.create({
    //   // amount: Number(300),
    //   // amount: Number(),
    //   amount: Math.round(Number(body.amount) * 100),
    //   currency: "usd",
    //   automatic_payment_methods: { enabled: true },

    // });
    const stripeSession = await stripe.checkout.sessions.create({
      // amount: Number(300),
      // amount: Number(),
      // amount: Math.round(Number(body.amount) * 100),
      // currency: "usd",
      // automatic_payment_methods: { enabled: true },
      mode: "payment",
      customer_email: "erraco.wow@gmail.com",
      success_url:
        "http://localhost:3000/letters/success?session_id={CHECKOUT_SESSION_ID}",
      line_items: [
        {
          price: "price_1OPYirINj6G1UXatKWCJxVo3",
          quantity: 1,
        },
      ],
      discounts: [
        {
          coupon: "0WBzaasN",
        },
      ],
    });

    return new NextResponse(JSON.stringify({ url: stripeSession.url }));
    // return NextResponse.json(res);
  } catch (error) {
    console.log(error);
    return new NextResponse("Something went wrong", { status: 400 });
  }
}
