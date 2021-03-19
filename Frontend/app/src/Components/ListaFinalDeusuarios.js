import {Component} from 'react';

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
            </ul>
        )
    }
}

export default ListaFinalDeUsuarios;