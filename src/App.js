import logo from './logo.svg';
import './App.css';

import React, {useState} from "react";
import ListComponent from "./components/list/ListComponent";


function App() {

    const listValue = [
        {id: 1, title: 'Fist element'},
        {id: 2, title: 'Second element'},
        {id: 3, title: 'Third element'}
    ];

    return (
        <div className="App">
            <ListComponent value={listValue} />
        </div>
    );
}

export default App;
