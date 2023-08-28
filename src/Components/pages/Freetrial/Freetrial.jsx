// import React from "react";
import { MdRadioButtonChecked } from "react-icons/md";
import AttachmentInput from "./AttachmentInput";

// import { useState } from "react";
const Freetrial = () => {
  return (
    <div className="md:px-28 px-6 md:pb-16 pb-12 md:pt-6 bg-[#f5f6fb]">
      <dev>
        <div className=" md:flex md:justify-center md:items-start md:gap-3 ">
          {/* fjdksjfl */}
          <div className="sec1 py-5 md:w-5/12 p-2">
            <div className="sh">
              <header className="text-4xl font-bold my-4">Free trial</header>
              <header className="text-lg font-semibold text-[#ff8a00]">
                THE BEST PHOTO EDITING SERVICE COMPANY YOU BE THE JUDGE.
              </header>
            </div>
            <div className="sj">
              <header className="text-3xl font-bold my-8 mt-12">
                INSTRUCTION
              </header>
              <div className="my-3">
                <header className="text-sm font-medium text-[#4f5864] mb-2">
                  How to fill up the free trial form
                </header>
                <div className="">
                  <div className="flex  items-center gap-1">
                    <div className="text-sm">
                      {" "}
                      <MdRadioButtonChecked />
                    </div>
                    <div className="text-xs text-gray-600">
                      You can upload up to two files for a Free Trial
                    </div>
                  </div>
                  <div className="flex items-center gap-1 my-1">
                    <div className="text-sm">
                      {" "}
                      <MdRadioButtonChecked />
                    </div>
                    <div className="text-xs text-gray-600">
                      If your image file size exceeds this limit please mail us.
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-5">
                <header className="text-sm font-medium text-[#4f5864] my-2">
                  In case the page is loading slowly:
                </header>
                <div className="">
                  <div className="flex  items-center gap-1">
                    <div className="text-sm">
                      {" "}
                      <MdRadioButtonChecked />
                    </div>
                    <div className="text-xs  text-gray-600">
                      Please refresh the page, or
                    </div>
                  </div>
                  <div className="flex  items-center gap-1">
                    <div className="text-sm">
                      {" "}
                      <MdRadioButtonChecked />
                    </div>
                    <div className="text-xs text-gray-600">
                      Contact Us for any queries
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-xs  text-gray-600 my-8">
              We have 24/7 customer support. For any kind of free trial problem
              please Go to contact us.
            </div>
          </div>
          {/* dskj */}
          <div className="sec2 md:w-7/12">
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
                    <AttachmentInput />
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
                    Submit trial
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </dev>
    </div>
  );
};

export default Freetrial;
