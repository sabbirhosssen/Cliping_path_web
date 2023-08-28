// import React from 'react';

const BackHeader = () => {
  const backheader =
    "https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/uploads/2021/12/After-Background-Remove-service-1.jpg";
  return (
    <div>
      <div className="bg-[#f5f6fb]  md:px-32 px-12 pb-16 py-6  ">
        <div className="md:flex  md:justify-center md:items-center md:gap-5">
          <div className="md:w-6/12">
            <header className="md:text-[45px] text-[40px] leading-tight mb-2 font-sans font-bold">
              Professional Background Removal Service at Clipping Path Graphics
            </header>
            <div className="text-xs md:text-sm text-gray-600 my-3">
              Looking for the best background photo editing service? You can’t
              find a better background removal photo service than ours! With a
              team of professional and expert graphic designers, Clipping Path
              Graphics can offer you the best deals on background removal
              services.
            </div>

            <button className="border py-2 px-6 bg-[#0075ff] rounded-full  font-sans font-semibold text-white">
              Get Started
            </button>
          </div>
          <div className="md:w-6/12 relative">
            <img src={backheader} alt="" />
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

export default BackHeader;
