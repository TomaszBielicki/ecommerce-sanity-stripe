import React from "react";
import Link from "next/link";
import { imageUrlFor } from "../lib/client";

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <Link href={`/product/${slug.current}`}>
      <img src={imageUrlFor(image && image[0])} width={250} height={250} />
      <p>{name}</p>
      <p>{price}</p>
    </Link>
  );
};

export default Product;
