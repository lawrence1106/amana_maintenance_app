import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100%",
    padding: "0",
    margin: "0",
    background: "rgb(213, 236, 245)",
  },
  cardSpan: {
    minWidth: "300px",
  },
  loginFormStyle: {
    display: "flex",
    height: "200px",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
  },
  loginCardAlignment: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logoRender: {
    height: "50px",
  },
  addUserCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "500px",
    height: "390px",
  },
  addUserFormAlignment: {
    textAlign: "center",
  },
  addUserForm: {
    display: "flex",
    height: "300px",
    alignItems: "center",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
});

export default useStyles;
