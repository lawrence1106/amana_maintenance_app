import React from "react";
import MUIDataTable from "mui-datatables";

let tableData = [];

const data = ["AMN-B-077", "AED50", "Diesel", "Someone", "08/08/2020"];

for (let i = 0; i < 1500; i++) {
  tableData.push(data);
}

const columns = [
  "Plate No.",
  "Transaction Cost",
  "Fuel Type",
  "Driver Name",
  "Transaction Date",
];
console.log(tableData);
const options = {
  filterType: "checkbox",
  selectableRowsHideCheckboxes: true,
  selectableRowsHeader: false,
};

export default function FuelTransactionReports() {
  return (
    <div>
      <MUIDataTable
        title={"Fuel Transactions"}
        data={tableData}
        columns={columns}
        options={options}
      />
    </div>
  );
}
