import React from 'react';
import { Link } from 'react-router-dom';

function ListItem ({ member }){
    const { id, name } = member;

    return(
        <li>
            <Link to={`/person-info/${id}`}>
                {name}
            </Link>
        </li>
    )
}

export default ListItem;