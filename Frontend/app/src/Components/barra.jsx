import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Rutas from './Rutas';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 2,
    },
    margen: {
        margin: '0px 50px 0px 50px',

    },
}));

export default function barra() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            Curriculum vitae
          </Typography>
          <Button variant="contained" color="secondary" className={classes.margen}>
            experiencia
          </Button>
          <Button variant="contained" color="secondary" className={classes.margen}>
            contacto
          </Button>
          <Button variant="contained" color="secondary" className={classes.margen}>
            github
          </Button>
          <Rutas/>
        </Toolbar>
      </AppBar>
    </div>
  );
}