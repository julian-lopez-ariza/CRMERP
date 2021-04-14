import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(Columna, Nombre, Creacion, Contacto) {
  return { Columna, Nombre, Creacion, Contacto };
}

const rows = [
  createData('google','11/3','super@google.com' ),
  createData('instagram','17/8','super@facebook.com' ),
  createData('facebook','21/7','super@instagram.com' ),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,maxWidth: 700 ,margin: '0px 75px'
  },
});



export default function Clientes() {
  
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.table}>
      <div>
        <Button variant='outlined' color="primary" onClick={handleClickOpen}>
          agregar
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Nuevo cliente</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Nombre"
              type="email"
              fullWidth
            />
            <TextField              
              margin="dense"
              id="name"
              label="Contacto email"
              type="email"
              fullWidth/>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        
        </Dialog>
      </div>
      
      <TableContainer component={Paper} >
        <Table  aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right">Nombre</StyledTableCell>
              <StyledTableCell align="right">Creacion</StyledTableCell>
              <StyledTableCell align="right">Contacto</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.Columna}>
                <StyledTableCell component="th" scope="row">
                  {row.Columna}
                </StyledTableCell>
                <StyledTableCell align="right">{row.Nombre}</StyledTableCell>
                <StyledTableCell align="right">{row.Creacion}</StyledTableCell>
                <StyledTableCell align="right">{row.Contacto}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}