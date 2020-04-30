import React from "react";
import InstagramEmbed from "react-instagram-embed";
import { Grid, withStyles } from "@material-ui/core";
import styled from "styled-components";

export default function Interests() {
  return (
    <div>
    <Wrapper>
      <Content container>
        <div style={styles.birdContainer}>
          <div style={styles.bird}></div>
        </div>
        <Grid item xs={3}>
          <div style={styles.description}>
            <h4 style={styles.firstText}>In my spare time,</h4>
            <h4 style={styles.secondText}>I am an indoor</h4>
            <h3 style={styles.thirdText}>GARDENER</h3>
          </div>
        </Grid>
        <Grid style={styles.instagram} item xs={9}>
            <InstagramEmbed
              url="https://www.instagram.com/p/B-q3eUug2iT/"
              maxWidth={400}
              hideCaption={false}
              containerTagName="div"
              protocol=""
              injectScript
            />
        </Grid>
      </Content>
    </Wrapper>
    <MobileContainer>
        <div style={styles.birdContainer}>
          <div style={styles.bird}></div>
        </div>
        <h4 style={styles.firstText}>In my spare time,</h4>
        <h4 style={styles.secondText}>I am an indoor</h4>
        <h3 style={styles.thirdText}>GARDENER</h3>
        <div style={{margin: 25}}>
          <InstagramEmbed
            url="https://www.instagram.com/p/B-q3eUug2iT/"
            maxWidth={400}
            hideCaption={false}
            containerTagName="div"
            protocol=""
            injectScript
          />
        </div>
      </MobileContainer>
    </div>
  );
}

const styles = {
  birdContainer: {
    position: "absolute",
    top: "20%",
    left: "-10%",
    transform: "scale(0) translateX(-10vw)",
    willChange: "transform",
    animation: "fly-right-one 8s",
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
  },
  bird: {
    background:
      "url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/174479/bird-cells-new.svg)",
    backgroundSize: "auto 100%",
    width: 88,
    height: 125,
    willChange: "background-position",
    animation: "fly-cycle 1s 0.5s",
    animationTimingFunction: "steps(10)",
    animationIterationCount: "infinite",
  },
  description: {
    marginTop: "5vh",
  },
  firstText: {
    marginLeft: "2vw",
    fontFamily: "Caveat",
  },
  secondText: {
    marginLeft: "5vw",
  },
  thirdText: {
    marginLeft: "3vw",
    fontFamily: "Poiret One",
    fontWeight: "bold",
    letterSpacing: "5px",
    background: "linear-gradient(to right, #67b26f, #4ca2cd)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
  instagram: {
    paddingTop: "5vh",
  },
};

const Wrapper = withStyles({
  root: {
    flexGrow: 1,
    height: "100%",
  },
})(Grid);

const Content = withStyles({
  root: {
    flexGrow: 1,
    ["@media (max-width:600px)"]: {
      display: "none",
    },
  },
})(Grid);

const MobileContainer = styled.div`
  flex-grow: 1; 
  height: 100%;
  width: 100%;
  @media (min-width: 600px) {
    display: none
  }
`;

