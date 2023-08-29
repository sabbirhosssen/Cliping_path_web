// import React from 'react';

import GhostAboutSay from "./GhostAboutSay/GhostAboutSay";
import GhostAllWork from "./GhostAllWork/GhostAllWork";
import GhostFaq from "./GhostFaq/GhostFaq";
import GhostFeatures from "./GhostFeatures/GhostFeatures";
import GhostGet from "./GhostGet/GhostGet";
import GhostHeader from "./GhostHeader/GhostHeader";
import GhostPricing from "./GhostPricing/GhostPricing";
import GhostQuote from "./GhostQuote/GhostQuote";
import GhostService from "./GhostService/GhostService";
import GhostWeWork from "./GhostWeWork/GhostWeWork";

const Ghost = () => {
  return (
    <div>
      <GhostHeader />
      <GhostQuote />
      <GhostAboutSay />
      <GhostAllWork />
      <GhostGet />
      <GhostWeWork />
      <GhostFeatures />
      <GhostService />
      <GhostPricing />
      <GhostFaq />
    </div>
  );
};

export default Ghost;
