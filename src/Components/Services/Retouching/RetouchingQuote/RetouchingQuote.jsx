import quoteimg from "./../../../Images/ServiceImage/Global/lastly-Q2.png";
import quote_bg from "./../../../Images/ServiceImage/Global/shape-bg_Qb.jpg";
const RetouchingQuote = () => {
  return (
    <div>
      <div
        className="md:px-28 px-12  md:py-16 py-12 bg-[#ffffff] bg-no-repeat bg-center "
        style={{ backgroundImage: `url(${quote_bg})` }}
      >
        <div>
          <div className="md:flex md:justify-center md:items-start md:gap-5">
            <div className=" md:w-5/12 ">
              <img src={quoteimg} className=" w-max" alt="" />
            </div>
            <div className="py-6 md:w-6/12">
              <header className="text-2xl font-bold font-sans">
                Avail A Free Service by Becoming Our Client
              </header>
              <div className="text-gray-600 text-xs my-2">
                By becoming our client, you’re availing of free digital photo
                enhancement services to assess our work. See if our
                <span className="text-blue-600 font-sans font-medium">
                  {" "}
                  free trial{" "}
                </span>
                meets your requirements, and then place the order. We’re always
                available to provide a top-notch service meeting your needs.
              </div>
              <header className="md:text-2xl text-xl font-bold font-sans mt-3">
                Get an Instant Quote for Photo Editing and Retouching Services
              </header>
              <div className="block text-gray-600 text-xs mb-3 mt-2 ">
                So, What Are You Waiting For? Get an{" "}
                <span className="text-blue-600 font-sans font-medium">
                  {" "}
                  instant quote{" "}
                </span>
                by calling our phone number or contacting us via live chat right
                now! Our team of 300+ photo editors is always ready to provide
                you the best photo enhancement services. If you want to try our
                photo retouching manipulation service online, use our free trial
                to see if you like it.
              </div>
              <button className="border font-sans text-white outline-none md:py-3 py-2 md:px-6 px-4 bg-[#ff8a00] rounded-full">
                Instant Quote!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetouchingQuote;
