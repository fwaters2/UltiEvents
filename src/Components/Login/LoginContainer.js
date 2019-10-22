import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Register from "./Register";
import SignIn from "./SignIn";
import { Button } from "@material-ui/core";
import ForgotPassword from "./ForgotPassword";

function TabPanel(props) {
  const {
    children,
    value,
    index,
    language,
    handleChange,
    values,
    classes,
    ...other
  } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={0}>{children}</Box>
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

export default function LoginContainer(props) {
  //const classes = useStyles();
  const theme = useTheme();
  const [forgotEmail, toggleForgotEmail] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const { handleChange, values, onClose } = props;

  function handleTabChange(event, newValue) {
    setValue(newValue);
  }

  function handleChangeIndex(index) {
    setValue(index);
  }

  return (
    <div style={{ padding: "15px" }}>
      {forgotEmail ? (
        <ForgotPassword
          onClose={onClose}
          toggleForgotEmail={toggleForgotEmail}
        />
      ) : (
        <React.Fragment>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleTabChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Sign In" {...a11yProps(0)} />
              <Tab label="Register" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <SignIn
                onClose={onClose}
                handleChange={handleChange}
                values={values}
              />
              <Button onClick={() => toggleForgotEmail(true)} fullWidth>
                Forgot Password?
              </Button>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <Register
                onClose={onClose}
                handleChange={handleChange}
                values={values}
              />
            </TabPanel>
          </SwipeableViews>
        </React.Fragment>
      )}
    </div>
  );
}
