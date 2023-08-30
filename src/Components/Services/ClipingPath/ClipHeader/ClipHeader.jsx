import clipheader from "./../../../Images/ServiceImage/ClipingPath/Clip-path_h1.png";
import clipheader_bg from "./../../../Images/ServiceImage/Global/Global_Head_bg.png";
const ClipHeader = () => {
  return (
    <div>
      <div
        className="bg-[#f5f6fb]  md:px-32 px-12 pb-16 py-6 bg-no-repet bg-center "
        style={{ backgroundImage: `url(${clipheader_bg})` }}
      >
        <div className="md:flex  md:justify-center md:items-center md:gap-5">
          <div className="md:w-6/12">
            <header className="md:text-[48px] text-[40px] leading-tight mb-2 font-sans font-bold">
              Clipping Path Service:
            </header>
            <header className="my-2 text-[#ff8a00] text-lg font-serif font-semibold">
              Make Your Images More Realistic
            </header>
            <div className="text-xs md:text-sm text-gray-600 my-3">
              To remove a background from any picture, you must carefully draw
              the{" "}
              <span className=" font-semibold text-[#0075ff]">
                clipping path around the object you want to keep.
              </span>
              This is where Clipping Path Graphics can help with its team of
              expert designers who are passionate and professional in what they
              do. We’re a clipping path service provider offering the best
              services at the best prices!
            </div>

            <button className="border py-2 px-6 bg-[#0075ff] rounded-full  font-sans font-semibold text-white">
              Get Started
            </button>
          </div>
          <div className="md:w-6/12 relative">
            <img src={clipheader} className=" md:ms-10 ms-0" alt="" />
            <div className="bg-white md:bg-slate-50 px-4 py-4 border rounded-tr-2xl rounded-bl-2xl  md:absolute md:bottom-[-60px] md:left-[-90px] absolute bottom-[-70px] left-[-40px] ...">
              <div className="block text-left text-sm">Starting at</div>
              <div className="  md:mx-6 block text-center font-bold text-3xl text-[#ff8a00]">
                25¢
              </div>
              <div className="block text-right text-xs">Per Image</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClipHeader;
