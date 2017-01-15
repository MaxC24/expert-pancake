import React from 'react';
import List, { ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import { Link, IndexLink } from 'react-router';
import Card from 'material-ui/Card';

const Board = ({users}) => {
    return(
        <Card style={{width:'460px', margin:"3vh 180px"}}>
            <List style={{width:'430px'}}>
                <Link className="top-bar-right" to="/" >MY PROFILE</Link> 
                <Subheader>TOP CHART</Subheader>
                    {users.map((user, i) => {
                            return( <ListItem 
                                key={i} 
                                primaryText={(i+1) + " " + user}
                            /> )
                        })}
                
            </List>
        </Card>
    )
}

export default Board;