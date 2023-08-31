import mask_bg from "./../../../Images/ServiceImage/Global/Global_Head_bg.png";
import maskHeader from "./../../../Images/ServiceImage/Mask/image-masking_h1.png";
const ImageMaskHeader = () => {
  return (
    <div>
      <div
        className="bg-[#f5f6fb]  md:px-32 px-12 pb-16 py-6  bg-no-repet bg-center"
        style={{ backgroundImage: `url(${mask_bg})` }}
      >
        <div className="md:flex  md:justify-center md:items-center md:gap-5">
          <div className="md:w-6/12">
            <header className="md:text-[48px] text-[40px] leading-tight mb-2 font-sans font-bold">
              Best Image Masking Service is Just a Phone Call Away
            </header>

            <div className="text-xs md:text-sm text-gray-600 my-3">
              If you want the most precise and accurate image editing, then
              masking is the suitable process for you that we’re offering. As
              the term suggests, it refers to an editable layer over the
              original one. The best part about image masking is that your
              original copy will be intact while you edit the new layer.
            </div>
            <div className="text-xs md:text-sm text-gray-600 my-3">
              So, place an order now for the best image masking service
              available in the market!
            </div>

            <button className="border py-2 px-6 bg-[#0075ff] rounded-full  font-sans font-semibold text-white">
              Get Started
            </button>
          </div>
          <div className="md:w-6/12 relative">
            <img src={maskHeader} className="md:ms-10 ms-0" alt="" />
            <div className="bg-white md:bg-slate-50 px-4 py-4 border rounded-tr-2xl rounded-bl-2xl  md:absolute md:bottom-[-90px] md:left-[-90px] absolute bottom-[-70px] left-[-40px] ...">
              <div className="block text-left text-sm">Starting at</div>
              <div className="  md:mx-6 block text-center font-bold text-3xl text-[#ff8a00]">
                50¢
              </div>
              <div className="block text-right text-xs">Per Image</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageMaskHeader;
