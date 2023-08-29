// import React from 'react';

const RetouchingGet = () => {
  const design =
    "https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/list-icon.svg";
  return (
    <div>
      <div className="md:px-32 px-12  md:py-16 py-12">
        <div className="db">
          <div className="md:flex md:justify-center md:items-center md:gap-14">
            <header
              className=" md:w-5/12 md:pr-4 md:text-3xl 
           text-2xl font-bold md:my-0 my-2 "
            >
              Why You Should Get Our Apparel Photo Editing Services
            </header>
            <div className="md:w-7/12 my-6 md:mb-0 mb-16">
              <div className="text-xs text-gray-600">
                Clipping Path Graphics offers the most professional and
                high-quality eCommerce product image editing services at a low
                cost. We are proud of our dedication and commitment to stand out
                among photo editing companies for eCommerce.
              </div>
              <div className="underline md:font-bold font-semibold text-sm block">
                Our eCommerce product photo editing services are equipped with:
              </div>
            </div>
          </div>
          <div className="md:mt-16 my-5 md:grid md:grid-cols-3 md:gap-5">
            <div className="md:my-0 my-5 bg-[#f5f6fb] border border-gray-300 border-solid px-5 py-3 rounded-tr-3xl rounded-bl-3xl">
              <div className="flex justify-start items-baseline gap-2 font-semibold">
                <img src={design} alt="" />
                <header className=" text-md">Natural Shadow</header>
              </div>
              <div className="text-xs py-3 text-gray-600">
                Understanding light and shadow measurement are essential when
                <span className="text-blue-600"> adding shadow </span>
                to a product. These are some of the qualities that only a
                professional designer can provide. We offer the most natural
                shadow solution available, which helps your brand stand out.
              </div>
            </div>

            <div className="md:my-0 my-5 bg-[#f5f6fb] border border-gray-300 border-solid px-5 py-3 rounded-tr-3xl rounded-bl-3xl">
              <div className="flex justify-start items-baseline gap-2 font-semibold">
                <img src={design} alt="" />
                <header className=" text-md">Manual Editing</header>
              </div>
              <div className="text-xs py-3 text-gray-600">
                We do not use any automated photo editing techniques at Clipping
                Path Graphics for product
                <span className="text-blue-600">
                  {" "}
                  photo retouching services{" "}
                </span>
                . We rely on the expertise and experience of our designers.
                Automated tools will undoubtedly save you time, but manual
                editing is the most incredible option for ensuring the highest
                level of quality. Our designers spend hours examining the
                photographs and making custom selections to improve them.
              </div>
            </div>
            <div className=" md:my-0 my-5 bg-[#f5f6fb] border border-gray-300 border-solid px-5 py-3 rounded-tr-3xl rounded-bl-3xl">
              <div className="flex justify-start items-baseline gap-2 font-semibold">
                <img src={design} alt="" />
                <header className=" text-md">
                  Exact Pen Tool and Smooth Anchor
                </header>
              </div>
              <div className="text-xs py-3 text-gray-600">
                The pen tool is the most effective Photoshop tool in photo
                editing for eCommerce. However, proper use of this technology
                requires a high level of skill and expertise. Our professional
                editors use the pen tool pointing method to isolate the product
                from an image. Also, we link the curve segments where they flow
                smoothly using a smooth anchor tool. It is essential to make
                your photos more appealing while remaining realistic.
              </div>
            </div>
          </div>
          <div className="md:mt-6 md:grid md:grid-cols-3 md:gap-5">
            <div>
              <div className="md:my-0 my-5 bg-[#f5f6fb] border border-gray-300 border-solid px-5 py-3 rounded-tr-3xl rounded-bl-3xl h-full">
                <div className="flex justify-start items-baseline gap-2 font-semibold">
                  <img src={design} alt="" />
                  <header className=" text-md">
                    Highly Skilled Employees and Fast Delivery
                  </header>
                </div>
                <div className="text-xs py-3 text-gray-600">
                  Our team of experienced and knowledgeable designers is always
                  available to assist you. They are enthusiastic about their
                  work and have a lot of experience. Although we solely use the
                  manual editing technique, Clipping Path Graphics can provide
                  you with the fastest service while still meeting your
                  deadlines.
                </div>
              </div>
            </div>
            <div className="md:my-0 my-5 bg-[#f5f6fb] border border-gray-300 border-solid px-5 py-3 rounded-tr-3xl rounded-bl-3xl">
              <div className="flex justify-start items-baseline gap-2 font-semibold">
                <img src={design} alt="" />
                <header className=" text-md">
                  Digital Art Technique for eCommerce Retouching
                </header>
              </div>
              <div className="text-xs py-3 text-gray-600">
                Removing the backdrop from a photograph is more complex than it
                appears. You would not need to outsource product photo editing
                to us if employing an automated program would suffice. Our
                skilled designers examine the content first, and then determine
                how it should be done by obtaining specific measurements for
                each image.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetouchingGet;
