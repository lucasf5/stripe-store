"use client";

import { useParams } from "next/navigation";
import React from "react";
import { Button } from "@/ui/button";

const ProductId = () => {
  const { key } = useParams();
  return (
    <div>
      <Button>Product: {key}</Button>
      <h1>
        Product: <span>{key}</span>
      </h1>
    </div>
  );
};

export default ProductId;
