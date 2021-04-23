import React from 'react';
import Grid from '@material-ui/core/Grid';
import Porcentaje1 from './porcentaje1';
import Porcentaje2 from './porcentaje2';

export default function porcentaje () {
      
    return (
        <div>             
            <Grid container item xs={12} >
                <Grid item xs={6}>
                    <Porcentaje1 />
                </Grid>
                <Grid item xs={6} >
                    <Porcentaje2 />
                </Grid>                                      
            </Grid>    
        </div>
    );  
}
  