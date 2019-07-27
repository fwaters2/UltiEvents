import React from "react";
import {
  Paper,
  Typography,
  Link,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Grid
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  heading: {}
});

export default function WorldEvent(props) {
  const { event } = props;
  const classes = useStyles();
  return (
    <Paper style={{ margin: "10px 0", padding: "5px" }}>
      <Grid container>
        <Grid xs={3}>
          <Typography variant="body2">
            {event.Month} {event.Day}
          </Typography>
        </Grid>
        <Grid xs={9}>
          <Typography variant="body1">
            <Link href={event.Link}><strong>{event.Name}</strong></Link>
          </Typography>
          <Typography alignText="right" variant="body2">
            <strong>{event.Country}</strong> {event.City}
          </Typography>
          
        </Grid>
      </Grid>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>More Info</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>Cost: --- Gender Ratio: --- Other: ---</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </Paper>
  );
}
