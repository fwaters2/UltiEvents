import React from "react";
import { Dialog, Hidden } from "@material-ui/core";
import LoginContainer from "./LoginContainer";
export default function LoginDialog(props) {
  const { open, onClose, values, handleChange } = props;
  return (
    <React.Fragment>
      <Hidden smUp>
        <Dialog
          fullScreen
          onClose={onClose}
          aria-labelledby="login-dialog-title"
          open={open}
        >
          <LoginContainer values={values} handleChange={handleChange} onClose={onClose}/>
        </Dialog>
      </Hidden>
      <Hidden xsDown>
        <Dialog
          onClose={onClose}
          aria-labelledby="login-dialog-title"
          open={open}
        >
          <LoginContainer values={values} handleChange={handleChange} onClose={onClose}/>
        </Dialog>
      </Hidden>
    </React.Fragment>
  );
}
