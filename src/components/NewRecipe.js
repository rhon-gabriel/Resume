import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import Button from "react-bootstrap/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  card: {
    width: 450,
    height: 600
  },
  field: {
    height: 70
  },
  addButton: {
    float: "right"
  }
}));

const NewRecipe = props => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [watering, setWatering] = useState("");
  const [link, setLink] = useState("");
  const [body, setBody] = useState("");
  const [category_id, setCategory] = useState("");

  const handleChange = input => e => {
    input(e.target.value);
  };

  return (
    <Form
      className={classes.card}
      onSubmit={() => props.add(name, watering, link, body, category_id)}
    >
      <Form.Control
        required
        className={classes.field}
        type="text"
        placeholder="Name"
        onChange={handleChange(setName)}
      />
      <Form.Control
        required
        className={classes.field}
        type="text"
        placeholder="Watering"
        onChange={handleChange(setWatering)}
      />
      <Form.Control
        required
        className={classes.field}
        type="text"
        placeholder="Link"
        onChange={handleChange(setLink)}
      />
      <Form.Control
        required
        as="textarea"
        rows="8"
        type="text"
        placeholder="Care"
        onChange={handleChange(setBody)}
      />
      <Form.Check
        required
        inline
        type="radio"
        label="Philodendron"
        name="categories"
        id="philodendron"
        value="1"
        onChange={handleChange(setCategory)}
      />
      <Form.Check
        inline
        type="radio"
        label="Aroids"
        name="categories"
        id="aroids"
        value="2"
        onChange={handleChange(setCategory)}
        required
      />
      <Form.Check
        inline
        type="radio"
        label="Succulents"
        name="categories"
        id="succulents"
        value="3"
        onChange={handleChange(setCategory)}
        required
      />
      <br />
      <Button className={classes.addButton} variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
};
export default NewRecipe;
