// import React from 'react';

const BackService = () => {
  const design =
    "https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/list-icon.svg";
  return (
    <div>
      <div className="md:px-32 px-12 md:py-16 py-10  bg-[#f5f6fb] bg-[url('https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/offer-bg.svg')]  bg-no-repeat bg-center ">
        <div className="text-center md:my-0 my-6">
          <header className="md:text-3xl xl:mx-28 mx-0 text-2xl font-sans font-bold mb-3">
            We Offer More Than Just Background Removal
          </header>
          <div className="md:text-sm text-xs text-gray-600 ">
            We offer the most cost-effective services maintaining quality!
          </div>
        </div>
        <div className=" md:grid md:grid-cols-2 md:gap-4  py-6">
          <div className="hs">
            <div className="co">
              <div className="flex justify-start items-baseline mb-2">
                <div className=" pe-2">
                  <img src={design} className=" " alt="" srcSet="" />
                </div>
                <div className="text-sm font-sans font-semibold text-[#4f5864]">
                  Product White Background Service for Amazon
                </div>
              </div>
              <div className="flex justify-start items-center mb-2">
                <div className=" pe-2">
                  <img src={design} alt="" srcSet="" />
                </div>
                <div className="text-sm font-sans font-semibold text-[#4f5864]">
                  Image Cutout Service
                </div>
              </div>
              <div className="flex justify-start items-center mb-2">
                <div className=" pe-2">
                  <img src={design} alt="" srcSet="" />
                </div>
                <div className="text-sm font-sans font-semibold text-[#4f5864]">
                  Removing or Adding Watermark
                </div>
              </div>
            </div>
          </div>
          <div className="hs">
            <div className="co">
              <div className="flex justify-start items-center mb-2">
                <div className=" pe-2">
                  <img src={design} alt="" srcSet="" />
                </div>
                <div className="text-sm font-sans font-semibold text-[#4f5864]">
                  Background Color Changing
                </div>
              </div>
              <div className="flex justify-start items-center mb-2">
                <div className=" pe-2">
                  <img src={design} alt="" srcSet="" />
                </div>
                <div className="text-sm font-sans font-semibold text-[#4f5864]">
                  Removing Specific Item from Background
                </div>
              </div>
              <div className="flex justify-start items-baseline mb-2">
                <div className=" pe-2">
                  <img src={design} alt="" srcSet="" />
                </div>
                <div className="text-sm font-sans font-semibold text-[#4f5864]">
                  Background Editing for Ecommerce and Fashion Industry
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackService;
