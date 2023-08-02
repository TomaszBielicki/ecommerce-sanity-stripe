import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { client } from "../../lib/client";
import { FooterBanner, HeroBanner, Navbar, Product } from "../../components";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ products, bannerData }) {
  return (
    <>
      <HeroBanner heroBanner={bannerData[0]} />

      <div>
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "product"]`;
  const products = await client.fetch(query);

  const bannerQuery = `*[_type == "banner"]`;
  const bannerData = await client.fetch(bannerQuery);

  return { props: { products, bannerData } };
};
