import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 50,
    margin:'0px 140px 0px 140px'
  },
  pos: {
    marginBottom: 12,
  },
  margen:{
    margin: '0px 30px 30px 30px',
  },
  marg:{
    
  }
});

export default function Informacion() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined" className ={classes.margen}>
      <CardContent>
        <Typography className={classes.title} color="black" gutterBottom >
            hola, soy julian!
        </Typography>
        <Typography variant="h5" component="h2">
          
         
        </Typography>
        <Typography className={classes.pos} color="black">
        <h1>Conocimientos </h1> 
        </Typography>
        <Typography variant="body2" component="p">
        
         

                  
        </Typography>
      </CardContent>
      
    </Card>
  );
}