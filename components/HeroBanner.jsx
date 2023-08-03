import React from "react";

import { imageUrlFor } from "../lib/client";

import { ImgWrapper, Image } from "./HeroBanner.style";

const HeroBanner = ({ heroBanner }) => {
  return (
    <>
      <div className="beats-solo">{heroBanner.smallText}</div>
      <h3>{heroBanner.midText}</h3>
      <h1>{heroBanner.largeText1}</h1>
      <ImgWrapper>
        <Image src={imageUrlFor(heroBanner.image.asset)} />
      </ImgWrapper>
    </>
  );
};

export default HeroBanner;
