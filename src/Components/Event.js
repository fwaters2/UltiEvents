import React from "react";
import { Paper, Typography } from "@material-ui/core";

export default function WorldEvent(props) {
  const { event } = props;
  return (
    <Paper style={{margin: "10px 0",padding:"5px"}}>
      <Typography variant="h6">
        {event.date} {event.location}
      </Typography>
      <Typography variant="body1">
        {event.title}
        <br />
        {event.description}
      </Typography>
    </Paper>
  );
}
