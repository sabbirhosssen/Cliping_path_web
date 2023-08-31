import ghostfeature from "./../../../Images/ServiceImage/Ghost/ghost-features.png";
import list_icon from "./../../../Images/ServiceImage/Global/List-icon.png";
import feature_bg from "./../../../Images/ServiceImage/Global/feture-bg.png";
const GhostFeatures = () => {
  return (
    <div>
      <div
        className="md:px-28 px-12 py-16 min-h-max text-white bg-no-repeat bg-center bg-[#1e2b58]  "
        style={{ backgroundImage: `url(${feature_bg})` }}
      >
        <div className="md:grid   md:grid-cols-3 md:gap-2  ">
          <div className="">
            <header className=" font-sans font-bold text-2xl md:text-3xl text-start mb-3">
              Our Special <span className="sm:inline md:block"> Features</span>
            </header>
            <div className="text-start md:text-sm text-xs md:mt-8 mt-4 ">
              Our skilled designers will do what it takes to offer you the most
              professional photo editing service maintaining quality. Our
              adjustments include:
            </div>

            <button className="block bg-blue-600 rounded-full py-3 px-6 my-8">
              Get started
            </button>
          </div>
          <div className=" text-left md:my-0 my-16 ">
            <div className="flex justify-start items-baseline">
              <div className=" pe-2">
                <img src={list_icon} alt="" srcSet="" />
              </div>
              <div className="inline font-semibold mb-2">
                Ghost Mannequin Neck Joint Services
              </div>
            </div>
            <div className="flex justify-start items-baseline">
              <div className=" pe-2">
                <img src={list_icon} alt="" srcSet="" />
              </div>
              <div className="inline font-semibold mb-2">
                3D Ghost Mannequin
              </div>
            </div>
            <div className="flex justify-start items-baseline">
              <div className=" pe-2">
                <img src={list_icon} alt="" srcSet="" />
              </div>
              <div className="inline font-semibold mb-2">
                Product Shadow Service
              </div>
            </div>
            <div className="flex justify-start items-center">
              <div className=" pe-2">
                <img src={list_icon} alt="" srcSet="" />
              </div>
              <div className="font-semibold mb-2">
                Color Correction and Modification
              </div>
            </div>
            <div className="flex justify-start items-center">
              <div className=" pe-2">
                <img src={list_icon} alt="" srcSet="" />
              </div>
              <div className="font-semibold mb-2">
                Realistic and Natural Shadow
              </div>
            </div>
            <div className="flex justify-start items-center">
              <div className=" pe-2">
                <img src={list_icon} alt="" srcSet="" />
              </div>
              <div className="font-semibold mb-2">Drop Shadow</div>
            </div>
            <div className="flex justify-start items-center">
              <div className=" pe-2">
                <img src={list_icon} alt="" srcSet="" />
              </div>
              <div className="font-semibold mb-2">Reflection Shadow</div>
            </div>
            <div className="flex justify-start items-center">
              <div className=" pe-2">
                <img src={list_icon} alt="" srcSet="" />
              </div>
              <div className="font-semibold mb-2">Manual Clipping</div>
            </div>
            <div className="flex justify-start items-center">
              <div className=" pe-2">
                <img src={list_icon} alt="" srcSet="" />
              </div>
              <div className="font-semibold mb-2">Smooth Anchoring</div>
            </div>
          </div>
          <div className="  ">
            <img
              src={ghostfeature}
              className="w-auto h-full rounded-bl-2xl rounded-tr-2xl"
              alt=""
              sizes=""
              srcSet=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GhostFeatures;
