import { Inter } from "next/font/google";
import { client } from "../../lib/client";
import { FooterBanner, HeroBanner, Product, Header } from "../../components";
const inter = Inter({ subsets: ["latin"] });

export default function Home({ products, bannerData }) {
  return (
    <>
      <Header />
      <HeroBanner heroBanner={bannerData[0]} />

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
