import React from "react";
import { Container, Typography, Paper, Button } from "@material-ui/core";
import firebase from "../../Assets/Firebase";

export default function ProfileView(props) {
  const { userInfo } = props;

  const handleSendVerificationEmail = () => {
    firebase
      .auth()
      .currentUser.sendEmailVerification()
      .then(function() {
        alert("Please check your email to verify your account!");
      })
      .catch(function(error) {
        alert(error);
      });
  };
  return (
    <Container>
      {console.log(userInfo)}
      <Paper>
        <Typography variant="h4" align="center">
          Welcome!
        </Typography>
        <Typography variant="body1" align="center">
          {userInfo.email}
        </Typography>
        {userInfo.emailVerified ? 
        <Typography align='center'>You are verified!</Typography>
        : (

          <Button onClick={handleSendVerificationEmail} fullWidth>
            Resend Verification Email
          </Button>
        )}
      </Paper>
    </Container>
  );
}
