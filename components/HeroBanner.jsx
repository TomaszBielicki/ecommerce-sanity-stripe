import React from "react";

import { imageUrlFor } from "../lib/client";

import { ImgWrapper, Image, ContentWrapper } from "./HeroBanner.style";
import MenuIcon from "icons";
const HeroBanner = ({ heroBanner }) => {
  return (
    <ContentWrapper>
      <MenuIcon />
      <div className="beats-solo">{heroBanner.smallText}</div>
      <h3>{heroBanner.midText}</h3>
      <h1>{heroBanner.largeText1}</h1>
      <ImgWrapper>
        <Image src={imageUrlFor(heroBanner.image.asset)} />
      </ImgWrapper>
    </ContentWrapper>
  );
};

export default HeroBanner;
