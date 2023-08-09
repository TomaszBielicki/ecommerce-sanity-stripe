import React from "react";
import Link from "next/link";
import { imageUrlFor } from "../../lib/client";
import { ProductWrapper, Image, TextWrapper } from "./Product.style";

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <ProductWrapper>
      <Link href={`/product/${slug.current}`}>
        <Image src={imageUrlFor(image && image[0])} width={250} height={250} />
        <TextWrapper>
          <p>{name}</p>
          <p>{price} zł</p>
        </TextWrapper>
      </Link>
    </ProductWrapper>
  );
};

export default Product;
