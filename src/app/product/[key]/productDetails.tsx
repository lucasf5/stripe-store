"use client";

import Image from "next/image";
import React from "react";
import "./styles.css";

interface ProductInterface {
  name: string;
  description: string;
  images: string[];
  price: string;
  default_price_id: string;
}

const ProductDetails = ({ product }: { product: ProductInterface }) => {
  const handleBuy = async () => {
    try {
      const response = await fetch("/api/hello", {
        method: "POST",
        body: JSON.stringify({ priceId: product.default_price_id }),
      });

      const data = await response.json();

      window.location.href = data.url;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <Image
        src={product.images[0]}
        alt={product.name}
        width={500}
        height={450}
        className="product-image"
      />
      <div className="product-details">
        <h1 className="product-title">{product.name}</h1>
        <p className="product-price">{product.price}</p>
        <p className="product-description">{product.description}</p>
        <button className="button" onClick={handleBuy}>
          Comprar agora
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
