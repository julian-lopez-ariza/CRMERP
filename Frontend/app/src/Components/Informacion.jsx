import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 18,
    margin:'0px 0px 0px 250px'
  },
  pos: {
    marginBottom: 12,
  },
  margen:{
    margin: '0px 0px 0px 300px',
  }
});

export default function Informacion() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined" className ={classes.margen}>
      <CardContent>
        <Typography className={classes.title} color="secondary" gutterBottom>
            <h1>hola, soy julian</h1>
        </Typography>
        <Typography variant="h5" component="h2">
          
         
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          
        </Typography>
        <Typography variant="body2" component="p">
        <h1>EXPERIENCIA </h1> 
          Frontend Web Development ReactJS (Jr.)
          <br/>
          6 meses por contrato. Sancor Seguros Gr.
          <br/>
          Fecha de inicio (junio/julio del 2020)
          <br/>
          Fecha de finalizacion (diciembre 2020)
          <br/>
          Re-factorizar componentes para reutilizarlos en otras partes de la aplicación.
          <br/>
          Solucionar bugs/inconsistencias de usabilidad en la aplicación.
          <br/>
          Implementar nuevas funcionalidades del lado de UI en la aplicación.
          <br/>
          Solucionar. 

          <br/>
          <br/>

          Frontend Web Development ReactJS (Jr.)
          <br/>
          12 meses por contrato Cervecería y maltería Andes/Patagonia
          <br/>
          Fecha de inicio (abril del 2019)
          <br/>
          Fecha de finalizacion (abril 2020)
          <br/>
          Solucionar bugs en la aplicación.
          <br/>
          Implementar nuevos componentes de UI en la aplicación.
          <br/>
          Incorporar material-ui dentro de la aplicación.
          <br/>
          Utilizamos Scrum como metodología de trabajo con daily, planning y demo.
          <br/>

          Actualmente en estado desempleado al dia de la fecha .


                  
        </Typography>
      </CardContent>
      
    </Card>
  );
}