import React from "react";
import { Grid, withStyles }from '@material-ui/core';
import Experiences from './cards/Experiences'
import Skills from './cards/Skills'
import forrest from "../assets/images/forrest.jpg"

export default function Main() {

  return (
    <Wrapper container>
        <Grid item xs={12}>
        </Grid>
        <Content container>
          <Grid item xs={7}>
            <div style={styles.skillsContainer}>
              <Skills />
            </div>
          </Grid>
          <Grid item xs={5} style={styles.experienceWrapper}>
            <div style={styles.experienceContainer}>
              <Experiences />
            </div>
          </Grid>
        </Content>
    </Wrapper>
  );
}

const styles = {
  root: {
    flexGrow: 1,
    backgroundColor: 'linear-gradient(to right, #000000, #434343)'
  },
  skillsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    animation: '8s fadeIn 5s fadeOut',
  },
  experienceWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    backgroundColor: 'linear-gradient(to right, #d9a7c7, #fffcdc)'
  },
  experienceContainer: {
    height: 600, 
    width: 450, 
    backgroundColor: 'rgba(200,253,210, 0.3)',
    borderRadius: 6
  }
}

const Wrapper = withStyles({
  root: {
    flexGrow: 1,
    background: `url(${forrest})`,
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    minHeight: '100%',
  }
})(Grid);

const Content = withStyles({
  root: {
    padding: 30,
  }
})(Grid);