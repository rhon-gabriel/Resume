import React from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";
import woshapp from "../assets/images/woshapp.png";

const arr = [
  {
    name: "Woshapp",
    date: "Sept 2019 - Present",
    logo: woshapp,
    description: `Full-stack developer working on Woshapp’s web, iOS and android app.
  Full-stack developer working on Woshapp’s web, iOS and android app.
  Full-stack developer working on Woshapp’s web, iOS and android app.
  Full-stack developer working on Woshapp’s web, iOS and android app.`,
    icons: [
      "https://image.flaticon.com/icons/svg/145/145807.svg",
      "https://bit.ly/2JsOif8",
      "https://bit.ly/2uxDUds",
    ],
  },
  {
    name: "Woshapp",
    date: "Sept 2019 - Present",
    logo: woshapp,
    description: `Full-stack developer working on Woshapp’s web, iOS and android app.
  Full-stack developer working on Woshapp’s web, iOS and android app.
  Full-stack developer working on Woshapp’s web, iOS and android app.
  Full-stack developer working on Woshapp’s web, iOS and android app.`,
    icons: [
      "https://image.flaticon.com/icons/svg/145/145807.svg",
      "https://bit.ly/2JsOif8",
      "https://bit.ly/2uxDUds",
    ],
  },
  {
    name: "Woshapp",
    date: "Sept 2019 - Present",
    logo: woshapp,
    description: `Full-stack developer working on Woshapp’s web, iOS and android app.
  Full-stack developer working on Woshapp’s web, iOS and android app.
  Full-stack developer working on Woshapp’s web, iOS and android app.
  Full-stack developer working on Woshapp’s web, iOS and android app.`,
    icons: [
      "https://image.flaticon.com/icons/svg/145/145807.svg",
      "https://bit.ly/2JsOif8",
      "https://bit.ly/2uxDUds",
      "https://image.flaticon.com/icons/svg/145/145807.svg",
      "https://bit.ly/2JsOif8",
      "https://bit.ly/2uxDUds",
      "https://image.flaticon.com/icons/svg/145/145807.svg",
      "https://bit.ly/2JsOif8",
      "https://bit.ly/2uxDUds",
    ],
  },
  {
    name: "Woshapp",
    date: "Sept 2019 - Present",
    logo: woshapp,
    description: `Full-stack developer working on Woshapp’s web, iOS and android app.
  Full-stack developer working on Woshapp’s web, iOS and android app.
  Full-stack developer working on Woshapp’s web, iOS and android app.
  Full-stack developer working on Woshapp’s web, iOS and android app.`,
    icons: [
      "https://image.flaticon.com/icons/svg/145/145807.svg",
      "https://bit.ly/2JsOif8",
      "https://bit.ly/2uxDUds",
    ],
  },
];

export default function Experiences() {
  return (
    <Wrapper>
      <h1 style={styles.frontText}>
        {"Experience"}
      </h1>
      <Container>
        {arr &&
          arr.map((el) => {
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
    </Wrapper>
  );
}

const styles = {
  frontText: {
    margin: 10,
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
    width: 110,
    height: 110,
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
  left: calc(50% - 600px);
  display: flex;
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
  background-color: rgb(64,64,64, 1);
  border-radius: 10px;
  box-shadow: 0 0 2rem #d1f2fd;
  margin-left: -25px;
  transition: 0.4s ease-out;
  position: relative;
  left: 0px;
  &:not(:first-child) {
    margin-right: -90px;
  }
  &:hover {
    transform: translateY(-20px);
    transition: 0.4s ease-out;
  }
  &:hover ~ div {
    position: relative;
    left: 100px;
    transition: 0.4s ease-out;
`;
const IconContainer = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10;
`;
