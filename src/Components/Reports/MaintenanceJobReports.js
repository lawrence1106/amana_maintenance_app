import React from "react";
import MUIDataTable from "mui-datatables";

let tableData = [];
const data = [
  "AMN-B-077",
  "Dubai",
  "Someone",
  "Paint",
  "1hr",
  "08/04/2020",
  "08/06/2020",
  "08/06/2020",
];

for (let i = 0; i < 25; i++) {
  tableData.push(data);
}

const columns = [
  "Plate No.",
  "Workshop",
  "Technician",
  "Job Type",
  "Job Duration",
  "Issued Date",
  "Due Date",
  "Finished Date",
];

const options = {
  filterType: "checkbox",
  selectableRowsHideCheckboxes: true,
  selectableRowsHeader: false,
};

export default function MaintenanceJobReports() {
  return (
    <MUIDataTable
      title={"Maintenance Jobs"}
      data={tableData}
      columns={columns}
      options={options}
    />
  );
}
