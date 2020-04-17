import React from "react";
import WelcomePage from "./components/WelcomePage";
import Plants from "./components/dashboard/plants-section/Plants";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div style={{padding: 15}}>
      <Router>
        <Switch>
          <Route exact path="/" component={() => <WelcomePage />} />
          <Route path="/plants" render={() => <Plants />} />
          <Route path="/aroids" render={() => <Plants />} />
          <Route path="/succulents" render={() => <Plants />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
