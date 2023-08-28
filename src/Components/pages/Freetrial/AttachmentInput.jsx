import { useState } from "react";

const AttachmentInput = () => {
  const [selectedOption, setSelectedOption] = useState("fileinput");
  const [file, setFile] = useState(null);
  const [attachmentLink, setAttachmentLink] = useState("");

  const img1 =
    "https://cdn-eahnp.nitrocdn.com/LCPkSmIYbLjSQwpkUQQjpTZTKTmMsByp/assets/images/optimized/rev-195c362/clippingpathgraphics.com/wp-content/uploads/2021/11/paper-upload.png";

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleAttachmentLinkChange = (event) => {
    setAttachmentLink(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the selected option, file, and attachment link
    console.log("Selected Option:", selectedOption);
    console.log("Selected File:", file);
    console.log("Attachment Link:", attachmentLink);
  };
  const handleinputFile = () => {
    document.getElementById("file").click();
    return false;
  };
  return (
    <dev>
      <div>
        <form onSubmit={handleSubmit}>
          <select
            className="my-2 text-[#212529] bg-white font-semibold text-md w-full p-2 border rounded-md shadow-xl"
            onChange={(e) => handleOptionChange(e.target.value)}
          >
            <option value="fileinput">Upload files</option>
            <option value="attachmentLinkInput">Attachment file link</option>
            {/* <option value="fileInput">Upload files</option> */}
          </select>

          {selectedOption === "fileinput" ? (
            <div className="my-3">
              <label className="text-[#212529] font-bold text-md">
                Files Upload
              </label>

              <div className="flex justify-center items-center w-full border border-[#8a95a7] border-dotted my-3 p-8 rounded-xl gap-3">
                <img src={img1} alt="" />
                <div className="sfh">
                  <div className="my-2 text-sm font-medium">
                    Drop files here or
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
          ) : (
            ""
          )}

          {selectedOption === "attachmentLinkInput" && (
            <div className="my-3 ">
              <label className="text-[#212529] font-bold text-md">
                Paste your files download link
              </label>
              <input
                type="text"
                className="w-full border-2 my-3 p-4  rounded-xl placeholder:text-sm"
                placeholder="Dropbox, Google drive,Wetransfer or any file sharing link"
                value={attachmentLink}
                onChange={handleAttachmentLinkChange}
              />
            </div>
          )}
        </form>
      </div>
    </dev>
  );
};

export default AttachmentInput;
