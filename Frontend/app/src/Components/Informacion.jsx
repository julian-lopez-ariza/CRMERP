import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Porcentaje from './porcentaje';
import { Divider } from '@material-ui/core';
import Contacto from './contacto';

const useStyles = makeStyles({
  title: {
    fontSize: 50,
    margin:'0px 0px 0px 250px ',
  },  
  margen:{
    paddingBlock: 2,
    margin:'50px 0px 50px 0px ',
  },
});

export default function Informacion() {
  const classes = useStyles();
  return (
    <Grid container item xs={12}>
      <Grid item xs={12}>
        <Card   variant="outlined" >
          <CardContent>
            <h1 className={classes.title} color="black"  >
                Curriculum vitae
            </h1>          
            <h3 color="black">
              hola, soy julian!
            </h3>             
            <h1 className={classes.pos} color="black">
              Conocimientos 
            </h1>                   
            <li>
              Estudiante de Lic. Sistemas de la UNLP.
            </li>  
            <li>
              Conocimiento en ReactJS y Angular.                
            </li>
            <li>
              Firebase y REDUX para reactjs.
            </li>
            <li>
              CSS y UX como maquetador de HTML.               
            </li>
            <li>
              Git como versionado de código, sea en GitHub o TFS.               
            </li>           
            <li>
              Scrum o Kanban como metodología de trabajo.
            </li>
            <li>
              Frontend Web Development ReactJS
            </li>             
            <li>
              Re-factorizar componentes para reutilizarlos en otras partes de la aplicación.
            </li>              
            <li>
              Solucionar bugs/inconsistencias de usabilidad en la aplicación.
            </li>             
            <li>
              Implementar nuevas funcionalidades del lado de UI en la aplicación.
            </li>
            <li>
              Solucionar bugs en la aplicación.
            </li>             
            <li>
              Implementar nuevos componentes de UI en la aplicación.
            </li>          
            <li>
              Incorporar material-ui dentro de la aplicación.
            </li>              
            <li>
              Utilizamos Scrum como metodología de trabajo con daily, planning y demo.   
            </li>
            <Divider className={classes.margen}/>
            <Contacto />
            <Divider className={classes.margen} />                      
            <Porcentaje />      
          </CardContent>          
        </Card>
      </Grid>  
    </Grid>
  );
}