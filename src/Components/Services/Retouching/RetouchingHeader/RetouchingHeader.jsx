// import React from 'react';
import retouch_bg from "./../../../Images/ServiceImage/Global/Global_Head_bg.png";
import retouch_img from "./../../../Images/ServiceImage/Retouch/Retouch-h1.png";
const RetouchingHeader = () => {
  return (
    <div>
      <div
        className="bg-[#f5f6fb]  md:px-32 px-12 pb-16 py-6  bg-no-repet bg-start bg-contain"
        style={{ backgroundImage: `url(${retouch_bg})` }}
      >
        <div className="md:flex  md:justify-center md:items-center md:gap-5">
          <div className="md:w-6/12">
            <header className="md:text-[48px] text-[40px] leading-tight mb-2 font-sans font-bold">
              High-End Photo Retouching Service Tailored for You
            </header>

            <div className="text-xs md:text-sm text-gray-600 my-3">
              Are you looking for the best online photo retouching service at an
              affordable price? Our professional retouching service can quickly
              transform poor photos into professional-looking ones.
            </div>
            <div className="text-xs md:text-sm text-gray-600 my-3">
              Clipping Path Graphics is ready to take care of all your photo
              retouching needs to let you focus on expanding your business and
              leave the rest to us.
            </div>

            <button className="border py-2 px-6 bg-[#0075ff] rounded-full  font-sans font-semibold text-white">
              Get Started
            </button>
          </div>
          <div className="md:w-6/12 relative">
            <img src={retouch_img} className="md:ms-10 ms-0" alt="" />
            <div className="bg-white md:bg-slate-50 px-4 py-4 border rounded-tr-2xl rounded-bl-2xl  md:absolute md:bottom-[-90px] md:left-[-90px] absolute bottom-[-70px] left-[-40px] ...">
              <div className="block text-left text-sm">Starting at</div>
              <div className="  md:mx-6 block text-center font-bold text-3xl text-[#ff8a00]">
                85¢
              </div>
              <div className="block text-right text-xs">Per Image</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetouchingHeader;
