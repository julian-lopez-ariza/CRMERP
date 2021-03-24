import { Component} from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

class Informacion extends Component{
    render() {
        return (
            <div>
                <h1>Informacion</h1>
                <Button color="secondary" variant="contained">
                    <Link to="/usuarios">go to users</Link>
                </Button>
            </div>
        );
    }
}

export default Informacion;