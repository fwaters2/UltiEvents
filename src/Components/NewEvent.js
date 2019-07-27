import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import firebase from '../Utils/Firebase'

export default function FormDialog(props) {
  const { open, setOpen, handleClickOpen, handleClose, region } = props;
    const [values, setValues] = React.useState({
        Name:"",
        Country:"",
        date:"",
        Link:"",
        City:""
    })
    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
      };
    const handleSubmit=()=>{
        firebase.firestore().collection(region).add(values)
     handleClose()
 }
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Add Event!</DialogTitle>
      <DialogContent>
      <TextField
          autoFocus
          margin="dense"
          id="link"
          label="Event Link"
          type="text"
          fullWidth
          onChange={handleChange("Link")}
        />
        <TextField
          margin="dense"
          id="name"
          label="Name"
          type="text"
          fullWidth
          onChange={handleChange("Name")}
        />
        <TextField margin="dense" id="date" type="date" fullWidth onChange={handleChange("date")}/>
        <TextField
          margin="dense"
          id="country"
          label="Country"
          type="text"
          fullWidth
          onChange={handleChange("Country")}
        />
        <TextField
          margin="dense"
          id="city"
          label="City"
          type="text"
          fullWidth
          onChange={handleChange("City")}
        />
        
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
