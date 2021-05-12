import React, {useEffect} from 'react';
import ListElement from './ListElement'

const ListComponent = (props) =>{

    const entries = props.value.filter(value => {
        return value.title.toUpperCase().includes(props.searchString.toUpperCase());
    });

    useEffect(() => {
        if (props.searchString === '') {
            document.title = 'useEffect hook example';
        } else {
            document.title = 'Количество найденных элементов: ' + entries.length;
        }
    },[props.searchString, entries])

    return(
        <ul>
            {entries.map((element) =>
                <ListElement id = {element.id} title = {element.title}/>
            )}
        </ul>
    );
}

export default ListComponent;