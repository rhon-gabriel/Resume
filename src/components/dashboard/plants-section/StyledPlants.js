import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  containerMargin: {
    display: "flex",
    margin: "10vh 20px 20px 20px"
  },
  row: {
    width: "100%"
  },
  button: {
    margin: theme.spacing(0.5),
    borderRadius: 5,
    height: 50,
    width: 200,
    padding: "0 30px",
    borderColor: "red pink orange red",
    backgroundImage: "linear-gradient(0deg, #fefefe 0%, #fefefe 100%)"
  },
  input: {
    display: "none"
  },
  navCategories: {
    justifyContent: "center"
  },
  textTable: {
    border: "1px solid pink",
    borderRadius: "5%",
    width: 350,
    height: 560,
    display: "flex",
    flexDirection: "column",
    padding: "3vh",
    textAlign: "justify"
  },
  img: {
    width: 190,
    height: 180,
    borderRadius: "50%"
  },
  a: {
    margin: "3vh 60px 0 60px"
  },
  cursive: {
    fontStyle: "oblique",
    fontSize: 22,
    margin: "auto"
  }
}));
