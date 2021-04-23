import React from 'react';
import Grid from '@material-ui/core/Grid'
import Principal from './components/principal';

export default function App () {
  return (
      <Grid container item xs={12}>
        <Principal />
      </Grid>
  );
}