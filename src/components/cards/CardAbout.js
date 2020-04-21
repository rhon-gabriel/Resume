import React from "react";
import pic from "../../assets/images/plants.JPG";

const CardAbout = () => {

  return (
    <div style={styles.card}>
      <a
        href="https://www.instagram.com/ronsgarden/"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.a}
      >
        <img src={pic} alt="" style={styles.img} />
      </a>
        <hr />
      <div style={styles.textContainer}>
        <p style={styles.txt}>
          <span style={{color: 'green'}}>PlantHub</span> is designed to be space for plant parents to SWAP and TRADE their plants. 
          <br /> <br /> New to the plant parenthood? PlantHub is the rigth space for you! <br />
          Bump up your knowledge on plants and get tips from other plant people like you.
        </p>
        <div style={styles.iconDiv}>
          <a
            href="https://www.linkedin.com/in/rhoneilgabriel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://image.flaticon.com/icons/svg/145/145807.svg"
              alt=""
              style={styles.icon}
            />
          </a>
          <a href="mailto: rhoneil.gabriel@me.com" target="_blank" rel="noopener noreferrer">
            <img src="https://bit.ly/2JsOif8" alt="" style={styles.icon} />
          </a>
          <a
            href="https://www.instagram.com/ronsgarden/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="https://bit.ly/2uxDUds" alt="" style={styles.icon} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardAbout;

const styles = {
  card: {
    position: 'relative',
    border: "0.5 solid pink",
    borderRadius: 12,
    width: 350,
    height: 500,
    display: "flex",
    flexDirection: "column",
    padding: 20,
    textAlign: "justify",
    boxShadow: '0 0 5px rgba(0,0,0,.05), 2px 5px 5px rgba(200,253,210, 1)',
    marginTop: 20,
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: "50%",
    boxShadow: '0 0 5px rgba(0,0,0,.05), 2px 2px 5px #b7b9bd',
    position: 'absolute',
    top: '-80px',
  },
  a: {
    margin: "3vh 60px 0 60px"
  },
  icon: {
    width: 35,
    margin: 5
  },
  iconDiv: {
    display: "flex",
    justifyContent: "center"
  },
  textContainer: {
    marginTop: 80
  }
}