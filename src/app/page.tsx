import React from "react";
import Products from "./assets/common/Products";

export const metadata = {
  title: "Home",
  description: "Welcome to our homepage",
};

async function fetchData() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return {
    props: {},
  };
}

export default async function Home() {
  const { props } = await fetchData();

  return (
    <main>
      <Products products={props} />
    </main>
  );
}
