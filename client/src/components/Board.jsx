import React from 'react';

const Board = ({users}) => {
    return(
        <ol>
            {users.map((user, i) => {
                    return( <li key={i} > {user} </li> )
                })}
        </ol>
    )
}

export default Board;