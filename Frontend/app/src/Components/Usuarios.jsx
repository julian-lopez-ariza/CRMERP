import { useState, useEffect } from 'react';
import { Button } from "@material-ui/core";
import { Link } from 'react-router-dom';

function Usuarios() 
{
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() =>{
        todos();
    },
    []);

    function ReusarSelect(filtro){
        fetch("http://localhost:8080/"+filtro)
            .then((res) => res.json())
            .then(
                (res) =>{ 
                    setUsuarios(res);
                },
                (err) => {
                    console.error("EROR:", err);
                }
            );
    }

    function boca(){
        ReusarSelect('usuarios-boca');
    }

    function river(){
        ReusarSelect('usuarios-river');
    }

    function todos(){
        ReusarSelect('usuarios');
    }

    return (
        <div style={{ width: '100%' }}>
            <div>
                <input type="button" value="Boca" onClick={boca}/>
                <input type="button" value="River" onClick={river}/>
                <input type="button" value="Todos" onClick={todos} />
            </div>
            <ul>
                { 
                    usuarios.map((item) => 
                        <li key={item._id}>{item.Nombre}, {item.Apellido}</li>
                    ) 
                }
            </ul>
            <Button variant="contained" color="primary">
                <Link to="/">Informacion</Link>
            </Button>
        </div>
    );
}

export default Usuarios;