import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  textTable: {
    border: "1px solid pink",
    borderRadius: "5%",
    width: 350,
    height: 560,
    display: "flex",
    flexDirection: "column",
    padding: "3vh",
    textAlign: "justify"
  },
  img: {
    width: 190,
    height: 180,
    borderRadius: "50%"
  },
  a: {
    margin: "3vh 60px 0 60px"
  },
  cursive: {
    fontStyle: "oblique",
    fontSize: 22,
    margin: "auto"
  }
}));

const CardAbout = () => {
  const classes = useStyles();
  return (
    <div className={classes.textTable}>
      <a
        href="https://www.instagram.com/ronsgarden/"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.a}
      >
        <img src="https://bit.ly/2YHCYRC" alt="" className={classes.img} />
      </a>
      <p className={classes.cursive}>The silence of growing things 🌱</p>
      <p className={classes.txt}>
        A simple container of plants with information about their origin and how
        to take care of them. <br /> All stored plants in this container are
        plants i currently own.
      </p>
      <span>Follow me on instagram for more plants related posts</span>
    </div>
  );
};

export default CardAbout;
