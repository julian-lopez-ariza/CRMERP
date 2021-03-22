import {Component} from 'react';

class ListaFinalDeUsuarios extends Component {
    render(){
        return (
            <ul>
                { 
                    this.props.ahitevan.map((item) => 
                        <li key={item._id}>{item.Nombre}, {item.Apellido}</li>
                    ) 
                }
            </ul>
        )
    }
}

export default ListaFinalDeUsuarios;