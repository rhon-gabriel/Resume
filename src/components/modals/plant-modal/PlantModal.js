import React from "react";
import {
  StyledModal,
  useStyles
} from "../../modals/plant-modal/StyledPlantModal";

import GridListTileBar from "@material-ui/core/GridListTileBar";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

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

        <StyledModal className={classes.dialogContent}>
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
        </StyledModal>
      </Dialog>
    </div>
  );
};

export default SimpleModal;
