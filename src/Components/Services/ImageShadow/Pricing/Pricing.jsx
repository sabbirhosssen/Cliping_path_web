// import React from 'react';

const Pricing = () => {
  const pricingimg =
    "https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/price-img.png";
  return (
    <div className="md:px-32 px-12 md:pb-16 md:pt-6 bg-[#f5f6fb] ">
      <div className="rounded-lg bg-white md:bg-[url('https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/price-bg.svg')] bg-no-repeat bg-center bg-contain px-16 py-8 ">
        <div className="md:flex md:justify-center md:items-center gap-5">
          <div className="md:w-8/12 md:flex md:justify-start md:items-start md:ps-4 md:gap-3">
            <div className="js">
              <img src={pricingimg} alt="pricing" />
            </div>
            <div className="md:my-0 my-4">
              <header className="md:text-3xl text-2xl font-sans font-bold">
                Our Pricing
              </header>
              <div className="text-gray-600 text-sm font-sans">
                Our service comes with the best deals at an affordable price.{" "}
                <span className="text-blue-600 hover:text-[#ff8a00]">
                  See our pricing
                </span>{" "}
                to place an order!
              </div>
            </div>
          </div>
          <div className="md:w-4/12 md:m-8 my-6">
            <div className="">
              <div className=" bg-slate-50 px-2 py-6 border rounded-tr-3xl rounded-bl-3xl">
                <div className="block text-left text-sm">Starting at</div>
                <div className="block m-0 text-center font-semibold text-3xl text-[#ff8a00]">
                  35¢
                </div>
                <div className="block text-right text-xs text-gray-600">
                  Per Image
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
