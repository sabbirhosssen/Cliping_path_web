// import React from 'react';

const EcommerceAllWork = () => {
  const img1_h =
    "https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/uploads/2021/12/ONEILL-UNITLOWNUBUCKBLACK_2.jpg";
  const img1 =
    "https://clippingpathgraphics.com/wp-content/uploads/2021/12/ONEILL-UNITLOWNUBUCKBLACK_3.jpg";
  const img2_h =
    "https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/uploads/2021/12/IMG_0178.jpg";
  const img2 =
    "https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/uploads/2021/12/IMG_0177.jpg";
  const img3_h =
    "https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/uploads/2021/12/20210722_123920-3.jpg";
  const img3 =
    "https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/uploads/2021/12/20210722_123920-3-1.jpg";
  const img4_h =
    "https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/uploads/2021/12/Foto-26.05.21-10-56-42.jpg";
  const img4 =
    "https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/uploads/2021/12/Foto-26.05.21-10-56-43.jpg";
  const img5_h =
    "https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/uploads/2021/10/DSC_0553.jpg";
  const img5 =
    "https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/uploads/2021/10/DSC_0554.jpg";
  const img6_h =
    "https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/uploads/2021/10/photo-cropping-1.jpg";
  const img6 =
    "https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/uploads/2021/10/photo-cropping-after-1.jpg";
  const img7_h =
    "https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/uploads/2021/10/01.-Before.jpg";
  const img7 =
    "https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/uploads/2021/10/01.-After.jpg";
  const img8_h =
    "https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/uploads/2021/10/DSC05717.jpg";
  const img8 =
    "https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/uploads/2021/10/DSC05717-1.jpg";
  return (
    <div>
      <div className="md:px-32 px-12  md:pb-16 pb-12  bg-[#f5f6fb]">
        <div className="md:flex md:justify-between md:items-center">
          <header className="md:text-3xl text-2xl font-bold">
            Some of our portfolio
          </header>
          <button className="border border-yellow-400 md:py-3 py-2 font-sans font-semibold hover:text-white focus:text-white md:px-7 px-4 md:my-0 my-3  rounded-full hover:bg-[#ff8a00] focus:bg-[#ff8a00]">
            See All Work
          </button>
        </div>
        <div className=" md:grid md:grid-cols-4 md:gap-4 md:py-6">
          <div className=" relative overflow-hidden cursor-pointer">
            <img
              src={img1_h}
              className="w-full   md:w-auto md:my-0 my-5 hover:bg-yellow-500 rounded-tr-3xl rounded-bl-3xl border border-gray-300"
              alt="iamge1"
            />
            <img
              src={img1}
              className=" hover:hidden  absolute inset-0  w-full md:w-auto md:my-0 my-5 rounded-tr-3xl rounded-bl-3xl border border-gray-300"
              alt="iamge1"
            />
          </div>
          <div className=" relative overflow-hidden cursor-pointer">
            <img
              src={img2_h}
              className="w-full   md:w-auto md:my-0 my-5 hover:bg-yellow-500 rounded-tr-3xl rounded-bl-3xl border border-gray-300"
              alt="iamge1"
            />
            <img
              src={img2}
              className=" hover:hidden  absolute inset-0  w-full md:w-auto md:my-0 my-5 rounded-tr-3xl rounded-bl-3xl border border-gray-300"
              alt="iamge1"
            />
          </div>
          <div className=" relative overflow-hidden cursor-pointer">
            <img
              src={img3_h}
              className="w-full   md:w-auto md:my-0 my-5 hover:bg-yellow-500 rounded-tr-3xl rounded-bl-3xl border border-gray-300"
              alt="iamge1"
            />
            <img
              src={img3}
              className=" hover:hidden  absolute inset-0  w-full md:w-auto md:my-0 my-5 rounded-tr-3xl rounded-bl-3xl border border-gray-300"
              alt="iamge1"
            />
          </div>
          <div className=" relative overflow-hidden cursor-pointer">
            <img
              src={img4_h}
              className="w-full   md:w-auto md:my-0 my-5 hover:bg-yellow-500 rounded-tr-3xl rounded-bl-3xl border border-gray-300"
              alt="iamge1"
            />
            <img
              src={img4}
              className=" hover:hidden  absolute inset-0  w-full md:w-auto md:my-0 my-5 rounded-tr-3xl rounded-bl-3xl border border-gray-300"
              alt="iamge1"
            />
          </div>
          <div className=" relative overflow-hidden cursor-pointer">
            <img
              src={img5_h}
              className="w-full   md:w-auto md:my-0 my-5 hover:bg-yellow-500 rounded-tr-3xl rounded-bl-3xl border border-gray-300"
              alt="iamge1"
            />
            <img
              src={img5}
              className=" hover:hidden  absolute inset-0  w-full md:w-auto md:my-0 my-5 rounded-tr-3xl rounded-bl-3xl border border-gray-300"
              alt="iamge1"
            />
          </div>
          <div className=" relative overflow-hidden cursor-pointer">
            <img
              src={img6_h}
              className="w-full   md:w-auto md:my-0 my-5 hover:bg-yellow-500 rounded-tr-3xl rounded-bl-3xl border border-gray-300"
              alt="iamge1"
            />
            <img
              src={img6}
              className=" hover:hidden  absolute inset-0  w-full md:w-auto md:my-0 my-5 rounded-tr-3xl rounded-bl-3xl border border-gray-300"
              alt="iamge1"
            />
          </div>
          <div className=" relative overflow-hidden cursor-pointer">
            <img
              src={img7_h}
              className="w-full   md:w-auto md:my-0 my-5 hover:bg-yellow-500 rounded-tr-3xl rounded-bl-3xl border border-gray-300"
              alt="iamge1"
            />
            <img
              src={img7}
              className=" hover:hidden  absolute inset-0  w-full md:w-auto md:my-0 my-5 rounded-tr-3xl rounded-bl-3xl border border-gray-300"
              alt="iamge1"
            />
          </div>
          <div className=" relative overflow-hidden cursor-pointer">
            <img
              src={img8_h}
              className="w-full   md:w-auto md:my-0 my-5 hover:bg-yellow-500 rounded-tr-3xl rounded-bl-3xl border border-gray-300"
              alt="iamge1"
            />
            <img
              src={img8}
              className=" hover:hidden  absolute inset-0  w-full md:w-auto md:my-0 my-5 rounded-tr-3xl rounded-bl-3xl border border-gray-300"
              alt="iamge1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceAllWork;
