import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Modal from "../modals/plant-modal/PlantModal";
import NewPlant from "../modals/new-plant/NewPlant";

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

  return (
    <div className={classes.root}>
      <GridList cellHeight={200} cols={3} className={classes.gridList}>
        {props.plant.map(plant =>
          plant.category_id === 2 ? (
            <GridListTile key={plant.id}>
              <Modal
                link={plant.link}
                name={plant.name}
                watering={plant.watering}
                body={plant.body}
                id={plant.id}
                removeRecipe={props.removeRecipe}
              />
            </GridListTile>
          ) : null
        )}
        <NewPlant add={props.add} />
      </GridList>
    </div>
  );
};

export default Starter;
