/* eslint-disable camelcase */
import { createTransaction } from "@/lib/actions/transaction.action";
import { NextResponse } from "next/server";
import Stripe from "stripe";

export const config = {
  api: {
    bodyParser: false, // disable body parsing for raw Stripe body
  },
};

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-04-30.basil",
});

export async function POST(request: Request) {
  const rawBody = await request.text(); // preserve raw text
  const sig = request.headers.get("stripe-signature") as string;
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

  let event;

  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret);
  } catch (err: any) {
    console.error("❌ Webhook signature verification failed:", err.message);
    return NextResponse.json({ message: "Webhook error", error: err.message }, { status: 400 });
  }

  // Log event type
  console.log("✅ Stripe event received:", event.type);

  if (event.type === "checkout.session.completed") {
    const { id, amount_total, metadata } = event.data.object as Stripe.Checkout.Session;

    const transaction = {
      stripeId: id,
      amount: amount_total ? amount_total / 100 : 0,
      plan: metadata?.plan || "",
      credits: Number(metadata?.credits) || 0,
      buyerId: metadata?.buyerId || "",
      createdAt: new Date(),
    };
    const newTransaction = await createTransaction(transaction);

    return NextResponse.json({ message: "OK", transaction: newTransaction });
  }

  return new Response("Unhandled event type", { status: 200 });
}
