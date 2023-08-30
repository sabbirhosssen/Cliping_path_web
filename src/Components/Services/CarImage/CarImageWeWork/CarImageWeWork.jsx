import list_icon from "./../../../Images/ServiceImage/Global/List-icon.png";
import tableimg from "./../../../Images/ServiceImage/Global/work.png";
const CarImageWeWork = () => {
  return (
    <div>
      <div className="md:px-32 px-12 md:py-16  bg-[#f5f6fb] flex flex-col-reverse md:flex md:flex-row gap-5">
        <div className=" md:w-6/12 md:my-0 my-12">
          <header className="text-3xl font-sans font-bold">How We Work</header>
          <div className="my-4 font-sans text-xs  text-gray-600">
            To ensure you that we follow the most professional, efficient
            process for offering you the best quality Automotive image editing
            services with{" "}
            <span className="text-blue-600">transparent background</span>, we’re
            describing how we do it. We use a pen tool to clip the paths in your
            any Automotive/Car pictures.
          </div>
          <div className="">
            <div className=" text-left ">
              <div className="flex justify-start items-baseline mb-3">
                <div className=" pe-2 w-8">
                  <img src={list_icon} alt="" srcSet="" />
                </div>
                <div className="inline font-semibold text-gray-600">
                  First, the assigned graphics designer draws a line around the
                  Car pics.
                </div>
              </div>
              <div className="flex justify-start items-baseline mb-3">
                <div className=" pe-2 w-8">
                  <img src={list_icon} alt="" srcSet="" />
                </div>
                <div className="font-semibold text-gray-600">
                  Then, the inner portion is marked, which will stay, and the
                  outer portion will be removed.
                </div>
              </div>
              <div className="flex justify-start items-baseline mb-3">
                <div className=" pe-2 w-8">
                  <img src={list_icon} alt="" srcSet="" />
                </div>
                <div className="font-semibold text-gray-600">
                  After removing the outer part, the inner portion is now ready
                  to be used on any background.
                </div>
              </div>
              <div className="flex justify-start items-baseline mb-3">
                <div className=" pe-2 w-8">
                  <img src={list_icon} alt="" srcSet="" />
                </div>
                <div className="font-semibold text-gray-600">
                  To fix the loss of quality due to editing, our expert designer
                  will make the necessary resizing and retouches to the image.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-6/12">
          <img src={tableimg} className=" h-min" alt="table img" />
        </div>
      </div>
    </div>
  );
};

export default CarImageWeWork;
