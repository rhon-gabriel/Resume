import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import pic from "../../assets/images/pictureCard.png";

const useStyles = makeStyles(theme => ({
  card: {
    border: "1px solid pink",
    borderRadius: "5%",
    width: 350,
    height: 560,
    display: "flex",
    flexDirection: "column",
    padding: "3vh",
    textAlign: "justify",
    boxShadow: "2px 1px #b7b9bd"
  },
  img: {
    width: 190,
    height: 180,
    borderRadius: "50%",
    boxShadow: "2px 2px #b7b9bd"
  },
  a: {
    margin: "3vh 60px 0 60px"
  },
  cursive: {
    fontStyle: "oblique",
    fontSize: 22,
    margin: "auto"
  },
  icon: {
    width: 35,
    margin: 5
  },
  iconDiv: {
    display: "flex",
    justifyContent: "center"
  }
}));

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
          The silence of growing things 🌱
        </span>
        <p className={classes.txt}>
          A simple container of plants with information about their origin and
          how to take care of them. <br /> All stored plants in this container
          are plants i currently own.
          <span>Follow me on instagram for more plants related posts</span>
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
          <a
            href="mailto: rhoneil.gabriel@me.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://www.philippes.com/wp-content/uploads/2017/01/email-icon.png"
              alt=""
              className={classes.icon}
            />
          </a>
          <a
            href="https://www.instagram.com/ronsgarden/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-circle-512.png"
              alt=""
              className={classes.icon}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardAbout;
