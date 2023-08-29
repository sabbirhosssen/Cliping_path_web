// import React from 'react';

import EcommerceAboutSay from "./EcommerceAboutSay/EcommerceAboutSay";
import EcommerceAllWork from "./EcommerceAllWork/EcommerceAllWork";
import EcommerceFaq from "./EcommerceFaq/EcommerceFaq";
import EcommerceFeatures from "./EcommerceFeatures/EcommerceFeatures";
import EcommerceGet from "./EcommerceGet/EcommerceGet";
import EcommerceHeader from "./EcommerceHeader/EcommerceHeader";
import EcommercePricing from "./EcommercePricing/EcommercePricing";
import EcommerceProductService from "./EcommerceProductService/EcommerceProductService";
import EcommerceQoute from "./EcommerceQoute/EcommerceQoute";
import EcommerceService from "./EcommerceService/EcommerceService";

const Ecommerce = () => {
  return (
    <div>
      <EcommerceHeader />
      <EcommerceQoute />
      <EcommerceAboutSay />
      <EcommerceAllWork />
      <EcommerceGet />
      <EcommerceProductService />
      <EcommerceFeatures />
      <EcommerceService />
      <EcommercePricing />
      <EcommerceFaq />
    </div>
  );
};

export default Ecommerce;
