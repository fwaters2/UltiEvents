import React from "react";
import {
  Button,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography
} from "@material-ui/core";
import Firebase from "../../Assets/Firebase";

export default function Roster(props) {
  const { currentTeam, setCurrentTeam } = props;
  const [players, setPlayers] = React.useState([]);

  React.useEffect(() => {
    const unsubscribe = Firebase.firestore()
      .collection("Registration")
      .where("team", "==", currentTeam)
      .onSnapshot(snapshot => {
        const player = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setPlayers(player);
      });
    return unsubscribe;
  }, []);
  return (
    <Paper>
      <div style={{ height: "10px" }} />
      <Typography variant="h4" align="center">
        {currentTeam}
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Player</TableCell>
            <TableCell>Nationality</TableCell>
            <TableCell>Position</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {players
            .filter(player => player.team === currentTeam)
            .map(teamMember => (
              <TableRow>
                <TableCell>
                  {teamMember.firstName + " " + teamMember.lastName}{" "}
                  {teamMember.captain ? "(Captain)" : null}
                </TableCell>
                <TableCell>{teamMember.nationality}</TableCell>
                <TableCell>{teamMember.Skills}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <div style={{ height: "40px" }} />
      <Button
        style={{ position: "fixed",left:"0px", bottom: "0px", width: "100%" }}
        variant="contained"
        fullWidth
        onClick={() => setCurrentTeam(null)}
      >
        Back
      </Button>
    </Paper>
  );
}
