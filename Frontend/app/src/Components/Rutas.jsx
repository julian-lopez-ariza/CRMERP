import React from "react";
import {
  Switch,
  Route,
  Link
} from "react-router-dom";




export default function Rutas () {
   
  return (
   
      <div>
        <ul>
       
          <li>
            <Link to="./Github">github</Link>
          </li>
        </ul>

        <Switch>
          
          <Route path="./Github">
            
          </Route>
        </Switch>
      </div>

  );
}