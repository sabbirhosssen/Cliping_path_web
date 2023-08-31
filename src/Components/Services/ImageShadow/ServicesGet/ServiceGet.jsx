// import React from 'react';
import design from "./../../../Images/ServiceImage/Global/List-icon.png";
const ServiceGet = () => {
  return (
    <div className="md:px-32 px-12  md:py-16 py-12">
      <div className="db">
        <div className="md:flex md:justify-center md:items-center md:gap-14">
          <div
            className=" md:w-5/12 md:pr-4 md:text-3xl 
           text-2xl font-bold md:my-0 my-2 "
          >
            <header>Why You Should Get Our Add Shadow Service</header>
          </div>
          <div className="md:w-7/12 my-6 md:mb-0 mb-16">
            <div className="text-xs text-gray-600">
              Clipping Path Graphics ensures professional and top-notch photo
              editing at a{" "}
              <span className="text-blue-700 font-medium">low price</span>,
              catering to our clients’ needs. We take pride in our
              professionalism and utmost dedication.
            </div>
            <div className="underline md:font-bold font-semibold text-sm block">
              Our best service is equipped with:
            </div>
          </div>
        </div>
        <div className="md:mt-16 my-5 md:grid md:grid-cols-3 md:gap-5">
          <div className="md:my-0 my-5 bg-[#f5f6fb] border border-gray-300 border-solid px-5 py-3 rounded-tr-3xl rounded-bl-3xl">
            <div className="flex justify-start items-baseline gap-2 font-semibold">
              <img src={design} alt="" />
              <header className=" text-md">
                Expert and Professional Designers
              </header>
            </div>
            <div className="text-xs py-3 text-gray-600">
              Our designers are the heart of this company. They love what they
              do, and they do it ensuring quality. All three combined, passion,
              dedication, and professionalism, have made our team efficient to
              meet your needs of complex image masking in no time!
            </div>
          </div>

          <div className="md:my-0 my-5 bg-[#f5f6fb] border border-gray-300 border-solid px-5 py-3 rounded-tr-3xl rounded-bl-3xl">
            <div className="flex justify-start items-baseline gap-2 font-semibold">
              <img src={design} alt="" />
              <header className=" text-md">No Automated Tool</header>
            </div>
            <div className="text-xs py-3 text-gray-600">
              Clipping Path Graphics doesn’t use any automated tools for
              clipping paths. We’re providing the best Photoshop shadow service
              with a human touch. Our designers spend a long time studying the
              pictures and finding ways to add the shadows in the most realistic
              ways possible. Clipping path with drop shadow service makes the
              shadows better and natural.
            </div>
          </div>
          <div className=" md:my-0 my-5 bg-[#f5f6fb] border border-gray-300 border-solid px-5 py-3 rounded-tr-3xl rounded-bl-3xl">
            <div className="flex justify-start items-baseline gap-2 font-semibold">
              <img src={design} alt="" />
              <header className=" text-md">
                Fast Delivery and High Quality
              </header>
            </div>
            <div className="text-xs py-3 text-gray-600">
              Automated tools may save you time, but the quality will not be
              consistent. Quality work requires patience. Our team of skilled
              designers is always ready to provide you with high-quality and
              timely image shadow service. If you need something delivered
              quickly, we can do so without compromising on quality.
            </div>
          </div>
        </div>
        <div
          className="md:mt-6 md:grid md:grid-cols-3 
         md:gap-5"
        >
          <div>
            <div className="md:my-0 my-5 bg-[#f5f6fb] border border-gray-300 border-solid px-5 py-3 rounded-tr-3xl rounded-bl-3xl">
              <div className="flex justify-start items-baseline gap-2 font-semibold">
                <img src={design} alt="" />
                <header className=" text-md">Studying the Images</header>
              </div>
              <div className="text-xs py-3 text-gray-600">
                Our expert designers know how to make the pictures better. They
                conduct in-depth research on the images and make necessary
                changes catered to each photo. Even in image shadow service,
                there are three common types.
              </div>
              <div className="block text-xs py-1 text-gray-600">
                <span className="font-semibold text-gray-700">
                  Drop Shadow:
                </span>{" "}
                Raises the object and makes it look like the product is
                floating.
              </div>
              <div className="block text-xs py-1 text-gray-600">
                <span className="font-semibold text-gray-700">
                  Mirror Shadow:
                </span>{" "}
                Mirror shadow or reflective shadow is added to make the photo
                more realistic.
              </div>
              <div className="block text-xs py-1 text-gray-600">
                <span className="font-semibold text-gray-700">
                  Natural Shadow:
                </span>{" "}
                In this process, the{" "}
                <span className="text-blue-800 font-semibold">
                  background is removed
                </span>{" "}
                and replaced with a white screen. Then, the shadow is added to
                make the photo natural.
              </div>
            </div>
          </div>
          <div className="md:my-0 my-5 bg-[#f5f6fb] border border-gray-300 border-solid px-5 py-3 rounded-tr-3xl rounded-bl-3xl">
            <div className="flex justify-start items-baseline gap-2 font-semibold">
              <img src={design} alt="" />
              <header className=" text-md">
                Expert and Professional Designers
              </header>
            </div>
            <div className="text-xs py-3 text-gray-600">
              Our designers are the heart of this company. They love what they
              do, and they do it ensuring quality. All three combined, passion,
              dedication, and professionalism, have made our team efficient to
              meet your needs of complex image masking in no time!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceGet;
