import Stripe from "stripe"
import { NextResponse } from "next/server"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { orders }: { orders: Order[] } = body
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: orders.map((order) => ({
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: `${order.shoe.name} (Size ${order.size})`
                    },
                    unit_amount: Math.round(order.shoe.price * 100),
                },
                quantity: order.quantity,
            })),
            success_url: `${process.env.NEXT_PUBIC_APP_URL}/success`,
            cancel_url: `${process.env.NEXT_PUBIC_APP_URL}/carts`
        })
        return NextResponse.json({ id: session.id }, { status: 200 })

    } catch (error) {
        console.error("checkout error", error)
        return NextResponse.json({ error: "Something went wrong api route" }, { status: 500 })
    }


}