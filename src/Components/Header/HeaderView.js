import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import KUL from "../../Assets/Images/KULred.png";
import KULTop from "../../Assets/Images/KULTop.png";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 0,
    ...theme.mixins.toolbar
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    paddingTop: 10
  },
  headerSpace: {
    ...theme.mixins.toolbar
  }
}));

export default function HeaderView(props) {
  const { toggleDrawer, changePage } = props;
  const classes = useStyles();
  //const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <IconButton
            onClick={toggleDrawer}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <span className={classes.title}>
       
            <img
              src={KUL}
              height="35em"
              onClick={()=>changePage("Home")}
              style={{
                filter: "drop-shadow(3px 3px 1px black)"
              }}
              alt="KUL"
            />
                 <img 
            src={KULTop}
            height="30em"
            alt="top"
           style={{
             marginLeft:"20px"
           }}
            />
          </span>
          {/* {auth && ( */}
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          {/* )} */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
