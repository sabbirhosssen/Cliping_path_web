// import React from 'react';
import { IoIosCall, IoLogoSkype } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
const Contact = () => {
  return (
    <div className="md:px-32 px-6 md:pb-16 pb-12 md:pt-6 bg-[#f5f6fb]">
      <div className="md:flex justify-center items-center ">
        <div className=" md:w-5/12  w-full p-5">
          <div className="sec1">
            <header className="text-2xl font-extrabold font-sans">
              Get in Touch
            </header>
            <div className="text-gray-600 font-sans text-xs my-4">
              Clipping Path Graphics is one of the trusted Clipping Path Service
              Provider in 2022. We have the experience of working in this field.
              Almost 10 years and working with hundred clients from all over the
              world.
            </div>
          </div>
          <div className="sec2 my-3">
            <header className="text-lg font-bold font-sans">Call us</header>
            <div className=" flex gap-2 items-center justify-start mb-3 mt-1">
              <div className="">
                <IoIosCall />{" "}
              </div>
              <div className="text-gray-800 text-xs ">+1 (304) 574-8370</div>
            </div>
          </div>
          <div className="sec3 my-3">
            <header className="text-lg font-bold font-sans">Skype</header>
            <div className=" flex gap-2 items-center mb-3 mt-1">
              <div className="">
                <IoLogoSkype />{" "}
              </div>
              <div className="text-gray-800 text-xs ">rahim.minu1</div>
            </div>
          </div>
          <div className="sec4 my-3">
            <header className="text-lg font-bold font-sans">Mail us</header>
            <div className=" flex gap-2 items-center  mb-3 mt-1">
              <div className="">
                <MdEmail />{" "}
              </div>
              <div className="text-gray-600 text-xs">
                info@clippingpathgraphics.com
              </div>
            </div>
            <div className=" flex gap-2 items-center mb-4 mt-2">
              <div className="">
                <MdEmail />{" "}
              </div>
              <div className="text-gray-600 text-xs ">
                clippingpathgraphics@gmail.com
              </div>
            </div>
          </div>
          <div className="sec5 my-3">
            <header className=" text-lg font-bold font-sans my-3">
              Visit us
            </header>
            <div className=" flex gap-2  items-center mb-2 mt-1">
              <div className="mb-3">
                <IoLocationSharp />{" "}
              </div>
              <div className="text-gray-600 text-xs ">
                {" "}
                US Office: 10126 ADOBE DRIVE Houston TX 77095
              </div>
            </div>
            <div className=" flex gap-2 items-center">
              <div className="mb-2">
                <IoLocationSharp />{" "}
              </div>
              <div className="text-gray-600 text-xs mb-3 mt-1">
                {" "}
                BD Office: Bicon more collage road, Rangpur
              </div>
            </div>
          </div>
        </div>
        {/* dgdsj */}
        <div className=" md:w-7/12 w-full">
          <div className="max-w-md mx-auto p-4">
            <form>
              <div className="flex justify-center items-center md:gap-3 gap-2">
                <div className="mb-4">
                  <label className="block font-bold mb-1 font-sans ">
                    Name *
                  </label>
                  <input
                    type="text"
                    className="w-full p-2  rounded-md shadow-xl border-gray-500"
                    placeholder="Name"
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-bold mb-1 font-sans">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="w-full p-2 border rounded-md shadow-xl"
                    placeholder="Email..."
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-1 font-sans">
                  Subject *
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md shadow-xl"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-4">
                <label className="block font-bold mb-1 font-sans">
                  Message *
                </label>
                <textarea
                  className="w-full p-2 border rounded-md"
                  placeholder="Type Here..."
                  rows="8"
                />
              </div>
              <button
                type="submit"
                className=" bg-[#ff8a00] font-semibold text-white py-3 px-6 rounded-full  hover:opacity-80 ]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        {/* hfdsj */}
      </div>
    </div>
  );
};

export default Contact;
