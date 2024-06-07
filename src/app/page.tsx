import { FetchProduct } from "@/fetchs/FetchProduct";
import Products from "@/public/assets/common/Products";
import React from "react";

export const metadata = {
  title: "Home",
  description: "Welcome to our homepage",
};

async function fetchData() {
  const products = await FetchProduct();
  return products;
}

export default async function Home() {
  const products = await fetchData();
  return (
    <main>
      <Products products={products} />
    </main>
  );
}
