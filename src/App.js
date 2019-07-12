import React from "react";
import Welcome from "./components/Welcome";
import Plants from "./components/dashboard/plants-section/Plants";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="light" fixed="top" variant="light">
          <Navbar.Brand href="/">Home</Navbar.Brand>
        </Navbar>

        <Switch>
          <Route exact path="/" component={() => <Welcome />} />
          <Route path="/plants" render={() => <Plants />} />
          <Route path="/aroids" render={() => <Plants />} />
          <Route path="/succulents" render={() => <Plants />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
