import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    width: 440,
    height: 120,
    margin: 6,
  },
  gridList: {
    width: 600,
    height: 550,
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: 250,
    zIndex: 1,
  },
  // content: {
  //   flex: '1 0 auto',
  // },
  cover: {
    width: 100,
  },
}));

export default function Blog() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div>
      <div style={styles.headerWrapper}>
        <img
          style={{ width: 170, height: 40 }}
          // src={experiences}
          alt="Experiences"
        />
      </div>
      <div className={classes.root}>
        <Card className={classes.root}>
          <div className={classes.details}>
            <CardContent>
              <Typography gutterBottom variant="h6" component="h1">
                Woshapp
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Software Developer
              </Typography>
            </CardContent>
          </div>
          <CardMedia
            className={classes.cover}
            image="https://drive.google.com/uc?id=1CaGUlgt0-i_1PWrLbL20PLBN4I-Kp-lX"
            title="Live from space album cover"
          />
        </Card>
      </div>
    </div>
  );
}

const styles = {
  headerWrapper: {
    display: "flex",
    justifyContent: "center",
    height: "8vh",
  },
  headerButton: {
    textTransform: "none",
    fontSize: 18,
    padding: 10,
  },
};
