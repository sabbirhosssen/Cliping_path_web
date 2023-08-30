// import React from 'react';

import PricingFeatures from "./PricingFeatures";
import PricingRequest from "./PricingRequest";
import PricingService from "./PricingService";
import Pricingheading from "./Pricingheading";

const Pricing = () => {
  return (
    <div className=" ">
      <Pricingheading />
      <div className="md:px-32 px-6 md:pb-16 pb-12 md:pt-6 bg-[#f5f6fb] ">
        <PricingService />
        <PricingRequest />
      </div>
      <PricingFeatures />
    </div>
  );
};

export default Pricing;
