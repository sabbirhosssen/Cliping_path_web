import list_icon from "./../../../Images/ServiceImage/Global/List-icon.png";
import mask_sbg from "./../../../Images/ServiceImage/Global/service_bg.png";
const ImageMaskService = () => {
  return (
    <div>
      <div
        className="md:px-32 px-12 md:py-16 py-10  bg-[#f5f6fb]  bg-no-repeat bg-center "
        style={{ backgroundImage: `url(${mask_sbg})` }}
      >
        <div className="text-center md:my-0 my-6">
          <header className="md:text-3xl xl:mx-28 mx-0 text-2xl font-sans font-bold mb-3">
            We Offer More Than Just Masking Service
          </header>
          <div className="md:text-sm text-xs text-gray-600 ">
            We’re not just another image masking service provider. Client
            satisfaction is our utmost priority more than anything else!
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
                  Image Masking Service for Amazon
                </div>
              </div>
              <div className="flex justify-start items-baseline mb-2">
                <div className=" pe-2">
                  <img src={list_icon} className=" " alt="" srcSet="" />
                </div>
                <div className="text-sm font-sans font-semibold text-[#4f5864]">
                  Wedding Image Masking
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
                  Jewelry Photo Masking Service
                </div>
              </div>
              <div className="flex justify-start items-baseline mb-2">
                <div className=" pe-2">
                  <img src={list_icon} className=" " alt="" srcSet="" />
                </div>
                <div className="text-sm font-sans font-semibold text-[#4f5864]">
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
                <div className="text-sm font-sans font-semibold text-[#4f5864]">
                  Wedding Image Masking
                </div>
              </div>
              <div className="flex justify-start items-center mb-2">
                <div className=" pe-2">
                  <img src={list_icon} alt="" srcSet="" />
                </div>
                <div className="text-sm font-sans font-semibold text-[#4f5864]">
                  Online Retailers’ Image Masking
                </div>
              </div>
              <div className="flex justify-start items-center mb-2">
                <div className=" pe-2">
                  <img src={list_icon} alt="" srcSet="" />
                </div>
                <div className="text-sm font-sans font-semibold text-[#4f5864]">
                  Product Image Masking
                </div>
              </div>

              <div className="flex justify-start items-baseline mb-2">
                <div className=" pe-2">
                  <img src={list_icon} alt="" srcSet="" />
                </div>
                <div className="text-sm font-sans font-semibold text-[#4f5864]">
                  Image Masking for Ecommerce and Fashion Industry
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageMaskService;
