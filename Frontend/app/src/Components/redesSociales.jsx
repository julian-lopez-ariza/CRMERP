import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {Icon} from '@material-ui/core';




export default function redesSociales () {

  
    return (
        <div>
            <Grid container  item xs= {12}>
                <Grid item xs= {6}>
                    <Button variant="outlined" >
                        <Icon>
                            facebook
                        </Icon>
                    </Button>
                    
                </Grid>
                <Grid item xs= {6}>
                    <Button variant="outlined" >
                        <Icon>
                            instagram
                        </Icon>
                    </Button>
                    
                </Grid>
            </Grid>
            <Grid container  item xs= {12}>       
                <Grid item xs= {6}>
                    <Button variant="outlined" >
                        <Icon>
                            linkedin
                        </Icon>
                    </Button>
                    
                </Grid>
                <Grid item xs= {6}>
                    <Button variant="outlined" >
                        <Icon>
                            youtube
                        </Icon>
                        youtube
                    </Button>
                    
                </Grid>
            </Grid>
        </div>
    );
}