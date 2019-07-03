import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    width: 300
  },
  title: {
    fontSize: 14
  }
});

const Main = props => {
  const classes = useStyles();
  return (
    <div>
      {props.recipe.length > 0 &&
        props.recipe.map(recipe =>
          recipe.category_id === 2 ? (
            <Card className={classes.card} key={recipe.id}>
              <CardContent>
                <div className="recipeList" recipe={recipe}>
                  <CardActions>
                    <button onClick={() => props.removeRecipe(recipe.id)}>
                      X
                    </button>
                  </CardActions>
                  <Typography variant="h5" component="h2">
                    {recipe.title}
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    Ingredients: {recipe.ingredient}
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    {recipe.ingredient}
                  </Typography>
                  <Typography variant="body2" component="p">
                    Method: {recipe.body}
                  </Typography>
                </div>
              </CardContent>
            </Card>
          ) : null
        )}
    </div>
  );
};

export default Main;
