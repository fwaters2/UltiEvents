import React from "react";
import {
  Grid,
  Typography,
  Hidden,
  Container,
  Card,
  CardContent,
  makeStyles,
  AppBar,
  Toolbar
} from "@material-ui/core";
import "./Fall19Schedule.json";
import "./vs.svg";
import "./Teams.json";
import SchedulePic from "../../Assets/Images/Schedule Firsthalf.PNG";


const useStyles = makeStyles(theme=>({
  dateText: {
textAlign:'center'

  },
  time: {
    marginTop:"10px",
    borderRadius:"30px 30px 0 0",
    textAlign:'center',
    fontSize: 40,
    color:'white',
    backgroundColor:"rgba(0,0,0,0.8)"
  },
  field: {
    textAlign: 'center'
  },
  teamName: {
    fontWeight:'bold',
    padding: "10px 20px",
    margin: '5px',
    fontSize: 22,
    borderRadius:"10px"
  },
  record:{
    
  }
}));
const teamColors = require("./Teams.json");
const exampleSched = require("./Fall19Schedule.json");
// const distinct = (value, index, self) => {
//   return self.indexOf(value) === index
// }
const timesWeek1 = ["12:30", "1:20", "2:10", "3:00", "3:50", "4:40"];

export default function ScheduleView() {
  //const { setPage, handleGameChoice } = props;
  const classes= useStyles()
  //const [times, setTimes] = React.useState([]);
  //const dateToFilter = "3/16/2019";
  const exampleWeek1Sched = exampleSched;

  // React.useEffect(()=>{
  //   const unsubscribe =
  //     setTimes(exampleWeek1Sched.filter(distinct))

  //   return unsubscribe
  // }, []

  // )
  //   const handleClick = game => () => {
  //     handleGameChoice(game.HomeTeam, game.AwayTeam);
  //     setPage("Game");
  //   };
  return (
    <div>
      <Hidden smDown>
        <Container maxWidth="md">
          <img src={SchedulePic} alt="Schedule" width="100%" />
        </Container>
      </Hidden>
      <Hidden mdUp>
       
        <AppBar position="static" color="inherit" >
          <Toolbar>
          <Typography className="dateText" variant='h5' >Schedule 10/19</Typography>
          </Toolbar>
        </AppBar>
        <Grid className="schedule-container" container>
          {timesWeek1.map((time,index) => (
            <React.Fragment key={index}>
              <Grid className="time-container" item container xs={12} justify="center">
                <Grid item xs={12}>
                 
                <Typography className={classes.time}>{time}</Typography>
                </Grid>
                {exampleWeek1Sched
                  .filter(game => game.Time === time)
                  .map((game,index) => (
                    <Grid item xs={12} sm={6} key={index}>
                      <Card>
                        <CardContent>
                        <Typography className={classes.field}>Field {game.Field}</Typography>
                        <Typography
                          className={classes.teamName}
                          style={{
                            background: teamColors.find(
                              team => team.team === game.HomeTeam
                            ).bkgdColor
                          }}
                        >
                          {game.HomeTeam}
                        </Typography>
                        <Typography
                        className={classes.teamName}
                          style={{
                            background: teamColors.find(
                              team => team.team === game.AwayTeam
                            ).bkgdColor
                          }}
                        >
                          {game.AwayTeam}
                        </Typography>
                        </CardContent>
                      </Card>
                      
                    </Grid>
                  ))}
                 
              </Grid>
             
            </React.Fragment>
          ))}
        </Grid>
        {/* <Grid container>
          <Grid item xs={6}>
            Field 1
            <List dense>
              {exampleWeek1Sched
                .filter(game => game.Field === 1)
                .map(game => (
                  <Paper>
                    <ListItem>
                      <Grid container>
                        <Grid item xs={10}>
                          <List dense>
                            <ListItem
                              style={{
                                background: teamColors.find(
                                  team => team.team === game.HomeTeam
                                ).bkgdColor
                              }}
                            >
                              <Typography variant="body2">
                                {game.HomeTeam}
                              </Typography>
                            </ListItem>
                            <ListItem
                              style={{
                                background: teamColors.find(
                                  team => team.team === game.AwayTeam
                                ).bkgdColor
                              }}
                            >
                              <Typography variant="body2">
                                {game.AwayTeam}
                              </Typography>
                            </ListItem>
                          </List>
                        </Grid>
                        <Grid
                          item
                          container
                          xs={2}
                          alignContent="center"
                          justifyContent="center"
                        >
                          <img src={vsLogo} height="30px" />
                        </Grid>
                      </Grid>
                    </ListItem>
                  </Paper>
                ))}
            </List>
          </Grid>
          <Grid item xs={6}>
            Field 2
            <List>
              {exampleWeek1Sched
                .filter(game => game.Field === 2)
                .map(game => (
                  <ListItem
                    button
                    //onClick={handleClick(game)}
                  >
                    <ListItemText
                      primary={game.HomeTeam + " vs " + game.AwayTeam}
                    />
                  </ListItem>
                ))}
            </List>
          </Grid>
          <Grid container xs={6}>
            {exampleWeek1Sched
              .filter(game => game.Field === 1)
              .map(game => (
                <Grid item xs={12}>
                  <Button
                    fullWidth
                    //onClick={handleClick(game)}
                  >
                    {game.HomeTeam} vs {game.AwayTeam}
                  </Button>
                </Grid>
              ))}
          </Grid>
          <Grid container xs={6}>
            {exampleWeek1Sched
              .filter(game => game.Field === 2)
              .map(game => (
                <Grid item xs={12}>
                  <Button
                    fullWidth
                    //onClick={handleClick(game)}
                  >
                    {game.HomeTeam} vs {game.AwayTeam}
                  </Button>
                </Grid>
              ))}
          </Grid>
        </Grid> */}
      </Hidden>
    </div>
  );
}
