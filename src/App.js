import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './containers/TodoList/TodoList'

function App() {
  return (
    <div className="App"><TodoList title = {'My TODOs'}/></div>
  );
}

export default App;
