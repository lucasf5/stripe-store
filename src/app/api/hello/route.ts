import { stripe } from "@/lib/stripe";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { priceId } = body;

  // Obtendo a URL de referência
  const referer = req.headers.get("referer");
  if (!referer) {
    return NextResponse.json(
      { error: "Referer header is missing" },
      { status: 400 }
    );
  }

  // Construindo a origem da URL
  const url = new URL(referer);
  const origin = url.origin;

  // Criando a sessão de checkout no Stripe
  const checkoutSession = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/cancel`,
  });

  return NextResponse.json({ url: checkoutSession.url });
}
