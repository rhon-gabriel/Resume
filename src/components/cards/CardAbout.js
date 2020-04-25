import React from "react";
import netflix from "../../assets/images/netflix.png";
import camera from "../../assets/images/camera.png";
import hike from "../../assets/images/hike.png";
import travel from "../../assets/images/travel.png";
import coding from "../../assets/images/coding.png";
import leaves from "../../assets/images/leaves.png";

const CardAbout = (props) => {
  const { img, title } = props;

  return (
    <div style={styles.card}>
      <img
        src={img}
        alt="profile pic"
        style={styles.img}
      />
      <div style={styles.textContainer}>
        <h1 style={styles.frontText}>{title}</h1>
        <p style={styles.text}>
          Hi, my name is Rhon! I am a software developer and indoor gardener on
          my spare time!
        </p>
        <p style={styles.text}>
          {" "}
          Graduated from 2 intensive coding bootcamps where I learned the basics
          of Ruby and Javascript, skills that I further developed in the field
          as a<span style={styles.styledText}>full stack developer.</span>
        </p>
        <p style={styles.text}>Interests:</p>
        <div style={styles.iconDiv}>
          <img
            className="rotate-in-center"
            src={coding}
            alt="coding"
            style={styles.icon}
          />
          <img
            className="puff-in-center"
            src={camera}
            alt="photography"
            style={styles.icon}
          />
          <img
            className="scale-down-center"
            src={netflix}
            alt="movies"
            style={styles.icon}
          />
          <img
            className="rotate-in-center"
            src={leaves}
            alt="plants"
            style={styles.icon}
          />
          <img
            className="swirl-in-fwd"
            src={travel}
            alt="travel"
            style={styles.icon}
          />
          <img
            className="rotate-in-center"
            src={hike}
            alt="hiking"
            style={styles.icon}
          />
        </div>
      </div>
    </div>
  );
};

export default CardAbout;

const styles = {
  card: {
    position: "relative",
    borderRadius: 12,
    width: 380,
    height: 550,
    display: "flex",
    flexDirection: "column",
    padding: 20,
    textAlign: "justify",
    boxShadow: "5px 2px 5px rgba(0,0,0, .08), 2px 5px 5px rgb(147,163,175, 4)",
    marginTop: 20,
  },
  img: {
    margin: "3vh 60px 0 60px",
    width: 200,
    height: 200,
    borderRadius: "50%",
    boxShadow: "0 0px 5px rgba(0,0,0, 0.9), 2px 2px 10px rgb(156,186,169, 4)",
    position: "absolute",
    opacity: 0.9,
    animation: 'slide-top 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'
  },
  icon: {
    width: 35,
    margin: 5,
  },
  iconDiv: {
    display: "flex",
    justifyContent: "center",
  },
  textContainer: {
    marginTop: "15vh",
  },
  frontText: {
    marginTop: 10,
    padding: 5,
    fontSize: 35,
    animation: "text-focus-in 2s",
    animationFillMode: "cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
    fontFamily: "Caveat",
    letterSpacing: "-.20px",
    transform: "translateX(-70px)",
    background: "linear-gradient(to right, #aa4b6b, #6b6b83, #3b8d99)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
  text: {
    color: "#434343",
    lineHeight: 1.5,
  },
  styledText: {
    background: "linear-gradient(to right, #aa4b6b, #6b6b83, #3b8d99)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
};
