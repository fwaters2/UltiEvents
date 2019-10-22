import React from "react";
import TeamList from "./TeamList";
import Roster from "./Roster";

export default function RostersView(props) {
    const {changePage} = props
  const [currentTeam, setCurrentTeam] = React.useState(null);

  return currentTeam ? (
    <Roster currentTeam={currentTeam} setCurrentTeam={setCurrentTeam} />
  ) : (
    <TeamList changePage={changePage} setCurrentTeam={setCurrentTeam} />
  );
}
