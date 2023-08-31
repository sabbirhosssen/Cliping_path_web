import design from "./../../../Images/ServiceImage/Global/List-icon.png";
import tableimg from "./../../../Images/ServiceImage/Global/work.png";
const RetouchingWeWork = () => {
  return (
    <div>
      <div className="md:px-32 px-12 md:py-16  bg-[#f5f6fb] flex flex-col-reverse md:flex md:flex-row gap-5">
        <div className=" md:w-6/12 md:my-0 my-12">
          <header className="text-3xl font-sans font-bold">How We Work</header>
          <div className="my-4 font-sans text-xs  text-gray-600">
            Clipping Path Graphics believes in clarity and authentic service
            more than anything. For that reason, we share our work process with
            our clients to rely on our service.
          </div>
          <div className="">
            <div className=" text-left ">
              <div className="flex justify-start items-baseline mb-3">
                <div className=" pe-2 w-8">
                  <img src={design} alt="" srcSet="" />
                </div>
                <div className="inline font-semibold text-gray-600">
                  First, the assigned graphics designer isolates the object from
                  the picture and makes it transferrable to a different
                  background.
                </div>
              </div>
              <div className="flex justify-start items-baseline mb-3">
                <div className=" pe-2 w-8">
                  <img src={design} alt="" srcSet="" />
                </div>
                <div className="font-semibold text-gray-600">
                  Then, the blurriness is fixed after adjusting the color and
                  contrast.
                </div>
              </div>
              <div className="flex justify-start items-baseline mb-3">
                <div className=" pe-2 w-8">
                  <img src={design} alt="" srcSet="" />
                </div>
                <div className="font-semibold text-gray-600">
                  We use Clone Stamp Tool at this point to fix any torn portion,
                  dust, or scratches.
                </div>
              </div>
              <div className="flex justify-start items-baseline mb-3">
                <div className=" pe-2 w-8">
                  <img src={design} alt="" srcSet="" />
                </div>
                <div className="font-semibold text-gray-600">
                  After that, we use the Healing Brush Tool for increasing
                  smoothness and fixing any color defect.
                </div>
              </div>
              <div className="flex justify-start items-baseline mb-3">
                <div className=" pe-2 w-8">
                  <img src={design} alt="" srcSet="" />
                </div>
                <div className="font-semibold text-gray-600">
                  If needed, to fix the loss of quality due to editing, our
                  expert designers will make further resizing and retouches to
                  the image.
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

export default RetouchingWeWork;
