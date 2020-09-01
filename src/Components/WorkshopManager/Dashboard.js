import React from "react";
import MUIDataTable from "mui-datatables";
import { makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import {
  Breadcrumbs,
  Typography,
  Card,
  CardHeader,
  Avatar,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import { Dashboard } from "@material-ui/icons";
import WorkshopImage from "../../images/workshop.jpg";

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
  root: {
    margin: "1.66%",
  },
  dividerSpacing: {
    margin: "15px",
  },
  media: {
    height: 140,
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
  avatar: {
    backgroundColor: blue[500],
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
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                WM
              </Avatar>
            }
            title="Abu Dhabi Workshop"
            subheader="20 22 Street, Al Markaziyah, Abu Dhabi, UAE"
          />
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={WorkshopImage}
              title="Workshop Image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Status
              </Typography>
              <Typography variant="body2" component="p">
                Workload: Busy
              </Typography>
              <Typography variant="body2" component="p">
                Jobs: 20
              </Typography>
              <Typography variant="body2" component="p">
                Technicians: 50
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Card>
      <div className={classes.dividerSpacing}></div>
      <MUIDataTable
        title={"Daily Accomplishments"}
        data={dailyAccomplishment}
        columns={dailyAccomplishmentHeader}
        options={options}
      />
      <div className={classes.dividerSpacing}></div>
      <MUIDataTable
        title={"Ongoing Jobs"}
        data={oAndPJobs}
        columns={oAndPJobsHeaders}
        options={options}
      />
      <div className={classes.dividerSpacing}></div>
      <MUIDataTable
        title={"Pending Jobs"}
        data={oAndPJobs}
        columns={oAndPJobsHeaders}
        options={options}
      />
    </div>
  );
}
