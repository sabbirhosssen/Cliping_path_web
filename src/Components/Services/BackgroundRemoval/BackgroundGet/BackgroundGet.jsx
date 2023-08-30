import list_icon from "./../../../Images/ServiceImage/Global/List-icon.png";

const BackgroundGet = () => {
  return (
    <div>
      <div className="md:px-32 px-12  md:py-16 py-12">
        <div className="db">
          <div className="md:flex md:justify-center md:items-center md:gap-14">
            <header
              className=" md:w-5/12 md:pr-4 md:text-3xl 
           text-2xl font-bold md:my-0 my-2 "
            >
              Why You Should Get Our Background Removal Service?
            </header>
            <div className="md:w-7/12 my-6 md:mb-0 mb-16">
              <div className="text-xs text-gray-600">
                Clipping Path Graphics ensures professional and top-notch
                product background removal service catering to our clients’
                needs. We take pride in our professionalism and utmost
                dedication.
              </div>
              <div className="underline md:font-bold font-semibold text-sm block">
                Our catered background removal photo service is equipped with:
              </div>
            </div>
          </div>
          <div className="md:mt-16 my-5 md:grid md:grid-cols-3 md:gap-5">
            <div className="md:my-0 my-5 bg-[#f5f6fb] border border-gray-300 border-solid px-5 py-3 rounded-tr-3xl rounded-bl-3xl">
              <div className="flex justify-start items-baseline gap-2 font-semibold">
                <img src={list_icon} alt="" />
                <header className=" text-md">Digital Art Technique</header>
              </div>
              <div className="text-xs py-3 text-gray-600">
                Removing the background from a picture is more challenging than
                it sounds. If only using an automated tool would suffice, you
                wouldn’t be here looking for a photo cutout company. Our expert
                list_iconers study the content first, and then decide how it
                should be done by taking tailored measures for each picture.
              </div>
            </div>

            <div className="md:my-0 my-5 bg-[#f5f6fb] border border-gray-300 border-solid px-5 py-3 rounded-tr-3xl rounded-bl-3xl">
              <div className="flex justify-start items-baseline gap-2 font-semibold">
                <img src={list_icon} alt="" />
                <header className=" text-md">
                  Contrast and Color Modification
                </header>
              </div>
              <div className="text-xs py-3 text-gray-600">
                When the background is renounced from any picture, the remaining
                object sometimes loses contrast or color optimization. While
                it’s not the list_iconer’s fault since it’s an automated system,
                our passionate editors will execute further modifications to the
                picture to make sure that the loss of contrast or color is
                optimized.
              </div>
            </div>
            <div className=" md:my-0 my-5 bg-[#f5f6fb] border border-gray-300 border-solid px-5 py-3 rounded-tr-3xl rounded-bl-3xl">
              <div className="flex justify-start items-baseline gap-2 font-semibold">
                <img src={list_icon} alt="" />
                <header className=" text-md">Transparent Background</header>
              </div>
              <div className="text-xs py-3 text-gray-600">
                If the background is transparent, you can easily use the photo
                of any product on a different background. It allows you to bring
                in more variation on the picture to catch the audiences’ eyes.
                If you own an eCommerce site, you must be familiar with this
                technique.
              </div>
            </div>
          </div>
          <div
            className="md:mt-6 md:grid md:grid-cols-3 
         md:gap-5"
          >
            <div>
              <div className="md:my-0 my-5 bg-[#f5f6fb] border border-gray-300 border-solid px-5 py-3 rounded-tr-3xl rounded-bl-3xl h-full">
                <div className="flex justify-start items-baseline gap-2 font-semibold">
                  <img src={list_icon} alt="" />
                  <header className=" text-md">
                    Professional Product Cutout
                  </header>
                </div>
                <div className="text-xs py-3 text-gray-600">
                  We’re not just another photo editing service with a team of
                  newbies. Our list_iconers have expertise in product image
                  cutout service dedicated to Amazon, eBay, or any other
                  eCommerce sites.
                </div>
              </div>
            </div>
            <div className="md:my-0 my-5 bg-[#f5f6fb] border border-gray-300 border-solid px-5 py-3 rounded-tr-3xl rounded-bl-3xl">
              <div className="flex justify-start items-baseline gap-2 font-semibold">
                <img src={list_icon} alt="" />
                <header className=" text-md">Pen Tool Clipping</header>
              </div>
              <div className="text-xs py-3 text-gray-600">
                If you’ve got even a bit of idea about photo editing, you should
                know that using the pen tool for clipping requires skill and
                patience. Many list_iconers often use erasers or magic wand just
                to erase the background. But, experts know that only the pen
                tool clipping provides the best quality.
              </div>
            </div>
            <div className="md:my-0 my-5 bg-[#f5f6fb] border border-gray-300 border-solid px-5 py-3 rounded-tr-3xl rounded-bl-3xl">
              <div className="flex justify-start items-baseline gap-2 font-semibold">
                <img src={list_icon} alt="" />
                <header className=" text-md">Adaptive Editing Technique</header>
              </div>
              <div className="text-xs py-3 text-gray-600">
                Although pen tool clipping is the most efficient way to remove
                backgrounds, it might not be enough if the product is fuzzy or
                scattered. In such cases, we use the masking process to bring in
                more focus on the product while removing the background.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundGet;
