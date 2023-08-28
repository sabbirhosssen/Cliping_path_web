import BackgroundRemoval from "./Components/Services/BackgroundRemoval/BackgroundRemoval";
import ClipingPath from "./Components/Services/ClipingPath/ClipingPath";
import ImageShadow from "./Components/Services/ImageShadow/ImageShadow";
import Contact from "./Components/pages/Contact";
import Freetrial from "./Components/pages/Freetrial/Freetrial";

function App() {
  return (
    <>
      <div>
        <header className="text-center">Clipingpath removal</header>
        <ClipingPath />
        <header className="text-center">Clipingpath removal End</header>

        <Freetrial />
        <Contact />
        <header className="text-center">Backgroound removal</header>
        <BackgroundRemoval />
        <header className="text-center">Backgroound removal End</header>
        <header className="text-center">ImageShadow </header>
        <ImageShadow />
        <header className="text-center">ImageShadow End</header>
      </div>
    </>
  );
}

export default App;
