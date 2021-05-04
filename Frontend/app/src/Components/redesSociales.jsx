import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {Icon} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
 
    por:{
      margin:'0px 0px 20px 0px',
    },
}));

export default function redesSociales () {  
    const classes = useStyles();
    return (
        <div>
            <Grid container  item xs= {12} className={classes.por}>
                <Grid item xs= {3}>
                    <Button variant="outlined" >
                        <Icon>
                            facebook
                        </Icon>
                    </Button>
                </Grid>
                <Grid item xs= {3}>
                    <Button variant="outlined" >
                        <Icon>
                            bluetooth
                        </Icon>
                    </Button>     
                </Grid>     
                <Grid item xs= {3}>
                    <Button variant="outlined" >
                        <Icon>
                            create
                        </Icon>
                    </Button>    
                </Grid>
                <Grid item xs= {3}>
                    <Button variant="outlined" >
                        <Icon>
                            accessibility
                        </Icon>  
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}