"use client";

import { useParams } from "next/navigation";
import React from "react";

const ProductId = () => {
  const { key } = useParams();
  return <div>{key}</div>;
};



export default ProductId;
