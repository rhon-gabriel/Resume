import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { fetchData } from "../../helpers";

import Philodendron from "../categories/Philodendron";
import Aroids from "../categories/Aroids";
import Succulents from "../categories/Succulents";
import CardAbout from "./CardAbout";

import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  containerMargin: {
    display: "flex",
    margin: "10vh 20px 20px 20px"
  },
  row: {
    width: "100%"
  },
  button: {
    margin: theme.spacing(0.5),
    borderRadius: 5,
    height: 50,
    width: 200,
    padding: "0 30px",
    borderColor: "red pink orange red",
    backgroundImage: "linear-gradient(0deg, #fefefe 0%, #fefefe 100%)"
  },
  input: {
    display: "none"
  },
  navCategories: {
    justifyContent: "center"
  },
  textTable: {
    border: "1px solid pink",
    borderRadius: "5%",
    width: 350,
    height: 560,
    display: "flex",
    flexDirection: "column",
    padding: "3vh",
    textAlign: "justify"
  },
  img: {
    width: 190,
    height: 180,
    borderRadius: "50%"
  },
  a: {
    margin: "3vh 60px 0 60px"
  },
  cursive: {
    fontStyle: "oblique",
    fontSize: 22,
    margin: "auto"
  }
}));

const Plant = () => {
  const [plant, setPlants] = useState([]);

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
    fetchData(setPlants);
  }, []);

  const classes = useStyles();
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
