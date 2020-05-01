import React from "react";
import profile from "../assets/images/profile.JPG";
import CardAbout from "./cards/CardAbout";
import Header from "./Header";
import SkillsBackground from "./cards/SkillsBackground";
import styled from "styled-components";
import { Grid, withStyles } from "@material-ui/core";

export default function WelcomePage(props) {
  const { scroll } = props;
  return (
    <Wrapper>
      <Container container>
        <HeaderContainer item xs={12}>
          <Header />
        </HeaderContainer>

        <Content container>
          <CardAboutContainer item xs={5}>
            <div style={styles.cardDiv}>
              <CardAbout img={profile} title={"a little about me"} />
            </div>
          </CardAboutContainer>
          <SkillsContainer item xs={7}>
            <SkillsBackground />
          </SkillsContainer>
        </Content>

        <BottomContainer container direction="column" align="center">
          <ExploreButton
            onClick={() => scroll.moveSectionDown()}
          >
            Explore more
          </ExploreButton>
        </BottomContainer>
      </Container>
    </Wrapper>
  );
}

const styles = {
  cardDiv: {
    padding: 50,
  },
  image: {
    height: 250,
    width: 450,
  },
  exploreButton: {
    color: "#434343",
    cursor: "pointer",
    fontSize: 18,
    display: "flex",
    flexDirection: "column",
  },
};

const Wrapper = styled.div`
  flex-grow: 1; 
  height: 100%;
  width: 100%;
`;

const ExploreButton = styled.div`
  color: #434343;
  cursor: pointer;
  font-size: 18px;
  display: flex;
  @media (min-width: 600px) {
    font-size: 22px;
  }
`;

const Container = withStyles({
  root: {
    flexGrow: 1,
    height: "100%",
  },
})(Grid);

const HeaderContainer = withStyles({
  root: {
    flexGrow: 1,
    padding: 10,
    ["@media (max-width:600px)"]: {
      display: "none"
    },
  },
})(Grid);

const Content = withStyles({
  root: {
    flexGrow: 1,
  },
})(Grid);

const CardAboutContainer = withStyles({
  root: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    ["@media (max-width:800px)"]: {
      margin: "auto",
    },
  },
})(Grid);

const SkillsContainer = withStyles({
  root: {
    display: "flex",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    ["@media (max-width:800px)"]: {
      display: "none",
    },
  },
})(Grid);

const BottomContainer = withStyles({
  root: {
    flexGrow: 1,
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    animation: "heartbeat 3s ease infinite both",
  },
})(Grid);
