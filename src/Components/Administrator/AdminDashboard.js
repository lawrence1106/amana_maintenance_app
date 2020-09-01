import React from "react";
import MUIDataTable from "mui-datatables";
import { makeStyles } from "@material-ui/core/styles";
import { Breadcrumbs, Typography, Card } from "@material-ui/core";
import { Dashboard } from "@material-ui/icons";
import Divider from "@material-ui/core/Divider";
import {
  Chart,
  BarSeries,
  PieSeries,
} from "@devexpress/dx-react-chart-material-ui";

let oAndPJobs = [];
let dailyAccomplishment = [];

const oAndPJobsData = [
  "AMN-B-077",
  "Dubai",
  "Some Technician",
  "Paint",
  "08/05/2020",
  "08/08/2020",
];

const dailyAccomplishmentData = [
  "AMN-B-077",
  "Dubai",
  "Some Technician",
  "Paint",
  "1hr/30mins",
  "08/05/2020",
  "08/08/2020",
  "08/08/2020",
];

// data loops
for (let i = 0; i < 25; i++) {
  oAndPJobs.push(oAndPJobsData);
}

for (let i = 0; i < 25; i++) {
  dailyAccomplishment.push(dailyAccomplishmentData);
}

// table headers
const oAndPJobsHeaders = [
  "Plate No.",
  "Workshop",
  "Technician",
  "Job Type",
  "Issued Date",
  "Due Date",
];

const dailyAccomplishmentHeader = [
  "Plate No.",
  "Workshop",
  "Technician",
  "Job Type",
  "Job Duration",
  "Issued Date",
  "Due Date",
  "Finished Date",
];

const chartData = [
  { year: "1950", population: 2.525 },
  { year: "1960", population: 3.018 },
  { year: "1970", population: 3.682 },
  { year: "1980", population: 4.44 },
  { year: "1990", population: 5.31 },
  { year: "2000", population: 6.127 },
  { year: "2010", population: 6.93 },
];

const options = {
  filterType: "checkbox",
  selectableRowsHideCheckboxes: true,
  selectableRowsHeader: false,
  rowsPerPage: 5,
  rowsPerPageOptions: [5, 10],
};

const useStyles = makeStyles((theme) => ({
  dividerSpacing: {
    margin: "10px",
  },
  link: {
    display: "flex",
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
  dataCharts: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    padding: "15px",
    flexWrap: "wrap",
  },
  cardShadow: {
    boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
  },
  charts: {
    width: 450,
    margin: "1.66%",
  },
  chartNames: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 10,
    padding: 5,
  },
}));

export default function HomePage() {
  const classes = useStyles();
  return (
    <div>
      <Breadcrumbs className={classes.dividerSpacing} aria-label="breadcrumb">
        <Typography color="textPrimary" className={classes.link}>
          <Dashboard className={classes.icon} />
          Dashboard
        </Typography>
      </Breadcrumbs>
      <Card className={classes.cardShadow}>
        <div className={classes.chartNames}>
          <Typography variant="h5">Monthly Fuel Expenses</Typography>
          <Typography variant="h5">Monthly Fuel Expenses</Typography>
        </div>
        <Divider />
        <div className={classes.dataCharts}>
          <Chart className={classes.charts} data={chartData}>
            <BarSeries valueField="population" argumentField="year" />
          </Chart>
          <Chart className={classes.charts} data={chartData}>
            <PieSeries valueField="population" argumentField="year" />
          </Chart>
        </div>
      </Card>
      <Divider className={classes.dividerSpacing} />
      <MUIDataTable
        title={"Daily Accomplishments"}
        data={dailyAccomplishment}
        columns={dailyAccomplishmentHeader}
        options={options}
      />
      <Divider className={classes.dividerSpacing} />
      <MUIDataTable
        title={"Ongoing Jobs"}
        data={oAndPJobs}
        columns={oAndPJobsHeaders}
        options={options}
      />
      <Divider className={classes.dividerSpacing} />
      <MUIDataTable
        title={"Pending Jobs"}
        data={oAndPJobs}
        columns={oAndPJobsHeaders}
        options={options}
      />
    </div>
  );
}
