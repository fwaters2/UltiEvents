import React from "react";
import { Container, Paper, Typography, Button, Box } from "@material-ui/core";
import Router from './Router'

export default function StatsView(props) {
    const {changePage} = props
    const [statPage, setStatPage] = React.useState("Choices");
  return (
    <Container>
      <div style={{ height: "50px" }} />
      <Paper style={{ padding: "15px" }}>
          <Box component='span'>

        <Typography align="center" variant="h4" gutterBottom>
          KUL Statistics
        </Typography>
        {statPage==="Choices"?
        <Button color='secondary' onClick={()=>changePage("Home")}>Back</Button>
    :
    
        <Button color='secondary' onClick={()=>setStatPage("Choices")}>Back</Button>
  }
          </Box>
        <Router statPage={statPage} setStatPage={setStatPage}/>
      </Paper>
    </Container>
  );
}
