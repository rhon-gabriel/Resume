import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";

const NewRecipe = props => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [body, setBody] = useState("");
  const [category_id, setCategory] = useState("");

  const handleChange = input => e => {
    input(e.target.value);
  };

  return (
    <Form onSubmit={() => props.add(title, ingredients, body, category_id)}>
      <Form>
        <Form.Control
          type="text"
          placeholder="Title"
          onChange={handleChange(setTitle)}
          required
        />
      </Form>

      <Form>
        <Form.Control
          as="textarea"
          rows="5"
          type="text"
          placeholder="Ingredients"
          onChange={handleChange(setIngredients)}
          required
        />
      </Form>

      <FormGroup row>
        <Form.Control
          as="textarea"
          rows="5"
          type="text"
          placeholder="Method"
          onChange={handleChange(setBody)}
          required
        />

        <FormControlLabel
          control={<Checkbox value="1" onChange={handleChange(setCategory)} />}
          label="Starter"
        />
        <FormControlLabel
          control={<Checkbox value="2" onChange={handleChange(setCategory)} />}
          label="Main"
        />
        <FormControlLabel
          control={<Checkbox value="3" onChange={handleChange(setCategory)} />}
          label="Dessert"
        />
      </FormGroup>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
export default NewRecipe;
