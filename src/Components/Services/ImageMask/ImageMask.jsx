// import React from 'react';

import ImageMaskAboutSay from "./ImageMaskAboutSay/ImageMaskAboutSay";
import ImageMaskAllWork from "./ImageMaskAllWork/ImageMaskAllWork";
import ImageMaskFaq from "./ImageMaskFaq/ImageMaskFaq";
import ImageMaskFeatures from "./ImageMaskFeatures/ImageMaskFeatures";
import ImageMaskGet from "./ImageMaskGet/ImageMaskGet";
import ImageMaskHeader from "./ImageMaskHeader/ImageMaskHeader";
import ImageMaskPricing from "./ImageMaskPricing/ImageMaskPricing";
import ImageMaskQuote from "./ImageMaskQuote/ImageMaskQuote";
import ImageMaskService from "./ImageMaskService/ImageMaskService";
import ImageMaskWeWork from "./ImageMaskWeWork/ImageMaskWeWork";

const ImageMask = () => {
  return (
    <div>
      <ImageMaskHeader />
      <ImageMaskQuote />
      <ImageMaskAboutSay />
      <ImageMaskAllWork />
      <ImageMaskGet />
      <ImageMaskWeWork />
      <ImageMaskFeatures />
      <ImageMaskService />
      <ImageMaskPricing />
      <ImageMaskFaq />
    </div>
  );
};

export default ImageMask;
