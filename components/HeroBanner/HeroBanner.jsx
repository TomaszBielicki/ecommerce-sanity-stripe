import React from "react";

import { imageUrlFor } from "../../lib/client";

import {
  ImgWrapper,
  Image,
  ContentWrapper,
  TextWrapper,
} from "./HeroBanner.style";
const HeroBanner = ({ heroBanner }) => {
  return (
    <ContentWrapper>
      <TextWrapper>
        <div className="beats-solo">{heroBanner.smallText}</div>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
      </TextWrapper>

      <ImgWrapper>
        <Image src={imageUrlFor(heroBanner.image.asset)} />
      </ImgWrapper>
    </ContentWrapper>
  );
};

export default HeroBanner;
