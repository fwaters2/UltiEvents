import React from "react";
import Router from "../Components/Router";
import Header from "../Components/Header/Index";
import Drawer from "../Components/Drawer/Index";

export default function StateStore() {
  const [page, setPage] = React.useState("Home");
  const [appState, setAppState] = React.useState({
    isDrawerToggled: false
  });
  const toggleDrawer = () => {
    setAppState({ ...appState, isDrawerToggled: !appState.isDrawerToggled });
  };

  function changePage(newPage) {
    setPage(newPage)
  }
  // const changePage = page => () => {
  //   setAppState({
  //     ...appState,
  //     page: page
  //   });
  // };
  return (
    <React.Fragment>
      <Header appState={appState} page={page} changePage={changePage} toggleDrawer={toggleDrawer} />
      <Drawer appState={appState} page={page} changePage={changePage} toggleDrawer={toggleDrawer} />
      <Router appState={appState} page={page} changePage={changePage}/>
    </React.Fragment>
  );
}
