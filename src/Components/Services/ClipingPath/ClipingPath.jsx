// import React from "react";
import ClipAboutSay from "./ClipAboutSay/ClipAboutSay";
import ClipAllWork from "./ClipAllWork/ClipAllWork";
import ClipFaq from "./ClipFaq/ClipFaq";
import ClipFaqService from "./ClipFaqService/ClipFaqService";
import ClipFeatures from "./ClipFeatures/ClipFeatures";
import ClipGet from "./ClipGet/ClipGet";
import ClipHeader from "./ClipHeader/ClipHeader";
import ClipPricing from "./ClipPricing/ClipPricing";
import ClipQoute from "./ClipQuote/ClipQoute";
import ClipService from "./ClipService/ClipService";
import ClipWeWork from "./ClipWeWork/ClipWeWork";

const ClipingPath = () => {
  return (
    <div>
      <ClipHeader />
      <ClipQoute />
      <ClipAboutSay />
      <ClipAllWork />
      <ClipGet />
      <ClipWeWork />
      <ClipFeatures />
      <ClipService />
      <ClipPricing />
      <ClipFaqService />
      <ClipFaq />
    </div>
  );
};

export default ClipingPath;
