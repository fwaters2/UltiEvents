import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Container,
  Hidden
} from "@material-ui/core";
import {
  CalendarToday,
  Group,
  LocalAtm,
  FormatListNumbered,
  ShowChart
} from "@material-ui/icons";
import PinIcon from "@material-ui/icons/Room";
import LeaguePhoto from "../../Assets/Images/LeaguePhoto.png";
import "./Home.css";

export default function HomeView(props) {
  const { changePage } = props;
  return (
    <React.Fragment>
      {/*Desktop View */}
      {/* <Hidden smDown > */}

      <Box
        style={{
          position: "absolute",
          height: "50vw",
          minHeight: "50vh",
          maxHeight: "100vh",
          width: "100%",
          zIndex: -2,
          backgroundColor: "black"
        }}
      >
        <img //className="masked"
          src={LeaguePhoto}
          alt="LeaguePhoto"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover"
            //boxShadow: "10px 10px 5px"
          }}
        />
      </Box>
      <div style={{ height: "50vw" }} />
      {/* </Hidden> */}
      {/*Mobile View */}
      <Hidden xsUp>
        <Box
          style={{
            height: "50vw",
            maxHeight: "70vh",
            width: "100%",
            objectFit: "contain"
          }}
        >
          <img //className="masked"
            src={LeaguePhoto}
            alt="LeaguePhoto"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover"
              //boxShadow: "10px 10px 5px"
            }}
          />

          {/* <div
          style={{
            //backgroundImage:"url( " + LeaguePhoto + ")",
            //backgroundSize:"1"
            height: "100%",
            width: "100vw",
            backgroundBlendMode: "multiply"
          }}
        >
          <div
            //src={KUL}
            //alt="LeaguePhoto"

            style={{
              paddingTop: "5vh",
              backgroundImage:
                "url( " + RedMask + "), " + "url( " + LeaguePhoto + ")",
              backgroundSize: "100% 100%",
              height: "100%",
              width: "100%",
              objectFit: "cover",
              backgroundBlendMode: "screen"
            }}
          />
        </div> */}
        </Box>
      </Hidden>
      <Container
        maxWidth="sm"
        style={{
          backgroundColor: "rgba(256,256,256,.9)",
          color: "black",
          borderRadius: "20px"
        }}
      >
        <List dense>
          <ListItem button onClick={() => changePage("Schedule")}>
            <ListItemIcon>
              <CalendarToday />
            </ListItemIcon>

            <ListItemText
              primary="Schedule"
              secondary="10/19, 10/26, 11/16, 11/23, 12/7"
            />
          </ListItem>
          <ListItem button onClick={() => changePage("Location")}>
            <ListItemIcon>
              <PinIcon />
            </ListItemIcon>
            <ListItemText
              primary="Location"
              secondary="MRT R18: Oil Refinery"
            />
          </ListItem>
          <ListItem button onClick={() => changePage("Rosters")}>
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText primary="Rosters" />
          </ListItem>
          <ListItem button onClick={()=>changePage("Standings")}>
            <ListItemIcon>
              <FormatListNumbered />
            </ListItemIcon>
            <ListItemText primary="Standings" />
          </ListItem>
          <ListItem divider button onClick={()=>changePage("Stats")}>
            <ListItemIcon>
              <ShowChart />
            </ListItemIcon>
            <ListItemText primary="Stats" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Coming Soon:" />
          </ListItem>

          <ListItem button disabled>
            <ListItemIcon>
              <LocalAtm />
            </ListItemIcon>
            <ListItemText primary="Card Deals" />
          </ListItem>

          {/* <ListItem button disabled>
            <ListItemIcon>
              <PriorityHigh />
            </ListItemIcon>
            <ListItemText primary="Admin Tools" />
          </ListItem> */}
        </List>
      </Container>
    </React.Fragment>
  );
}
