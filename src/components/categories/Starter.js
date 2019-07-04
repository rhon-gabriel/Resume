import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

const useStyles = makeStyles({
  card: {
    width: 400,
    border: 4,
    borderColor: "#83a4d4"
  },
  title: {
    fontSize: 12
  },
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  gridList: {
    width: 700,
    height: 600
  }
});

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
                  <button onClick={() => props.removeRecipe(recipe.id)}>
                    X
                  </button>
                  <Typography variant="h5" component="h2">
                    {recipe.title}
                  </Typography>
                  <Typography color="textSecondary">
                    Ingredients: {recipe.ingredient}
                  </Typography>
                  <Typography color="textSecondary">
                    {recipe.ingredient}
                  </Typography>
                  <Typography variant="body2" component="p">
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
