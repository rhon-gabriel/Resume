import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  card: {
    border: "1px solid pink",
    borderRadius: "5%",
    width: 350,
    height: 560,
    display: "flex",
    flexDirection: "column",
    padding: "3vh",
    textAlign: "justify",
    boxShadow: "2px 1px #b7b9bd"
  },
  img: {
    width: 190,
    height: 180,
    borderRadius: "50%",
    boxShadow: "2px 2px #b7b9bd"
  },
  a: {
    margin: "3vh 60px 0 60px"
  },
  cursive: {
    fontStyle: "oblique",
    fontSize: 22,
    margin: "auto"
  },
  icon: {
    width: 35,
    margin: 5
  },
  iconDiv: {
    display: "flex",
    justifyContent: "center"
  }
}));
