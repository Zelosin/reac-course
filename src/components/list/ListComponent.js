import React, {useEffect} from 'react';

const ListComponent = (props) =>{

    return(
        <ul>
            {props.value.map((element) =>
                <li key={element.id}>
                    {element.title}
                </li>
            )}
        </ul>
    );
}

export default ListComponent;