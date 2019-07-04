import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormGroup from "@material-ui/core/FormGroup";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  card: {
    width: 350
  },
  field: {
    height: 70
  }
}));

const NewRecipe = props => {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [body, setBody] = useState("");
  const [category_id, setCategory] = useState("");

  const handleChange = input => e => {
    input(e.target.value);
  };

  return (
    <Card className={classes.card}>
      <Form onSubmit={() => props.add(title, ingredients, body, category_id)}>
        <Form>
          <Form.Control
            className={classes.field}
            type="text"
            placeholder="Title"
            onChange={handleChange(setTitle)}
            required
          />
        </Form>

        <Form>
          <Form.Control
            as="textarea"
            rows="7"
            type="text"
            placeholder="Ingredients"
            onChange={handleChange(setIngredients)}
            required
          />
        </Form>

        <FormGroup row>
          <Form.Control
            as="textarea"
            rows="7"
            type="text"
            placeholder="Method"
            onChange={handleChange(setBody)}
            required
          />
        </FormGroup>

        <Form.Check
          inline
          type="radio"
          label="Starter"
          name="categories"
          id="starter"
          value="1"
          onChange={handleChange(setCategory)}
          required
        />
        <Form.Check
          inline
          type="radio"
          label="Main"
          name="categories"
          id="main"
          value="2"
          onChange={handleChange(setCategory)}
          required
        />
        <Form.Check
          inline
          type="radio"
          label="Dessert"
          name="categories"
          id="dessert"
          value="3"
          onChange={handleChange(setCategory)}
          required
        />
      </Form>
      <Button variant="primary" type="submit">
        Add
      </Button>
    </Card>
  );
};
export default NewRecipe;
