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
        title:"",
        date:"",
        location:"",
        description:""
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
        <DialogContentText>Add an event to {region}:</DialogContentText>
        <TextField
          autofocus
          margin="dense"
          id="title"
          label="Name"
          type="text"
          fullWidth
          onChange={handleChange("title")}
        />
        <TextField margin="dense" id="date" type="date" fullWidth onChange={handleChange("date")}/>
        <TextField
          margin="dense"
          id="location"
          label="Location"
          type="text"
          fullWidth
          onChange={handleChange("location")}
        />
        <TextField
          margin="dense"
          id="description"
          label="Description (optional)"
          type="text"
          fullWidth
          onChange={handleChange("description")}
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
