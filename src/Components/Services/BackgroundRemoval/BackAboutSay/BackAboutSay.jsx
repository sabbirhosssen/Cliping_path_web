import trustpilot from "./../../../Images/ServiceImage/Global/Global_trustpilot.png";
import about_bg from "./../../../Images/ServiceImage/Global/about_bg.png";
import rating from "./../../../Images/ServiceImage/Global/rating.png";
const BackAboutSay = () => {
  return (
    <div>
      <div
        className="md:px-32 px-12 md:py-16 py-16 bg-no-repeat bg-top bg-[#f5f6fb]  "
        style={{ backgroundImage: `url(${about_bg})` }}
      >
        <div className="hs">
          <div className="text-center my-3">
            <header className="md:text-3xl text-2xl font-bold ">
              What Our Clients Have to Say About Us
            </header>
            <div className=" text-sm text-gray-600">
              We take our customer reviews seriously and always look for areas
              of growth. See what our clients said about our service.
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src={trustpilot} className="w-[100px] md:w-auto" alt="" />
            <div className=" hover:text-[#ff8a00] hover:border-e-[#ff8a00] md:text-lg text-sm  font-semibold text-green-600 px-2 border-e-4 me-2  border-e-green-600">
              TrustScore 4.8
            </div>
            <div>Review</div>
          </div>
        </div>
        <div className="my-8 md:grid md:grid-cols-3 md:gap-4">
          <div className=" border px-6 py-6 md:my-0 my-6  rounded-tr-2xl rounded-bl-2xl ">
            <img src={rating} className="mb-3" alt="" />
            <div className=" text-xs text-gray-600">
              “I was a bit skeptical at first about whether Clipping Path
              Graphics can do a good job with removing people from my traveling
              pictures. But I must say that I’m more than happy with their
              service. They charge less and are true to their words.”
            </div>
            <header className=" font-semibold text-md">Marisol M Groves</header>
          </div>
          <div className=" border px-6 py-6 md:my-0 my-6 rounded-tr-2xl rounded-bl-2xl ">
            <img src={rating} className="mb-3" alt="" />
            <div className=" text-xs text-gray-600">
              “I needed a photo cutout service for my eCommerce site. Clipping
              Path Graphics made the images better than before after removing
              the backgrounds with precision. Not only they removed the
              backgrounds, but they also optimized the pictures to improve the
              quality. 5 stars for professionalism!”
            </div>
            <header className=" font-semibold text-md">
              Charles W Williams
            </header>
          </div>
          <div className=" border px-6 py-6 md:my-0 my-6 rounded-tr-2xl rounded-bl-2xl ">
            <img src={rating} className="mt-3 mb-2" alt="" />
            <header className=" font-thin mb-2 text-md">
              As an older customer
            </header>
            <div className=" text-xs text-gray-600">
              “I run an online fashion store, and I needed a good Image cutout
              service provider. Thanks to Clipping Path Graphics, I don’t have
              to worry about the quality of images for my site anymore.”
            </div>
            <header className=" font-semibold text-md">
              Tiffiny A Ditullio
            </header>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackAboutSay;
