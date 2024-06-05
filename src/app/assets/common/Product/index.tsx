import Image, { StaticImageData } from "next/image";
import React from "react";
import "./styles.css";
import { Heading, Text } from "@radix-ui/themes";

interface ProductProps {
  id: number;
  name: string;
  price: number;
  image: StaticImageData;
}

interface ProductComponentProps {
  product: ProductProps;
  classname: string;
}

const Product = ({ product, classname }: ProductComponentProps) => {
  return (
    <div key={product.id} className={`product ${classname}`}>
      <Image src={product.image} alt={product.name} />
      <div className="product-info">
        <Heading as="h2">{product.name}</Heading>
        <Text as="span">${product.price}</Text>
      </div>
    </div>
  );
};

export default Product;
