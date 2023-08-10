import React from "react";
import { client } from "../../lib/client";
import { useRouter } from "next/router";

import { Product } from "components";
import { ProductsWrapper } from "../../components/Product/Product.style";

function Products({ products }) {
  const router = useRouter();

  const moveToHomeHandler = () => {
    router.push("/");
  };

  return (
    <ProductsWrapper>
      <button onClick={moveToHomeHandler}>Home</button>

      {products.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </ProductsWrapper>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "product"]`;
  const products = await client.fetch(query);

  return { props: { products } };
};

export default Products;
