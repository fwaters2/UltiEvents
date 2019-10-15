import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Directions } from "@material-ui/icons";
import FullScreenMap from "./FullScreenMap";
import PinIcon from "@material-ui/icons/Room";
import DirectionsToField from "./Directions";
import './FullScreen.css'

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

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "lightGray",
    display:"flex",
    flexDirection:"column",
    flex:1
  }
}));

export default function LocationView(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar
        className="Location-Info-Toggle"
        position="static"
        color="default"
        style={{zIndex:2}}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab icon={<PinIcon />} />
          <Tab icon={<Directions />} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        id="swipeable-map"
        className="Swipeable-views"
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
        style={{display:"flex", flexDirection:"column",flex:1  }}
      >
        <FullScreenMap value={value} index={0} dir={theme.direction} />

        <TabPanel value={value} index={1} dir={theme.direction}>
          <DirectionsToField />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
