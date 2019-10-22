import React from "react";
import Choices from "./Choices";
import SortingPlay from "./SortingPlay";
import "./JsonFiles/RookieWatch";
import { Container, Typography } from "@material-ui/core";
import GenderTabs from "./GenderTabs";

const RookieWatch = require("./JsonFiles/RookieWatch.json");

export default function Router(props) {
  const {statPage, setStatPage} = props
  switch (statPage) {
    case "Choices":
      return <Choices setStatPage={setStatPage} />;
    case "RookieWatch":
      return (
        <Container style={{ overflow: "auto" }}>
          <Typography variant="h6">Rookie Watch</Typography>
          <SortingPlay stats={RookieWatch} />
        </Container>
      );
    case "SeasonStats":
      return <GenderTabs />;
    default:
      return <Choices />;
  }
}
