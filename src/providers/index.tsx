"use client";

import { ProductProvider } from "./ProductProvider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ProductProvider>{children}</ProductProvider>
    </>
  );
};
