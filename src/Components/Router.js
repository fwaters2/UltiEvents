import React from "react";
import Home from "./Home/Index";
import Schedule from "./Schedule/Index";
import Location from "./Location/Index";
import Rosters from "./Rosters/Index"
import Standings from "./Standings/Index"
import Stats from "./Stats/Index"
import Profile from "./Profile/Index"
// import CardDeals from "./CardDeals/Index"

export default function Router(props) {
  const {appState, changePage, page, userInfo} = props
  switch (page) {
    case "Home":
      return <Home appState={appState} changePage={changePage}/>;
    case "Schedule":
      return <Schedule appState={appState}/>;
    case "Location":
      return <Location appState={appState}/>;
    case "Rosters":
      return <Rosters appState={appState} changePage={changePage} />
    case "Standings":
      return <Standings appState={appState} changePage={changePage} />
      case "Stats":
        return <Stats appState={appState} changePage={changePage} />
      case "Profile":
      return <Profile appState={appState} userInfo={userInfo}/>
    // case "CardDeals":
    //   return <CardDeals />
    default:
      return <div>Error</div>;
  }
}
