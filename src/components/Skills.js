import React from "react";
import TechnicalSkills from "./cards/TechnicalSkills";
import ProfileCard from "./cards/ProfileCard";
import styled from "styled-components";

import { Grid, withStyles } from "@material-ui/core";

export default function Skills() {
  return (
    <Wrapper>
      <Container container className="slide-in-fwd-center">
        <Content container className="slide-in-fwd-center">
          <Grid item xs={5} style={styles.experienceWrapper}>
            <ExperienceContainer>
              <TechnicalSkills />
            </ExperienceContainer>
          </Grid>
          <Grid item xs={7} style={styles.experienceWrapper}>
            <ProfileContainer>
              <ProfileCard />
            </ProfileContainer>
          </Grid>
        </Content>
      </Container>
        <MobileContent>
            <TechnicalSkills />
        </MobileContent>
      </Wrapper>
  );
}

const styles = {
  root: {
    flexGrow: 1,
    backgroundColor: "linear-gradient(to right, #000000, #434343)",
  },
  experienceWrapper: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    backgroundColor: "linear-gradient(to right, #d9a7c7, #fffcdc)",
  },
  experienceContainer: {
    height: 550,
    width: 450,
    backgroundColor: "rgb(204,201,195, 0.5)",
    borderRadius: 6,
    boxShadow: "0 0 2px rgba(0,0,0, .08), 2px 2px 5px rgb(254,218,222, 3)",
  },
};

const Container = withStyles({
  root: {
    flexGrow: 1,
    minHeight: "100%",
  },
})(Grid);

const Content = withStyles({
  root: {
    padding: 30,
    ["@media (max-width:600px)"]: {
      display: "none",
    },
  },
})(Grid);

const Wrapper = styled.div`
  flex-grow: 1; 
  min-Height: 100%;
`;

const ProfileContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 20px;
`;

const ExperienceContainer = styled.div`
  height: 550px; 
  width: 350px; 
  background-color: 'rgb(204,201,195, 0.5)';
  border-radius: 6px;
  box-shadow: '0 0 2px rgba(0,0,0, .08), 2px 2px 5px rgb(254,218,222, 3)';
`;

const MobileContent = styled.div`
  align-items: center;
  @media only screen and (min-width: 600px)  {
    display: none;
  }
`;
