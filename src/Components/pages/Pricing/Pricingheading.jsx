// import React from 'react';
import svg_h from "../../Images/PageImage/pricing/Psvg-image.png";
import pricing_h from "./../../Images/PageImage/pricing/priceing_h.png";
const Pricingheading = () => {
  return (
    <div className="">
      <div
        className=" md:px-32 px-6 md:pb-16 pb-12 md:pt-6 bg-[#f5f6fb] bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: `url(${svg_h})` }}
      >
        <div className="md:flex md:justify-center md:items-center gap-4 ">
          <div className="md:w-6/12  ">
            <header className="text-3xl font-sans font-bold">
              Our Pricing List
            </header>
            <div className="text-xs text-gray-600 md:pe-16 mt-4">
              We are here for serving you the best quality services in image
              editing. Simply our{" "}
              <span className="text-md font-semibold text-blue-500 hover:text-red-200">
                basic image editing services
              </span>{" "}
              start at only $0.35 USD per image. Mainly price depends on how you
              want to edit your image and how complex is that? Then we estimate
              your price after discussing you.
            </div>
          </div>
          <div className="md:w-6/12 md:my-0 my-5">
            <img src={pricing_h} className="w-fit" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricingheading;
