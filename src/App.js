import './App.css';

import React, {useState} from "react";
import ListComponent from "./components/list/ListComponent";


function App() {

    const [searchString, setSearchString] = useState('')

    const listValue = [
        {id: 1, title: 'First element'},
        {id: 2, title: 'Second element'},
        {id: 3, title: 'Third element'}
    ];

    return (
        <div className="App">
            <input onChange={(event) => setSearchString(event.target.value)}/>
            <ListComponent  searchString={searchString} value={listValue} />
        </div>
    );
}

export default App;
