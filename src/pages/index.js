import { Inter } from "next/font/google";
import { client } from "../../lib/client";
import {
  FooterBanner,
  HeroBanner,
  Product,
  Header,
  CategorySection,
} from "../../components";
import AboutUs from "../../components/AboutUs/AboutUs";
const inter = Inter({ subsets: ["latin"] });

export default function Home({ products, bannerData }) {
  return (
    <>
      <Header />
      <HeroBanner heroBanner={bannerData[0]} />

      <div>
        <h2>You may like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
      <CategorySection />
      <AboutUs />
      {/* <FooterBanner footerBanner={bannerData && bannerData[0]} /> */}
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
