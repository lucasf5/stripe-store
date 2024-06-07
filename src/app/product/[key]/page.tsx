// app/product/[key]/page.tsx (Server Component)
import { stripe } from "@/lib/stripe";
import React, { Suspense } from "react";
import Stripe from "stripe";
import ProductDetails from "./productDetails";
import { notFound, useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";

async function fetchProductData(key: string) {
  try {
    const response = await stripe.products.retrieve(key, {
      expand: ["default_price"],
    });

    if (!response) {
      notFound();
    }

    const price = response.default_price as Stripe.Price;
    const priceInCents =
      price.unit_amount !== null ? price.unit_amount / 100 : 0;
    const priceFormatted = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: price.currency,
    }).format(priceInCents);

    return {
      id: response.id,
      name: response.name,
      description: response.description || "",
      images: response.images,
      price: priceFormatted,
      default_price_id: price.id,
    };
  } catch (error) {
    notFound();
  }
}

const ProductPage = async ({ params }: any) => {
  const product = await fetchProductData(params.key);

  revalidatePath("/");

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductDetails product={product} />
    </Suspense>
  );
};

export default ProductPage;
