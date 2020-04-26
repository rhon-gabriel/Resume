import React from "react";
import { Grid } from "@material-ui/core";

export default function SkillsBackground() {
  return (
    <div>
      <Grid container>
        <Grid item xs>
          <h1 style={styles.large}>Javascript</h1>
        </Grid>
        <Grid item xs>
          <h2 style={styles.medium}>Node.js</h2>
        </Grid>
        <Grid item xs={2}>
          <h3 style={styles.medium}>Git</h3>
        </Grid>
      </Grid>
      <Grid container spacing={4} style={{ marginLeft: 100 }}>
        <Grid item xs>
          <h6 style={styles.small}>Material-UI</h6>
        </Grid>
        <Grid item xs>
          <h1 style={styles.large}>React</h1>
        </Grid>
        <Grid item xs>
          <h2 style={styles.tall}>Creative</h2>
        </Grid>
      </Grid>
      <Grid container spacing={3} style={{ marginLeft: 50 }}>
        <Grid item xs>
          <h2 style={styles.grande}>MongoDB</h2>
        </Grid>
        <Grid item>
          <h5 style={styles.short}>Agile Methodologies</h5>
        </Grid>
        <Grid item xs>
          <h4 style={styles.medium}>Ant Design</h4>
        </Grid>
      </Grid>
      <Grid container spacing={4} style={{ marginLeft: 50 }}>
        <Grid item>
          <h5 style={styles.short}>Communication</h5>
        </Grid>
        <Grid item>
          <h5 style={styles.grande}>React Native</h5>
        </Grid>
        <Grid item xs>
          <h1 style={styles.small}>Team Work</h1>
        </Grid>
      </Grid>
      <Grid container spacing={4} style={{ marginLeft: 5 }}>
        <Grid item xs>
          <h1 style={styles.medium}>Problem Solving</h1>
        </Grid>
        <Grid item style={{ marginTop: 60 }} xs={3}>
          <h1 style={styles.medium}>TDD</h1>
        </Grid>
        <Grid item>
          <h1 style={styles.grande}>Express.js</h1>
        </Grid>
      </Grid>
    </div>
  );
}

const styles = {
  large: {
    animation: "flickerAnimation 7s infinite",
    fontSize: 45,
    background: "linear-gradient(to right, #8a2387, #e94057, #f27121)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
  grande: {
    animation: "flickerAnimation 6s infinite",
    fontSize: 40,
    background: "linear-gradient(to right, #f12711, #f5af19)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
  medium: {
    animation: "flickerAnimation 9s infinite",
    fontSize: 35,
    background: "linear-gradient(to right, #00c3ff, #ffff1c)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
  tall: {
    animation: "flickerAnimation 8s infinite",
    fontSize: 35,
    background: "linear-gradient(to right, #f3904f, #3b4371)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
  small: {
    animation: "flickerAnimation 4s infinite",
    fontSize: 25,
    background: "linear-gradient(to right, #108dc7, #ef8e38)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
  short: {
    animation: "flickerAnimation 6s infinite",
    fontSize: 18,
    background: "linear-gradient(to right, #00f260, #0575e6)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
};
