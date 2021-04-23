import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
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
  
  
  
  
  export default class porcentaje extends Component {
      render() {
          return (
              <div>
                    <Grid container item xs={12} >
                        <Grid item xs={12}>
                            <Typography>
                                HTLM + css + js
                            </Typography>
                            <LinearProgressWithLabel value={90} />
                            
                        </Grid>
                        <Grid item xs={12}>
                            <Typography>
                                Git
                            </Typography>
                            <LinearProgressWithLabel value={80} />
                            
                        </Grid>                      
                        <Grid item xs={12}>
                        <Card >
                            <Typography>
                                Angular
                            </Typography>
                            <LinearProgressWithLabel value={55} />
                        </Card>
                        </Grid>               
                    </Grid>    
              </div>
          )
      }
  }
  