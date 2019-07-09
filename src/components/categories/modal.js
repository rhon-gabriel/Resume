import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import GridListTileBar from "@material-ui/core/GridListTileBar";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const useStyles = makeStyles(theme => ({
  img: {
    borderRadius: "5%",
    width: 200,
    height: 200
  },
  deleteBtn: {
    width: "100%",
    backgroundImage: "linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)",
    color: "white"
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(204, 169, 169, 0.2) 0%, rgba(185, 132, 132, 0.3) 70%, rgba(142, 109, 109, 0.2) 100%)"
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SimpleModal = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    console.log(open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <img
        src={props.link}
        alt=""
        className={classes.img}
        onClick={handleOpen}
      />
      <GridListTileBar
        title={props.name}
        onClick={handleOpen}
        className={classes.titleBar}
      />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        className={classes.main}
      >
        <DialogTitle className={classes.dialog}>
          {props.name}
          <hr />
        </DialogTitle>

        <DialogContent>
          <Row>
            <Col>
              <img src={props.link} alt="" className={classes.img} />
            </Col>
            <Col>
              <p>
                Watering: <br />
                {props.watering}
              </p>

              <p>
                Care: <br />
                {props.body}
              </p>
            </Col>
          </Row>
          <button
            className={classes.deleteBtn}
            onClick={() => props.removeRecipe(props.id)}
          >
            Delete
          </button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SimpleModal;
