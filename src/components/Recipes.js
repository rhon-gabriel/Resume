import React, { useState, useEffect } from "react";
import Welcome from "./Welcome";
import NewRecipe from "./NewRecipe";
import Starter from "./categories/Starter";
import Main from "./categories/Main";
import Dessert from "./categories/Dessert";
import axios from "axios";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { makeStyles } from "@material-ui/core/styles";

const Recipe = () => {
  const [plant, setPlants] = useState([]);

  async function fetchData() {
    const res = await fetch("/api/v1/plants");
    res
      .json()
      .then(res => setPlants(res.plant))
      .catch(error => {
        console.log(error);
      });
  }

  async function addNewList(name, watering, link, body, category_id) {
    axios
      .post("/api/v1/plants", { name, watering, link, body, category_id })
      .then(response => {
        const plants = [...plant, response.data];
        this.setPlants(plants);
      })
      .catch(error => {
        console.log(error);
      });
  }

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

  useEffect(() => {
    fetchData();
  }, []);

  const useStyles = makeStyles(theme => ({
    containerMargin: {
      margin: "10vh 20px 20px 20px"
    },
    button: {
      margin: theme.spacing(0.5),
      borderRadius: 5,
      height: 50,
      width: 200,
      padding: "0 30px"
    },
    input: {
      display: "none"
    },
    navCategories: {
      justifyContent: "center"
    }
  }));

  const classes = useStyles();
  return (
    <div className={classes.containerMargin}>
      <Row className={classes.row}>
        <Col sm={3}>
          <h1>lorem ipsum</h1>
          <p>Aimas is a b</p>
          <p>psyduck</p>
          <NewRecipe add={addNewList} />
        </Col>
        <Col sm={9}>
          <Router>
            <Nav className={classes.navCategories} defaultActiveKey="/plants">
              <Link to={"/plants"}>
                <button className={classes.button}>Philodendron</button>
              </Link>

              <Link to={"/main"}>
                <button className={classes.button}>Aroids</button>
              </Link>

              <Link to={"/dessert"}>
                <button className={classes.button}>Succulents</button>
              </Link>
            </Nav>

            <Switch>
              <Route
                exact
                path="/plants"
                component={() => (
                  <Starter plant={plant} removeRecipe={removeRecipe} />
                )}
              />
              <Route
                exact
                path="/main"
                component={() => (
                  <Main plant={plant} removeRecipe={removeRecipe} />
                )}
              />
              <Route
                exact
                path="/dessert"
                component={() => (
                  <Dessert plant={plant} removeRecipe={removeRecipe} />
                )}
              />
            </Switch>
          </Router>
        </Col>
      </Row>
    </div>
  );
};

export default Recipe;
