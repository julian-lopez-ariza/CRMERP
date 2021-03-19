import {Component} from 'react'

class Usuarios extends Component{

    constructor (props) {
        super(props);
        this.state = { arreglo: [], boca: [], river: [], EquipoSeleccionado: '' };
        this.selectBoca = this.selectBoca.bind(this);
        this.selectRiver = this.selectRiver.bind(this);
    }

    componentDidMount(){
        fetch("http://localhost:8080/usuarios")
            .then((res) => res.json())
            .then(
                (res) =>{ 
                    this.setState({ 
                        arreglo : res, 
                        boca : res.filter((item) => { return item.Equipo == 'Boca'}),
                        river : res.filter((item) => { return item.Equipo == 'River'})
                    });
                },
                (err) => {
                    console.error("EROR:", err);
                }
            );
    }

    selectBoca(){
        this.setState({EquipoSeleccionado : 'Boca'})
    }

    selectRiver(){
        this.setState({EquipoSeleccionado : 'River'})
    }

    render() {
        let lista;
        if (this.state.EquipoSeleccionado == 'Boca')
        {
            lista = this.state.boca.map((item) => 
                        <li>{item.Nombre}, {item.Apellido}</li>
                    )
        }
        else if( this.state.EquipoSeleccionado == 'River')
        {
            lista = this.state.river.map((item) => 
                        <li>{item.Nombre}, {item.Apellido}</li>
                    )
        }
        else {
            lista = this.state.arreglo.map((item) => 
                        <li>{item.Nombre}, {item.Apellido}</li>
                    )
        }

        return (
            <div>
                <div>
                    <input type="button" value="Boca" onClick={this.selectBoca}/>
                    <input type="button" value="River" onClick={this.selectRiver}/>
                </div>
                <ul>
                    { lista }
                </ul>
            </div>
        )
    };
}

export default Usuarios;