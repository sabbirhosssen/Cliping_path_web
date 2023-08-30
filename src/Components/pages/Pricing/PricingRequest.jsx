// import React from 'react';
import { useState } from "react";
import dropbox from "./../../Images/PageImage/pricing/dropbox.png";
import ftpfile from "./../../Images/PageImage/pricing/ftp.png";
import trsndfer from "./../../Images/PageImage/pricing/we-transfer.png";
import PricingInput from "./PricingInput";

const PricingRequest = () => {
  const [file, setFile] = useState(null);
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };
  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  // {
  // Do something with the selected option, file, and attachment link

  console.log("Selected File:", file);

  const handleinputFile = () => {
    document.getElementById("file").click();
    return false;
  };
  return (
    <div className="mt-20">
      <div className="md:flex md:justify-center md:items-center md:gap-2">
        <div className="md:w-4/12">
          <header className="text-3xl font-sans font-bold mb-2">
            Request a quote
          </header>
          <header className="text-xl text-[#ff8a00] font-sans font-semibold">
            Ready to get started?
          </header>
        </div>
        <div className="md:w-8/12 text-sm font-sans text-gray-500 md:pe-16">
          Welcome to our image treatment world (Clipping Path Graphics). For
          justify our quality works you can check out our service by submitting
          an image to us which is totally free of cost.
        </div>
      </div>
      <div className="md:flex md:justify-center md:items-start mt-5">
        <div className="md:w-6/12">
          <PricingInput />
        </div>
        <div className="md:w-6/12 md:p-4">
          <div className="jf">
            <header className="text-xl font-sans font-bold">
              For Large files
            </header>
            <div className="text-sm text-gray-600 mt-2">
              If your Image/ file size is more than 5 MB, please consider below
              options to transfer your images/ files.
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4 py-10">
            <div className=" p-4 text-center rounded-lg border-dashed  border-2 border-gray-400">
              <div className="w-full flex justify-center item-center">
                <img
                  src={dropbox}
                  className="w-44 md:w-auto   px-10 py-3  "
                  alt="DropBox"
                />
              </div>

              <div className="text-xs font-sans text-gray-600 my-1">
                You can send your images via DropBox
              </div>
              <div className="sh">
                <button
                  htmlFor="file-input"
                  onClick={handleinputFile}
                  className="border border-blue-500 p-2 px-4 rounded-3xl font-sm text-md"
                >
                  Browse File
                </button>
                <input
                  type="file"
                  id="file"
                  name="file-input"
                  className=" invisible w-8"
                  // accept=".pdf,.doc,.docx"

                  // style={{ display: "none" }}
                  onChange={handleFileChange}
                />{" "}
              </div>
            </div>
            <div className=" p-4 text-center rounded-lg border-dashed  border-2 border-gray-400">
              <div className="w-full flex justify-center item-center">
                <img
                  src={trsndfer}
                  className="w-44 md:w-auto   px-10 py-3  "
                  alt="DropBox"
                />
              </div>

              <div className="text-xs font-sans text-gray-600 my-1">
                You can send your images via DropBox
              </div>
              <div className="sh">
                <button
                  htmlFor="file-input"
                  onClick={handleinputFile}
                  className="border border-blue-500 p-2 px-4 rounded-3xl font-sm text-md"
                >
                  Browse File
                </button>
                <input
                  type="file"
                  id="file"
                  name="file-input"
                  className=" invisible w-8"
                  // accept=".pdf,.doc,.docx"

                  // style={{ display: "none" }}
                  onChange={handleFileChange}
                />{" "}
              </div>
            </div>
            <div className=" p-4 text-center rounded-lg border-dashed  border-2 border-gray-400">
              <div className="w-full flex justify-center item-center">
                <img
                  src={ftpfile}
                  className="w-44 md:w-auto   px-10 py-3  "
                  alt="DropBox"
                />
              </div>
              <div className="text-xs font-sans text-gray-600 my-1">
                You can send your images via DropBox
              </div>
              <div className="sh">
                <button
                  htmlFor="file-input"
                  onClick={handleinputFile}
                  className="border border-blue-500 p-2 px-4 rounded-3xl font-sm text-md"
                >
                  Browse File
                </button>
                <input
                  type="file"
                  id="file"
                  name="file-input"
                  className=" invisible w-8"
                  // accept=".pdf,.doc,.docx"

                  // style={{ display: "none" }}
                  onChange={handleFileChange}
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingRequest;
