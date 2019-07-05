import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { minHeight } from "@material-ui/system";

const useStyles = makeStyles(theme => ({
  card: {
    width: 300,
    border: 4,
    borderColor: "#83a4d4"
  },
  font: {
    fontFamily: "Montserrat"
  },
  fontTitle: {
    fontFamily: "Montserrat",
    color: "#009fff"
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  gridList: {
    width: 600,
    height: 500
  },
  deleteButton: {
    float: "right",
    position: "relative",
    marginTop: "-15px"
  },
  image: {
    maxWidth: 200,
    minHeight: 200,
    margin: "auto"
  }
}));

const Starter = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridList cellHeight={400} className={classes.gridList} cols={2}>
        {props.plant.map(plant =>
          plant.category_id === 1 ? (
            <GridListTile>
              <Card key={plant.id}>
                <CardContent className={classes.card}>
                  <IconButton
                    color="secondary"
                    aria-label="Delete"
                    className={classes.deleteButton}
                  >
                    <DeleteIcon onClick={() => props.removeRecipe(plant.id)} />
                  </IconButton>
                  <Typography variant="h6" className={classes.fontTitle}>
                    {plant.name}
                  </Typography>
                  <Typography className={classes.font}>
                    Watering: {plant.watering}
                  </Typography>
                  <img src={plant.link} alt="image" className={classes.image} />
                  <Typography className={classes.font}>
                    Care: {plant.body}
                  </Typography>
                </CardContent>
              </Card>
            </GridListTile>
          ) : null
        )}
      </GridList>
    </div>
  );
};

export default Starter;
