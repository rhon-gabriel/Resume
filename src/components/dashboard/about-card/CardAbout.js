import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useStyles } from "../about-card/StyledCardAbout";
import pic from "../../../assets/images/pictureCard.png";

const CardAbout = () => {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      <a
        href="https://www.instagram.com/ronsgarden/"
        target="_blank"
        rel="noopener noreferrer"
        className={classes.a}
      >
        <img src={pic} alt="" className={classes.img} />
      </a>
      <div className={classes.textTable}>
        <hr />
        <span className={classes.cursive}>
          The silence of growing things
          <span role="img" aria-labelledby="plant emoji">
            🌱
          </span>
        </span>
        <p className={classes.txt}>
          A simple container of plants with information about their origin and
          how to take care of them. It also allow add and delete functionalities.<br /> All stored plants in this container
          are plants i currently own.
        </p>
        <div className={classes.iconDiv}>
          <a
            href="https://www.linkedin.com/in/rhoneilgabriel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://image.flaticon.com/icons/svg/145/145807.svg"
              alt=""
              className={classes.icon}
            />
          </a>
          <a href="mailto: rhoneil.gabriel@me.com" target="_blank">
            <img src="https://bit.ly/2JsOif8" alt="" className={classes.icon} />
          </a>
          <a
            href="https://www.instagram.com/ronsgarden/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://bit.ly/2uxDUds" alt="" className={classes.icon} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardAbout;
