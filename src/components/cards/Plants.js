import React from "react";

import { GridList, GridListTile } from "@material-ui/core";
import SimpleModal from "../modals/plant-modal/PlantModal";

export default function Plants(props) {
  const plants = props.plants;

  return (
    <div style={styles.root}>
      <div style={styles.headerWrapper}>
        <img style={{ width: 120 }}
        //  src={plants} 
         alt="indoor gardener" />
      </div>
      <GridList cellHeight={200} cols={3} style={styles.gridList}>
        {plants &&
          plants.map((plant) => (
            <GridListTile key={plant._id} style={{ zIndex: 2 }}>
              <SimpleModal
                link={plant.picture}
                name={plant.name}
                watering={plant.watering}
                body={plant.description}
                category={plant.category}
              />
            </GridListTile>
          ))}
      </GridList>
    </div>
  );
}

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
    padding: 10,
    marginLeft: 20,
  },
  headerWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "6vh",
    width: 600,
    overflow: "hidden",
    borderRadius: 6,
  },
  headerButton: {
    textTransform: "none",
    fontSize: 18,
    padding: 10,
  },
  gridList: {
    width: 600,
    height: 550,
  },
};
