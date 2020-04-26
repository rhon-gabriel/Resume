import React from "react";

import netflix from "../../assets/images/netflix.png";
import camera from "../../assets/images/camera.png";
import hike from "../../assets/images/hike.png";
import travel from "../../assets/images/travel.png";
import coding from "../../assets/images/coding.png";
import leaves from "../../assets/images/leaves.png";

const CardAbout = (props) => {
  const { img } = props;

  return (
    <div style={styles.card}>
      <img src={img} alt="profile pic" style={styles.img} />
      <div style={styles.textContainer}>
        <div style={styles.name}>Rhoneil Gabriel</div>
        <h4 style={styles.profession}>Full Stack Developer</h4>
        <p style={styles.text}>
          Hi! My name is Rhon, I am a software developer by profession and
          indoor gardener on my spare time! <br /> Graduated from 2 intensive
          coding bootcamps where I learned Ruby and Javascript.
        </p>
        <p style={styles.text}>some of my interests:</p>
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
    boxShadow:
      "0px 2px 25px 0px rgb(126,255,202), 0px 0px 0px 2px rgb(126,255,202, 0.5)",
    position: "absolute",
    opacity: 0.9,
    animation: "slide-top 2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
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
  name: {
    marginTop: 10,
    padding: 5,
    fontSize: 25,
    animation: "text-focus-in 2s",
    animationFillMode: "cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
    justifyContent: "center",
    display: "flex",
    background: "linear-gradient(to right, #40e0d0, #ff8c00, #ff0080)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
  profession: {
    fontSize: 16,
    animation: "text-focus-in 2s",
    animationFillMode: "cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
    justifyContent: "center",
    display: "flex",
    letterSpacing: 2,
    color: "#434343",
  },
  text: {
    color: "#434343",
    lineHeight: 1.5,
  },
};
