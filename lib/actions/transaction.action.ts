"use server";

import { redirect } from "next/navigation";
import Stripe from "stripe";
import { handleError } from "../utils";
import Transaction from "../database/models/transaction.model";
import { dbConnect as connectToDatabase } from "../database/mongoose";
import { updateCredits } from "./user.action";

export async function checkoutCredits(transaction: CheckoutTransactionParams) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

    const amount = Number(transaction.amount) * 100;

    const session = await stripe.checkout.sessions.create({
        line_items: [{
            price_data: {
                currency: "usd",
                unit_amount: amount,
                product_data: {
                    name: transaction.plan
                }
            },
            quantity: 1
        }],
        metadata: {
            plan: transaction.plan,
            credits: transaction.credits,
            buyerId: transaction.buyerId
        },
        mode: "payment",
        success_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/profile`,
        cancel_url: `${process.env.NEXT_PUBLIC_SERVER_URL}/profile`,
    });
    redirect(session.url!);
}

export async function createTransaction(transaction: CreateTransactionParams) {
    try{
        await connectToDatabase();
        const newTransaction = await Transaction.create({
            ...transaction, buyer: transaction.buyerId
        })
        await updateCredits(transaction.buyerId, Number(transaction.credits));
        return JSON.parse(JSON.stringify(newTransaction));
    }
    catch(error: any){
        handleError(error);
    }
}
