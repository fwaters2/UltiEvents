import React from "react";
import SwipeableViews from "react-swipeable-views";
import { makeStyles } from "@material-ui/styles";

import {
  AppBar,
  Button,
  Tabs,
  Tab,
  Typography,
  Box
} from "@material-ui/core";
import Event from "./Event";

const useStyles = makeStyles({
  theme: {},
  header: {
    height: "8vh"
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
function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

export default function Swipe(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);
  const [region, setRegion] = React.useState("World");
  const [open, setOpen] = React.useState(false);
  const { khEvents, taiwanEvents, worldEvents } = props;
  function handleClickOpen(place) {
    setRegion(place);
    setOpen(true);
  }
  function handleChange(event, newValue) {
    setValue(newValue);
  }
  function handleChangeIndex(index) {
    setValue(index);
  }
  return (
    <React.Fragment>
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
        {khEvents.map(event => (
            <Event event={event} />
          ))}
          {/* <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => handleClickOpen("Kaohsiung")}
          >
            Add New Event
          </Button> */}
        </TabPanel>
        <TabPanel value={value} index={1} dir={classes.theme.direction}>
          {taiwanEvents.map(event => (
            <Event event={event} />
          ))}
          {/* <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => handleClickOpen("Taiwan")}
          >
            Add New Event
          </Button> */}
        </TabPanel>
        <TabPanel value={value} justify='center' index={2} dir={classes.theme.direction}>
          {worldEvents.map(event => (
            <Event event={event} />
          ))}
          {/* <Button
            variant="contained"
            color="primary"
            widith="300px"
            onClick={() => handleClickOpen("World")}
          >
            Add New Event
          </Button> */}
        </TabPanel>
      </SwipeableViews>
      </React.Fragment>
  );
}
