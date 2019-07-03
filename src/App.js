import React from "react";
import Welcome from "./components/Welcome";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to={"/home"} className="nav-link">
          Home
        </Link>

        <Switch>
          <Route exact path="/home" component={() => <Welcome />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
