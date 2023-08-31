// import React from 'react';
import design from "./../../../Images/ServiceImage/Global/List-icon.png";
const RetouchingGet = () => {
  return (
    <div>
      <div className="md:px-32 px-12  md:py-16 py-12">
        <div className="db">
          <div className="md:flex md:justify-center md:items-center md:gap-14">
            <header
              className=" md:w-5/12 md:pr-4 md:text-3xl 
           text-2xl font-bold md:my-0 my-2 "
            >
              Why You Should Get Our Services
            </header>
            <div className="md:w-7/12 my-6 md:mb-0 mb-16">
              <div className="text-xs text-gray-600">
                Here at Clipping Path Graphics, we provide professional and
                high-quality service at a moderate cost to meet the needs of our
                clients. We are proud of our professionalism and commitment that
                helped to build our reputation.
              </div>
              <div className="underline md:font-bold font-semibold text-sm block">
                Our service is equipped with:
              </div>
            </div>
          </div>
          <div className="md:mt-16 my-5 md:grid md:grid-cols-3 md:gap-5">
            <div className="md:my-0 my-5 bg-[#f5f6fb] border border-gray-300 border-solid px-5 py-3 rounded-tr-3xl rounded-bl-3xl">
              <div className="flex justify-start items-baseline gap-2 font-semibold">
                <img src={design} alt="" />
                <header className=" text-md">
                  High-Quality Service and On-time Delivery
                </header>
              </div>
              <div className="text-xs py-3 text-gray-600">
                Our team of professional and expert designers is always at your
                service. They are passionate about their work and highly
                experienced. Although we only follow the manual editing process,
                Clipping Path Graphics can offer you the fastest service
                maintaining tight deadlines.
              </div>
            </div>

            <div className="md:my-0 my-5 bg-[#f5f6fb] border border-gray-300 border-solid px-5 py-3 rounded-tr-3xl rounded-bl-3xl">
              <div className="flex justify-start items-baseline gap-2 font-semibold">
                <img src={design} alt="" />
                <header className=" text-md">No Automated Tool</header>
              </div>
              <div className="text-xs py-3 text-gray-600">
                Here at Clipping Path Graphics, we don’t use any automated tools
                for photo retouching. We rely on our expert designers and their
                experiences. Automated tools will surely provide you faster
                service, but manual editing is the best option for maintaining
                maximum quality. Our designers spend hours studying the pictures
                and make tailored decisions to make your images better.
              </div>
            </div>
            <div className=" md:my-0 my-5 bg-[#f5f6fb] border border-gray-300 border-solid px-5 py-3 rounded-tr-3xl rounded-bl-3xl">
              <div className="flex justify-start items-baseline gap-2 font-semibold">
                <img src={design} alt="" />
                <header className=" text-md">Realistic Natural Shadow</header>
              </div>
              <div className="text-xs py-3 text-gray-600">
                <span className="text-blue-600">Adding shadow</span>
                to a picture requires the understanding of light and measurement
                of the shadow. These are some of the characteristics that are
                secured by a professional. We provide the most natural shadow
                service, which helps your brand attract more attention.
              </div>
            </div>
          </div>
          <div className="md:mt-6 md:grid md:grid-cols-3 md:gap-5">
            <div>
              <div className="md:my-0 my-5 bg-[#f5f6fb] border border-gray-300 border-solid px-5 py-3 rounded-tr-3xl rounded-bl-3xl h-full">
                <div className="flex justify-start items-baseline gap-2 font-semibold">
                  <img src={design} alt="" />
                  <header className=" text-md">
                    Highly Skilled and Experienced Designers
                  </header>
                </div>
                <div className="text-xs py-3 text-gray-600">
                  Clipping Path Graphics is equipped with a dedicated and
                  passionate team of experienced designers. We value our
                  employees and believe that they keep our company running. Our
                  people love what they do, and they do it with care and love.
                </div>
              </div>
            </div>
            <div className="md:my-0 my-5 bg-[#f5f6fb] border border-gray-300 border-solid px-5 py-3 rounded-tr-3xl rounded-bl-3xl">
              <div className="flex justify-start items-baseline gap-2 font-semibold">
                <img src={design} alt="" />
                <header className=" text-md">
                  icon Exact Pen Tool Pointing
                </header>
              </div>
              <div className="text-xs py-3 text-gray-600">
                In photo editing, the pen tool is the most powerful Photoshop
                tool. However, using this tool appropriately requires a high
                level of knowledge and skill. To isolate the object from the
                image, our skilled editors employ the accurate pen tool pointing
                method. The object you are preserving retains its clarity and
                quality while using this method
              </div>
            </div>
            <div className="md:my-0 my-5 bg-[#f5f6fb] border border-gray-300 border-solid px-5 py-3 rounded-tr-3xl rounded-bl-3xl">
              <div className="flex justify-start items-baseline gap-2 font-semibold">
                <img src={design} alt="" />
                <header className=" text-md">
                  Sharp Corner Edges with Hard Corner Cut Out
                </header>
              </div>
              <div className="text-xs py-3 text-gray-600">
                Only fixing the color and contrast is not enough for a
                successful photo retouching. You must pay attention to every
                aspect of the image, including the edges. On a different
                background, if the corners are not sharp enough, they won{"'"}t
                look realistic. You must take care of the curves and hard
                corners, just as you must care for the sharp edges. It will aid
                in blending the photo with the new background. Product photo
                quality for eCommerce or any other business is heavily reliant
                on appropriate curvature. At Clipping Path Graphics, we care for
                our customers, and we act through our professional retouching
                service.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetouchingGet;
