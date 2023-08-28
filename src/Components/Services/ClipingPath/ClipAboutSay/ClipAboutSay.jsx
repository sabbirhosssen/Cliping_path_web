// import React from 'react';

const ClipAboutSay = () => {
  const starlogo =
    "https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/rating.svg";
  const logoimage =
    "https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/trustpilot.png";
  return (
    <div>
      <div className="md:px-32 px-12 md:py-16 py-16 bg-no-repeat bg-top bg-[#f5f6fb] bg-[url('https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/map.svg')] ">
        <div className="hs">
          <div className="text-center my-3">
            <header className="md:text-3xl text-2xl font-bold ">
              What Our Clients Have to Say About Us
            </header>
            {/* <div className=" text-sm text-gray-600">
              We take our customer reviews seriously and always look for areas
              of growth. See what our clients said about our service.
            </div> */}
          </div>
          <div className="flex justify-center items-center">
            <img src={logoimage} className="w-[100px] md:w-auto" alt="" />
            <div className=" hover:text-[#ff8a00] hover:border-e-[#ff8a00] md:text-lg text-sm  font-semibold text-green-600 px-2 border-e-4 me-2  border-e-green-600">
              TrustScore 4.8
            </div>
            <div>Review</div>
          </div>
        </div>
        <div className="my-8 md:grid md:grid-cols-3 md:gap-4">
          <div className=" border px-6 py-6 md:my-0 my-6  rounded-tr-2xl rounded-bl-2xl ">
            <img src={starlogo} className="mb-3" alt="" />
            <header className="text-sm font-thin my-2 text-gray-600">
              I found the ideal Retreat
            </header>
            <div className=" text-xs text-gray-600">
              CPG is an excellent photo editing company for the prompt delivery!
              I have been taking their service for a long time, and they have
              never given any chance to complain.
            </div>
            <header className=" font-semibold text-md my-3">
              Lena D Barnwell
            </header>
          </div>
          <div className=" border px-6 py-6 md:my-0 my-6 rounded-tr-2xl rounded-bl-2xl ">
            <img src={starlogo} className="mb-3" alt="" />
            <header className="text-sm font-thin my-2 text-gray-600">
              Amazing Platform
            </header>
            <div className=" text-xs text-gray-600">
              For my e-commerce site, Clipping Path Graphics is always the go-to
              image editing company for me. They make my photos better, and they
              always deliver on time.
            </div>
            <header className=" font-semibold text-md my-3">
              Deana D Baker
            </header>
          </div>
          <div className=" border px-6 py-6 md:my-0 my-6 rounded-tr-2xl rounded-bl-2xl ">
            <img src={starlogo} className="mt-3 mb-2" alt="" />
            <header className=" font-thin mb-2 text-md">
              As an older customer
            </header>
            <div className=" text-xs text-gray-600">
              I needed to add product shadow and reflection on my photos for an
              Amazon affiliate site. As I did not have much budget for this, I
              was a bit skeptical. But, clipping path graphics provided me the
              best deals I with high-quality service.
            </div>
            <header className=" font-semibold text-md my-3">
              Richard M Cox
            </header>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClipAboutSay;
