// src/App.js
import React from 'react';
import AddTask from './comp/AddTask';
import ListTask from './comp/ListTask';

const App = () => {
    return (
        <div className="app">
            <h1>Redux To-Do List</h1>
            <AddTask />
            <ListTask />
        </div>
    );
};

export default App;
