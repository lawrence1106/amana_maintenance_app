import React, { useState } from "react";
import Axios from "axios";
import formStyles from "./MakeStyles/FormStyles";
import Swal from "sweetalert2";
import Cookie from "universal-cookie";
import { Helmet } from "react-helmet";
import {
  Card,
  CardContent,
  Button,
  Typography,
  TextField,
} from "@material-ui/core";
import Logo from "../images/amana-logo.jpg";
const cookie = new Cookie();
export default function IndexPage() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (username && password) {
      Axios.post("http://localhost:4000/userValidation", {
        username: username,
        password: password,
      }).then(function (res) {
        if (res.data.err === true) {
          Swal.fire({
            title: "User not found!",
            text: "Please enter valid credentials!",
            icon: "warning",
          });
        } else {
          if (res.data.result === false) {
            Swal.fire({
              title: "Wrong password!",
              text: "Please try again!",
              icon: "warning",
            });
          } else {
            if (cookie.get("userSession")) {
              cookie.remove("userSession");
            }
            cookie.set("userSession", {
              result: res.data.result,
              username: res.data.username,
              userRole: res.data.role,
            });
            window.location.replace("/");
          }
        }
      });
    } else {
      Swal.fire({
        title: "Oops! Something went wrong!",
        text: "Please support",
        icon: "warning",
      });
    }
  };
  const classes = formStyles();
  return (
    <div className={classes.container}>
      <Helmet>
        <title>Amana - Login</title>
      </Helmet>
      <Card className={classes.cardSpan}>
        <CardContent>
          <div className={classes.loginCardAlignment}>
            <Typography variant="h5">
              <img className={classes.logoRender} src={Logo} alt="logo" />
            </Typography>
            <form onSubmit={handleSubmit} className={classes.loginFormStyle}>
              <TextField
                name="username"
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                label="Username"
              />
              <TextField
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
              />
              <Button type="submit" variant="contained" color="primary">
                Login
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
