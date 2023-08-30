// import React from 'react';

import CarImageAboutSay from "./CarImageAboutSay/CarImageAboutSay";
import CarImageAllWork from "./CarImageAllWork/CarImageAllWork";
import CarImageFeatures from "./CarImageFeatures/CarImageFeatures";
import CarImageGet from "./CarImageGet/CarImageGet";
import CarImageHeader from "./CarImageHeader/CarImageHeader";
import CarImageQuote from "./CarImageQuote/CarImageQuote";
import CarImageS_layout from "./CarImageService/CarImageS_layout";
import CarImageService from "./CarImageService/CarImageService";
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
      <CarImageService />
      <CarImageS_layout />
    </div>
  );
};

export default CarImage;
