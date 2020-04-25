import React from "react";
import woshapp from "../../assets/images/woshapp.png";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { withStyles } from "@material-ui/core/styles";
import {
  Card,
  Typography,
} from "@material-ui/core";

const skills = [
  {
    tech: "javascript",
    percentage: 80,
    cover: woshapp,
  },
  {
    tech: "javascript",
    percentage: 80,
    cover: woshapp,
  },
  {
    tech: "javascript",
    percentage: 80,
    cover: woshapp,
  },
  {
    tech: "javascript",
    percentage: 80,
    cover: woshapp,
  },
  {
    tech: "javascript",
    percentage: 80,
    cover: woshapp,
  },
  {
    tech: "javascript",
    percentage: 80,
    cover: woshapp,
  },
  {
    tech: "javascript",
    percentage: 80,
    cover: woshapp,
  },
  {
    tech: "javascript",
    percentage: 80,
    cover: woshapp,
  },
  {
    tech: "javascript",
    percentage: 80,
    cover: woshapp,
  },
  {
    tech: "javascript",
    percentage: 80,
    cover: woshapp,
  },
  {
    tech: "javascript",
    percentage: 80,
    cover: woshapp,
  },
  {
    tech: "javascript",
    percentage: 80,
    cover: woshapp,
  },
];
export default function ExperienceList() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        padding: 10
      }}
    >
      <div style={styles.headerWrapper}>
        <h1 style={styles.frontText} className="text-focus-in">
          Technical Skills
        </h1>
      </div>
      <div style={{columns: 3,  columnFill: 'auto', margin: 5}}>
      {skills.map((el) => {
        return (
          <JobCard>

              <div
                style={{
                  display: "flex",
                  color: "white",
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  heigth: '100%',
                  padding: 2,
                  margin: 5
                }}
              >
                <div style={{display: 'flex',
                  justifyContent: 'center', flexDirection: 'column', color: "#434343",}}>
                  <Typography gutterBottom variant="h6" component="h1">
                    {el.tech}
                  </Typography>
                  <div style={{width: 80,
                      height: 80,  padding: 2}}>

                  <CircularProgressbar
                    value={el.percentage}
                    text={`${el.percentage}%`}
                  />
                  </div>
                </div>
              </div>
          </JobCard>
        );
      })}
      </div>
    </div>
  );
}

const styles = {
  headerWrapper: {
    display: "flex",
    justifyContent: "center",
    height: "8vh",
  },
  headerButton: {
    textTransform: "none",
    fontSize: 18,
    padding: 10,
  },
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
  cover: {
    width: 100,
    height: 100,
    margin: "auto",
  },
  gridList: {
    width: 600,
    height: 550,
  },
};

const JobCard = withStyles({
  root: {
    borderRadius: 8,
    backgroundColor: 'transparent',
  },
})(Card);
