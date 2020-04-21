import React from "react";

export default function Header() {
  return (
    <div style={styles.headerWrapper}>
      <div style={styles.nameLogoContainer}>
        <h1 style={styles.nameLogoText}>Rhoneil Gabriel</h1>
      </div>
      <div style={{ width: 100 }}>
        <h1 style={styles.nameLogoText}>About me</h1>
      </div>
    </div>
  );
}

const styles = {
  headerWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nameLogoContainer: {
    width: 200,
    visibility: "hidden",
    animation: "4s fadeIn",
    animationFillMode: "forwards",
  },
  nameLogoText: {
    fontFamily: "Caveat",
    fontSize: 28,
    background: "linear-gradient(to right, #30e8bf, #ff8235)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
};
