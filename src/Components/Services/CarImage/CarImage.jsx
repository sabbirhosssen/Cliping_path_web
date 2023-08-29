// import React from 'react';

import CarImageAboutSay from "./CarImageAboutSay/CarImageAboutSay";
import CarImageAllWork from "./CarImageAllWork/CarImageAllWork";
import CarImageFaq from "./CarImageFaq/CarImageFaq";
import CarImageFeatures from "./CarImageFeatures/CarImageFeatures";
import CarImageGet from "./CarImageGet/CarImageGet";
import CarImageHeader from "./CarImageHeader/CarImageHeader";
import CarImagePricing from "./CarImagePricing/CarImagePricing";
import CarImageQuote from "./CarImageQuote/CarImageQuote";
import CarImageWeWork from "./CarImageWeWork/CarImageWeWork";

const CarImage = () => {
  return (
    <div>
      <CarImageHeader />
      <CarImageQuote />
      <CarImageAboutSay />
      <CarImageAllWork />
      <CarImageGet />
      <CarImageWeWork />
      <CarImageFeatures />
      <CarImagePricing />
      <CarImageFaq />
    </div>
  );
};

export default CarImage;
