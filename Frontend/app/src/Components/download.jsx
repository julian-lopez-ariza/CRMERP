import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 290,
  },
  media: {
    
    minWidth: 280,

    display:'fullwidth',
    
    height: 170,

    paddingTop: '50.25%', // 16:9
  },

}));

export default function download () {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  
  
  

  return (
    <div>
      <Card className={classes.root} >
          <Avatar alt="julian" src="./imagenes/julian.jpg" className={classes.media} />
        
          <Typography variant="body1" color="primary" component="p">
              <h3>Julian Ezequiel Lopez Ariza</h3>
          </Typography>
          <CardActions disableSpacing>
          </CardActions>
          <Button variant="outlined" color="primary" fullWidth>
              Download
          </Button>
          
      </Card>
    </div>
  );
}