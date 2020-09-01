import React from "react";
import MUIDataTable from "mui-datatables";
import Swal from "sweetalert2";
import Button from "@material-ui/core/Button";
import Block from "@material-ui/icons/Block";
let tableData = [];

const data = [
  "John Doe",
  "AMN-1021",
  "theUsername",
  "email@amn.com",
  <Button color="primary">Active</Button>,
  <Button
    variant="contained"
    color="secondary"
    startIcon={<Block />}
    onClick={deactivateUser}
  >
    Deactivate
  </Button>,
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

const options = {
  filterType: "checkbox",
  selectableRowsHideCheckboxes: true,
  selectableRowsHeader: false,
};

export default function StoreManagers() {
  return (
    <MUIDataTable
      title={"Store Managers"}
      data={tableData}
      columns={columns}
      options={options}
    />
  );
}
