import BackgroundRemoval from "./Components/Services/BackgroundRemoval/BackgroundRemoval";
import CarImage from "./Components/Services/CarImage/CarImage";
import ClipingPath from "./Components/Services/ClipingPath/ClipingPath";
import Ecommerce from "./Components/Services/Ecommerce/Ecommerce";
import Ghost from "./Components/Services/Ghost/Ghost";
import ImageMask from "./Components/Services/ImageMask/ImageMask";
import ImageShadow from "./Components/Services/ImageShadow/ImageShadow";
import Retouching from "./Components/Services/Retouching/Retouching";
import Contact from "./Components/pages/Contact";
import Freetrial from "./Components/pages/Freetrial/Freetrial";

function App() {
  return (
    <>
      <div>
        <header className="text-center">Page </header>
        <Freetrial />
        <Contact />
        <header className="text-center">Page End</header>

        <header className="text-center text-5xl">Services Page start </header>
        <header className="text-center">Backgroound removal</header>
        <BackgroundRemoval />
        <header className="text-center">Backgroound removal End</header>
        <header className="text-center">Clipingpath removal</header>
        <ClipingPath />
        <header className="text-center">Clipingpath removal End</header>
        <header className="text-center">Ecommerce </header>
        <Ecommerce />
        <header className="text-center">Ecommerce End</header>
        <header className="text-center">Ghost </header>
        <Ghost />
        <header className="text-center">Ghost End</header>
        <header className="text-center">ImageMask </header>
        <ImageMask />
        <header className="text-center">ImageMask End</header>
        <header className="text-center">ImageShadow </header>
        <ImageShadow />
        <header className="text-center">ImageShadow End</header>
        <header className="text-center">Retouching </header>
        <Retouching />
        <header className="text-center">Retouching End</header>
        <header className="text-center">CarImage </header>
        <CarImage />
        <header className="text-center">CarImage End</header>
        <header className="text-center">Services Page End</header>
      </div>
    </>
  );
}

export default App;
