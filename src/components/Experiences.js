import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";
import { getExperiences } from "../helpers";
import PacmanLoader from "react-spinners/PacmanLoader";

export default function Experiences() {
  const [experiences, setExperiences] = useState();
  const [isLoading, setIsLoading] = useState();

  const loadExperiences = async (setIsLoading, setExperiences) => {
    setIsLoading(true);
    try {
      await getExperiences(setExperiences);
    } catch (err) {
      console.log("err loadexperience:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadExperiences(setIsLoading, setExperiences);
  }, []);

  return (
    <Wrapper>
      <h1 style={styles.frontText}>{"Experience"}</h1>
      <PacmanLoader color={"#ff0080"} loading={isLoading} />
      <Container>
        {experiences &&
          experiences.map((el) => {
            return (
              <Card>
                <Grid Container>
                  <Grid item xs={8} style={styles.titleContainer}>
                    <h1 style={styles.title}>{el.name}</h1>
                    <h6>{el.date}</h6>
                  </Grid>
                  <Grid item xs={4}>
                    <img src={el.logo} alt="company logo" style={styles.img} />
                  </Grid>
                </Grid>
                <Content>
                  <Bar />
                  <TextContainer>
                    <p>{el.description}</p>
                    <IconContainer>
                      <div style={styles.iconDiv}>
                        {el.icons.map((icon) => {
                          return <img src={icon} alt="" style={styles.icon} />;
                        })}
                      </div>
                    </IconContainer>
                  </TextContainer>
                </Content>
              </Card>
            );
          })}
      </Container>
      <MobileContainer>
        {experiences &&
          experiences.map((el) => {
            return (
              <MobileCard>
                <Grid Container>
                  <Grid item xs={8} style={styles.titleContainer}>
                    <h1 style={styles.title}>{el.name}</h1>
                    <h6>{el.date}</h6>
                  </Grid>
                  <Grid item xs={4}>
                    <img src={el.logo} alt="company logo" style={styles.img} />
                  </Grid>
                </Grid>
                <Content>
                  <Bar />
                  <MobileTextContainer>
                    <p>{el.description}</p>
                  </MobileTextContainer>
                </Content>
              </MobileCard>
            );
          })}
      </MobileContainer>
    </Wrapper>
  );
}

const styles = {
  frontText: {
    marginTop: "3vh",
    fontSize: 34,
    fontWeight: 400,
    fontFamily: "Raleway",
    letterSpacing: "-.20px",
    background: "linear-gradient(to right, #dd5e89, #f7bb97)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
  titleContainer: {
    margin: 10,
    width: 350,
    paddingTop: 15,
    color: "white",
  },
  title: {
    fontSize: 34,
    fontWeight: 400,
    fontFamily: "Raleway",
    letterSpacing: "-.20px",
    background: "linear-gradient(to right, #dd5e89, #f7bb97)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: "50%",
    boxShadow: "0 0 0.5rem #d1f2fd",
    position: "absolute",
    right: 10,
    top: 10,
  },
  iconDiv: {
    display: "inline-block",
  },
  icon: {
    width: 35,
    margin: 5,
  },
  textContainer: {
    marginTop: 20,
  },
  txt: {
    color: "#434343",
  },
};

const Wrapper = styled.div`
  height: 100%;
`;
const Container = styled.div`
  position: absolute;
  top: 15vh;
  left: calc(50% - 500px);
  display: flex;
  @media (max-width: 600px) {
    display: none;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 15vh;
  left: 2vh;
`;

const TextContainer = styled.div`
  color: white;
  margin-top: 5vh;
  width: 340px;
  height: 340px;
  position: relative;
`;

const Bar = styled.div`
  background: linear-gradient(to right, #2980b9, #6dd5fa, #ffffff);
  width: 70%;
  height: 2px;
`;

const Card = styled.div`
  display: flex;
  height: 500px;
  width: 360px;
  background-color: rgb(64, 64, 64, 1);
  border-radius: 10px;
  box-shadow: 0 0 2rem #d1f2fd;
  margin-left: -25px;
  transition: 0.4s ease-out;
  position: relative;
  left: 0px;
  &:not(:first-child) {
    margin-right: -40px;
  }
  &:hover {
    transform: translateY(-40px);
    transition: 0.4s ease-out;
  }
  &:hover ~ div {
    position: relative;
    left: 80px;
    transition: 0.4s ease-out;
  }
`;
const IconContainer = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10;
`;

const MobileContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 5vh;
  margin-left: 2vw;
  @media (min-width: 600px) {
    display: none;
  }
`;

const MobileCard = styled.div`
  display: flex;
  height: 300px;
  width: 360px;
  background-color: rgb(64, 64, 64, 1);
  border-radius: 10px;
  box-shadow: 0 0 2rem #d1f2fd;
  transition: 0.4s ease-out;
  position: relative;
  &:not(:first-child) {
    margin-top: -150px;
  }
  &:hover {
    transform: translateY(-90px);
    transition: 0.4s ease-out;
    z-index: 1;
  }
  &:hover ~ div {
    position: relative;
    left: 20px;
    transition: 0.6s ease-out;
    z-index: 1;
    margin-top: -90px;
  }
`;

const MobileTextContainer = styled.div`
  color: white;
  margin-top: 1vh;
  width: 340px;
  height: 140px;
  position: relative;
`;
