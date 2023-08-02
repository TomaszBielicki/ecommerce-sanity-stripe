import React from "react";

import { imageUrlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  //console.log("heroBanner ", heroBanner[0].smallText);
  //console.log("hero img", imageUrlFor(heroBanner.image.asset));
  return (
    <>
      <div className="beats-solo">{heroBanner.smallText}</div>
      <h3>{heroBanner.smallText}</h3>
      <h1>{heroBanner.largeText1}</h1>
      <img src={imageUrlFor(heroBanner.image.asset)} />
    </>
  );
};

export default HeroBanner;
