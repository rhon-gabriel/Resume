import React from "react";


export default function Header() {
  return (
    <div style={styles.headerWrapper}>
      get in touch
    </div>
  );
}

const styles = {
  headerWrapper: {
    // display: "flex",
    // flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
  },
  nameLogoContainer: {
    width: 200,
  },
  nameLogoText: {
    fontFamily: "Raleway",
    fontSize: 24,
    background: "linear-gradient(to right, #9cecfb, #65c7f7, #0052d4)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
  icon: {
    width: 35,
    margin: 5
  },
  iconDiv: {
    display: "flex",
    justifyContent: "center"
  },
};