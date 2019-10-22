import React from "react";
import "./standings.json";
import {
  Container,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button
} from "@material-ui/core";

const standings = require("./standings.json");
export default function StandingsView(props) {
    const {changePage} = props
  return (
    <Container>
      <div style={{ height: "10px" }} />
      <Paper style={{overflow:'auto'}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Team</TableCell>
              <TableCell>Wins</TableCell>
              <TableCell>Losses</TableCell>
              <TableCell>PCT</TableCell>
              <TableCell>PF</TableCell>
              <TableCell>PA</TableCell>
              <TableCell>{"+/-"}</TableCell>
              <TableCell>Spirit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {standings.map(team => (
              <TableRow>
                <TableCell>{team.Rank}</TableCell>
                <TableCell>{team.Team}</TableCell>
                <TableCell>{team.Wins}</TableCell>
                <TableCell>{team.Losses}</TableCell>
                <TableCell>{team.PCT}</TableCell>
                <TableCell>{team.PF}</TableCell>
                <TableCell>{team.PA}</TableCell>
                <TableCell>{team.PlusMinus}</TableCell>
                <TableCell>{team.SpiritScore}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div style={{ height: "40px" }} />
      <Button
        style={{ position: "fixed", left:"0px", bottom: "0px", width: "100%" }}
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
