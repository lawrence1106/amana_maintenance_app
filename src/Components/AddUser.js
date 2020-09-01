import React from "react";
import Swal from "sweetalert2";
import Axios from "axios";
import { Card, Typography, Button, TextField } from "@material-ui/core";
import formStyles from "./MakeStyles/FormStyles";
import Logo from "../images/amana-logo.jpg";
import useInput from "./hooks/input-hook/UseInput";

export default function AddUser() {
  const {
    value: firsName,
    bind: bindFirstName,
    reset: resetFirstName,
  } = useInput("");
  const {
    value: lastName,
    bind: bindLastName,
    reset: resetLastName,
  } = useInput("");
  const {
    value: emailAddress,
    bind: bindemailAddress,
    reset: resetEmailAddress,
  } = useInput("");
  const {
    value: employeeId,
    bind: bindEmployeeId,
    reset: resetEmployeeId,
  } = useInput("");
  const {
    value: userName,
    bind: bindUserName,
    reset: resetUserName,
  } = useInput("");
  const {
    value: passWord,
    bind: bindPassWord,
    reset: resetPassWord,
  } = useInput("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (
      firsName &&
      lastName &&
      emailAddress &&
      employeeId &&
      userName &&
      passWord
    ) {
      Axios.post("http://localhost:4000/addUser", {
        firstName: firsName,
        lastName: lastName,
        emailAddress: emailAddress,
        employeeId: employeeId,
        userName: userName,
        passWord: passWord,
      }).then(function (res) {
        console.log(res);
        if (res.data.status === true) {
          Swal.fire({
            icon: "success",
            title: "Employee Registered!",
            onClose: function () {
              window.location.replace("/");
            },
          });
          resetFirstName();
          resetLastName();
          resetEmailAddress();
          resetEmployeeId();
          resetUserName();
          resetPassWord();
        } else {
          Swal.fire({
            title: res.data.err,
            icon: "warning",
          });
        }
      });
    } else {
      alert("Oops! Something went wrong!");
    }
  };

  const classes = formStyles();
  return (
    <div className={classes.container}>
      <Card className={classes.addUserCard}>
        <form onSubmit={handleSubmit} className={classes.addUserFormAlignment}>
          <Typography variant="h5">
            <img className={classes.logoRender} src={Logo} alt="logo" />
          </Typography>
          <div className={classes.addUserForm}>
            <TextField
              id="standard-basic"
              required
              variant="standard"
              label="First Name"
              {...bindFirstName}
            ></TextField>
            <TextField
              id="standard-basic"
              required
              variant="standard"
              label="Last Name"
              {...bindLastName}
            ></TextField>
            <TextField
              id="standard-basic"
              required
              variant="standard"
              label="Email Address"
              {...bindemailAddress}
            ></TextField>
            <TextField
              id="standard-basic"
              required
              variant="standard"
              label="Employee ID"
              {...bindEmployeeId}
            ></TextField>
            <TextField
              id="standard-basic"
              required
              variant="standard"
              label="Username"
              {...bindUserName}
            ></TextField>
            <TextField
              id="standard-basic"
              required
              variant="standard"
              label="Password"
              {...bindPassWord}
            ></TextField>
            <Button
              required
              type="submit"
              variant="contained"
              color="primary"
              size="large"
            >
              register User
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
