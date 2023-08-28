// import React from 'react';

const BackQuote = () => {
  const quoteimg =
    "https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/lastly-2.png";
  return (
    <div>
      <div className="md:px-32 px-12  md:py-16 py-12 bg-[#ffffff]">
        <div>
          <div className="md:flex md:justify-center md:items-start md:gap-5">
            <div className=" md:w-5/12 ">
              <img src={quoteimg} className=" w-max" alt="" />
            </div>
            <div className="py-6 md:w-6/12">
              <header className="text-2xl font-bold font-sans">
                Avail A Free Removal Service by Becoming Our Client
              </header>
              <div className="text-gray-600 text-xs my-2">
                By becoming our client, you’re availing a free background
                removal service to assess our work. See if our
                <span className="text-blue-600 font-sans font-medium">
                  {" "}
                  free trial{" "}
                </span>
                meets your requirements, and then place the order. We’re always
                available to provide a top-notch service meeting your needs.
              </div>
              <header className="md:text-2xl text-xl font-bold font-sans mt-3">
                Get an Instant Quote
              </header>
              <div className="block text-gray-600 text-xs mb-3 mt-2 ">
                So, What Are You Waiting For? Dial our phone number or reach out
                to us through live chat now to get an{" "}
                <span className="text-blue-600 font-sans font-medium">
                  {" "}
                  instant quote{" "}
                </span>
                ! Our 300+ editing experts are always available to provide you
                an excellent photo editing service. If you want to test our
                service first, avail the free removal service and see if it
                pleases you.{" "}
              </div>
              <button className="border font-sans text-white outline-none md:py-3 py-2 md:px-6 px-4 bg-[#ff8a00] rounded-full">
                Instant Quote!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackQuote;
