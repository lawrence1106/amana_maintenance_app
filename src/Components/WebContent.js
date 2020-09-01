import React, { useState } from "react";
import {
  Drawer as MUIDrawer,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  CssBaseline,
  Hidden,
  Button,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { AccountCircle } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import { withRouter, useHistory } from "react-router-dom";

import AdminRoutes from "./Routes/AdminRoutes";
import WorkshopManagerRoutes from "./Routes/WorkshoManagerRoutes";

import AdminDrawer from "./Navigation/AdminNav";
import WorkshopManagerDrawer from "./Navigation/WorkshopManagerNav";

import Cookie from "universal-cookie";

const cookie = new Cookie();

const drawerWidth = 240;
// Styles
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
// Component
const ResponsiveDrawer = function (props) {
  const { window, userRole } = props;

  const history = useHistory();
  const classes = useStyles();
  const theme = useTheme();
  // Hooks
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  // Event Handlers
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const endSession = () => {
    cookie.remove("userSession");
    history.push({ pathname: "/" });
    history.go(0);
  };

  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let today = new Date();
  let datetoday = today.toLocaleDateString("en-US", options);
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {datetoday}
          </Typography>
          <Button
            color="inherit"
            className={classes.userButton}
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <AccountCircle />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={endSession}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <MUIDrawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {userRole === "Administrator" ? <AdminDrawer /> : undefined}
            {userRole === "Workshop Manager" ? (
              <WorkshopManagerDrawer />
            ) : undefined}
          </MUIDrawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <MUIDrawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {userRole === "Administrator" ? <AdminDrawer /> : undefined}
            {userRole === "Workshop Manager" ? (
              <WorkshopManagerDrawer />
            ) : undefined}
          </MUIDrawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {userRole === "Administrator" ? (
          <div>
            <AdminRoutes />
          </div>
        ) : undefined}
        {userRole === "Workshop Manager" ? (
          <div>
            <WorkshopManagerRoutes />
          </div>
        ) : undefined}
      </main>
    </div>
  );
};

export default withRouter(ResponsiveDrawer);
