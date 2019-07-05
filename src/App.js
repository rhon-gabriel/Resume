import React from "react";
import Welcome from "./components/Welcome";
import Recipes from "./components/Recipes";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="light">
          <Navbar.Brand href="/">Home</Navbar.Brand>
        </Navbar>

        <Switch>
          <Route exact path="/" component={() => <Welcome />} />
          <Route exact path="/recipes" component={() => <Recipes />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
