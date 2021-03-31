import React from 'react';

import{
    makeStyles, Drawer, Divider,IconButton,CssBaseline,Icon
} from '@material-ui/core';
import Listas from './Listas';
import clsx from 'clsx';





const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
   menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      
      ...theme.mixins.toolbar,
    },
  },
  
}));

const Menu = () => {

    const classes = useStyles();
    const handleToogleDrawer= () => {
            setOpen(!open);
    }
       
    const [open, setOpen] = React.useState(false);


    return(
        <div className={classes.root}>
            <CssBaseline />
            <Drawer
                variant= "permanent"
                anchor= "left"
                open={open}
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            
            >               
               <div className={classes.toolbar}>
                  <IconButton onClick={handleToogleDrawer}>
                    <Icon>
                        menuicon
                    </Icon>
                  </IconButton>
                </div>
                
                <Divider />

                <Listas/>
                
            </Drawer>
        </div>

    )

}

export default Menu;