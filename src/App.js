import React from "react";
import Welcome from "./components/Welcome";
import Recipes from "./components/Recipes";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to={"/"} className="nav-link">
          Home
        </Link>

        <Switch>
          <Route exact path="/" component={() => <Welcome />} />
          <Route exact path="/recipes" component={() => <Recipes />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
