import { makeStyles, withStyles } from "@material-ui/core/styles";
import DialogContent from "@material-ui/core/DialogContent";

export const StyledModal = withStyles({
  root: {
    width: 600,
    height: 500
  }
})(DialogContent);

export const StyledImageModal = withStyles({
  img: {
    borderRadius: "5%",
    width: 200,
    height: 200
  }
});

export const useStyles = makeStyles(theme => ({
  img: {
    borderRadius: "5%",
    width: 200,
    height: 200
  },
  deleteBtn: {
    width: "100%",
    backgroundImage: "linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)",
    color: "white",
    borderRadius: "10%"
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(204, 169, 169, 0.2) 0%, rgba(185, 132, 132, 0.3) 70%, rgba(142, 109, 109, 0.2) 100%)",
    fontWeight: "bold",
    fontSize: 12
  }
}));
