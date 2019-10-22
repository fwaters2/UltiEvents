import React from "react";
import {
  ListItemText,
  ListItem,
  List,
  Paper,
  Typography,
  Container,
  Button
} from "@material-ui/core";

const teams = [
  "Big Dumps",
  "Disc Jockeys",
  "Galaxy",
  "Hakuna Matata",
  "Spirit Animals",
  "UP!",
  "Young Bloods"
];

export default function TeamList(props) {
  const { setCurrentTeam, changePage } = props;
  return (
    <Container maxWidth="sm">
        <div style={{height:"10px"}}/>
      <Paper>
        <Typography variant="h6" align="center">
          Teams
        </Typography>
        <List>
          {teams.map(team => (
            <ListItem button onClick={() => setCurrentTeam(team)}>
              <ListItemText primary={team} />
            </ListItem>
          ))}
        </List>
        <Button
          variant="contained"
          fullWidth
          onClick={() => changePage("Home")}
        >
          Back
        </Button>
      </Paper>
    </Container>
  );
}
