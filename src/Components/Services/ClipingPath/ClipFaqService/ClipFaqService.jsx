import { useState } from "react";
import clip_fs1 from "./../../../Images/ServiceImage/ClipingPath/clip_fs1.png";
import clip_fs10 from "./../../../Images/ServiceImage/ClipingPath/clip_fs10.png";
import clip_fs11 from "./../../../Images/ServiceImage/ClipingPath/clip_fs11.png";
import clip_fs12 from "./../../../Images/ServiceImage/ClipingPath/clip_fs12.png";
import clip_fs13 from "./../../../Images/ServiceImage/ClipingPath/clip_fs13.png";
import clip_fs14 from "./../../../Images/ServiceImage/ClipingPath/clip_fs14.png";
import clip_fs15 from "./../../../Images/ServiceImage/ClipingPath/clip_fs15.png";
import clip_fs2 from "./../../../Images/ServiceImage/ClipingPath/clip_fs2.png";
import clip_fs3 from "./../../../Images/ServiceImage/ClipingPath/clip_fs3.png";
import clip_fs4 from "./../../../Images/ServiceImage/ClipingPath/clip_fs4.png";
import clip_fs5 from "./../../../Images/ServiceImage/ClipingPath/clip_fs5.png";
import clip_fs6 from "./../../../Images/ServiceImage/ClipingPath/clip_fs6.png";
import clip_fs7 from "./../../../Images/ServiceImage/ClipingPath/clip_fs7.png";
import clip_fs8 from "./../../../Images/ServiceImage/ClipingPath/clip_fs8.png";
import clip_fs9 from "./../../../Images/ServiceImage/ClipingPath/clip_fs9.png";

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

  return (
    <div>
      <div className="md:px-32 px-12 lg:py-16  ">
        {faqData.map((item, index) => (
          <div key={index} className="border rounded-md mb-4">
            <button
              className="w-full p-4 text-md md:text-2xl font-bold flex justify-between gap-2 items-start hover:text-[#ff8a00] focus:text-[#ff8a00] border-b-2"
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
                      <img src={clip_fs1} className="w-20  md:w-28 " alt="" />
                      <img src={clip_fs2} className="w-20  md:w-28 " alt="" />
                      <img src={clip_fs3} className="w-20  md:w-28 " alt="" />
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
                      <img src={clip_fs4} className="w-20  md:w-28 " alt="" />
                      <img src={clip_fs5} className="w-20  md:w-28 " alt="" />
                      <img src={clip_fs6} className="w-20  md:w-28 " alt="" />
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
                      <img src={clip_fs7} className="w-20  md:w-28 " alt="" />
                      <img src={clip_fs8} className="w-20  md:w-28 " alt="" />
                      <img src={clip_fs9} className="w-20  md:w-28 " alt="" />
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
                      <img src={clip_fs10} className="w-20  md:w-28 " alt="" />
                      <img src={clip_fs11} className="w-20  md:w-28 " alt="" />
                      <img src={clip_fs12} className="w-20  md:w-28 " alt="" />
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
                      <img src={clip_fs13} className="w-20  md:w-28 " alt="" />
                      <img src={clip_fs14} className="w-20  md:w-28 " alt="" />
                      <img src={clip_fs15} className="w-20  md:w-28 " alt="" />
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
