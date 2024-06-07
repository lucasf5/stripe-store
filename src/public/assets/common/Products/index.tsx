"use client";

import React from "react";

import "./styles.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Product from "../Product";
import { Text } from "@radix-ui/themes/dist/cjs/components/callout";
import Link from "next/link";

const Products = (props: any) => {
  const { products } = props;
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <div ref={ref} className="keen-slider">
      {!products ? (
        <Text>Loading...</Text>
      ) : (
        products.map((product: any) => (
          <Link href={`/product/${product.id}`} passHref key={product.id}>
            <Product
              key={product.id}
              product={product}
              classname="keen-slider__slide"
            />
          </Link>
        ))
      )}
    </div>
  );
};

export default Products;
