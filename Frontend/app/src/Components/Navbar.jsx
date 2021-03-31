import React from 'react';
import {AppBar,Toolbar,Typography } from '@material-ui/core';
import {Icon} from '@material-ui/core';


const Navbar = () => {
    
    return(
        <div>
            <AppBar position="fixed" color="secondary">
                <Toolbar>
                    <Icon>
                          menuicon
                      </Icon>
                    <Typography variant="h6">
                        bienvenido
                    </Typography>
                </Toolbar>
            </AppBar>
            
        </div>
        

    )

}

export default Navbar;