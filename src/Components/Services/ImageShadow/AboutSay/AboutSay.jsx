import logoimage from "./../../../Images/ServiceImage/Global/Global_trustpilot.png";
import about_bg from "./../../../Images/ServiceImage/Global/about_bg.png";
import rating from "./../../../Images/ServiceImage/Global/rating.png";
const AboutSay = () => {
  return (
    <div
      className="md:px-32 px-12 md:py-16 py-16 bg-no-repeat bg-top bg-[#f5f6fb] "
      style={{ backgroundImage: `url(${about_bg})` }}
    >
      <div className="hs">
        <div className="text-center my-3">
          <header className="md:text-3xl text-2xl font-bold ">
            What Our Clients Have to Say About Us
          </header>
          <div className=" text-sm text-gray-600">
            We take our customer reviews seriously and always look for areas of
            growth. See what our clients said about our service.
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
            “I needed image shadow creation service for my eCommerce site.
            Around 500 images had to go through a drop shadow photo editing
            service on an urgent basis. After talking to many companies,
            Clipping Path Graphics seemed to be the most professional and
            efficient. And I wasn’t wrong. The service they offered within the
            affordable price range is beyond my expectation. Looking forward to
            a fruitful business relationship!”
          </div>
          <header className=" font-semibold text-md">Carmen L Lewis</header>
        </div>
        <div className=" border px-6 py-6 md:my-0 my-6 rounded-tr-2xl rounded-bl-2xl ">
          <img src={rating} className="mb-3" alt="" />
          <div className=" text-xs text-gray-600">
            “The editors are highly efficient at Clipping Path Graphics. They
            know their work, and they understand the natural shadow service. The
            product images that I gave them are better than ever through their
            professional retouches. I highly recommend Clipping Path Graphics
            for their efficient and professional editing service.”
          </div>
          <header className=" font-semibold text-md">Rose D Gibbs</header>
        </div>
        <div className=" border px-6 py-6 md:my-0 my-6 rounded-tr-2xl rounded-bl-2xl ">
          <img src={rating} className="mb-3" alt="" />
          <div className=" text-xs text-gray-600">
            “Shadow creation or reduction is a quite complicated process. I was
            a bit skeptical at first about whether Clipping Path Graphics could
            do a good job or not. But, they truly surprised me with their
            professional service and efficient image shadow creation. Already
            placed a large order, and looking forward to their success.”
          </div>
          <header className=" font-semibold text-md">Clara M Hogge</header>
        </div>
      </div>
    </div>
  );
};

export default AboutSay;
