import React, { useState, useEffect } from "react";
import Philodendron from "./categories/Philodendron";
import Aroids from "./categories/Aroids";
import Succulents from "./categories/Succulents";
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
      padding: "0 30px",
      borderColor: "red pink orange red"
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

  const classes = useStyles();
  return (
    <div className={classes.containerMargin}>
      <Row className={classes.row}>
        <Col sm={3}>
          <div className={classes.textTable}>
            <a
              href="https://www.instagram.com/ronsgarden/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.a}
            >
              <img
                src="https://bit.ly/2YHCYRC"
                alt=""
                className={classes.img}
              />
            </a>
            <p className={classes.cursive}>The silence of growing things 🌱</p>
            <p className={classes.txt}>
              A simple container of plants with information about their origin
              and how to take care of them. <br /> All stored plants in this
              container are plants i currently own.
            </p>
            <span>Follow me on instagram for more plants related posts</span>
          </div>
        </Col>
        <Col sm={9}>
          <Router>
            <Nav className={classes.navCategories} defaultActiveKey="/plants">
              <Link to={"/plants"}>
                <button className={classes.button}>Philodendron</button>
              </Link>

              <Link to={"/aroids"}>
                <button className={classes.button}>Aroids</button>
              </Link>

              <Link to={"/succulents"}>
                <button className={classes.button}>Succulents</button>
              </Link>
            </Nav>

            <Switch>
              <Route
                exact
                path="/plants"
                component={() => (
                  <Philodendron plant={plant} removeRecipe={removeRecipe} />
                )}
              />
              <Route
                exact
                path="/aroids"
                component={() => (
                  <Aroids plant={plant} removeRecipe={removeRecipe} />
                )}
              />
              <Route
                exact
                path="/succulents"
                component={() => (
                  <Succulents plant={plant} removeRecipe={removeRecipe} />
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
