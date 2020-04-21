import React from "react";
import {
  StyledModal,
  useStyles
} from "../../modals/plant-modal/StyledPlantModal";

import { 
  GridListTileBar, 
  Dialog, 
  DialogTitle, 
  Slide,
  Button
 } from "@material-ui/core";
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
                Family: <br />
                {props.category}
              </p>
              <p>
                Watering: <br />
                {props.watering}
              </p>

              <p>
                Description: <br />
                {props.body}
              </p>
            </Col>
          </Row>
        </StyledModal>
        <div style={{display: 'flex', justifyContent: 'center', marginBottom: 40}}>
          <div style={{display: 'flex', justifyContent: 'space-between', width: 400}}>
            <Button style={styles.button} variant="outlined" color="secondary">
              Swap
            </Button>
            <Button style={styles.button} size="large" variant="outlined" color="primary">
              Trade
            </Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default SimpleModal;

const styles = {
  button: {
    width: 130, 
    height: 60
  }
}