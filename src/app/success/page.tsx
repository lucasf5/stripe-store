import { stripe } from "@/lib/stripe";
import React from "react";
import "./styles.css";

interface SuccessProps {
  searchParams: {
    session_id?: string;
  };
}

const fetchProductData = async (key: string) => {
  try {
    const response = await stripe.checkout.sessions.retrieve(key, {
      expand: ["line_items.data.price.product"],
    });

    return response;
  } catch (error) {
    console.error(error);
  }
};

const Success = async ({ searchParams }: SuccessProps) => {
  const { session_id } = searchParams;
  const product = await fetchProductData(session_id as string);

  console.log(product);

  return (
    <div className="success-container">
      <h1>Thank you for your purchase!</h1>
      <p>Your payment was successful.</p>
      <div className="product-details">
        <h2>Product Details</h2>
        <p>
          <strong>Product Name:</strong>{" "}
          {product?.line_items?.data[0].description}
        </p>
        <p>
          <strong>Total Amount:</strong> $
          {(product.amount_total / 100).toFixed(2)}{" "}
          {product.currency.toUpperCase()}
        </p>
        <p>
          <strong>Customer Email:</strong> {product.customer_details.email}
        </p>
      </div>
    </div>
  );
};

export default Success;
