import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { fetchData } from "../../../helpers";
import { useStyles } from "../plants-section/StyledPlants";

import Philodendron from "../../categories/Philodendron";
import Aroids from "../../categories/Aroids";
import Succulents from "../../categories/Succulents";
import CardAbout from "../about-card/CardAbout";

import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Plant = () => {
  const classes = useStyles();
  const [plant, setPlants] = useState([]);
  useEffect(() => {
    fetchData(setPlants);
  }, []);

  async function removeRecipe(id) {
    axios
      .delete("/api/v1/plants/" + id)
      .then(res => {
        const plants = plant.filter(plant => plant.id !== id);
        setPlants(plants);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div className={classes.containerMargin}>
      <Row className={classes.row}>
        <Col sm={4}>
          <CardAbout />
        </Col>
        <Router>
          <Col sm={8}>
            <Nav className={classes.navCategories} defaultActiveKey="/plants">
              <Link to={"/plants"}>
                <button className={classes.button}>Philodendron</button>
              </Link>

              <Link to={"/aroids"}>
                <button className={classes.button}>Aroids</button>
              </Link>

              <Link to="/succulents">
                <button className={classes.button}>Succulents</button>
              </Link>
            </Nav>

            <Switch>
              <Route
                exact
                path="/plants"
                render={() => (
                  <Philodendron plant={plant} removeRecipe={removeRecipe} />
                )}
              />
              <Route
                exact
                path="/aroids"
                render={() => (
                  <Aroids plant={plant} removeRecipe={removeRecipe} />
                )}
              />
              <Route
                exact
                path="/succulents"
                render={() => (
                  <Succulents plant={plant} removeRecipe={removeRecipe} />
                )}
              />
            </Switch>
          </Col>
        </Router>
      </Row>
    </div>
  );
};

export default Plant;
