import React from 'react'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme, Container } from '@material-ui/core';
import StateStore from './StateStore';

const theme = createMuiTheme({
    palette: {
        primary: {main: "#DF3E40" },
        secondary: {main: "#283895"}
    }
  });
//   const dinahTheme = createMuiTheme({
//       palette: {
//         DF3E40 
//         A93F55
//         19323C
//         F3F7F0
//         283895
//       }
//   })

//   const forrestTheme = createMuiTheme({
//     palette: {
//       DF3E40 
//       26547C
//       FFD166
//       06D6A0
//       283895
//     }
// })

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            
            <StateStore/>
           
        </ThemeProvider>
    )
}
