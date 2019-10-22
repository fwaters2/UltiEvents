import React from "react";
import { Grid, Button } from "@material-ui/core";

export default function Choices(props) {
    const {setStatPage} =props
  return (
    <Grid container spacing={5} align="center">
      <Grid item xs={12} sm={6} md={4}>
        <Button variant="contained" onClick={()=>setStatPage("RookieWatch")}>Rookie Watch</Button>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Button variant="contained" onClick={()=>setStatPage("SeasonStats")}>Season Stats</Button>
      </Grid>
      <Grid item xs={12} md={4}>
        <Button variant="contained" disabled>
          Career Stats
        </Button>
      </Grid>
    </Grid>
  );
}
