import React from "react";
import styled from "styled-components";

const CardAbout = (props) => {
  const { img } = props;

  return (
    <Card>
      <ProfilePic src={img} alt="profile pic" />
      <div style={styles.textContainer}>
        <div style={styles.name}>Rhoneil Gabriel</div>
        <h4 style={styles.profession}>Full Stack Developer</h4>
        <div style={styles.paragraph}>
          <p style={styles.text}>
            Hi! My name is Rhon, I am a software developer by profession and
            indoor gardener on my spare time! 
          </p>
          <p style={styles.text}>
            Graduated from 2 intensive coding bootcamps, 
            where I learned Ruby and Javascript
          </p>
          <p style={styles.text}>
            Currently employed as Full-Stack Developer, working mainly 
            with React/React Native and Node.js
          </p>
        </div>
      </div>
    </Card>
  );
};

export default CardAbout;

const styles = {
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
  paragraph: {
    marginTop: '5vh'
  },
  text: {
    color: "#434343",
    lineHeight: 1.5,
    marginTop: "2vh"
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
    min-height: 500px;
  }
  @media (min-width: 600px) and (max-width: 800px){
    width: 460px;
    height: 650px;
    font-size: 20px;
  }
  @media (min-width: 800px) and (max-width: 1024px) {
    margin-left: 40px;
    width: 450px;
    height: 750px;
    font-size: 22px;
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
  @media (min-width: 600px) and (max-width: 800px){
    width: 220px;
    height: 220px;
    margin: 3vh 90px 0 90px;
  }
  @media (min-width: 800px) and (max-width: 1024px) {
    width: 250px;
    height: 230px;
    margin: 3vh 55px 0 55px;
  }
`;
