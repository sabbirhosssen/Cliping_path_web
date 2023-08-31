// import React from 'react';
import list_icon from "./../../../Images/ServiceImage/Global/List-icon.png";
import service_bg from "./../../../Images/ServiceImage/Global/service_bg.png";
const Services = () => {
  return (
    <div
      className="md:px-32 px-12 md:py-16 py-10  bg-[#f5f6fb]  bg-no-repeat bg-center "
      style={{ backgroundImage: `url(${service_bg})` }}
    >
      <div className="text-center md:my-0 my-6">
        <header className="md:text-3xl text-2xl font-sans font-bold mb-3">
          We Offer More Than Just Shadow Service
        </header>
        <div className="md:text-sm text-xs text-gray-600 ">
          We’re not just another photo editing company. Client satisfaction is
          our utmost priority more <br /> than anything else!
        </div>
      </div>
      <div className=" md:grid md:grid-cols-2 md:gap-4  py-6">
        <div className="hs">
          <div className="co">
            <div className="flex justify-start items-baseline mb-2">
              <div className=" pe-2">
                <img src={list_icon} className="w-5 md:w-4" alt="" srcSet="" />
              </div>
              <div className="text-md font-sans font-semibold text-[#4f5864]">
                Clipping Mask Service and Clipping Path Image Editing Service
              </div>
            </div>
            <div className="flex justify-start items-center mb-2">
              <div className=" pe-2">
                <img src={list_icon} alt="" srcSet="" />
              </div>
              <div className="text-md font-sans font-semibold text-[#4f5864]">
                Image Shadow Service for Amazon
              </div>
            </div>
            <div className="flex justify-start items-center mb-2">
              <div className=" pe-2">
                <img src={list_icon} alt="" srcSet="" />
              </div>
              <div className="text-md font-sans font-semibold text-[#4f5864]">
                Image Cutout Service
              </div>
            </div>
            <div className="flex justify-start items-center mb-2">
              <div className=" pe-2">
                <img src={list_icon} alt="" srcSet="" />
              </div>
              <div className="text-md font-sans font-semibold text-[#4f5864]">
                Jewelry Photo Masking Service
              </div>
            </div>
            <div className="flex justify-start items-center mb-2">
              <div className=" pe-2">
                <img src={list_icon} alt="" srcSet="" />
              </div>
              <div className="text-md font-sans font-semibold text-[#4f5864]">
                Photo Adjustments and Editing
              </div>
            </div>
          </div>
        </div>
        <div className="hs">
          <div className="co">
            <div className="flex justify-start items-center mb-2">
              <div className=" pe-2">
                <img src={list_icon} alt="" srcSet="" />
              </div>
              <div className="text-md font-sans font-semibold text-[#4f5864]">
                Wedding Image Masking
              </div>
            </div>
            <div className="flex justify-start items-center mb-2">
              <div className=" pe-2">
                <img src={list_icon} alt="" srcSet="" />
              </div>
              <div className="text-md font-sans font-semibold text-[#4f5864]">
                Online Retailers’ Image Masking
              </div>
            </div>
            <div className="flex justify-start items-center mb-2">
              <div className=" pe-2">
                <img src={list_icon} alt="" srcSet="" />
              </div>
              <div className="text-md font-sans font-semibold text-[#4f5864]">
                Product Image Masking
              </div>
            </div>
            <div className="flex justify-start  items-baseline mb-2">
              <div className=" pe-2">
                <img src={list_icon} className="w-4 md:w-4" alt="" srcSet="" />
              </div>
              <div className="text-md font-sans font-semibold text-[#4f5864]">
                Image Masking for Ecommerce and Fashion Industry
              </div>
            </div>
            <div className="flex justify-start items-center mb-2">
              <div className=" pe-2">
                <img src={list_icon} alt="" srcSet="" />
              </div>
              <div className="text-md font-sans font-semibold text-[#4f5864]">
                Drop Shadow Service
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
