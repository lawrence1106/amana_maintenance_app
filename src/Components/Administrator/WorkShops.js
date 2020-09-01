import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  CardHeader,
  Avatar,
  Breadcrumbs,
  IconButton,
  TextField,
  Divider,
  Select,
  MenuItem,
  Menu,
  InputLabel,
} from "@material-ui/core";
import { House, MoreVert, AddBoxRounded } from "@material-ui/icons";
import { red } from "@material-ui/core/colors";
import WorkshopImage from "../../images/workshop.jpg";

const MySwal = withReactContent(Swal);
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: "1.66%",
  },
  media: {
    height: 140,
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px",
    flexWrap: "wrap",
    boxShadow:
      "0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  margin: {
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
  dividerMargin: {
    margin: "15px",
  },
  formStyle: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  formItems: {
    margin: "1.66%",
  },
}));

const workshopDetails = function () {
  MySwal.fire({
    icon: "info",
    title: "Workshop Details",
    html: (
      <div>
        <Typography>Workload Status: Busy</Typography>
        <Typography>Ongoing Jobs: 3</Typography>
        <Typography>Pending Jobs: 7</Typography>
        <Typography>No. of Technicians: 20</Typography>
      </div>
    ),
  });
};

export default function WorkShops() {
  const [manager, setManager] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [replaceManager, setReplaceManager] = useState("");

  const handleSelect = (event) => {
    setManager(event.target.value);
  };
  const selectManager = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const selectNewManager = (event) => {
    setReplaceManager(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();

  const newWorkshop = function () {
    MySwal.fire({
      title: "New Workshop",
      cancelButtonText: "Cancel",
      confirmButtonText: "Create",
      showCancelButton: true,
      html: (
        <div>
          <Typography>Enter Details</Typography>
          <Divider className={classes.dividerMargin} />
          <div className={classes.formStyle}>
            <TextField
              id="workshop-name"
              className={classes.formItems}
              label="Workshop Name"
            ></TextField>
            <TextField
              id="location"
              className={classes.formItems}
              label="Location"
            ></TextField>
            <InputLabel>Age</InputLabel>
            <Select
              onClick={handleSelect}
              id="manager"
              className={classes.formItems}
            >
              <MenuItem value={"Carlz-kun"}>Carlz-kun</MenuItem>
            </Select>
          </div>
        </div>
      ),
      preConfirm: () => {
        if (
          document.getElementById("workshop-name").value &&
          document.getElementById("location").value
        ) {
          Swal.fire({
            icon: "success",
            title: "Workshop Created!",
          });
        } else {
          Swal.showValidationMessage("Please fill in the necessary fields!");
        }
      },
    });
  };

  const newManager = () => {
    MySwal.fire({
      title: "New Workshop Manager",
      html: (
        <div className={classes.formStyle}>
          <Typography>Select Workshop Manager</Typography>
          <Divider className={classes.dividerMargin} />
          <Select onClick={selectNewManager}>
            <MenuItem value={"The Chosen One"}>The Chosen One</MenuItem>
          </Select>
        </div>
      ),
      cancelButtonText: "Cancel",
      confirmButtonText: "Update",
      showCancelButton: true,
      preConfirm: () => {
        Swal.fire({
          icon: "success",
          title: "New Manager Updated",
        });
      },
    });
  };
  return (
    <div>
      <Breadcrumbs className={classes.margin} aria-label="breadcrumb">
        <Typography color="textPrimary" className={classes.link}>
          <House className={classes.icon} />
          Workshop
        </Typography>
      </Breadcrumbs>
      <Card className={classes.container}>
        <Button onClick={newWorkshop} variant="contained" color="primary">
          <AddBoxRounded className={classes.icon} /> Create Workshop
        </Button>
      </Card>
      <div className={classes.dividerMargin}></div>
      <Card className={classes.container}>
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                WM
              </Avatar>
            }
            action={
              <IconButton onClick={selectManager} aria-label="settings">
                <MoreVert />
              </IconButton>
            }
            title="Workshop Manager"
            subheader="Workshop Manager Name"
          />
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem
              onClick={() => {
                handleClose();
                newManager();
              }}
            >
              Assign New Manager
            </MenuItem>
          </Menu>
          <CardActionArea onClick={workshopDetails}>
            <CardMedia
              className={classes.media}
              image={WorkshopImage}
              title="Workshop Image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Abu Dhabi
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                20 22 Street, Al Markaziyah, Abu Dhabi, UAE
              </Typography>
            </CardContent>
          </CardActionArea>
          {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions> */}
        </Card>
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                WM
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVert />
              </IconButton>
            }
            title="Workshop Manager"
            subheader="Workshop Manager Name"
          />
          <CardActionArea onClick={workshopDetails}>
            <CardMedia
              className={classes.media}
              image={WorkshopImage}
              title="Workshop Image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Abu Dhabi
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                20 22 Street, Al Markaziyah, Abu Dhabi, UAE
              </Typography>
            </CardContent>
          </CardActionArea>
          {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions> */}
        </Card>
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                WM
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVert />
              </IconButton>
            }
            title="Workshop Manager"
            subheader="Workshop Manager Name"
          />
          <CardActionArea onClick={workshopDetails}>
            <CardMedia
              className={classes.media}
              image={WorkshopImage}
              title="Workshop Image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Abu Dhabi
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                20 22 Street, Al Markaziyah, Abu Dhabi, UAE
              </Typography>
            </CardContent>
          </CardActionArea>
          {/* <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions> */}
        </Card>
      </Card>
    </div>
  );
}
