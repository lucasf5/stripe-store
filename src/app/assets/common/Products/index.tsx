// src/app/assets/common/Products.tsx

"use client";

import React, { useEffect } from "react";

import "./styles.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Product from "../Product";

const Products = ({ products }: any) => {
  useEffect(() => {
    console.log(products);
  }, [products]);

  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <div ref={ref} className="keen-slider">
      {products.map((product: any) => (
        <Product
          key={product.id}
          product={product}
          classname="keen-slider__slide"
        />
      ))}
    </div>
  );
};

export default Products;
