import React, { Component } from 'react'
import Download from './download';
import Informacion from './Informacion';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

export default class principal extends Component {
    render() {
        return (
        
            <Grid container item xs= {12}>
                <Grid item xs= {4}> 
                    <Box p={1}  >
                    <Download />
                    </Box> 
                </Grid>            
                <Grid item xs= {8}> 
                    <Box p={1}  >
                    <Informacion />
                    </Box> 
                </Grid>  
            </Grid>
        
        )
    }
}
