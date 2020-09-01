import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import Swal from "sweetalert2";
import Axios from "axios";
import {
  Button,
  MenuItem,
  Card,
  makeStyles,
  Typography,
  Select,
  Divider,
  InputLabel,
  FormControl,
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

let tableData = [];

const data = [
  "John Doe",
  "AMN-1021",
  "theUsername",
  "email@amn.com",
  "Painter",
  <Button color="primary">Working</Button>,
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
  "Type",
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

export default function Technicians() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [technicianType, setTechnicianType] = useState();

  const handleChange = (event) => {
    setTechnicianType(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  function newUser() {
    MySwal.fire({
      title: "Add Technician",
      showCancelButton: true,
      cancelButtonText: "Cancel",
      confirmButtonText: "Register",
      html: (
        <div>
          <Typography>Select Technician</Typography>
          <Divider className={classes.margin} />
          <div>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-controlled-open-select-label">
                Type
              </InputLabel>
              <Select
                labelId="demo-controlled-open-select-label"
                id="demo-controlled-open-select"
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={technicianType}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>asdasdadasdasd</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      ),
      preConfirm: () => {},
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
        title={"Technicians"}
        data={tableData}
        columns={columns}
        options={options}
      />
    </div>
  );
}
