import React from "react";
import WelcomePage from "./components/WelcomePage";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Interests from "./components/cards/Interests";
import Navigation from "./components/Navigation";

import ReactFullpage from "@fullpage/react-fullpage";

export default function App() {
  return (
    <ReactFullpage
      navigation
      scrollSpeed={1000}
      scrollHorizontally={true}
      fitToSection={true}
      fadingEffect={true}
      render={({ fullpageApi }) => {
        return (
          <div>
            <Navigation
              id={"section-1"}
              content={<WelcomePage scroll={fullpageApi} />}
            />
            <Navigation id={"section-3"} content={<Experiences />} />
            <Navigation id={"section-2"} content={<Skills />} />
            <Navigation id={"section-4"} content={<Interests scroll={fullpageApi}/>} />
          </div>
        );
      }}
    />
  );
}
