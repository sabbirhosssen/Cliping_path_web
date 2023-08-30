// import React from 'react';
import clock from "./../../Images/PageImage/pricing/clock.png";
import fast from "./../../Images/PageImage/pricing/fast.png";
import Money from "./../../Images/PageImage/pricing/money.png";
import paypal from "./../../Images/PageImage/pricing/paypal.png";

const PricingFeatures = () => {
  return (
    <div className=" md:px-32 px-6 md:pb-16 pb-12 md:pt-6 bg-[#1e2b52]">
      <header className="text-3xl text-white font-sans-font-bold mb-3">
        Our Special Features
      </header>
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className=" py-4 px-2">
          <img src={clock} className="my-3" alt="" />
          <header className="text-lg text-[#ff8a00] font-sans font-bold my-1">
            Save time
          </header>
          <div className="text-white font-sans text-xs">
            Stop entering your payment details over and over again. Pay once and
            streamline all your future orders.
          </div>
        </div>
        <div className=" py-4 px-2">
          <img src={fast} className="my-3" alt="" />
          <header className="text-lg text-[#ff8a00] font-sans font-bold">
            Save Money
          </header>
          <div className="text-white font-sans text-xs">
            The more credits you purchase, the bigger the savings (and the more
            you can invest elsewhere in your business). Each credit is worth $1
            towards your order.
          </div>
        </div>
        <div className=" py-4 px-2 ">
          <img src={Money} className="my-3" alt="" />
          <header className="text-lg text-[#ff8a00] font-sans font-bold my-1">
            Fast, secure checkout
          </header>
          <div className="text-white font-sans text-xs">
            We accept most major credit cards and PayPal. We’ll only take your
            payment details once you’ve finalized your order and are ready to
            authorize payment.
          </div>
        </div>
        <div className=" py-4 px-2">
          <header className="text-lg text-[#ff8a00] font-sans font-bold">
            Payment Method
          </header>

          <img src={paypal} alt="" className="w-full mt-6 h-fit" />
        </div>
      </div>
    </div>
  );
};

export default PricingFeatures;
