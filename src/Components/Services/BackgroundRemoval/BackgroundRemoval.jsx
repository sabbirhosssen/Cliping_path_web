// import React from "react";

import BackAboutSay from "./BackAboutSay/BackAboutSay";
import BackAllWork from "./BackAllWork/BackAllWork";
import BackFaq from "./BackFaq/BackFaq";
import BackFeatures from "./BackFeatures/BackFeatures";
import BackHeader from "./BackHeader/BackHeader";
import BackPricing from "./BackPricing/BackPricing";
import BackQuote from "./BackQuote/BackQuote";
import BackRemove from "./BackRemove/BackRemove";
import BackService from "./BackService/BackService";
import BackgroundGet from "./BackgroundGet/BackgroundGet";

const BackgroundRemoval = () => {
  return (
    <div>
      <BackHeader />
      <BackQuote />
      <BackAboutSay />
      <BackAllWork />
      <BackgroundGet />
      <BackRemove />
      <BackFeatures />
      <BackService />
      <BackPricing />
      <BackFaq />
    </div>
  );
};

export default BackgroundRemoval;
