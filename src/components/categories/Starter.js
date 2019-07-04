import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles(theme => ({
  card: {
    width: 400,
    border: 4,
    borderColor: "#83a4d4"
  },
  font: {
    fontFamily: "Montserrat"
  },
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  gridList: {
    width: 700,
    height: 600
  }
}));

const Starter = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridList cellHeight={200} className={classes.gridList} cols={2}>
        {props.recipe.map(recipe =>
          recipe.category_id === 1 ? (
            <GridListTile>
              <Card key={recipe.id}>
                <CardContent className={classes.card}>
                  <IconButton
                    color="secondary"
                    aria-label="Delete"
                    className={classes.margin}
                  >
                    <DeleteIcon onClick={() => props.removeRecipe(recipe.id)} />
                  </IconButton>
                  <Typography variant="h6" className={classes.font}>
                    {recipe.title}
                  </Typography>
                  <Typography className={classes.font} color="textSecondary">
                    Ingredients: {recipe.ingredient}
                  </Typography>
                  <Typography className={classes.font} color="textSecondary">
                    {recipe.ingredient}
                  </Typography>
                  <Typography className={classes.font}>
                    Method: {recipe.body}
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
