import React from 'react';
import ListElement from './ListElement'

const ListComponent = (props) =>{

    return(
        <ul>
            {props.value.map((element) =>
                <ListElement id = {element.id} title = {element.title}/>
            )}
        </ul>
    );
}

export default ListComponent;