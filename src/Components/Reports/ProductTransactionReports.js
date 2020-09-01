import React from "react";
import MUIDataTable from "mui-datatables";
import Swal from "sweetalert2";
import Button from "@material-ui/core/Button";

let tableData = [];

const data = [
  "Steering Wheel",
  "5",
  "AED150",
  "SOME COMPANY INC.",
  <Button variant="contained" onClick={viewPhoto}>
    Photo
  </Button>,
  "08/08/2020",
];

for (let i = 0; i < 25; i++) {
  tableData.push(data);
}
const columns = [
  "Product Name",
  "Quantity",
  "Product Cost",
  "Supplier",
  "Invoice Photo",
  "Transaction Date",
];

function viewPhoto() {
  Swal.fire({
    icon: "info",
    title: "Invoice Photo",
    text: "Insert Photo Here",
  });
}

const options = {
  filterType: "checkbox",
  selectableRowsHideCheckboxes: true,
  selectableRowsHeader: false,
};

export default function MaintenancePartExpensesReports() {
  return (
    <MUIDataTable
      title={"Maintenance Spare Part Expenses "}
      data={tableData}
      columns={columns}
      options={options}
    />
  );
}
