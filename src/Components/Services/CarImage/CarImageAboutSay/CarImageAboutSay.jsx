// import React from 'react';

const CarImageAboutSay = () => {
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
            <div className=" text-sm text-gray-600">
              We take our customer reviews seriously and always look for areas
              of growth. See what our clients said about our service.
            </div>
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
            <div className=" text-xs text-gray-600">
              “Ghost mannequin editing is pretty difficult. I’ve already had a
              bad experience with another company. So I wasn’t sure whether
              Clipping Path Graphics could do a good job or not. But, they
              turned out to be true to their words and impressed me with amazing
              ghost mannequin editing service.”
            </div>
            <header className=" font-semibold text-md my-3">
              Barbara T Moore
            </header>
          </div>
          <div className=" border px-6 py-6 md:my-0 my-6 rounded-tr-2xl rounded-bl-2xl ">
            <img src={starlogo} className="mb-3" alt="" />
            <div className=" text-xs text-gray-600">
              “Clipping Path Graphics has the best designers who know ghost
              mannequin photo editing better than others. My online fashion
              store has more customers than ever after I edited my photos by
              Clipping Path Graphics. The ghost mannequin photography service
              they provided made the dresses look more fashionable than ever!”
            </div>
            <header className=" font-semibold text-md my-3">
              Robert M Betz
            </header>
          </div>
          <div className=" border px-6 py-6 md:my-0 my-6 rounded-tr-2xl rounded-bl-2xl ">
            <img src={starlogo} className="mt-3 mb-2" alt="" />

            <div className=" text-xs text-gray-600">
              “I own an online fashion store and was looking for a good company
              for ghost mannequin photo editing service. My business was booming
              recently, and I had to upload around 2000-2500 images per day. So,
              I had to outsource ghost mannequin image editing services to
              Clipping Path Graphics. They are quite efficient in on-time
              deliveries and maintaining quality in their work. Looking forward
              to a long-term business!”
            </div>
            <header className=" font-semibold text-md my-3">
              Rosa F Peters
            </header>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarImageAboutSay;
