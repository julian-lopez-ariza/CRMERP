import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
        
    title: {
      margin:'55px 0px 0px 40px ',
      
    },
     
     
  });


function CircularProgressWithLabel(props) {
return (
    <Box position="relative" display="inline-flex">
    <CircularProgress variant="determinate" {...props} />
    <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="inline-flex"
        alignItems="center"
        justifyContent="center"
    >
        <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(
        props.value, 
        )}%`} </Typography>
    </Box>
    </Box>
);
}

CircularProgressWithLabel.propTypes = {
/**
 * The value of the progress indicator for the determinate variant.
 * Value between 0 and 100.
 */
value: PropTypes.number.isRequired,

};




function porcentaje () {
    const classes = useStyles();
   
        
    return (
        <div>
            <Grid container item xs={12} className={classes.title}>
                
                <Grid item xs={4}>
                    <CircularProgressWithLabel value={90}  />
                    <Typography>
                        material-ui
                    </Typography>
                </Grid>                      
                <Grid item xs={4}>
                    <CircularProgressWithLabel value={55} />
                    <Typography>
                        ingles
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <CircularProgressWithLabel value={85}   />
                    <Typography>
                        reactjs
                    </Typography>

                </Grid>                                            
            </Grid>    
        </div>
    )
}
export default porcentaje ;

