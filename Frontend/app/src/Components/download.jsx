import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Informacion from './Informacion';







const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 290,
  },
  media: {
    height: 0,
    paddingTop: '50.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },

  margen:{
      margin:'0px 800px 0px 0px'
  }
  
}));

export default function download () {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
        <div>
            <Card className={classes.root} >
                <Typography variant="body1" color="primary" component="p">
                    <h3>Julian Ezequiel Lopez Ariza</h3>
                </Typography>
                <CardActions disableSpacing>
                </CardActions>
                <Button variant="outlined" color="primary" fullWidth>
                    Download
                </Button>
            </Card>
            
            <Informacion />
        </div>
    );
}