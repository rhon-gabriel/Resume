import React from "react";
import leaf from "../assets/images/leaf.png";
import CardAbout from './dashboard/about-card/CardAbout'
import Header from './Header'
import { Grid }from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";

export default function WelcomePage() {

  return (
    <Wrapper container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Content container>
          <Grid item xs={5} style={{padding: 10}}>
            <div style={styles.cardDiv}>
              <CardAbout style={styles.cardDiv}/>
            </div>
          </Grid>
          <Grid item xs={7} style={styles.enterButtonContainer}>
            <a href="/plants">
              <h2 style={styles.enterButtonText}>Enter</h2>
            </a>
          </Grid>
        </Content>
        <Grid item xs={12}>
          <img style={styles.image} src={leaf} alt="" />
        </Grid>
    </Wrapper>
  );
}

const styles = {
  root: {
    flexGrow: 1,
  },
  cardDiv: {
    visibility: 'hidden',
    animation: '10s fadeIn',
    animationFillMode: 'forwards',
  },
  enterButtonContainer: {
    padding: 120,
    margin: 'auto'
  },
  enterButtonText: {
    fontSize: 40,
    fontWeight: 300,
    background: 'linear-gradient(to right, #edc4e7 20%, #fff 40%, #4d7683 60%)',
    backgroundSize: '200% auto',
    backgroundClip: 'text',
    webkitBackgroundClip: 'text',
    webkitTextFillColor: 'transparent',
    animation: 'textclip 4s linear infinite'
  },
  image: {
    position: "fixed",
    top: "50%",
    left: "50%"
  }
}

const Wrapper = withStyles({
  root: {
    flexGrow: 1,
  }
})(Grid);
const Content = withStyles({
  root: {
    padding: 50
  }
})(Grid);