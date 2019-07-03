import React from "react";
import Recipes from "../components/Recipes";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Welcome() {
  return (
    <Router>
      <div>
        <h1>Hello</h1>
        <Link to={"/recipes"} className="nav-link">
          Recipes
        </Link>

        <Switch>
          <Route exact path="/recipes" component={() => <Recipes />} />
        </Switch>
      </div>
    </Router>
  );
}
