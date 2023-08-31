import list_icon from "./../../../Images/ServiceImage/Global/List-icon.png";
const ImageMaskGet = () => {
  return (
    <div>
      <div className="md:px-32 px-12  md:py-16 py-12">
        <div className="db">
          <div className="md:flex md:justify-center md:items-center md:gap-14">
            <header
              className=" md:w-5/12 md:pr-4 md:text-3xl 
           text-2xl font-bold md:my-0 my-2 "
            >
              Why You Should Get Our Service
            </header>
            <div className="md:w-7/12 my-6 md:mb-0 mb-16">
              <div className="text-xs text-gray-600">
                Clipping Path Graphics ensures professional and top-notch photo
                editing at a low price, catering to our clients’ needs. We take
                pride in our professionalism and utmost dedication.
              </div>
              <div className="underline md:font-bold font-semibold text-sm block">
                Our best masking service is equipped with:
              </div>
            </div>
          </div>
          <div className="md:mt-16 my-5 md:grid md:grid-cols-3 md:gap-5">
            <div className="md:my-0 my-5 bg-[#f5f6fb] border border-gray-300 border-solid px-5 py-3 rounded-tr-3xl rounded-bl-3xl">
              <div className="flex justify-start items-baseline gap-2 font-semibold">
                <img src={list_icon} alt="" />
                <header className=" text-md">Blurry Edge Fixing</header>
              </div>
              <div className="text-xs py-3 text-gray-600">
                The primary purpose of image masking is to fix the blurry edges
                so the object can be put into another background. Color
                correction or contrast adjustment is not always adequate for
                eCommerce images. In such cases, image masking is the only
                effective way to prepare the pictures.
              </div>
            </div>

            <div className="md:my-0 my-5 bg-[#f5f6fb] border border-gray-300 border-solid px-5 py-3 rounded-tr-3xl rounded-bl-3xl">
              <div className="flex justify-start items-baseline gap-2 font-semibold">
                <img src={list_icon} alt="" />
                <header className=" text-md">No Automated Tool</header>
              </div>
              <div className="text-xs py-3 text-gray-600">
                Clipping Path Graphics doesn’t use any automated tools for
                creating image masks. We’re the best image masking company that
                relies on human touch than any software. Our designers spend a
                long time making your pictures better. People often need objects
                removed from photographs. If it’s a dress, tasks like masking
                fur in Photoshop are pretty common
              </div>
            </div>
            <div className=" md:my-0 my-5 bg-[#f5f6fb] border border-gray-300 border-solid px-5 py-3 rounded-tr-3xl rounded-bl-3xl">
              <div className="flex justify-start items-baseline gap-2 font-semibold">
                <img src={list_icon} alt="" />
                <header className=" text-md">
                  Fast Delivery and High Quality
                </header>
              </div>
              <div className="text-xs py-3 text-gray-600">
                Quality work takes time. Automated tools might save you from
                running late, but the quality won’t be consistent. Still, our
                team of expert designers is always ready to deliver you
                top-notch and fast product image masking service. If you need
                something delivered urgently, we can get on that without
                compromising the quality.
              </div>
            </div>
          </div>
          <div className="md:mt-6 md:grid md:grid-cols-3 md:gap-5">
            <div>
              <div className="md:my-0 my-5 bg-[#f5f6fb] border border-gray-300 border-solid px-5 py-3 rounded-tr-3xl rounded-bl-3xl h-full">
                <div className="flex justify-start items-baseline gap-2 font-semibold">
                  <img src={list_icon} alt="" />
                  <header className=" text-md">Studying the Images</header>
                </div>
                <div className="text-xs py-3 text-gray-600">
                  Our expert designers know how to make the pictures better.
                  They conduct in-depth research on the images and make
                  necessary changes. If an object is curves and edges in a
                  picture are too scattered, then it is not wise to use{" "}
                  <span className="text-blue-500 font-meduiam">
                    image cut-out.
                  </span>{" "}
                  Instead, we use the clipping mask service to remove the
                  background. Image masking has different processes, including
                  clipping mask, layer mask, vector mask, etc. The difference
                  between a clipping mask and a layer mask is that you edit a
                  single layer with a layer mask and multiple layers with the
                  clipping mask. Vector mask works with the clipping path
                  method, where you need to clip out the preferred object with a
                  pen tool or shape tool.
                </div>
              </div>
            </div>
            <div className="md:my-0 my-5 bg-[#f5f6fb] border border-gray-300 border-solid px-5 py-3 rounded-tr-3xl rounded-bl-3xl">
              <div className="flex justify-start items-baseline gap-2 font-semibold">
                <img src={list_icon} alt="" />
                <header className=" text-md">
                  {" "}
                  Expert and Professional Designers
                </header>
              </div>
              <div className="text-xs py-3 text-gray-600">
                Our designers are the heart of this company. They love what they
                do, and they do it ensuring quality. All three combined,
                passion, dedication, and professionalism, have made our team
                efficient to meet your needs of complex image masking in no
                time!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageMaskGet;
