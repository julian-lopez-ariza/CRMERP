import React from 'react';
import{
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
} from '@material-ui/core';
import {Icon} from '@material-ui/core';
import {Link} from "react-router-dom";





const Listas = () => {


    return(
        
        <div>
            <List component='nav'>
                <ListItem button component={Link} to="/Clientes">
                    <ListItemIcon>

                      <Icon>
                          cloudqueueicon
                      </Icon>

                    </ListItemIcon>
                    <ListItemText primary='Clientes'/>
                </ListItem>

                <ListItem button component={Link} to="/Contactos">
                    <ListItemIcon>

                      <Icon>
                          cloudqueueicon
                      </Icon>

                    </ListItemIcon>
                    <ListItemText primary='Contactos'/>
                </ListItem>

                <ListItem button component={Link} to="/Candidatos">
                    <ListItemIcon>

                      <Icon>
                          cloudqueueicon
                      </Icon>

                    </ListItemIcon>
                    <ListItemText primary='Candidatos'/>
                </ListItem>

                <ListItem button component={Link} to="/Oportunidades">
                    <ListItemIcon>

                      <Icon>
                          cloudqueueicon
                      </Icon>

                    </ListItemIcon>
                    <ListItemText primary='Oportunidades'/>
                </ListItem>



                

            </List>
        </div>

    )

}

export default Listas;