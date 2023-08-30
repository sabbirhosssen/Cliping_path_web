import carimg from "./../../../Images/ServiceImage/CarImage/car-image-h1.png";
import carimg_bg from "./../../../Images/ServiceImage/Global/Global_Head_bg.png";

const CarImageHeader = () => {
  return (
    <div>
      <div
        className="bg-[#f5f6fb]  md:px-32 px-12 pb-16 py-6  bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${carimg_bg})` }}
      >
        <div className="md:flex  md:justify-center md:items-center md:gap-5">
          <div className="md:w-6/12">
            <header className="md:text-[48px] text-[40px] leading-tight mb-2 font-sans font-bold">
              CAR IMAGE EDITING SERVICE
            </header>
            <header className="text-md font-sans font-bold text-[#ff8a00]">
              CAR CUT OUT | CAR BACKGROUND REMOVE | DEALERSHIP IMAGE EDITING |
              CAR DIGITAL BACKGROUNDING
            </header>
            <div className="text-xs md:text-sm text-gray-600 my-3">
              <header className="text-sm font-sans my-2">We provide-</header>
              <div className="text-sm font-sans md:ms-10 ms-4">
                <div>1.CAR TEMPLATE ADDING & CUSTOMIZING</div>
                <div>2.VEHICLES BACKGROUND REMOVE, TRANSPARENT</div>
                <div>3.CAR SHADOW, REFLECTION EFFECT</div>
                <div>4.PAVEMENT CHANGE, RETOUCHING SERVICES</div>
              </div>
              <div className="text-sm font-sans my-2">
                CAR IMAGE EDIT, DEALERSHIP IMAGE ENHANCEMENT, INVENTORY
                MANAGEMENT
              </div>
            </div>

            <button className="border py-2 px-6 bg-[#0075ff] rounded-full  font-sans font-semibold text-white">
              Get Started
            </button>
          </div>
          <div className="md:w-6/12 relative">
            <img src={carimg} className="md:ms-10 ms-0" alt="" />
            <div className="bg-white md:bg-slate-50 px-4 py-4 border rounded-tr-2xl rounded-bl-2xl  md:absolute md:bottom-[-90px] md:left-[-90px] absolute bottom-[-70px] left-[-40px] ...">
              <div className="block text-left text-sm">Starting at</div>
              <div className="  md:mx-6 block text-center font-bold text-3xl text-[#ff8a00]">
                40¢
              </div>
              <div className="block text-right text-xs">Per Image</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarImageHeader;
