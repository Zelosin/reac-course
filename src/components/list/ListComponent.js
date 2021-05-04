import React, {useEffect} from 'react';

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
                <li key={element.id}>
                    {element.title}
                </li>
            )}
        </ul>
    );
}

export default ListComponent;