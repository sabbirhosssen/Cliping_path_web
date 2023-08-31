// import React from 'react';
import design from "./../../../Images/ServiceImage/Global/List-icon.png";
import service_bg from "./../../../Images/ServiceImage/Global/service_bg.png";
const RetouchingService = () => {
  return (
    <div>
      <div
        className="md:px-32 px-12 md:py-16 py-10  bg-[#f5f6fb]  bg-no-repeat bg-center "
        style={{ backgroundImage: `url(${service_bg})` }}
      >
        <div className="text-center md:my-0 my-6">
          <header className="md:text-3xl xl:mx-28 mx-0 text-2xl font-sans font-bold mb-3">
            We Offer More Than Just Photo Retouching
          </header>
          <div className="md:text-sm text-xs text-gray-600 ">
            We offer the most cost-effective and professional photo retouching
            services catering to your needs!!
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
                  Beauty Retouching Services
                </div>
              </div>
              <div className="flex justify-start items-baseline mb-2">
                <div className=" pe-2">
                  <img src={design} className=" " alt="" srcSet="" />
                </div>
                <div className="text-sm font-sans font-semibold text-[#4f5864]">
                  Face Retouching and Skin Retouching
                </div>
              </div>
              <div className="flex justify-start items-baseline mb-2">
                <div className=" pe-2">
                  <img src={design} className=" " alt="" srcSet="" />
                </div>
                <div className="text-sm font-sans font-semibold text-[#4f5864]">
                  Photo Retouching Service for Amateur Photographers
                </div>
              </div>
              <div className="flex justify-start items-baseline mb-2">
                <div className=" pe-2">
                  <img src={design} className=" " alt="" srcSet="" />
                </div>
                <div className="text-sm font-sans font-semibold text-[#4f5864]">
                  Clipping Path Image Editing Service for Amazon
                </div>
              </div>
              <div className="flex justify-start items-baseline mb-2">
                <div className=" pe-2">
                  <img src={design} className=" " alt="" srcSet="" />
                </div>
                <div className="text-sm font-sans font-semibold text-[#4f5864]">
                  Jewelry Photo Retouching Services
                </div>
              </div>
              <div className="flex justify-start items-center mb-2">
                <div className=" pe-2">
                  <img src={design} alt="" srcSet="" />
                </div>
                <div className="text-sm font-sans font-semibold text-[#4f5864]">
                  Product Photo Retouching Services
                </div>
              </div>
              <div className="flex justify-start items-center mb-2">
                <div className=" pe-2">
                  <img src={design} alt="" srcSet="" />
                </div>
                <div className="text-sm font-sans font-semibold text-[#4f5864]">
                  Headshot Retouching Services
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
                  Photo Adjustments and Editing
                </div>
              </div>
              <div className="flex justify-start items-center mb-2">
                <div className=" pe-2">
                  <img src={design} alt="" srcSet="" />
                </div>
                <div className="text-sm font-sans font-semibold text-[#4f5864]">
                  Real Estate Photo Retouching Service
                </div>
              </div>
              <div className="flex justify-start items-center mb-2">
                <div className=" pe-2">
                  <img src={design} alt="" srcSet="" />
                </div>
                <div className="text-sm font-sans font-semibold text-[#4f5864]">
                  Multiple Clipping Path Service
                </div>
              </div>
              <div className="flex justify-start items-baseline mb-2">
                <div className=" pe-2">
                  <img src={design} alt="" srcSet="" />
                </div>
                <div className="text-sm font-sans font-semibold text-[#4f5864]">
                  Sports Photo Retouching
                </div>
              </div>
              <div className="flex justify-start items-baseline mb-2">
                <div className=" pe-2">
                  <img src={design} alt="" srcSet="" />
                </div>
                <div className="text-sm font-sans font-semibold text-[#4f5864]">
                  Professional Wedding Portrait Photo Retouching
                </div>
              </div>
              <div className="flex justify-start items-baseline mb-2">
                <div className=" pe-2">
                  <img src={design} alt="" srcSet="" />
                </div>
                <div className="text-sm font-sans font-semibold text-[#4f5864]">
                  Ecommerce Photo Retouching
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetouchingService;
