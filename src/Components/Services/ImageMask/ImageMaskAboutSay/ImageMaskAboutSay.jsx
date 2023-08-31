import logoimage from "./../../../Images/ServiceImage/Global/Global_trustpilot.png";
import about_bg from "./../../../Images/ServiceImage/Global/about_bg.png";
import rating from "./../../../Images/ServiceImage/Global/rating.png";

const ImageMaskAboutSay = () => {
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
            <img src={logoimage} className="w-[100px] md:w-auto" alt="" />
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
              “Image masking is a pretty complicated process. I was looking for
              a good company to edit a few hundred pictures. As I know the basic
              of photo editing, I knew that masking so many pictures require
              extreme efficiency. But, Clipping Path Graphics made me impressed
              with their top-notch work and professionalism.”
            </div>
            <header className=" font-semibold text-md my-3">
              Roberto . Warriner
            </header>
          </div>
          <div className=" border px-6 py-6 md:my-0 my-6 rounded-tr-2xl rounded-bl-2xl ">
            <img src={rating} className="mb-3" alt="" />
            <div className=" text-xs text-gray-600">
              “The awesome team of Clipping Path Graphics always made sure that
              my comments and feedback were implemented. They showed me the
              tasks as they went forward and delivered what I wanted before the
              deadline. Really happy with their service.”
            </div>
            <header className=" font-semibold text-md my-3">
              Charles A Howard
            </header>
          </div>
          <div className=" border px-6 py-6 md:my-0 my-6 rounded-tr-2xl rounded-bl-2xl ">
            <img src={rating} className="mt-3 mb-2" alt="" />

            <div className=" text-xs text-gray-600">
              “Clipping Path Graphics has an expert team of designers. It took
              them just a few seconds to grab what I wanted. They delivered good
              work, and the customer support team was always available. Can’t
              think of a service provider better than them!”
            </div>
            <header className=" font-semibold text-md my-3">
              Joseph I Daigneault
            </header>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageMaskAboutSay;
