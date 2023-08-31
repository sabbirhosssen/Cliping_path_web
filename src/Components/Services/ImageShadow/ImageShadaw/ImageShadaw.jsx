import shadaw_h from "./../../../Images/ServiceImage/Global/Global_Head_bg.png";
import imageshadaw from "./../../../Images/ServiceImage/Shadow/Shadow-h1.png";
const ImageShadaw = () => {
  return (
    <div
      className="bg-[#f5f6fb]  md:px-32 px-12 pb-16 py-6  bg-no-repeat bg-cnter"
      style={{ backgroundImage: `(${shadaw_h})` }}
    >
      <div className="md:flex  md:justify-center md:items-center md:gap-5">
        <div className="md:w-6/12">
          <header className="md:text-[45px] text-[40px] leading-tight mb-2 font-sans font-bold">
            Best Image Shadow Service Within The Most Affordable Price
          </header>
          <div className="text-sm text-gray-600 my-3">
            Shadow adjustments in a product image make it look realistic and
            suitable for eCommerce. If you’ve been looking for a reliable image
            shadow service provider, then your quest ends with Clipping Path
            Graphics!
          </div>
          <div className="block text-sm  text-gray-600  my-3">
            Place an order now for the best photo shadow services available in
            the market!
          </div>
          <button className="border py-3 px-6 bg-[#0075ff] rounded-full  font-sans font-semibold text-white">
            Get Started
          </button>
        </div>
        <div className="md:w-6/12 relative">
          <img src={imageshadaw} alt="" />
          <div className="bg-white md:bg-slate-50 px-4 py-4 border rounded-tr-2xl rounded-bl-2xl  md:absolute md:bottom-[-60px] md:left-[-90px] absolute bottom-[-70px] left-[-40px] ...">
            <div className="block text-left text-sm">Starting at</div>
            <div className="  md:mx-6 block text-center font-bold text-3xl text-[#ff8a00]">
              35¢
            </div>
            <div className="block text-right text-xs">Per Image</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageShadaw;
