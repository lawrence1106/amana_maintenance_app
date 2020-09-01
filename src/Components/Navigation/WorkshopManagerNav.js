import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import {
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  Collapse,
  Divider,
} from "@material-ui/core";
import {
  House,
  Dashboard,
  Assessment,
  PeopleAlt,
  ExpandMore,
  ExpandLess,
  LocalGasStation,
  Build,
  Assignment,
  AttachMoney,
  EmojiTransportation,
  HomeWork,
  Store,
  Settings,
} from "@material-ui/icons";
import Logo from "../../images/amana-logo.jpg";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      marginLeft: drawerWidth,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  logoRender: {
    height: "45px",
  },
  logoAlignment: {
    display: "flex",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  userButton: {
    marginLeft: "auto",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const AdminDrawer = function (props) {
  const { history } = props;
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openReports, setOpenReports] = useState(false);
  const [openUsers, setOpenUsers] = useState(false);

  const handleSubMenuReports = () => {
    setOpenReports(!openReports);
  };
  const handleSubMenuUsers = () => {
    setOpenUsers(!openUsers);
  };
  return (
    <div>
      <div className={classes.toolbar}>
        <div className={classes.logoAlignment}>
          <img className={classes.logoRender} src={Logo} />
        </div>
      </div>
      <Divider />
      <List>
        <ListItem
          button
          onClick={function () {
            history.push({ pathname: "/" });
            setMobileOpen(false);
          }}
        >
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem
          button
          onClick={function () {
            history.push("/technicians");
            setMobileOpen(false);
          }}
        >
          <ListItemIcon>
            <Build />
          </ListItemIcon>
          <ListItemText primary="Technicians" />
        </ListItem>

        <ListItem button onClick={handleSubMenuUsers}>
          <ListItemIcon>
            <PeopleAlt />
          </ListItemIcon>
          <ListItemText primary="Users" />
          {openUsers ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openUsers} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem
              button
              className={classes.nested}
              onClick={function () {
                history.push({ pathname: "/fleet-managers" });
              }}
            >
              <ListItemIcon>
                <EmojiTransportation />
              </ListItemIcon>
              <ListItemText primary="Fleet Manager" />
            </ListItem>
            <ListItem
              button
              className={classes.nested}
              onClick={function () {
                history.push({ pathname: "/workshop-managers" });
              }}
            >
              <ListItemIcon>
                <HomeWork />
              </ListItemIcon>
              <ListItemText primary="Workshop Managers" />
            </ListItem>
            <ListItem
              button
              className={classes.nested}
              onClick={function () {
                history.push({ pathname: "/store-managers" });
              }}
            >
              <ListItemIcon>
                <Store />
              </ListItemIcon>
              <ListItemText primary="Store Managers" />
            </ListItem>
            <ListItem
              button
              className={classes.nested}
              onClick={function () {
                history.push({ pathname: "/technicians" });
              }}
            >
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Technicians" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    </div>
  );
};
export default withRouter(AdminDrawer);
