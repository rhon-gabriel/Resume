import React from "react";
import leaf from "../assets/images/leaf.png";
import CardAbout from "./cards/CardAbout";
import Header from "./Header";
import Skills from "./cards/Skills";
import { Grid, withStyles } from "@material-ui/core";

export default function WelcomePage() {
  return (
    <Wrapper container>
      <HeaderContainer item xs={12}>
        <Header />
      </HeaderContainer>
      <Content container>
        <CardAboutContainer item xs={5}>
          <div style={styles.cardDiv}>
            <CardAbout />
          </div>
        </CardAboutContainer>
        <SkillsContainer item xs={7}>
          <Skills />
        </SkillsContainer>
        <img style={styles.image} src={leaf} alt="plant image" />
      </Content>
      <Grid item xs={12}></Grid>
    </Wrapper>
  );
}

const styles = {
  cardDiv: {
    visibility: "hidden",
    animation: "4s fadeIn",
    animationFillMode: "forwards",
    padding: 50,
  },
  image: {
    position: "fixed",
    top: 700,
    left: "75%",
    height: 300,
    width: 600,
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
    padding: 40,
  },
})(Grid);

const HeaderContainer = withStyles({
  root: {
    paddingLeft: 20,
    paddingRight: 20,
  },
})(Grid);

const CardAboutContainer = withStyles({
  root: {
    padding: 10,
  },
})(Grid);

const SkillsContainer = withStyles({
  root: {
    padding: 100,
  },
})(Grid);
