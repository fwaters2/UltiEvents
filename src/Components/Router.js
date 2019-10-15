import React from "react";
import Home from "./Home/Index";
import Schedule from "./Schedule/Index";
import Location from "./Location/Index";
// import CardDeals from "./CardDeals/Index"

export default function Router(props) {
  const {appState, changePage, page} = props
  switch (page) {
    case "Home":
      return <Home appState={appState} changePage={changePage}/>;
    case "Schedule":
      return <Schedule appState={appState}/>;
    case "Location":
      return <Location appState={appState}/>;
    // case "CardDeals":
    //   return <CardDeals />
    default:
      return <div>Error</div>;
  }
}
