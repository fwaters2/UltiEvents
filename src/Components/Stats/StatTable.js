import React from "react";
import { Table, TableHead, TableRow, TableBody, TableCell } from "@material-ui/core";

export default function StatTable(props) {
  const { stats } = props;

  return (
    <Table stickyHeader>
      <TableHead>
        <TableRow>
          <TableCell>Player</TableCell>
          <TableCell>Team</TableCell>
          <TableCell>Assists</TableCell>
          <TableCell>Goals</TableCell>
          <TableCell>Ds</TableCell>
          <TableCell>Total</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {stats.map(player => (
          <TableRow>
            <TableCell>{player.Name}</TableCell>
            <TableCell>{player.Team}</TableCell>
            <TableCell>{player.Assists}</TableCell>
            <TableCell>{player.Goals}</TableCell>
            <TableCell>{player.Ds}</TableCell>
            <TableCell>{player.Total}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
