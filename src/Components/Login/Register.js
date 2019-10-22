import React from "react";
import { TextField, Button } from "@material-ui/core";
import firebase from "../../Assets/Firebase";

export default function Register(props) {
  const { handleChange, values, onClose } = props;

  const handleRegistration = e => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .catch(function(error) {
        // firebase
        //   .auth()
        //   .signInWithEmailAndPassword(values.email, values.password)
        //   .catch(function(error) {
        //     var errorCode = error.code;
        //     let errorMessage = error.message;
        //     alert("Code:" + errorCode + " Message:" +errorMessage);
        //   });
        // Handle Errors here.
        let errorMessage = error.message;
        alert(errorMessage);
      })
      .then(onClose());
  };

  return (
    <React.Fragment>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        type="email"
        id="email"
        label="Email"
        name="email"
        autoComplete="email"
        value={values.email}
        onChange={handleChange("email")}
        autoFocus
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        value={values.password}
        onChange={handleChange("password")}
        autoComplete="current-password"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        onClick={handleRegistration}
      >
        Register
      </Button>
    </React.Fragment>
  );
}
