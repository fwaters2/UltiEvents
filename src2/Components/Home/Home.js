import React from "react";
import "./Home.css";
import PropTypes from "prop-types";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ProfileIcon from "@material-ui/icons/AccountCircle";
import { makeStyles } from "@material-ui/styles";
import {
  Paper,
  Grid,
  AppBar,
  Typography,
  Box,
  Hidden
} from "@material-ui/core";
import FormDialog from "./NewEvent";
import Swipe from "./Swipe";
import NoSwipe from "./NoSwipe";

const useStyles = makeStyles({
  theme: {},
  header: {
    height: "8vh"
  },
  nextGame: {
    display:"flex",
    flexDirection:"column",
    alignItems:'center',
    textAlign:'center',
    height: "40vh",
    padding: "5px"
    
  },
  heroArea: {
    padding: "5vh",
    height: "50vh"
  },

  root: {
    flexGrow: 1
  },
  menuButton: {
    //marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "center"
  }
});

export default function Home(props) {
  const classes = useStyles();
  const [region, setRegion] = React.useState("World");
  const [open, setOpen] = React.useState(false);
  const { khEvents, taiwanEvents, worldEvents } = props;
  function handleClickOpen(place) {
    setRegion(place);
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }

  return (
    <div style={{ backgroundColor: "black" }}>
      <AppBar style={{ backgroundColor: "rgba(0,0,0,0.2)" }} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            style={{ display: "none" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Kaohsiung Ultimate
          </Typography>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            style={{ display: "none" }}
          >
            <ProfileIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className="body">
        <div className="bodyShade">
          <div className={classes.heroArea}>
            <Grid container>
              <Grid item sm={9} xs={12}>
                <Typography variant="h3">KUL info coming soon!</Typography>
                <Typography variant="h6">
                  Come meet us in the meantime
                </Typography>
              </Grid>
              <Hidden smDown>
                <Grid item sm={3} xs={12}>
                  <Typography variant="h5">Play Ultimate:</Typography>
                  <Paper className={classes.nextGame}>
                    <Typography variant="h6">Sunday 3:30pm Aozhidi</Typography>
                    <iframe
                      title="map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17513.858504630487!2d120.29406705213856!3d22.659931969850735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e04fe0aa18229%3A0x880b91606fed3f55!2sAozihdi+Station!5e0!3m2!1sen!2stw!4v1564134326608!5m2!1sen!2stw"
                      style={{ width:"220px", frameBorder: "0", border: 0 }}
                    />
                    <Typography variant="body1">
                      Pickup at Aozhidi! All levels welcome!
                    </Typography>
                  </Paper>
                </Grid>
              </Hidden>
            </Grid>
          </div>
        </div>
        <Hidden smDown>
          <NoSwipe
            khEvents={khEvents}
            taiwanEvents={taiwanEvents}
            worldEvents={worldEvents}
          />
        </Hidden>
        <Hidden mdUp>
          <Swipe
            khEvents={khEvents}
            taiwanEvents={taiwanEvents}
            worldEvents={worldEvents}
          />
        </Hidden>
      </div>
      <FormDialog
        open={open}
        setOpen={setOpen}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        region={region}
      />
    </div>
  );
}
