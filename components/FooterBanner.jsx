import React from "react";
import Link from "next/link";

import { imageUrlFor } from "../lib/client";

const FooterBanner = ({ footerBanner }) => {
  
  return (
    <div>
      <p>{footerBanner.discount}</p>
      <h3>{footerBanner.largeText1}</h3>
      <h3>{footerBanner.largeText2}</h3>
      <p>{footerBanner.saleTime}</p>
    </div>
  );
};

export default FooterBanner;
