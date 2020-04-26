import React from "react";

export default function ExperienceCard (props) {

  return (
    <div style={styles.card}>
        <div className="tracking-in-expand">
        <h1 style={styles.frontText}>a little about me</h1>
        </div>
      <div style={styles.textContainer}>
        <p style={styles.txt}>
        My working experiences, from the social field to operation and now, as a software developer, 
        shaped my analytical and communication skills. These experience, also trained me to work under pressure and manage my time effectively;
        Furthermore, as a general feedback I get from everyone, is my interpersonal skills, as easy going person with the ability to contribute effectively in team-based.
        </p>
      </div>
    </div>
  );
};

const styles = {
  card: {
    position: 'relative',
    borderRadius: 12,
    width: 600,
    height: 350,
    display: "flex",
    flexDirection: "column",
    padding: 20,
    textAlign: "justify",
    boxShadow: '0 0 2px rgba(0,0,0,.05), 2px 5px 5px rgb(254,218,222, 1)',
    marginTop: 20,
    backgroundColor: 'rgb(204,201,195, 0.5)',
  },
  img: {
    width: 115,
    height: 115,
    borderRadius: "50%",
    boxShadow: '0 2 3px rgba(0,0,0,.05), 2px 2px 5px #b7b9bd',
    position: 'absolute',
    right: 10,
    top: 10
  },
  textContainer: {
    marginTop: 20
  },
  txt: {
    color: '#434343',
    fontFamily: "Caveat",
    fontSize: 22,
  },
  frontText: {
    marginTop: 10,
    padding: 5,
    fontSize: 45,
    animation: "text-focus-in 2s",
    animationFillMode: "cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
    fontFamily: "Caveat",
    background: "linear-gradient(to right, #aa4b6b, #6b6b83, #3b8d99)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  }
}