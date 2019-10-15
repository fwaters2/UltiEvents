import React from "react";
import { Paper, Typography, Link, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  paper: {
    padding: "5px",
    width: "300px",
    
  }
});
//hmmmmm sooo which props do I REALLY need
//left 1/3 DateBold, Date Capital not bold
//right 2/3rds EventName(hyperlinked)
//time, location

//friendbar
//going/share

export default function WorldEvent(props) {
  const { event } = props;
  const classes = useStyles();
//event.date1
//event.date2

//event.name
//event.link
//event.time
//event.location

  return (
    <Grid container justify='center' spacing={1}>
    <Grid item>
      <Paper className={classes.paper} style={{alignText: 'left'}}>
        <Grid container>
          <Grid xs={3}>
            <Typography variant="body2">
              <strong>{event.date1}</strong><br/>
              {event.date2}
            </Typography>
          </Grid>
          <Grid xs={9}>
            <Typography variant="body1">
              <Link href={event.link}>
                <strong>{event.name}</strong>
              </Link>
            </Typography>
            <Typography alignText="right" variant="body2">
              {event.link2?<Link href={event.link2}>{event.moreInfo}</Link>:null} <strong>{event.location}</strong>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
    </Grid>
  );
}
