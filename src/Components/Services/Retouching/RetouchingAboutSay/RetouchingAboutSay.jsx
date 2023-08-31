import about_bg from "./../../../Images/ServiceImage/Global/about_bg.png";
import logoimage from "./../../../Images/ServiceImage/Global/Global_trustpilot.png";
import starlogo from "./../../../Images/ServiceImage/Global/rating.png";
const RetouchingAboutSay = () => {
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
            <div className=" text-sm text-gray-600 mt-3">
              At Clipping Path Graphics, we take feedback very seriously and
              constantly work on areas to improve. See what our clients have
              said about our service.
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
            <img src={starlogo} className="mb-3" alt="" />
            <div className=" text-xs text-gray-600">
              “I had around 1,000 photos for my eCommerce site. As I was looking
              for the best retouching service provider, I stumbled upon Clipping
              Path Graphics. They offered me the best price and a reasonable
              deadline. I didn’t find any single issue with the project. Wishing
              them all the best in their future endeavors!”
            </div>
            <header className=" font-semibold text-md my-3">
              Devin J Dupuy
            </header>
          </div>
          <div className=" border px-6 py-6 md:my-0 my-6 rounded-tr-2xl rounded-bl-2xl ">
            <img src={starlogo} className="mb-3" alt="" />
            <div className=" text-xs text-gray-600">
              “Photo retouching is tricky and requires an extensive amount of
              work. I tried to fix some of my wedding photos and had to quit.
              The designers at Clipping Path Graphics promised me the best
              wedding photo retouching service, and they kept their words.
              Really happy with their service!”
            </div>
            <header className=" font-semibold text-md my-3">
              Craig T Sigala
            </header>
          </div>
          <div className=" border px-6 py-6 md:my-0 my-6 rounded-tr-2xl rounded-bl-2xl ">
            <img src={starlogo} className="mt-3 mb-2" alt="" />

            <div className=" text-xs text-gray-600">
              “I run an online fashion store, and I needed fashion photo
              retouching services for my website. I tried Clipping Path
              Graphics’ service for the first time and was impressed with their
              professionalism. I gave them a tight deadline, but they delivered
              the photos on time, maintaining quality. I highly recommend their
              service!”
            </div>
            <header className=" font-semibold text-md my-3">
              Clifton M Miller
            </header>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetouchingAboutSay;
