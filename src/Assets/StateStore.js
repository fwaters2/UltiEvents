import React from "react";
import Router from "../Components/Router";
import Header from "../Components/Header/Index";
import Drawer from "../Components/Drawer/Index";
import Firebase from "../Assets/Firebase";

export default function StateStore() {
  const [page, setPage] = React.useState("Home");
  const [isLoading, setIsLoading] = React.useState(true);
  const [isSignedIn, updateUser] = React.useState(false);
  const [userInfo, setUserInfo] = React.useState(null);
  const [values, setValues] = React.useState({
    email: "",
    password: ""
  });
  const [appState, setAppState] = React.useState({
    isDrawerToggled: false
  });
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  //Getting any userInfo
  React.useEffect(() => {
    const unsubscribe = Firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        //var photoURL = user.photoURL;
        setUserInfo({
          displayName: displayName,
          email: email,
          emailVerified: emailVerified
        });
        updateUser(true);
        //Get the data stored for this user
        Firebase.firestore()
          .collection("Registration")
          .where("email", "==", email)
          .get()
          .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
              Firebase.firestore()
                .collection("Registration")
                .doc(doc.id)
                .update({ docId: doc.id });
            });
            setIsLoading(false);
          })
          .catch(function(error) {
            console.log("Error getting documents: ", error);
          });
      } else {
        // User is signed out.
        updateUser(false);
        setIsLoading(false);
      }
    });
    return () => unsubscribe;
  }, []);

  const toggleDrawer = () => {
    setAppState({ ...appState, isDrawerToggled: !appState.isDrawerToggled });
  };

  function changePage(newPage) {
    setPage(newPage);
  }
  return (
    <React.Fragment>
      <Header
        appState={appState}
        page={page}
        changePage={changePage}
        toggleDrawer={toggleDrawer}
        isSignedIn={isSignedIn}
        values={values}
        handleChange={handleChange}
      />
      <Drawer
        appState={appState}
        page={page}
        changePage={changePage}
        toggleDrawer={toggleDrawer}
      />
      <Router
        appState={appState}
        page={page}
        changePage={changePage}
        userInfo={userInfo}
      />
    </React.Fragment>
  );
}
