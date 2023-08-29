// import React from 'react';

const RetouchingAboutSay = () => {
  const starlogo =
    "https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/rating.svg";
  const logoimage =
    "https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/trustpilot.png";
  return (
    <div>
      <div className="md:px-32 px-12 md:py-16 py-16 bg-no-repeat bg-top bg-[#f5f6fb] bg-[url('https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/themes/graphic-it/assets/img/map.svg')] ">
        <div className="hs">
          <div className="text-center my-3">
            <header className="md:text-3xl text-2xl font-bold ">
              What Our Clients Have to Say About Us
            </header>
            <div className=" text-sm text-gray-600">
              We take our customer reviews seriously and always look for areas
              of growth. See what our clients have said about our service.
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
              “Finding the best e-commerce product photo editing services turned
              out to be quite challenging until I found Clipping Path Graphics.
              They’re professional and quite serious about their work. I’m using
              their eCommerce photo editing services for a long time now, and
              they hardly gave me room for complaint.”
            </div>
            <header className=" font-semibold text-md my-3">
              Dallas J McIntosh
            </header>
          </div>
          <div className=" border px-6 py-6 md:my-0 my-6 rounded-tr-2xl rounded-bl-2xl ">
            <img src={starlogo} className="mb-3" alt="" />
            <div className=" text-xs text-gray-600">
              “Product image editing services are highly essential for any
              eCommerce business, so was for mine. While I was looking for a
              product photography editing service, I found the website of
              Clipping Path Graphics. I requested a quote and tried their free
              service. They’ve been providing product retouching services for my
              business, and I’m quite happy with their work.”
            </div>
            <header className=" font-semibold text-md my-3">
              Evelyn T Pressley
            </header>
          </div>
          <div className=" border px-6 py-6 md:my-0 my-6 rounded-tr-2xl rounded-bl-2xl ">
            <img src={starlogo} className="mt-3 mb-2" alt="" />
            <header className=" font-thin mb-2 text-md">
              As an older customer
            </header>
            <div className=" text-xs text-gray-600">
              “I needed Photoshop editing for eCommerce, and I barely had the
              time to do it myself. So, Clipping Path Graphics was the knight in
              shining armor for me. They have the best team of designers with
              years of experience and professionalism.”
            </div>
            <header className=" font-semibold text-md my-3">
              Gary D Fulton
            </header>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetouchingAboutSay;
