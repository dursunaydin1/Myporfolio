import React from "react";
import RoundOne from "./components/roundDesgins/RoundOne";
import RoundTwo from "./components/roundDesgins/RoundTwo";
import RoundThree from "./components/roundDesgins/RoundThree";
import RoundFour from "./components/roundDesgins/RoundFour";
import RoundFive from "./components/roundDesgins/RoundFive";
import Home from "./Home";

function App() {
  return (
    <div className="w-full h-screen font-bodyfont text-textColor bg-black relative  overflow-hidden">
      <div className="max-w-screen-2x1 h-full mx-auto flex justify-center items-center">
        <Home />
      </div>
      <div className="w-full h-full absolute top-0 left-0 z-10">
        <RoundOne />
        <RoundTwo />
        <RoundThree />
        <RoundFour />
        <RoundFive />
      </div>
    </div>
  );
}

export default App;
