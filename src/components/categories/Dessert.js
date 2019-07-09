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

const Dessert = props => {
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
          plant.category_id === 3 ? (
            <GridListTile key={plant.id}>
              <img
                src={plant.link}
                alt="image"
                className={classes.img}
                key={plant.id}
              />
              <GridListTileBar title={plant.name} onClick={handleClickOpen} />
              <Dialog open={open} onClose={handleClose} key={plant.name}>
                <DialogContent>
                  <DialogTitle>{plant.name}</DialogTitle>
                  <hr />
                  <DialogContentText>
                    <img src={plant.link} alt="image" className={classes.img} />
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

export default Dessert;
