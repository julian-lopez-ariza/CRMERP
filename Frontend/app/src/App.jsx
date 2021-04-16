import React from 'react';
import Download from './components/download';
import Informacion from './components/Informacion';
import Box from '@material-ui/core/Box';
import Barra from './components/barra'
import {BrowserRouter as Router} from "react-router-dom";


export default function App () {
  return (
    <div>
       <Router>
        <Barra />
        <Box display="flex" flexDirection="row" p={1} m={1} bgcolor="background.paper" justifyContent="center" >
          
          <Box p={1} bgcolor="lightblue">
            <Download />
          </Box>
          <Box p={1} bgcolor="lightblue">
            <Informacion />
          </Box>
        </Box>
      </Router>
    </div>
  );
}