import {Component} from 'react';
import Button from '@material-ui/core/Button';
import Flexbox from 'flexbox-react';

class ListaFinalDeUsuarios extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <ul>
                { 
                    this.props.ahitevan.map((item) => 
                        <li>{item.Nombre}, {item.Apellido}</li>
                    ) 
                }
                <Flexbox element="div" flexDirection="row" alignContent="space-between">
                    <Button variant="contained" color="primary">
                        Échale agua
                    </Button>
                    <Button variant="contained" color="primary">
                        Pepe
                    </Button>
                    <Button variant="contained" color="primary">
                        Échale agua
                    </Button>
                </Flexbox>
            </ul>
        )
    }
}

export default ListaFinalDeUsuarios;