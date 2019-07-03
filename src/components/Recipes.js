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

  return (
    <Container>
      <Row>
        <Col>
          <NewRecipe add={addNewList} />
        </Col>

        <Col>
          <Router>
            <Nav variant="pills light">
              <Nav.Link eventKey="link-1">
                <Link to={"/starter"} className="nav-link">
                  Starter
                </Link>
              </Nav.Link>

              <Nav.Item>
                <Nav.Link eventKey="link-2">
                  <Link to={"/main"} className="nav-link">
                    Main
                  </Link>
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="link-3">
                  <Link to={"/dessert"} className="nav-link">
                    Dessert
                  </Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <Switch>
              <Route
                exact
                path="/starter"
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
    </Container>
  );
};

export default Recipe;
