import React from "react";
import github from "../assets/images/github.png";
import styled from "styled-components";

export default function Header() {
  return (
    <div style={styles.headerWrapper}>
      <div style={styles.iconDiv}>
        <a
          href="https://www.linkedin.com/in/rhoneilgabriel/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            src="https://image.flaticon.com/icons/svg/145/145807.svg"
            alt="linkedin"
          />
        </a>
        <a
          href="mailto: rhoneil.gabriel@me.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon src="https://bit.ly/2JsOif8" alt="email" />
        </a>
        <a
          href="https://github.com/rhon-gabriel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon src={github} alt="github" />
        </a>
      </div>
    </div>
  );
}

const styles = {
  headerWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
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
  iconDiv: {
    display: "flex",
    justifyContent: "center",
    animation:
      "scale-down-center  1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
  },
};

const Icon = styled.img`
  width: 35px;
  margin: 5px;
  @media (max-width: 600px) {
    width: 30px;
    margin: 5px;
  }
`;