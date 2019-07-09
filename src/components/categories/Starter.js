import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden"
  },
  gridList: {
    width: 600,
    height: 500
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  },
  img: {
    borderRadius: "5%"
  }
}));

const Starter = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <GridList cellHeight={200} cols={3} className={classes.gridList}>
        {props.plant.map(plant =>
          plant.category_id === 1 ? (
            <GridListTile key={plant.id} id={plant.id}>
              <img
                src={plant.link}
                alt="image"
                className={classes.img}
                key={plant.id}
              />
              <GridListTileBar
                title={plant.name}
                onClick={handleClickOpen}
                key={plant.id}
                id={plant.id}
              />
              <Dialog open={open} onClose={handleClose} id={plant.id}>
                <DialogContent id={plant.id}>
                  <DialogTitle id={plant.id}>{plant.name}</DialogTitle>
                  <hr />
                  <DialogContentText>
                    Watering: {plant.watering}
                    <hr />
                    Care: {plant.body}
                  </DialogContentText>
                </DialogContent>
              </Dialog>
            </GridListTile>
          ) : null
        )}
      </GridList>
    </div>
  );
};

export default Starter;
