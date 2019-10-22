import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {
  CalendarToday,
  Group,
  LocalAtm,
  Home,
  FormatListNumbered,
  ShowChart
} from "@material-ui/icons";
import PinIcon from "@material-ui/icons/Room";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

export default function DrawerView(props) {
  const { appState, toggleDrawer, changePage } = props;
  const classes = useStyles();


  function handleClick(page) {
    changePage(page);
   toggleDrawer();
  }

  return (
    <Drawer open={appState.isDrawerToggled} onClose={toggleDrawer}>
      <div
      className={classes.list}
      role="presentation"
      //onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List>
        <ListItem button onClick={()=>handleClick("Home")}>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={()=>handleClick("Schedule")}>
          <ListItemIcon>
            <CalendarToday />
          </ListItemIcon>
          <ListItemText primary="Schedule" />
        </ListItem>
        <ListItem button onClick={()=>handleClick("Location")}>
          <ListItemIcon>
            <PinIcon />
          </ListItemIcon>
          <ListItemText primary="Location" />
        </ListItem>
        <ListItem button onClick={()=>handleClick("Rosters")}>
          <ListItemIcon>
            <Group />
          </ListItemIcon>
          <ListItemText primary="Rosters" />
        </ListItem>
        <ListItem button onClick={()=>handleClick("Standings")}>
          <ListItemIcon>
            <FormatListNumbered />
          </ListItemIcon>
          <ListItemText primary="Standings" />
        </ListItem>
        <ListItem button onClick={()=>handleClick("Stats")}>
          <ListItemIcon>
            <ShowChart />
          </ListItemIcon>
          <ListItemText primary="Stats" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Coming Soon" />
        </ListItem>

        <ListItem button disabled>
          <ListItemIcon>
            <LocalAtm />
          </ListItemIcon>
          <ListItemText primary="Card Deals" />
        </ListItem>
      </List>
    </div>
    </Drawer>
  );
}
