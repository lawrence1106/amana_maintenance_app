import React from "react";
import MUIDataTable from "mui-datatables";
import Swal from "sweetalert2";
import Axios from "axios";
import {
  Button,
  Card,
  makeStyles,
  Typography,
  TextField,
  Divider,
} from "@material-ui/core";
import { Block, PersonAdd, Delete } from "@material-ui/icons";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
const useStyles = makeStyles((theme) => ({
  cardContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px",
    flexWrap: "wrap",
    boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
  },
  margin: {
    margin: "10px",
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
  formStyle: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  formItems: {
    margin: "1.66%",
  },
}));

let tableData = [];

const data = [
  "John Doe",
  "AMN-1021",
  "theUsername",
  "email@amn.com",
  <Button color="primary">Active</Button>,
  function () {
    const classes = useStyles();
    return (
      <div>
        <Button
          className={classes.formItems}
          variant="contained"
          color="primary"
          startIcon={<Block />}
          onClick={deactivateUser}
        >
          Deactivate
        </Button>
        <Button
          className={classes.formItems}
          variant="contained"
          color="secondary"
          onClick={deleteUser}
        >
          <Delete />
          Delete
        </Button>
      </div>
    );
  },
];

for (let i = 0; i < 25; i++) {
  tableData.push(data);
}
const columns = [
  "Employee Name",
  "Employee ID",
  "Username",
  "Email Address",
  "Status",
  "",
];

function deactivateUser() {
  Swal.fire({
    icon: "warning",
    title: "Are you sure you want to deactivate user?",
    showCancelButton: true,
  });
}

function deleteUser() {
  MySwal.fire({
    icon: "warning",
    title: "Are you sure you want to delete user?",
    showCancelButton: true,
    cancelButtonText: "Cancel",
    confirmButtonText: "Yes",
    preConfirm: function () {
      Swal.fire({
        icon: "success",
        title: "User Deleted",
      });
    },
  });
}
const options = {
  filterType: "checkbox",
  selectableRowsHideCheckboxes: true,
  selectableRowsHeader: false,
};

export default function FleetManagers() {
  const classes = useStyles();
  function newUser() {
    MySwal.fire({
      title: "Add Fleet Manager",
      showCancelButton: true,
      cancelButtonText: "Cancel",
      confirmButtonText: "Register",
      html: (
        <div>
          <Typography>Enter Details</Typography>
          <Divider className={classes.margin} />
          <div className={classes.formStyle}>
            <TextField
              id="first-name"
              className={classes.formItems}
              label="First Name"
            ></TextField>
            <TextField
              id="last-name"
              className={classes.formItems}
              label="Last Name"
            ></TextField>
            <TextField
              id="email-address"
              className={classes.formItems}
              label="Email Address"
            ></TextField>
            <TextField
              id="employee-id"
              className={classes.formItems}
              label="Employee ID"
            ></TextField>
            <TextField
              id="username"
              className={classes.formItems}
              label="Username"
            ></TextField>
            <TextField
              id="password"
              className={classes.formItems}
              label="Password"
            ></TextField>
          </div>
        </div>
      ),
      preConfirm: () => {
        let firstName = document.querySelector("#first-name").value;
        let lastName = document.querySelector("#last-name").value;
        let email = document.querySelector("#email-address").value;
        let employeeId = document.querySelector("#employee-id").value;
        let username = document.querySelector("#username").value;
        let password = document.querySelector("#password").value;
        Axios.post("http://localhost:4000/addUser", {
          firstName: firstName,
          lastName: lastName,
          emailAddress: email,
          employeeId: employeeId,
          userName: username,
          passWord: password,
          role: "Fleet Manager",
        }).then((res) => {
          Swal.fire({
            icon: "success",
            title: "Fleet Manager Registered!",
          });
        });
      },
    });
  }
  return (
    <div>
      <Card className={classes.cardContainer}>
        <Button onClick={newUser} variant="contained" color="primary">
          <PersonAdd className={classes.icon} /> Add
        </Button>
      </Card>
      <div className={classes.margin}></div>
      <MUIDataTable
        title={"Fleet Managers"}
        data={tableData}
        columns={columns}
        options={options}
      />
    </div>
  );
}
