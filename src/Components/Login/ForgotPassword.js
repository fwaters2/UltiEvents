import React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  DialogTitle,
  DialogActions,
  DialogContent
} from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import Firebase from "../../Assets/Firebase";

export default function ForgotPassword(props) {
  const { toggleForgotEmail, onClose } = props;
  const [email, setEmail] = React.useState("");

  const handleChange = e => {
    setEmail(e.target.value);
  };
  const handleSubmit = () => {

    Firebase.auth()
      .sendPasswordResetEmail(email)
      .then(function() {
        // Email sent.
        alert("email sent");
        onClose()
      })
      .catch(function(error) {
        alert(error);
      });
  };

  return (
    <React.Fragment>
      <DialogTitle variant="h4" align="center">
        Password Reset
      </DialogTitle>
      <DialogContent>
        <TextField
          required
          autoFocus
          variant="outlined"
          type="email"
          value={email}
          onChange={handleChange}
          fullWidth
          label="Email"
          autoComplete="email"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => toggleForgotEmail(false)}>Back</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </DialogActions>
    </React.Fragment>
  );
}
