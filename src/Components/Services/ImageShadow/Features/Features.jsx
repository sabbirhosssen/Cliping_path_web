// import React from "react";

const Features = () => {
  const feature_shadaw =
    "https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/shadow-service-image.jpg";
  const design =
    "https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/list-icon.svg";

  // const bg_image =
  // bg -
  // [
  //   url(
  //     "https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/feture-bg.png"
  //   ),
  // ];

  return (
    <div className="md:px-28 px-12 py-16 min-h-max text-white bg-no-repeat bg-center bg-[#1e2b58] bg-[url('https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/feture-bg.png')] ">
      <div className="md:grid   md:grid-cols-3 md:gap-2  ">
        <div className="">
          <header className=" font-sans font-bold text-2xl md:text-3xl text-start mb-3">
            Our Special <span className="sm:inline md:block"> Features</span>
          </header>
          <div className="text-start md:text-sm text-xs md:mt-8 mt-4 ">
            Our skilled designers will do what it takes to offer you the most
            professional service maintaining quality. Our adjustments include:
          </div>

          <button className="block bg-blue-600 rounded-full py-3 px-6 my-8">
            Get started
          </button>
        </div>
        <div className=" text-left md:my-0 my-16 ">
          <div className="flex justify-start items-baseline">
            <div className=" pe-2">
              <img src={design} alt="" srcSet="" />
            </div>
            <div className="inline font-semibold mb-2">
              Color Correction and Modification
            </div>
          </div>
          <div className="flex justify-start items-center">
            <div className=" pe-2">
              <img src={design} alt="" srcSet="" />
            </div>
            <div className="font-semibold mb-2">
              Realistic and Natural Shadow
            </div>
          </div>
          <div className="flex justify-start items-center">
            <div className=" pe-2">
              <img src={design} alt="" srcSet="" />
            </div>
            <div className="font-semibold mb-2">Mirror Shadow</div>
          </div>
          <div className="flex justify-start items-center">
            <div className=" pe-2">
              <img src={design} alt="" srcSet="" />
            </div>
            <div className="font-semibold mb-2">Drop Shadow</div>
          </div>
          <div className="flex justify-start items-center">
            <div className=" pe-2">
              <img src={design} alt="" srcSet="" />
            </div>
            <div className="font-semibold mb-2">Reflection Shadow</div>
          </div>
          <div className="flex justify-start items-center">
            <div className=" pe-2">
              <img src={design} alt="" srcSet="" />
            </div>
            <div className="font-semibold mb-2">Masking Background</div>
          </div>
        </div>
        <div className="  ">
          <img
            src={feature_shadaw}
            className="w-auto h-full rounded-bl-2xl rounded-tr-2xl"
            alt=""
            sizes=""
            srcSet=""
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
