import React from "react";
import Welcome from "./components/Welcome";
import Recipes from "./components/Recipes";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to={"/home"} className="nav-link">
          Home
        </Link>
        <Link to={"/recipes"} className="nav-link">
          Recipes
        </Link>

        <Switch>
          <Route exact path="/home" component={() => <Welcome />} />
          <Route exact path="/recipes" component={() => <Recipes />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
