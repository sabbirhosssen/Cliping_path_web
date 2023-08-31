import ghostimg from "./../../../Images/ServiceImage/Ghost/Ghost-h1.png";
import ghost_bg from "./../../../Images/ServiceImage/Global/Global_Head_bg.png";
const GhostHeader = () => {
  return (
    <div>
      <div
        className="bg-[#f5f6fb]  md:px-32 px-12 pb-16 py-6  bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${ghost_bg})` }}
      >
        <div className="md:flex  md:justify-center md:items-center md:gap-5">
          <div className="md:w-6/12">
            <header className="md:text-[48px] text-[40px] leading-tight mb-2 font-sans font-bold">
              Flaunt Your Brand with Our Ghost Mannequin Service
            </header>

            <div className="text-xs md:text-sm text-gray-600 my-3">
              If you run an eCommerce store primarily dedicated to fashion, you
              must know how important it is to present your dresses properly.
              The only thing the customer can see is the photo of the dress. So,
              you have to make sure that you’re focusing on the best angles to
              flaunt the dress. This is where Clipping Path Graphics can help
              with the most advanced and dedicated ghost mannequin effect
              service.
            </div>

            <button className="border py-2 px-6 bg-[#0075ff] rounded-full  font-sans font-semibold text-white">
              Get Started
            </button>
          </div>
          <div className="md:w-6/12 relative">
            <img src={ghostimg} className="md:ms-10 ms-0" alt="" />
            <div className="bg-white md:bg-slate-50 px-4 py-4 border rounded-tr-2xl rounded-bl-2xl  md:absolute md:bottom-[-90px] md:left-[-90px] absolute bottom-[-30px] left-[-1px] ...">
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

export default GhostHeader;
