import React from "react";
import MUIDataTable from "mui-datatables";

let tableData = [];

const data = [
  "Rim",
  "AED200",
  "Spare part replacement",
  "Someone",
  "08/08/2020",
];

for (let i = 0; i < 25; i++) {
  tableData.push(data);
}
const columns = [
  "Part Name.",
  "Transaction Cost",
  "Reason",
  "Technician",
  "Transaction Date",
];

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
