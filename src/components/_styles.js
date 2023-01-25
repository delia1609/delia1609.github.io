import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
    container: {
      display: "flex",
      maxWidth: "180px",
      height: "300px",
      backgroundColor: "white",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "6px",
      boxShadow: "0px 0px 2px 2px rgba(83, 81, 85, 0.4)", 
      cursor: "pointer",
      transition: "box-shadow .2s",

      "&:hover": {
        boxShadow: "0px 0px 3px 4px rgba(203, 45, 135, 0.257)" 
      },
    },
    image: {
      // maxWidth: 100,
      // maxHeight: 160,
      // height: 20,
      // objectFit: "contain",
      width: 140,
      maxHeight: 180,
      backgroundColor: "white",
    },  

    header: {
      marginTop: "40px",
      color: "#a09aa6"
    },

    containerProducts: {
      width: "100%",
      margin: 0,
      padding: 0
    }
}));

export default useStyles;