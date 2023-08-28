// import React from 'react';

import { useState } from "react";

const ClipFaqService = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  const faqData = [
    {
      question: "How much you charge for clipping path service?",
      answer:
        "Not at all! We use a high-quality pen tool clipping path process to remove backgrounds manually. Our team of expert graphics designers works tirelessly to make this happen.",
    },
    // Add more questions and answers here
  ];
  const img1 =
    "https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/charge/charge-1.jpg";
  const img2 =
    "https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/charge/charge-2.jpg";
  const img3 =
    "https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/charge/charge-3.jpg";
  const img4 =
    "https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/charge/charge-4.jpg";
  const img5 =
    "https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/charge/charge-5.jpg";
  const img6 =
    "https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/charge/charge-6.jpg";
  const img7 =
    "https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/charge/charge-7.jpg";
  const img8 =
    "https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/charge/charge-8.jpg";
  const img9 =
    "https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/charge/charge-9.jpg";
  const img10 =
    "https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/charge/charge-10.jpg";
  const img11 =
    "https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/charge/charge-11.jpg";
  const img12 =
    "https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/charge/charge-12.jpg";
  const img13 =
    "https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/charge/charge-13.jpg";
  const img14 =
    "https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/charge/charge-14.jpg";
  const img15 =
    "https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/charge/charge-15.jpg";
  return (
    <div>
      <div className="md:px-32 px-12 lg:py-16  ">
        {faqData.map((item, index) => (
          <div key={index} className="border rounded-md mb-4">
            <button
              className="w-full p-4 text-sm md:text-2xl font-bold flex justify-between gap-2 items-start hover:text-[#ff8a00] focus:text-[#ff8a00] border-b-2"
              onClick={() => toggleAccordion(index)}
            >
              {item.question}{" "}
              {activeIndex === null && (
                <div className="font-bold rotate-[90deg] text-right">{">"}</div>
              )}
              {activeIndex === index && (
                <div className="font-bold rotate-[270deg]">{">"}</div>
              )}
            </button>
            {activeIndex === index && (
              <div className="lg:m-4">
                <dev className=" lg:flex lg:justify-center lg:items-center lg:gap-5 my-3">
                  <div className=" lg:w-6/12">
                    <header className="my-1 p-2">
                      {" "}
                      <span className="text-lg font-semibold font-mono">
                        BASIC:{" "}
                      </span>
                      <span
                        className="text-md font-sans
                       font-medium"
                      >
                        {" "}
                        Starting at 49¢ per image
                      </span>
                    </header>
                    <div className="text-xs font-sans text-gray-600 p-2">
                      It’s the easiest and cheapest part of clipping. These
                      types of photos having no tough edges and curves. It’s so
                      simple like a mobile phone, books, laptop screen, etc.
                      It’s very easy to Draw the path around the object because
                      of having fewer edges and curves.
                    </div>
                  </div>
                  <div className=" lg:w-6/12 md:my-0 my-3">
                    <div className="w-full flex  justify-center items-center gap-1">
                      <img src={img1} className="w-20  md:w-28 " alt="" />
                      <img src={img2} className="w-20  md:w-28 " alt="" />
                      <img src={img3} className="w-20  md:w-28 " alt="" />
                    </div>
                  </div>
                </dev>
                <dev className=" lg:flex lg:justify-center lg:items-center lg:gap-5 my-3">
                  <div className=" lg:w-6/12">
                    <header className="my-1 p-2">
                      {" "}
                      <span className="text-lg font-semibold font-mono">
                        SIMPLE:{" "}
                      </span>
                      <span
                        className="text-md font-sans
                       font-medium"
                      >
                        {" "}
                        Starting at 49¢ per image
                      </span>
                    </header>
                    <div className="text-xs font-sans text-gray-600 p-2">
                      It’s also the easiest one to do. But it has some edges and
                      some curves. Here we also use the same tool but we touch
                      the photo more cautiously for controlling the curves and
                      edges over there.
                    </div>
                  </div>
                  <div className=" lg:w-6/12 md:my-0 my-3">
                    <div className="w-full flex  justify-center items-center gap-1">
                      <img src={img4} className="w-20  md:w-28 " alt="" />
                      <img src={img5} className="w-20  md:w-28 " alt="" />
                      <img src={img6} className="w-20  md:w-28 " alt="" />
                    </div>
                  </div>
                </dev>
                <dev className=" lg:flex lg:justify-center lg:items-center lg:gap-5 my-3">
                  <div className=" lg:w-6/12">
                    <header className="my-1 p-2">
                      {" "}
                      <span className="text-lg font-semibold font-mono">
                        MEDIUM:{" "}
                      </span>
                      <span
                        className="text-md font-sans
                       font-medium"
                      >
                        {" "}
                        Starting at 49¢ per image
                      </span>
                    </header>
                    <div className="text-xs font-sans text-gray-600 p-2">
                      It’s a little bit tricky here to do. Here we got too many
                      edges, zigzag curves, and many other holes in it. We can
                      complete this using the pen tool .we need full of
                      attention when doing it.
                    </div>
                  </div>
                  <div className=" lg:w-6/12 md:my-0 my-3">
                    <div className="w-full flex  justify-center items-center gap-1">
                      <img src={img7} className="w-20  md:w-28 " alt="" />
                      <img src={img8} className="w-20  md:w-28 " alt="" />
                      <img src={img9} className="w-20  md:w-28 " alt="" />
                    </div>
                  </div>
                </dev>
                <dev className=" lg:flex lg:justify-center lg:items-center lg:gap-5 my-3">
                  <div className=" lg:w-6/12">
                    <header className="my-1 p-2">
                      {" "}
                      <span className="text-lg font-semibold font-mono">
                        COMPLEX:{" "}
                      </span>
                      <span
                        className="text-md font-sans
                       font-medium"
                      >
                        {" "}
                        Starting at 49¢ per image
                      </span>
                    </header>
                    <div className="text-xs font-sans text-gray-600 p-2">
                      A complex clipping path is applied to an object with very
                      complicated edges, multiple holes, and possibly multiple
                      objects and varying levels of transparency .anything with
                      the fur of hair would require a complex clipping path.
                      It’s too much time-consuming.
                    </div>
                  </div>
                  <div className=" lg:w-6/12 md:my-0 my-3">
                    <div className="w-full flex  justify-center items-center gap-1">
                      <img src={img10} className="w-20  md:w-28 " alt="" />
                      <img src={img11} className="w-20  md:w-28 " alt="" />
                      <img src={img12} className="w-20  md:w-28 " alt="" />
                    </div>
                  </div>
                </dev>
                <dev className=" lg:flex lg:justify-center lg:items-center lg:gap-5 my-3">
                  <div className=" lg:w-6/12">
                    <header className="my-1 p-2">
                      {" "}
                      <span className="text-lg font-semibold font-mono">
                        MULTIFARIOUS :{" "}
                      </span>
                      <span
                        className="text-md font-sans
                       font-medium"
                      >
                        {" "}
                        Starting at 49¢ per image
                      </span>
                    </header>
                    <div className="text-xs font-sans text-gray-600 p-2">
                      We using this word because when you need to clipping path
                      inside the product on a little portion. Maybe you just
                      want to change the color or anything on that little
                      portion than we do this multifarious clipping path.
                    </div>
                  </div>
                  <div className=" lg:w-6/12 md:my-0 my-3">
                    <div className="w-full flex  justify-center items-center gap-1">
                      <img src={img13} className="w-20  md:w-28 " alt="" />
                      <img src={img14} className="w-20  md:w-28 " alt="" />
                      <img src={img15} className="w-20  md:w-28 " alt="" />
                    </div>
                  </div>
                </dev>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClipFaqService;
