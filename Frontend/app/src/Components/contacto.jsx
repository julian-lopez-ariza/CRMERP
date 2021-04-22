import React, { Component } from 'react';
import { Grid, Typography,Box} from '@material-ui/core';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';

function LinearProgressWithLabel(props) {
    return (
      <Box display="flex" alignItems="center">
        <Box width="100%" mr={1}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box minWidth={35}>
          <Typography variant="body2" color="textSecondary">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }
  
  LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
  };

export default class contacto extends Component {
    render() {
        return (
           
            <Grid container item xs ={12}>
                <Grid item xs={6}>
                   <Typography>
                        Nombre completo: Julian Ezequiel Lopez Ariza .
                        <br/>
                        fecha de nacimiento: 30/07/1994   .
                        <br/>
                        email: julilopezariza@gmail.com   .
                        <br/>
                        celular: 0221-5546689      .
                        <br/> 
                        freelance: disponible.
                        <br/>
                        relacion de dependencia: disponible.
                        <br/>
                        fulltime: disponible.

                    </Typography>  
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
                    <Box width="100%" mr={3}>
                        <Typography>
                            NodeJS
                        </Typography>
                        <LinearProgressWithLabel value={55} />
                    </Box>
                    </Grid>               
                </Grid>
            </Grid>
            
        )
    }
}
