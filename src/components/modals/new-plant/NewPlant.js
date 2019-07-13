import React, { useState } from "react";
import { addNewPlant } from "../../../helpers";

import Form from "react-bootstrap/Form";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import { red } from "@material-ui/core/colors";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

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
  },
  paper: {
    position: "absolute",
    width: 500,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2),
    outline: "none"
  },
  iconHover: {
    margin: theme.spacing(2),
    "&:hover": {
      color: red[800]
    }
  }
}));

const NewRecipe = props => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [watering, setWatering] = useState("");
  const [link, setLink] = useState("");
  const [body, setBody] = useState("");
  const [category_id, setCategory] = useState("");
  const [open, setOpen] = React.useState(false);
  const [modalStyle] = React.useState(getModalStyle);

  const handleChange = input => e => {
    input(e.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Icon
        className={classes.iconHover}
        color="error"
        style={{ fontSize: 40 }}
        onClick={handleOpen}
      >
        add_circle
      </Icon>
      <Button onClick={handleOpen} />
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <Form
            className={classes.card}
            onSubmit={() =>
              addNewPlant(props.plant, name, watering, link, body, category_id)
            }
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
            <Button
              className={classes.addButton}
              variant="primary"
              type="submit"
            >
              Add
            </Button>
          </Form>
        </div>
      </Modal>
    </div>
  );
};
export default NewRecipe;
