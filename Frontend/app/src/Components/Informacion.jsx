import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Porcentaje from './porcentaje';
import { Divider } from '@material-ui/core';
import Contacto from './contacto';

const useStyles = makeStyles({
  root: {
    display: 'block',
    transform: 'scale(0.8)',
  
  }, 
    
  title: {
    fontSize: 50,
  },
   
 
  
});

export default function Informacion() {
  const classes = useStyles();

  return (
    <Grid container  item xs= {12}>
      <Grid item xs={12}>
        <Card className={classes.root}  variant="outlined" >
          <CardContent>
            <Typography className={classes.title} color="black" gutterBottom >
                hola, soy julian!
            </Typography>
            <Typography variant="h5" component="h2">
              
            
            </Typography>
            <Typography className={classes.pos} color="black">
            <h1>Conocimientos </h1> 
            </Typography>
            <Typography variant="body1" component="p">
              Estudiante de Lic. Sistemas de la UNLP.
              <br/>
              Conocimiento en ReactJS y Angular.
              <br/>
              Firebase y REDUX para reactjs.
              <br/>
              CSS y UX como maquetador de HTML.
              <br/>
              Git como versionado de código, sea en GitHub o TFS.
              <br/>
              Scrum o Kanban como metodología de trabajo.	          
              <br/>
              <br/>
              <br/>  
                            
              Frontend Web Development ReactJS 
              <br/>
              •	Re-factorizar componentes para reutilizarlos en otras partes de la aplicación.
              <br/>
              •	Solucionar bugs/inconsistencias de usabilidad en la aplicación.
              <br/>
              •	Implementar nuevas funcionalidades del lado de UI en la aplicación.
              <br/>
              •	Solucionar bugs en la aplicación.
              <br/>
              •	Implementar nuevos componentes de UI en la aplicación.
              <br/>
              •	Incorporar material-ui dentro de la aplicación.
              <br/>
              •	Utilizamos Scrum como metodología de trabajo con daily, planning y demo.    
            </ Typography>
            <br/>
            <br/>
            <br/>
            <br/>
            <Divider />
            <Contacto />
            <Divider />
            <br/>
            <br/>
            
            <Porcentaje />
      
          </CardContent>
          
        </Card>
      </Grid>  
    </Grid>

  );
}