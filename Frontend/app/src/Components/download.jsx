import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import {Icon} from '@material-ui/core';
import RedesSociales from './redesSociales';



const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 350,
    backgroundColor: 'brown',

  },
  media: {
    
    minWidth: 350,

    display:'fullwidth',
    
    height: 500,
  },
  por:{
    margin:'0px 0px 0px 130px',
  },
  margen:{
    margin:'0px 10px 0px 10px',
  }

}));

export default function download () {
  const classes = useStyles();
  
  

  return (
    <div>
      <Grid container  item xs= {12}>
        <Card className={classes.root} >
          <Grid  item xs= {12}>
            <Avatar alt="julian" src="./assets/julian.jpg" className={classes.media} />
          </Grid> 
          <Grid  item xs= {12}>
            <Typography variant="body1" color="primary" component="p" className={classes.por}>
                <h3>Julian Lopez </h3>
            </Typography>
          </Grid> 
          <Grid  item xs= {12}>
            <RedesSociales /> 
          </Grid>  
          <Grid  item xs= {12}>
            <Button variant="contained" color="primary" fullWidth  >
                <Icon className={classes.margen} >
                  download
                </Icon>
                Download
            </Button>
          </Grid>  
        </Card>
      </Grid>
    </div>
  );
}