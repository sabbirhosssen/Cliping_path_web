import faq_bg from "./../../../Images/ServiceImage/Global/Faq_bg.png";
import faqimg from "./../../../Images/ServiceImage/Global/faq_img.png";
import BackFaqAccording from "./BackFaqAccording";

const BackFaq = () => {
  return (
    <div>
      <div
        className="md:px-32 px-12 my-8 md:my-2 md:py-16 bg-no-repeat bg-top"
        style={{ backgroundImage: `url(${faq_bg})` }}
      >
        <div>
          <div className="md:text-center text-start">
            <header className="md:text-3xl text-center  text-2xl font-sans font-extrabold mb-3">
              Frequently Asked Questions - FAQ
            </header>
            <div className="md:text-sm text-xs text-center  text-gray-600 font-sans mb-3">
              Clipping Path Graphics ensures professional and top-notch product
              background removal service catering to our clients needs. We take
              pride in our professionalism and utmost dedication.
            </div>
          </div>
          <div className="md:flex  md:items-center md:gap-4 my-4">
            <div className="">
              <img src={faqimg} className="md:my-0 my-6 h-min" alt="FAQ" />
            </div>
            <div className="md:w-8/12 bg-none">
              <div className=" bg-white ">
                <BackFaqAccording />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackFaq;
