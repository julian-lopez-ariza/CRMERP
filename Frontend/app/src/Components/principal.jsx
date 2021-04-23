import React from 'react'
import Download from './download';
import Informacion from './Informacion';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 350,
  
    },
    cardInfo: {
        maxWidth: 1350,
        margin:'0px 0px 0px 0px',
      },
      
}));

export default function  principal () {
    const classes = useStyles();
    return (       
        <Grid container item xs= {12}>
            
            <Grid item xs= {4}> 
                <Card className={classes.root}>
                    <Download />
                </Card>
            </Grid>            
            
            <Grid item xs= {8}> 
                <Card className={classes.cardInfo}>
                    <Informacion />
                </Card>                   
            </Grid>  
        </Grid>    
    )   
}