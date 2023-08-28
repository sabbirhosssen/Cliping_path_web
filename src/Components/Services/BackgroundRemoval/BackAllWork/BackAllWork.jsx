// import React from 'react';

const BackAllWork = () => {
  const img1 =
    "https://clippingpathgraphics.com/wp-content/uploads/2021/12/IMG_20210908_125222-.jpg";
  const img2 =
    "https://clippingpathgraphics.com/wp-content/uploads/2021/12/PE_7500435150132-_1.jpg";
  const img3 =
    "https://clippingpathgraphics.com/wp-content/uploads/2021/12/RemoveGreyBackground1.jpg";
  const img4 =
    "https://clippingpathgraphics.com/wp-content/uploads/2021/12/IMG_4106.jpg";
  const img5 =
    "https://clippingpathgraphics.com/wp-content/uploads/2021/12/Blackheels.jpg";
  const img6 =
    "https://clippingpathgraphics.com/wp-content/uploads/2021/12/B58A8288-.jpg";
  const img7 =
    "https://clippingpathgraphics.com/wp-content/uploads/2021/11/000280870006-1.jpg";
  const img8 =
    "https://clippingpathgraphics.com/wp-content/uploads/2021/11/Basket.jpg";
  return (
    <div>
      <div className="md:px-32 px-12  md:pb-16 pb-12 md:pt-6 bg-[#f5f6fb]">
        <div className="md:flex md:justify-between md:items-center">
          <header className="md:text-3xl text-2xl font-bold">
            Some of our portfolio
          </header>
          <button className="border border-yellow-400 md:py-3 py-2 font-sans font-semibold hover:text-white focus:text-white md:px-7 px-4 md:my-0 my-3  rounded-full hover:bg-[#ff8a00] focus:bg-[#ff8a00]">
            See All Work
          </button>
        </div>
        <div className=" md:grid md:grid-cols-4 md:gap-4 md:py-6">
          <img
            src={img1}
            className=" w-full md:w-auto md:my-0 my-5 hover:bg-yellow-500 rounded-tr-3xl rounded-bl-3xl border border-gray-300"
            alt="iamge1"
          />
          <img
            src={img2}
            className=" w-full md:w-auto md:my-0 my-5 hover:bg-yellow-500 rounded-tr-3xl rounded-bl-3xl border border-gray-300"
            alt="iamge1"
          />
          <img
            src={img3}
            className=" w-full md:w-auto md:my-0 my-5 hover:bg-yellow-500 rounded-tr-3xl rounded-bl-3xl border border-gray-300"
            alt="iamge1"
          />
          <img
            src={img4}
            className=" w-full md:w-auto md:my-0 my-5 hover:bg-yellow-500 rounded-tr-3xl rounded-bl-3xl border border-gray-300"
            alt="iamge1"
          />
          <img
            src={img5}
            className=" w-full md:w-auto md:my-0 my-5 hover:bg-yellow-500 rounded-tr-3xl rounded-bl-3xl border border-gray-300"
            alt="iamge1"
          />
          <img
            src={img6}
            className=" w-full md:w-auto md:my-0 my-5 hover:bg-yellow-500 rounded-tr-3xl rounded-bl-3xl border border-gray-300"
            alt="iamge1"
          />
          <img
            src={img7}
            className=" w-full md:w-auto md:my-0 my-5 hover:bg-yellow-500 rounded-tr-3xl rounded-bl-3xl border border-gray-300"
            alt="iamge1"
          />
          <img
            src={img8}
            className=" w-full md:w-auto md:my-0 my-5 hover:bg-yellow-500 rounded-tr-3xl rounded-bl-3xl border border-gray-300"
            alt="iamge1"
          />
        </div>
      </div>
    </div>
  );
};

export default BackAllWork;
