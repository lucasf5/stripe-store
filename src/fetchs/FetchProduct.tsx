import { stripe } from "@/lib/stripe";
import Stripe from "stripe";

export const FetchProduct = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  return response.data.map((product: Stripe.Product) => {
    const price = product.default_price as Stripe.Price;
    const priceInCents =
      price.unit_amount !== null ? price.unit_amount / 100 : 0;
    const priceFormatted = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: price.currency,
    }).format(priceInCents);
    return {
      id: product.id,
      name: product.name,
      price: priceFormatted,
      image: product.images[0] || null,
    };
  });
};
