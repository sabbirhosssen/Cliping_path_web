import list_icon from "./../../../Images/ServiceImage/Global/List-icon.png";
import clip_s_bg from "./../../../Images/ServiceImage/Global/service_bg.png";
const ClipService = () => {
  return (
    <div>
      <div
        className="md:px-32 px-12 md:py-16 py-10  bg-[#f5f6fb]  bg-no-repeat bg-center "
        style={{ backgroundImage: `url(${clip_s_bg})` }}
      >
        <div className="text-center md:my-0 my-6">
          <header className="md:text-3xl xl:mx-28 mx-0 text-2xl font-sans font-bold mb-3">
            We Offer More Than Just Clipping Path
          </header>
          <div className="md:text-sm text-xs text-gray-600 ">
            We offer the most cost-effective and custom clipping path catering
            to your needs!
          </div>
        </div>
        <div className=" md:grid md:grid-cols-2 md:gap-4  py-6">
          <div className="hs">
            <div className="co">
              <div className="flex justify-start items-baseline mb-2">
                <div className=" pe-2">
                  <img src={list_icon} className=" " alt="" srcSet="" />
                </div>
                <div className="text-sm font-sans font-semibold text-[#4f5864]">
                  Clipping Path Image Editing Service for Amazon
                </div>
              </div>
              <div className="flex justify-start items-baseline mb-2">
                <div className=" pe-2">
                  <img src={list_icon} className=" " alt="" srcSet="" />
                </div>
                <div className="text-sm font-sans font-semibold text-[#4f5864]">
                  Vector Tracing
                </div>
              </div>
              <div className="flex justify-start items-baseline mb-2">
                <div className=" pe-2">
                  <img src={list_icon} className=" " alt="" srcSet="" />
                </div>
                <div className="text-sm font-sans font-semibold text-[#4f5864]">
                  Image Cutout Service
                </div>
              </div>
              <div className="flex justify-start items-baseline mb-2">
                <div className=" pe-2">
                  <img src={list_icon} className=" " alt="" srcSet="" />
                </div>
                <div className="text-sm font-sans font-semibold text-[#4f5864]">
                  Jewelry Clipping Path
                </div>
              </div>
              <div className="flex justify-start items-center mb-2">
                <div className=" pe-2">
                  <img src={list_icon} alt="" srcSet="" />
                </div>
                <div className="text-sm font-sans font-semibold text-[#4f5864]">
                  Photo Adjustments and Editing
                </div>
              </div>
              <div className="flex justify-start items-center mb-2">
                <div className=" pe-2">
                  <img src={list_icon} alt="" srcSet="" />
                </div>
                <div className="text-sm font-sans font-semibold text-[#4f5864]">
                  Online Retailers’ Clipping Path
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
                <div className="text-sm font-sans font-semibold text-[#4f5864]">
                  Closed Vector Path and Shape Editing
                </div>
              </div>
              <div className="flex justify-start items-center mb-2">
                <div className=" pe-2">
                  <img src={list_icon} alt="" srcSet="" />
                </div>
                <div className="text-sm font-sans font-semibold text-[#4f5864]">
                  Bulk Image Clipping Service
                </div>
              </div>
              <div className="flex justify-start items-baseline mb-2">
                <div className=" pe-2">
                  <img src={list_icon} alt="" srcSet="" />
                </div>
                <div className="text-sm font-sans font-semibold text-[#4f5864]">
                  Removing Specific Item from Background
                </div>
              </div>
              <div className="flex justify-start items-baseline mb-2">
                <div className=" pe-2">
                  <img src={list_icon} alt="" srcSet="" />
                </div>
                <div className="text-sm font-sans font-semibold text-[#4f5864]">
                  Product Clipping Path
                </div>
              </div>
              <div className="flex justify-start items-baseline mb-2">
                <div className=" pe-2">
                  <img src={list_icon} alt="" srcSet="" />
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

export default ClipService;
