import React from 'react';
import { Grid, Typography,Card} from '@material-ui/core';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';

function LinearProgressWithLabel(props) {
    return (
      <Card display="flex" alignItems="center">
        <Card width="100%" mr={1}>
          <LinearProgress variant="determinate" {...props} />
        </Card>
        <Card minWidth={35}>
          <Typography variant="body2" color="textSecondary">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Card>
      </Card>
    );
  }
  
  LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
  };

export default function contacto () {
return (
    
  <Grid container item xs ={12}>
      <Grid item xs={6}>
        <li>Nombre completo: Julian Ezequiel Lopez Ariza .</li>          
        <li> fecha de nacimiento: 30/07/1994.</li>         
        <li>email: julilopezariza@gmail.com.</li>          
        <li>celular: 0221-5546689.</li>          
        <li>freelance: disponible.</li>         
        <li>relacion de dependencia: disponible.</li>
        <li>fulltime: disponible.</li>
      </Grid>            
      <Grid item xs={6}>
          <Grid item xs={12}>
              <Typography>
                  Github
              </Typography>
              <LinearProgressWithLabel value={90} />              
          </Grid>
          <Grid item xs={12}>
            <Typography>
                TFS
            </Typography>
            <LinearProgressWithLabel value={80} />
          </Grid>                      
          <Grid item xs={12}>
          <Card width="100%" mr={3}>
              <Typography>
                  NodeJS
              </Typography>
              <LinearProgressWithLabel value={55} />
          </Card>
          </Grid>               
      </Grid>
  </Grid>         
  )    
}
