// import React from 'react';
import PricingAttach from "./PricingAttach";

const PricingInput = () => {
  return (
    <div>
      <div className="">
        <dev>
          <div className="  ">
            {/* fjdksjfl */}

            {/* dskj */}
            <div className="sec2 ">
              <div className=" w-full">
                <div className="max-w-md mx-auto md:p-4 p-2">
                  <form>
                    <div className="mb-4">
                      <label className="block font-bold mb-1 font-sans">
                        Email *
                      </label>
                      <input
                        type="email"
                        className="w-full p-2 border rounded-md shadow-xl placeholder:text-sm"
                        placeholder="Please enter your business email."
                      />
                    </div>
                    <div className="flex justify-center items-center md:gap-3 gap-2">
                      <div className="mb-4">
                        <label className="block font-bold mb-1 font-sans ">
                          Name *
                        </label>
                        <input
                          type="text"
                          className="w-full p-2  rounded-md shadow-xl border-gray-500 placeholder:text-sm"
                          placeholder="Please enter your name"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block font-bold mb-1 font-sans">
                          Website *
                        </label>
                        <input
                          type="url"
                          className="w-full p-2 border rounded-md shadow-xl placeholder:text-sm"
                          placeholder="Please enter your Website"
                        />
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="block font-bold  my-1 font-sans">
                        Chose Files Upload Method *
                      </label>
                      <PricingAttach />
                    </div>

                    <div className="mb-4">
                      <label className="block font-bold mb-1 font-sans">
                        Instruction *
                      </label>
                      <textarea
                        className="w-full p-2 border rounded-md"
                        placeholder="Type Here..."
                        rows="8"
                      />
                    </div>
                    <button
                      type="submit"
                      className=" bg-[#ff8a00] font-semibold text-white md:py-3 py-2 px-6 rounded-full  hover:opacity-80 ]"
                    >
                      Submit Quote
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </dev>
      </div>
    </div>
  );
};

export default PricingInput;
