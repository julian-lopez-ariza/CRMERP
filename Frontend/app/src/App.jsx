import { Component } from 'react';
import Usuarios from './Components/Usuarios';
import Informacion from './Components/Informacion';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class App extends Component {
  render(){
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/usuarios">
              <Usuarios />
            </Route>
            <Route path="/" >
              <Informacion />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
