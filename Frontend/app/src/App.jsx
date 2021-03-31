import { Component } from 'react';
import Typography from '@material-ui/core/Typography'
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './TemaConfig';
import Listas from './Components/Listas';
import  Menu  from './Components/Menu';
import {Switch,Route,BrowserRouter as Router} from "react-router-dom";


//componentes para link
import Clientes from './Components/Clientes';
import Contactos from './Components/Contactos';
import Candidatos from './Components/Candidatos';
import Oportunidades from './Components/Oportunidades';



class App extends Component {
  render(){
    return (
      <Router>

        <ThemeProvider theme={theme}>
            <Menu/>
            <Switch>
              <Route path="/clientes">
                <Clientes />
              </Route>

              <Route path="/Contactos">
                <Contactos />
              </Route>

              <Route path="/Candidatos">
                <Candidatos />
              </Route>
              
              <Route path="/Oportunidades">
                <Oportunidades/>
              </Route>

            </Switch>
            
            

         </ThemeProvider>

      </Router>

    );
  }
}

export default App;
