// import React from 'react';

import EcommerceFaqAccording from "./EcommerceFaqAccording";

const EcommerceFaq = () => {
  const faqimg =
    "https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/faq.svg";
  return (
    <div>
      <div className="md:px-32 px-12 md:py-16">
        <div>
          <div className="md:text-center text-start">
            <header className="md:text-3xl text-center  text-2xl font-sans font-extrabold mb-3">
              Frequently Asked Questions - FAQ
            </header>
            <div className="md:text-sm text-xs text-center  text-gray-600 font-sans mb-3">
              Clipping Path Graphics ensures professional and top-notch product
              background removal service catering to our clients needs. We take
              pride in our professionalism and utmost dedication.
            </div>
          </div>
          <div className="md:flex  md:items-center md:gap-4 my-4">
            <div className="">
              <img src={faqimg} className="md:my-0 my-6 h-min" alt="FAQ" />
            </div>
            <div className="md:w-8/12 bg-none">
              <div className=" bg-white ">
                <EcommerceFaqAccording />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceFaq;
