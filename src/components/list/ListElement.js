import React from 'react';

const ListComponent = (props) =>{

    return(
        <li key={props.id}>
            {props.title}
        </li>
    );
}

export default ListComponent;