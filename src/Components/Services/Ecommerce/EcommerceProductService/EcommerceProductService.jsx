// import React from 'react';

const EcommerceProductService = () => {
  const tableimg =
    "https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/work.png";
  const design =
    "https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/list-icon.svg";
  return (
    <div>
      <div className="md:px-32 px-12 md:py-16  bg-[#f5f6fb] flex flex-col-reverse md:flex md:flex-row gap-5">
        <div className=" md:w-6/12 md:my-0 my-12">
          <header className="text-3xl font-sans font-bold">
            Our eCommerce Product Photo Editing Service Process
          </header>
          <div className="my-4 font-sans text-xs  text-gray-600">
            We are describing how we work to let you know that we follow the
            most professional and efficient approach for providing you with the
            highest quality product photo editing service.
          </div>
          <div className="">
            <div className=" text-left ">
              <div className="flex justify-start items-baseline mb-3">
                <div className=" pe-2 w-8">
                  <img src={design} alt="" srcSet="" />
                </div>
                <div className="inline font-semibold text-gray-600">
                  First, the assigned graphics designer draws a line around the
                  product.
                </div>
              </div>
              <div className="flex justify-start items-baseline mb-3">
                <div className=" pe-2 w-8">
                  <img src={design} alt="" srcSet="" />
                </div>
                <div className="font-semibold text-gray-600">
                  Then, the inner portion is marked, which will stay, and the
                  outer portion will be removed.
                </div>
              </div>
              <div className="flex justify-start items-baseline mb-3">
                <div className=" pe-2 w-8">
                  <img src={design} alt="" srcSet="" />
                </div>
                <div className="font-semibold text-gray-600">
                  After removing the outer part, the inner portion is now ready
                  to be used on any background.
                </div>
              </div>
              <div className="flex justify-start items-baseline mb-3">
                <div className=" pe-2 w-8">
                  <img src={design} alt="" srcSet="" />
                </div>
                <div className="font-semibold text-gray-600">
                  For images with too many hard edges, we use image masking
                  service for isolating the product.
                </div>
              </div>
              <div className="flex justify-start items-baseline mb-3">
                <div className=" pe-2 w-8">
                  <img src={design} alt="" srcSet="" />
                </div>
                <div className="font-semibold text-gray-600">
                  To fix the loss of quality due to editing, our expert designer
                  will make the necessary resizing and retouches to the image.
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

export default EcommerceProductService;
