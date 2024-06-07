import { stripe } from "@/lib/stripe";
import React, { createContext, useState, useEffect } from "react";
import Stripe from "stripe";

// Define the shape of the context data
interface ProductContextProps {
  products: {
    id: string;
    name: string;
    price: string;
    image: string | null;
  }[];
}

// Create the context
const ProductContext = createContext<ProductContextProps>({ products: [] });

const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<ProductContextProps["products"]>([]);

  async function fetchData() {
    const response = await stripe.products.list({
      expand: ["data.default_price"],
    });

    const products = response.data.map((product: Stripe.Product) => {
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

    setProducts(products);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductProvider, ProductContext };
