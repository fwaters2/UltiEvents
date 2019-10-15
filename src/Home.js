import React from "react";
import LeaguePhoto from "./LeaguePhoto.png";
import { Container, Typography, AppBar, Paper, Tabs, Tab, Box, Grid } from "@material-ui/core";
import Throwers from "./Throwers/Throwers";

const listings = [
  {name:"mike"},
  {name:"steve"},
  {name:"Dinah"},
  {name:"mike"},
  {name:"steve"},
  {name:"mike"},
  {name:"steve"},
  {name:"Michelle"},
  {name:"mike"},
  {name:"steve"},
  {name:"Dinah"},
  {name:"mike"},
  {name:"steve"},
  {name:"mike"},
  {name:"steve"},
  {name:"Michelle"}
]

export default function Home() {
  return (
    <React.Fragment>
    <Container>
      <img
        src={LeaguePhoto}
        alt="league photo"
        style={{
          position: "fixed",
          left: "50%",
          zIndex: -2,
          transform: "translatex(-50%)",
          minWidth: "100vw",
          maxHeight: "40vh",
          filter: "blur(1px) brightness(1.2)"
        }}
      />
      <AppBar>Login</AppBar>
      <div style={{ height: "40px" }} />
      <Typography
        color="primary"
        
        align="center"
        style={{
         
          fontWeight: "bold",
          fontSize: "8vh",
          textShadow: "5px 5px 8px #000000"
        }}
      >
        Kaohsiung Ultimate
      </Typography>
      <Box style={{ height: "450px", backgroundColor:"rgb(0,0,0,.5)"}}>




          {/* <Throwers />
          <Container style={{overflow:'auto', height:'88%' }}>
        <Grid container spacing={1}>
          {listings.map(listing=>(
            <Grid item xs={6}>
              <Paper style={{height:"80px"}}>
                <Typography>{listing.name}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
        </Container> */}
      </Box>
      <div style={{ height: "2000px" }}></div>

    </Container>
          <Typography
          align="center"
          style={{
            position: "fixed",
            width:"100vw",
            textAlign:'center',
            backgroundColor:"black",
              color:'white',
            //transform: "translatex(-50%)",
            textShadow: "2px 2px 1px #000000",
            bottom: 0
          }}
        >
          Website created by:
        </Typography>
        </React.Fragment>
  );
}
