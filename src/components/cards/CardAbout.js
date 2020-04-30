import React from "react";
import styled from "styled-components";

import netflix from "../../assets/images/netflix.png";
import camera from "../../assets/images/camera.png";
import hike from "../../assets/images/hike.png";
import travel from "../../assets/images/travel.png";
import coding from "../../assets/images/coding.png";
import leaves from "../../assets/images/leaves.png";

const CardAbout = (props) => {
  const { img } = props;

  return (
    <Card>
      <ProfilePic src={img} alt="profile pic" />
      <div style={styles.textContainer}>
        <div style={styles.name}>Rhoneil Gabriel</div>
        <h4 style={styles.profession}>Full Stack Developer</h4>
        <p style={styles.text}>
          Hi! My name is Rhon, I am a software developer by profession and
          indoor gardener on my spare time! <br /> Graduated from 2 intensive
          coding bootcamps where I learned Ruby and Javascript.
          <br /> some of my interests:
        </p>
        <div style={styles.iconDiv}>
          <Icon
            src={coding}
            alt="coding"
          />
          <Icon
            src={camera}
            alt="photography"
          />
          <Icon
            src={netflix}
            alt="movies"
          />
          <Icon
            src={leaves}
            alt="plants"
          />
          <Icon
            src={travel}
            alt="travel"
          />
          <Icon
            src={hike}
            alt="hiking"
          />
        </div>
      </div>
    </Card>
  );
};

export default CardAbout;

const styles = {
  icon: {
    width: 35,
    margin: 5,
  },
  iconDiv: {
    display: "flex",
    justifyContent: "center",
    marginTop: "5vh",
  },
  textContainer: {
    marginTop: "15vh",
    flex: 1,
    overflow: 'hidden'
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
    marginTop: "5vh",
  },
};

const Card = styled.div`
  position: relative;
  border-radius: 12px;
  width: 380px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  text-align: justify;
  box-shadow: 5px 2px 5px rgba(0, 0, 0, 0.08), 2px 5px 5px rgb(147, 163, 175, 4);
  margin-top: 20px;
  @media (max-width: 600px) {
    width: 330px;
    min-height: 550px;
  }
`;

const ProfilePic = styled.img`
  margin: 3vh 60px 0 60px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: 0 2px 25px 0px rgb(126, 255, 202),
    0 0 0 2px rgb(126, 255, 202, 0.5);
  position: absolute;
  opacity: 0.9px;
  animation: slide-top 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  @media (max-width: 600px) {
    width: 180px;
    height: 180px;
    margin: 3vh 50px 0 50px;
  }
`;

const Icon = styled.img`
  width: 35px;
  margin: 5px;
  animation: scale-down-center 3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  @media (max-width: 600px) {
    width: 10%;
    margin: 2px;
    animation: none !important;
  }
`;

