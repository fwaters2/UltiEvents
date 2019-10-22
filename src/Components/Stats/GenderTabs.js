import React from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import './JsonFiles/Female.json'
import './JsonFiles/Male.json'
import SortingPlay from "./SortingPlay";

const FemaleStats = require('./JsonFiles/Female.json')
const MaleStats = require('./JsonFiles/Male.json')

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
    display:"flex",
    flexDirection:"column",
    flex:1
  }
}));

export default function GenderTabs(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
          <Tab label="Female" />
          <Tab label="Male" />
        </Tabs>
      </AppBar>
        <TabPanel value={value} index={0} dir={theme.direction}>
            <SortingPlay stats={FemaleStats}/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <SortingPlay stats={MaleStats}/>
        </TabPanel>
    </div>
  );
}
