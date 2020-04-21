import React from "react";
import WelcomePage from "./components/WelcomePage";
import Main from "./components/Main";

import ReactFullpage from "@fullpage/react-fullpage";

export default function App() {
  return (
    <ReactFullpage
      scrollOverflow={true}
      render={({ fullpageApi }) => {
        return (
          <div id="fullpage-wrapper">
            <div className="section section1">
              <WelcomePage />
            </div>

            <div className="section" id="section-2">
              <div className="slide">
                <Main />
              </div>
              <div className="slide">
                Education
              </div>
            </div>

            <div className="section">
              <h3>Skills</h3>
              <button onClick={() => fullpageApi.moveTo(1, 0)}>Move top</button>
            </div>

            <div className="section">
              <h3>Hobbies</h3>
              <button onClick={() => fullpageApi.moveTo(1, 0)}>Move top</button>
            </div>
          </div>
        );
      }}
    />
  );
}
