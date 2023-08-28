// import React from 'react';

const ServicesRequre = () => {
  const tableimg =
    "https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/work.png";
  const design =
    "https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/list-icon.svg";

  return (
    <div>
      <div className="md:px-32 px-12 md:py-16  bg-[#f5f6fb] flex flex-col-reverse md:flex md:flex-row ">
        <div className=" md:w-6/12 md:my-0 my-12">
          <header className="text-3xl font-sans font-bold">
            Who Might Require Our Service?
          </header>
          <div className="my-4 font-sans text-sm">
            The following industries have frequently requested our image shadow
            services throughout the years.
          </div>
          <div className="">
            <div className=" text-left ">
              <div className="flex justify-start items-baseline mb-2">
                <div className=" pe-2">
                  <img src={design} alt="" srcSet="" />
                </div>
                <div className="inline font-semibold text-gray-600">
                  Magazine Publishers
                </div>
              </div>
              <div className="flex justify-start items-center mb-2">
                <div className=" pe-2">
                  <img src={design} alt="" srcSet="" />
                </div>
                <div className="font-semibold text-gray-600">
                  eCommerce Retailers
                </div>
              </div>
              <div className="flex justify-start items-center mb-2">
                <div className=" pe-2">
                  <img src={design} alt="" srcSet="" />
                </div>
                <div className="font-semibold text-gray-600">
                  Car Dealers and Retailers
                </div>
              </div>
              <div className="flex justify-start items-center mb-2">
                <div className=" pe-2">
                  <img src={design} alt="" srcSet="" />
                </div>
                <div className="font-semibold text-gray-600">Photographers</div>
              </div>
              <div className="flex justify-start items-center mb-2">
                <div className=" pe-2">
                  <img src={design} alt="" srcSet="" />
                </div>
                <div className="font-semibold text-gray-600">
                  Amazon Store Owners
                </div>
              </div>
              <div className="flex justify-start items-center mb-2">
                <div className=" pe-2">
                  <img src={design} alt="" srcSet="" />
                </div>
                <div className="font-semibold text-gray-600">
                  Photo Studio Companies
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-6/12">
          <img src={tableimg} className=" h-min" alt="table img" />
        </div>
      </div>
    </div>
  );
};

export default ServicesRequre;
