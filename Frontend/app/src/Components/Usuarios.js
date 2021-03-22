import {Component} from 'react';
import './ListaFinalDeusuarios';
import ListaFinalDeUsuarios from './ListaFinalDeusuarios';
import { Button } from "@material-ui/core";

class Usuarios extends Component{

    constructor (props) {
        super(props);
        this.state = { arreglo: [] };
        this.selectBoca = this.selectBoca.bind(this);
        this.selectRiver = this.selectRiver.bind(this);
        this.selectTodos = this.selectTodos.bind(this);
    }

    componentDidMount(){
        fetch("http://localhost:8080/usuarios")
            .then((res) => res.json())
            .then(
                (res) =>{ 
                    this.setState({ arreglo : res });
                },
                (err) => {
                    console.error("EROR:", err);
                }
            );
    }

    selectBoca(){
        fetch("http://localhost:8080/usuarios-boca")
            .then((res) => res.json())
            .then(
                (res) =>{ 
                    this.setState({ arreglo : res });
                },
                (err) => {
                    console.error("EROR:", err);
                }
            );
    }

    selectRiver(){
        fetch("http://localhost:8080/usuarios-river")
            .then((res) => res.json())
            .then(
                (res) =>{ 
                    this.setState({ arreglo : res });
                },
                (err) => {
                    console.error("EROR:", err);
                }
            );
    }

    selectTodos(){
        fetch("http://localhost:8080/usuarios")
            .then((res) => res.json())
            .then(
                (res) =>{ 
                    this.setState({ arreglo : res });
                },
                (err) => {
                    console.error("EROR:", err);
                }
            );
    }

    render() {

        return (
            <div style={{ width: '100%' }}>
                <div>
                    <input type="button" value="Boca" onClick={this.selectBoca}/>
                    <input type="button" value="River" onClick={this.selectRiver}/>
                    <input type="button" value="Todos" onClick={this.selectTodos} />
                </div>
                <ListaFinalDeUsuarios ahitevan={this.state.arreglo} />
                <Button variant="contained" color="primary">Button</Button>
            </div>
        )
    };
}

export default Usuarios;