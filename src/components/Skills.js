import React from "react";
import { Grid, withStyles }from '@material-ui/core';
import ExperienceList from './cards/ExperiencesList'
import ExperienceCard from "./cards/ExperienceCard"

export default function Experience() {

  return (
    <Wrapper container className="slide-in-fwd-center">
        <Content container className="slide-in-fwd-center">
          <Grid item xs={5} style={styles.experienceWrapper}>
            <div style={styles.experienceContainer}>
              <ExperienceList />
            </div>
          </Grid>
          <Grid item xs={7} style={styles.experienceWrapper}>
            <div style={styles.skillsContainer}>
              <ExperienceCard />
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
    display: 'flex',
    padding: 50,
  },
  experienceWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    backgroundColor: 'linear-gradient(to right, #d9a7c7, #fffcdc)',
    padding: 50,
  },
  experienceContainer: {
    height: 650, 
    width: 450, 
    backgroundColor: 'rgb(204,201,195, 0.5)',
    borderRadius: 6,
    boxShadow: '0 0 2px rgba(0,0,0, .08), 2px 2px 5px rgb(254,218,222, 3)',
    overflow: 'scroll'
  },
}

const Wrapper = withStyles({
  root: {
    flexGrow: 1,
    minHeight: '100%',
  }
})(Grid);

const Content = withStyles({
  root: {
    padding: 30,
  }
})(Grid);