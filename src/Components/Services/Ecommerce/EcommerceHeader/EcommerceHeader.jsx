import E_header from "./../../../Images/ServiceImage/Ecommerce/Ecommerce-h2.png";
import E_header_bg from "./../../../Images/ServiceImage/Global/Global_Head_bg.png";
const EcommerceHeader = () => {
  return (
    <div>
      <div
        className="bg-[#f5f6fb]  md:px-32 px-12 pb-16 py-6 bg-no-repet bg-center "
        style={{ backgroundImage: `url(${E_header_bg})` }}
      >
        <div className="md:flex  md:justify-center md:items-center md:gap-5">
          <div className="md:w-6/12">
            <header className="md:text-[48px] text-[40px] leading-tight mb-2 font-sans font-bold">
              Professional eCommerce Product Photo Editing Service For Your
              Business
            </header>

            <div className="text-xs md:text-sm text-gray-600 my-3">
              People around the world are now familiar with eCommerce more than
              ever. The eCommerce industry controls our lives to a great extent.
              We can see it in our daily lives when we look through our phones,
              and some product photographs hold back our fingers from moving on.
            </div>
            <div className="text-xs md:text-sm text-gray-600 my-3">
              So, it’s evident that product photo editing service is the
              lifeblood of the eCommerce industry. And Clipping Path Graphics is
              offering the best product photo editing services catered for
              eCommerce business.
            </div>

            <button className="border py-2 px-6 bg-[#0075ff] rounded-full  font-sans font-semibold text-white">
              Get Started
            </button>
          </div>
          <div className="md:w-6/12 relative">
            <img src={E_header} className="md:ms-10 ms-0" alt="" />
            <div className="bg-white md:bg-slate-50 px-4 py-4 border rounded-tr-2xl rounded-bl-2xl  md:absolute md:bottom-[-90px] md:left-[-90px] absolute bottom-[-70px] left-[-40px] ...">
              <div className="block text-left text-sm">Starting at</div>
              <div className="  md:mx-6 block text-center font-bold text-3xl text-[#ff8a00]">
                35¢
              </div>
              <div className="block text-right text-xs">Per Image</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceHeader;
