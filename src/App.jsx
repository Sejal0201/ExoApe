import React from "react";
import Navbar from "./Components/Navbar";
import Start from "./Components/Start";
import Work from "./Components/Work";
import Playreel from "./Components/Playreel";
import Images from "./Components/Images";
import Spread from "./Components/Spread";
import LocomotiveScroll from 'locomotive-scroll';



function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full ">
      <Navbar />
      <Start/>
      <Work/>
      <Playreel/>
      <Images/>
      <Spread/>
    </div>
  );
}

export default App;
