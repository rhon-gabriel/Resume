import React from "react";
import github from "../assets/images/github.png";

export default function Header() {
  return (
    <div style={styles.headerWrapper}>
      <div style={styles.nameLogoContainer} className="tracking-in-expand">
        <h1 style={styles.nameLogoText}>Rhoneil Gabriel</h1>
      </div>
      <div style={styles.iconDiv}>
          <a
            href="https://www.linkedin.com/in/rhoneilgabriel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://image.flaticon.com/icons/svg/145/145807.svg"
              alt="linkedin"
              style={styles.icon}
            />
          </a>
          <a href="mailto: rhoneil.gabriel@me.com" target="_blank" rel="noopener noreferrer">
            <img src="https://bit.ly/2JsOif8" alt="email" style={styles.icon} />
          </a>
          <a
            href="https://github.com/rhon-gabriel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github}  alt="github" style={styles.icon} />
          </a>
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
  },
  nameLogoText: {
    fontFamily: "Raleway",
    fontSize: 24,
    background: "linear-gradient(to right, #bdc3c7, #2c3e50)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
  icon: {
    width: 35,
    margin: 5
  },
  iconDiv: {
    display: "flex",
    justifyContent: "center",
    animation: 'scale-down-center  1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'
  },
};
