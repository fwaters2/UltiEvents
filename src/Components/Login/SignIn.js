import React from "react";
import {
  TextField,
  Button,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";
import firebase from "../../Assets/Firebase";

export default function SignIn(props) {
  const { handleChange, values, onClose } = props;

  const handleRegistration = e => {
    e.preventDefault();
    firebase
      .auth()
      //.createUserWithEmailAndPassword(values.email, values.password)
     // .catch(function(error) {
 
           .signInWithEmailAndPassword(values.email, values.password)
           .catch(function(error) {
        //     var errorCode = error.code;
        //     let errorMessage = error.message;
        //     alert("Code:" + errorCode + " Message:" +errorMessage);
        //   });
        // Handle Errors here.
        let errorMessage = error.message;
        alert(errorMessage);
      }).then(
        onClose()
      );
  };

  return (
    <React.Fragment>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email"
        name="email"
        type='email'
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
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember Me"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        onClick={handleRegistration}
      >
        Sign In
      </Button>
    </React.Fragment>
  );
}
