import React, { useState, useEffect } from "react";
import NewRecipe from "./NewRecipe";
import Starter from "./categories/Starter";
import Main from "./categories/Main";
import Dessert from "./categories/Dessert";
import axios from "axios";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

import { makeStyles } from "@material-ui/core/styles";

const Recipe = () => {
  const [recipe, setRecipes] = useState([]);

  async function fetchData() {
    const res = await fetch("/api/v1/recipes");
    res
      .json()
      .then(res => setRecipes(res.recipe))
      .catch(error => {
        console.log(error);
      });
  }

  async function addNewList(title, ingredient, body, category_id) {
    axios
      .post("/api/v1/recipes", { title, ingredient, body, category_id })
      .then(response => {
        const recipes = [...recipe, response.data];
        this.setRecipes(recipes);
      })
      .catch(error => {
        console.log(error);
      });
  }

  async function removeRecipe(id) {
    axios
      .delete("/api/v1/recipes/" + id)
      .then(res => {
        const recipes = recipe.filter(recipe => recipe.id !== id);
        setRecipes(recipes);
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
      marginLeft: 50
    },
    button: {
      margin: theme.spacing(0.5),
      background: "linear-gradient(to right, #83a4d4, #b6fbff)",
      borderRadius: 5,
      height: 50,
      width: 200,
      padding: "0 30px"
    },
    input: {
      display: "none"
    },
    font: {
      fontSize: 16,
      color: "white"
    }
  }));

  const classes = useStyles();
  return (
    <div className={classes.containerMargin}>
      <Row className={classes.row}>
        <Col>
          <NewRecipe add={addNewList} />
        </Col>

        <Col xs={12} md={8}>
          <Router>
            <Nav defaultActiveKey="/recipes">
              <Link to={"/recipes"} className={classes.font}>
                <button className={classes.button}>Starter</button>
              </Link>

              <Nav.Item>
                <Link to={"/main"} className={classes.font}>
                  <button className={classes.button}>Main</button>
                </Link>
              </Nav.Item>

              <Nav.Item>
                <Link to={"/dessert"} className={classes.font}>
                  <button className={classes.button}>Dessert</button>
                </Link>
              </Nav.Item>
            </Nav>

            <Switch>
              <Route
                exact
                path="/recipes"
                component={() => (
                  <Starter recipe={recipe} removeRecipe={removeRecipe} />
                )}
              />
              <Route
                exact
                path="/main"
                component={() => (
                  <Main recipe={recipe} removeRecipe={removeRecipe} />
                )}
              />
              <Route
                exact
                path="/dessert"
                component={() => (
                  <Dessert recipe={recipe} removeRecipe={removeRecipe} />
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
