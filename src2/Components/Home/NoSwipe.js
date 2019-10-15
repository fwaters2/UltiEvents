import React from "react";
import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import Event from "./Event";

const useStyles = makeStyles({
    title:{
        
        padding:"20px"
    },
    paper:{
       
        textAlign: 'center',
       
    }
})


export default function NoSwipe(props) {
  const { khEvents, taiwanEvents, worldEvents } = props;
  const classes=useStyles()
  const categories = [
    { title: "Kaohsiung", events: khEvents },
    { title: "Taiwan", events:taiwanEvents},
    { title: "Beyond", events:worldEvents}
  ];

  //This displays the events in 3 columns when the page is md (medium) or larger
  return (
    <Grid container justify='space-around' spacing={0}>
        <Grid item md={12}>
            <Paper>
            <Typography variant={"h3"}>Find a game!</Typography>
            </Paper>
        </Grid>
      {categories.map(category => (
        <Grid item md={4}>
          <Paper className={classes.paper}>
            <Typography className={classes.title} variant="h6">{category.title}</Typography>
            {category.events.map(event => (
              <Event event={event} />
            ))}
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
