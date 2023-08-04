import React from "react";
import Link from "next/link";
import { imageUrlFor } from "../lib/client";
import { ProductWrapper } from "./Product.style";

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <ProductWrapper>
      <Link href={`/product/${slug.current}`}>
        <img src={imageUrlFor(image && image[0])} width={250} height={250} />
        <p>{name}</p>
        <p>{price}</p>
      </Link>
    </ProductWrapper>
  );
};

export default Product;
