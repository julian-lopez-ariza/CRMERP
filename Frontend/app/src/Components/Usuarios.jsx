import { useState, useEffect } from 'react';
import { Button } from "@material-ui/core";
import { Link } from 'react-router-dom';

function Usuarios() 
{
    const [usuarios, setUsuarios] = useState([]);

    useEffect(
        function () {   
            if (usuarios == [])
                selectTodos();
        }
    );

    function selectBoca(){
        ReusarSelect("usuarios-boca");
    };

    function selectRiver(){
        ReusarSelect("usuarios-river");
    };

    function selectTodos(){
        ReusarSelect("usuarios");
    };

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

    return (
        <div style={{ width: '100%' }}>
            <div>
                <input type="button" value="Boca" onClick={selectBoca}/>
                <input type="button" value="River" onClick={selectRiver}/>
                <input type="button" value="Todos" onClick={selectTodos} />
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