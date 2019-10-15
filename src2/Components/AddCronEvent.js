import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import firebase from "../Utils/Firebase";
var CronJob = require("cron").CronJob;
var count=0
new CronJob(
    "*/10 * * * * *",
    ()=>{
        console.log("Added an event")
        let currentDate = new Date()
        let milliSeconds = currentDate.getTime()
        let seconds = milliSeconds/1000
            let deathDate=seconds+60
        // firebase.firestore().collection("dummyEvents").add({
        //     "event":"event "+count,
        //     "email":"forrestwaters@gmail.com",
        //     "expired":false,
        //        "deathDate": deathDate 
        

        // }
            
        // )
        
      count += 1
      console.log(count)
    },
    null,
    
    true,
    "America/Los_Angeles"
  )
export default function AddCronEvent(props) {
  const [cronCount, changeCronCount] = React.useState(0);
  const { openCron, setOpenCron, handleCronOpen, handleCronClose } = props;
  const [startCron, changeStatus] = React.useState(false);
  
    

  const toggleCron = () => {
    changeStatus(!startCron);
  };
  return (
    <Dialog
      open={openCron}
      onClose={handleCronClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Add Event!</DialogTitle>
      <DialogContent>

        {cronCount}
        <button onClick={toggleCron}>Toggle Cron</button>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCronClose} color="primary">
          Cancel
        </Button>
        <Button color="primary">Close</Button>
      </DialogActions>
    </Dialog>
  );
}
