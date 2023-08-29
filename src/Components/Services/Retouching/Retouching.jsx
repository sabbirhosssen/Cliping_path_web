// import React from 'react';

import RetouchingAboutSay from "./RetouchingAboutSay/RetouchingAboutSay";
import RetouchingAllWork from "./RetouchingAllWork/RetouchingAllWork";
import RetouchingFaq from "./RetouchingFaq/RetouchingFaq";
import RetouchingFeatures from "./RetouchingFeatures/RetouchingFeatures";
import RetouchingGet from "./RetouchingGet/RetouchingGet";
import RetouchingHeader from "./RetouchingHeader/RetouchingHeader";
import RetouchingPricing from "./RetouchingPricing/RetouchingPricing";
import RetouchingQuote from "./RetouchingQuote/RetouchingQuote";
import RetouchingService from "./RetouchingService/RetouchingService";
import RetouchingWeWork from "./RetouchingWeWork/RetouchingWeWork";

const Retouching = () => {
  return (
    <div>
      <RetouchingHeader />
      <RetouchingQuote />
      <RetouchingAboutSay />
      <RetouchingAllWork />
      <RetouchingGet />
      <RetouchingWeWork />
      <RetouchingFeatures />
      <RetouchingService />
      <RetouchingPricing />
      <RetouchingFaq />
    </div>
  );
};

export default Retouching;
