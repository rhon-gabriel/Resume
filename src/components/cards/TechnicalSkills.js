import React, { useState, useEffect } from "react";
import { getSkills } from "../../helpers/index";

import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import styled from "styled-components";
import PacmanLoader from "react-spinners/PacmanLoader";


export default function TechnicalSkills() {
  const [skills, setSkills] = useState();
  const [isLoading, setIsLoading] = useState();

  const loadSkills = async (setIsLoading, setSkills) => {
    setIsLoading(true);
    try {
      await getSkills(setSkills);
    } catch (err) {
      console.log("err loadSkills:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadSkills(setIsLoading, setSkills);
  }, []);

  return (
    <Wrapper>
      <div style={styles.headerWrapper}>
        <h1 style={styles.frontText} className="text-focus-in">
          Technical Skills
        </h1>
      </div>
      <PacmanLoader color={"#7effca"} loading={isLoading} />
      <List>
        {skills &&
          skills.map((el) => {
            return (
              <div>
                <SkillsContainer key={el._id}>
                  <h6>{el.tech}</h6>
                  <CircularBarContainer>
                    <CircularProgressbarWithChildren value={el.percentage}>
                      <img
                        style={styles.circularBarImage}
                        src={el.logo}
                        alt={el.tech}
                      />
                      <div style={styles.circularBarText}>
                        <strong>{`${el.percentage}%`}</strong>
                      </div>
                    </CircularProgressbarWithChildren>
                  </CircularBarContainer>
                </SkillsContainer>
              </div>
            );
          })}
      </List>
    </Wrapper>
  );
}

const styles = {
  headerWrapper: {
    display: "flex",
    justifyContent: "center",
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
  circularBarImage: {
    width: 30,
    height: 30,
    marginTop: -5,
  },
  circularBarText: {
    fontSize: 16,
    marginTop: -5,
  },
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
`;

const List = styled.div`
  columns: 3;
  margin: 2px;
`;

const SkillsContainer = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
  justify-content: center;
  color: "#434343";
  width: 100%;
  height: 100%;
`;

const CircularBarContainer = styled.div`
  width: 90px;
  height: 90px;
  padding: 2px;
`;