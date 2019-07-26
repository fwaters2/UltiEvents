import React from "react";
import "./Home.css";
import PropTypes from "prop-types";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ProfileIcon from "@material-ui/icons/AccountCircle";
import SwipeableViews from "react-swipeable-views";
import { makeStyles } from "@material-ui/styles";
import {
  Paper,
  Grid,
  Card,
  AppBar,
  Button,
  Tabs,
  Tab,
  Typography,
  Box,
  Link
} from "@material-ui/core";
import Event from "./Event";

import FormDialog from "./NewEvent";



const useStyles = makeStyles({
  theme: {},
  header: {
    height: "8vh"
  },
  nextGame: {
    height: "40vh"
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
    flexGrow: 1
  }
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

export default function Home(props) {
  const classes = useStyles();
  
  const [value, setValue] = React.useState(0);
const [region, setRegion] = React.useState("Kaohsiung")
  const [open, setOpen] = React.useState(false);
  const khEvents = props.khEvents
  const taiwanEvents = props.taiwanEvents
  const worldEvents = props.worldEvents
  function handleClickOpen(place) {
      setRegion(place)
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  return (
    <div style={{ backgroundColor: "black" }}>
        {console.log(props)}
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Kaohsiung Ultimate
          </Typography>
          <IconButton edge="start" color="inherit" aria-label="menu">
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
              <Grid className="nextGame" item sm={3} xs={12}>
                <Typography variant="h5">Play Ultimate:</Typography>
                <Paper className={classes.nextGame}>
                  <Typography variant="h6">Sunday 3:30pm Aozhidi</Typography>

                  <iframe
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17513.858504630487!2d120.29406705213856!3d22.659931969850735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e04fe0aa18229%3A0x880b91606fed3f55!2sAozihdi+Station!5e0!3m2!1sen!2stw!4v1564134326608!5m2!1sen!2stw"
                    style={{ maxWidth: "300px", frameBorder: "0", border: 0 }}
                  />
                  <Typography variant="body1">
                    Pickup at Aozhidi! All levels welcome!
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </div>
        </div>

        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="Full width tabs example"
          >
            <Tab label="Kaohsiung" {...a11yProps(0)} />
            <Tab label="Taiwan" {...a11yProps(1)} />
            <Tab label="Beyond" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={classes.theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={classes.theme.direction}>

            {khEvents.map(event=>(
                <Event event={event} />
            ))}
            <Button variant="contained" color="primary" fullWidth onClick={() => handleClickOpen("Kaohsiung")}>
              Add New Event
            </Button>
          </TabPanel>
          <TabPanel value={value} index={1} dir={classes.theme.direction}>
            {taiwanEvents.map(event=>(
                <Event event={event} />
            ))}
            <Button variant="contained" color="primary" fullWidth onClick={() => handleClickOpen("Taiwan")}>
              Add New Event
            </Button>
          </TabPanel>
          <TabPanel value={value} index={2} dir={classes.theme.direction}>
            {worldEvents.map(event=>(
                <Event event={event} />
            ))}
            <Button variant="contained" color="primary" fullWidth onClick={() => handleClickOpen("World")}>
              Add New Event
            </Button>
          </TabPanel>
        </SwipeableViews>
      </div>
      <FormDialog open={open} setOpen={setOpen} handleClickOpen={handleClickOpen} handleClose={handleClose} region={region}/>
    </div>
  );
}
