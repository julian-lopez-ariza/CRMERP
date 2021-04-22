import React from 'react';
import Grid from '@material-ui/core/Grid'
import {BrowserRouter as Router, Switch,Route, Redirect,} from "react-router-dom";
import Principal from './components/principal';



export default function App () {
  return (
    <Router>
      <div>
        <Grid container item xs= {12} >
          <Principal />
            
        </Grid>
      </div>  
    </Router>
  );
}